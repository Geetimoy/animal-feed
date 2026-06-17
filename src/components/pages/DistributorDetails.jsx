import Header from "../Header";
import Footer from "../Footer";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import distributorDetailsBanner from '../../assets/images/distributor-details-banner.jpg';

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
  faPhone,
  faEnvelope,
  faMapPin,
  faArrowLeft,
  faArrowRight,
  faTag,
  faBox,
} from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Helmet } from "react-helmet";
import { API_URL } from "../../config/api";

import { useCart } from "../../context/CartContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DistributorDetails() {
  const { slug } = useParams();
  const [distributor, setDistributor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState({});

  const [cartItemIds, setCartItemIds] = useState({});

  // const { cartCount, setCartCount } = useCart();
  const { setCartCount } = useCart();

  const addToCart = async (product) => {
  try {
    // Product already added
    if (cart[product.id] > 0) {
      return;
    }

    const token = localStorage.getItem("token");

    await axios.post(
      `${API_URL}/customers/cart/items`,
      {
        product_id: product.id,
        quantity: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    );

    // setCart((prev) => ({
    //   ...prev,
    //   [product.id]: 1,
    // }));
    await fetchCart();

    //setCartCount((prev) => prev + 1);

  } catch (error) {
    toast.error(
      error?.response?.data?.message || "Something went wrong"
    );
  }
  };

// const increaseQty = async (product) => {
//   const token = localStorage.getItem("token");
//   try {
//     await axios.post(
//       `${API_URL}/customers/cart/items`,
//       {
//         product_id: product.id,
//         quantity: 1,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: "application/json",
//         },
//       }
//     );

//     setCart((prev) => ({
//       ...prev,
//       [product.id]: (prev[product.id] || 0) + 1,
//     }));

//     setCartCount((prev) => prev + 1);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const decreaseQty = async (product) => {
//   try {
//     // call your update/remove cart API
//     await axios.delete(`${API_URL}/customers/cart/items/{cart_item_id}`);

//     decrease(product.id);

//     setCartCount((prev) => Math.max(prev - 1, 0));
//   } catch (err) {
//     console.log(err);
//   }
// };

  // const increase = (id) => {
  //   setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  // };

  // const decrease = (id) => {
  //   setCart((prev) => ({ ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) }));
  // };

  const removeFromCart = async (productId) => {
  const token = localStorage.getItem("token");

  try {
    const cartItemId = cartItemIds[productId];

    if (!cartItemId) {
      console.log("Cart Item ID not found");
      return;
    }

    await axios.delete(
      `${API_URL}/customers/cart/items/${cartItemId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    );

    await fetchCart();
  } catch (error) {
    console.log(
      "Delete Error:",
      error.response?.data || error.message
    );
  }
};

  const increase = async (productId) => {
  const currentQty = cart[productId] || 0;

  await updateCartQty(productId, currentQty + 1);
};

  const decrease = async (productId) => {
  const currentQty = cart[productId] || 0;

  if (currentQty <= 1) {
    await removeFromCart(productId);
    return;
  }

  await updateCartQty(productId, currentQty - 1);
};



  // Fetch cart items on mount to sync with backend
  const fetchCart = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(
      `${API_URL}/customers/cart`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    );

    const qtyMap = {};
    const itemIdMap = {};

    response.data.data.items.forEach((item) => {
      qtyMap[item.product_id] = item.quantity;
      itemIdMap[item.product_id] = item.id;
    });

    console.log("qtyMap", qtyMap);
    console.log("itemIdMap", itemIdMap);

    setCart(qtyMap);
    setCartItemIds(itemIdMap);

    // Update header cart count
    const totalCount = Object.values(qtyMap).reduce(
      (sum, qty) => sum + qty,
      0
    );

    setCartCount(totalCount);
  } catch (error) {
    console.log(error);
  }
  };



  useEffect(() => {
  fetchDistributorDetails();
  fetchCart();
}, [slug]);


const updateCartQty = async (productId, newQty) => {
  const token = localStorage.getItem("token");

  try {
    const cartItemId = cartItemIds[productId];

    if (!cartItemId) {
      console.log("Cart Item ID not found for product:", productId);
      return;
    }

    console.log("Updating Cart");
    console.log("productId:", productId);
    console.log("cartItemId:", cartItemId);
    console.log("newQty:", newQty);

    await axios.put(
      `${API_URL}/customers/cart/items/${cartItemId}`,
      {
        quantity: newQty,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    );

    await fetchCart();
  } catch (error) {
    console.log(
      "Update Cart Error:",
      error.response?.data || error.message
    );
  }
};



  const fetchDistributorDetails = async () => {
    try {
      const response = await axios.get(`${API_URL}/distributors/${slug}`);
      console.log("API Response:", response.data);

      // Handle both response shapes: { data: {...} } and { data: { data: {...} } }
      const raw = response.data;
      let dist = null;

      if (raw?.data && !Array.isArray(raw.data)) {
        // Shape: { data: { id, slug, ... } }
        dist = raw.data;
      } else if (raw?.data?.data) {
        // Shape: { data: { data: [{...}] } } or { data: { data: {...} } }
        dist = Array.isArray(raw.data.data)
          ? raw.data.data[0]
          : raw.data.data;
      } else if (raw?.data?.[0]) {
        dist = raw.data[0];
      }

      if (!dist) throw new Error("Distributor data not found in response");
      setDistributor(dist);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message || "Failed to load distributor.");
    } finally {
      setLoading(false);
    }
  };

  // ── Product card ──
  const ProductCard = ({ product }) => {
    const count = cart[product.id] || 0;
    const discount =
      product.mrp && product.price
        ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
        : null;

    return (
      <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full flex flex-col group relative">
        {/* Image */}
        <div className="relative overflow-hidden h-48">
          <img
            src={product.image_url}
            alt={product.name}
            className="h-full w-full object-cover transform group-hover:scale-110 transition duration-500"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/400x300/e2e8f0/64748b?text=No+Image";
            }}
          />
          {discount > 0 && (
            <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {discount}% OFF
            </span>
          )}
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-semibold text-sm bg-red-500 px-3 py-1 rounded-full">
                Out of Stock
              </span>
            </div>
          )}
        </div>

          <div className="absolute inset-0 bg-black/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500 flex items-end p-6">
            <div className="translate-y-6 group-hover:translate-y-0 transition duration-500 absolute transform  bottom-12 md:bottom-4">
            <h4 className="text-sm font-semibold text-white mb-1 line-clamp-2">
            {product.name}
          </h4>
          <div className="flex items-center gap-2 mb-2">
              <span className="text-base font-bold text-white">
                ₹{parseFloat(product.price).toLocaleString("en-IN")}
              </span>
              {product.mrp && parseFloat(product.mrp) > parseFloat(product.price) && (
                <span className="text-xs text-white line-through">
                  ₹{parseFloat(product.mrp).toLocaleString("en-IN")}
                </span>
              )}
            </div>
              {/* <button className="text-sm text-white bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium cursor-pointer"> Add </button> */}
              <div className="flex items-center gap-2 mt-2">
  {count === 0 ? (
  <button
    onClick={() => addToCart(product)}
    className="text-sm text-white bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium"
  >
    Add
  </button>
) : (
  <div className="flex items-center bg-white rounded-lg overflow-hidden">
    <button
      onClick={() => decrease(product.id)}
      className="w-8 h-8 bg-red-500 text-white font-bold"
    >
      -
    </button>

    <span className="px-3 text-black font-semibold">
      {count}
    </span>

    <button
      onClick={() => increase(product.id)}
      className="w-8 h-8 bg-green-500 text-white font-bold"
    >
      +
    </button>
  </div>
)}
</div>
            </div>
          </div>
        {/* Body */}
        <div className="p-0 flex flex-col flex-1">
          {/* <p className="text-xs text-green-600 font-medium mb-1">
            {product.sub_category_name}
          </p> */}
          {/* <h4 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">
            {product.name}
          </h4> */}

          {/* Nutrition badges */}
          {/* {product.nutrition_values?.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2">
              {product.nutrition_values.map((n, i) => (
                <span
                  key={i}
                  className="text-[10px] bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full"
                >
                  {n.name}: {n.value}
                </span>
              ))}
            </div>
          )} */}

          {/* Price */}
          <div className="mt-auto">
            {/* <div className="flex items-center gap-2 mb-2">
              <span className="text-base font-bold text-gray-900">
                ₹{parseFloat(product.price).toLocaleString("en-IN")}
              </span>
              {product.mrp && parseFloat(product.mrp) > parseFloat(product.price) && (
                <span className="text-xs text-gray-400 line-through">
                  ₹{parseFloat(product.mrp).toLocaleString("en-IN")}
                </span>
              )}
            </div> */}

            {/* Cart controls */}
            {/* {product.stock > 0 ? (
              count === 0 ? (
                <button
                  onClick={() => increase(product.id)}
                  className="w-full text-sm text-white bg-gradient-to-r from-[#00a34a] to-[#009a62] hover:opacity-90 px-4 py-2 rounded-xl font-medium transition"
                >
                  Add to Cart
                </button>
              ) : (
                <div className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-xl">
                  <button
                    onClick={() => decrease(product.id)}
                    className="w-7 h-7 bg-white shadow rounded-lg text-gray-700 font-bold"
                  >
                    −
                  </button>
                  <span className="font-semibold text-gray-800">{count}</span>
                  <button
                    onClick={() => increase(product.id)}
                    className="w-7 h-7 bg-green-500 text-white shadow rounded-lg font-bold"
                  >
                    +
                  </button>
                </div>
              )
            ) : (
              <button
                disabled
                className="w-full text-sm text-gray-400 bg-gray-100 px-4 py-2 rounded-xl font-medium cursor-not-allowed"
              >
                Out of Stock
              </button>
            )} */}
          </div>
        </div>
      </div>
    );
  };

  // ── Category section ──
  const CategorySection = ({ categoryData, index }) => {
    const prevClass = `swiper-prev-cat-${index}`;
    const nextClass = `swiper-next-cat-${index}`;
    const isEven = index % 2 === 0;

    return (
      <section className={`py-10 md:py-16 ${isEven ? "bg-white" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">
            {categoryData.category.name.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-[#ffa800]">
              {categoryData.category.name.split(" ").slice(-1)}
            </span>
          </h2>
          {categoryData.category.description && (
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-center text-sm md:text-base">
              {categoryData.category.description}
            </p>
          )}

          {/* Nav buttons */}
          <div className="flex items-center gap-3 justify-center mt-4">
            <button
              className={`${prevClass} w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-green-500 hover:text-green-500 transition-colors duration-300 cursor-pointer hover:-translate-x-1 transition-transform`}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              className={`${nextClass} w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-green-500 hover:text-green-500 transition-colors duration-300 cursor-pointer hover:translate-x-1 transition-transform`}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          <div className="mt-6">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                prevEl: `.${prevClass}`,
                nextEl: `.${nextClass}`,
              }}
              breakpoints={{
                480: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
            >
              {categoryData.products.map((product) => (
                <SwiperSlide key={product.id} className="h-auto pb-2">
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    );
  };

  // ── Render states ──
  if (loading) {
    return (
      <>
        <Header />
        <main className="pt-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Loading distributor details…</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error || !distributor) {
    return (
      <>
        <Header />
        <main className="pt-16 min-h-screen flex items-center justify-center">
          <div className="text-center px-4">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {error ? "Something went wrong" : "Distributor not found"}
            </h2>
            <p className="text-gray-500 mb-6">
              {error || "We couldn't find the distributor you're looking for."}
            </p>
            <Link
              to="/distributor"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              Browse Distributors
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const totalCartItems = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <>
      <Helmet>
        <title>{distributor.company_name || distributor.name} — Distributor Details</title>
      </Helmet>
      <Header />

      <main className="pt-16 overflow-hidden">
        {/* ── Hero Banner ── */}
        <section className="relative z-0">
          <div className="relative">
            <img
              src={distributorDetailsBanner}
              alt="Distributor Banner"
              className="w-full md:h-auto h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-6">
              <h1 className="text-white text-4xl md:text-6xl font-bold text-center mb-4">
                Distributor Details
              </h1>
              <p className="text-white/90 text-base md:text-xl text-center mb-6">
                Building Strong Distribution Partnerships Across Regions
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  to="/distributor"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-xl font-semibold hover:opacity-90 transition"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                  Find Distributor
                </Link>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition"
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── About Section ── */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl text-gray-800 font-bold mb-2 text-center">
              {distributor.company_name || distributor.name}
            </h2>
            {distributor.tagline && (
              <p className="text-gray-500 mb-8 text-center text-lg">
                {distributor.tagline}
              </p>
            )}

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Info Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  About the <span className="text-[#ffa800]">Distributor</span>
                </h3>

                <p className="text-gray-600 leading-relaxed mb-5">
                  {distributor.description ||
                    "A trusted partner in quality animal feed distribution, committed to supporting farmers with reliable, nutritionally balanced feed solutions."}
                </p>

                {/* Contact details */}
                {/* <div className="space-y-2 mb-6">
                  {(distributor.address || (distributor.city && distributor.state)) && (
                    <p className="text-gray-600 flex items-start gap-2">
                      <FontAwesomeIcon icon={faMapPin} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        {[distributor.address, distributor.city, distributor.state]
                          .filter(Boolean)
                          .join(", ")}
                      </span>
                    </p>
                  )}
                  {distributor.phone && (
                    <p className="text-gray-600 flex items-center gap-2">
                      <FontAwesomeIcon icon={faPhone} className="text-green-500" />
                      <a href={`tel:${distributor.phone}`} className="hover:text-green-600 transition">
                        {distributor.phone}
                      </a>
                    </p>
                  )}
                  {distributor.email && (
                    <p className="text-gray-600 flex items-center gap-2">
                      <FontAwesomeIcon icon={faEnvelope} className="text-green-500" />
                      <a href={`mailto:${distributor.email}`} className="underline hover:text-green-600 transition">
                        {distributor.email}
                      </a>
                    </p>
                  )}
                  {distributor.distributor_type && (
                    <p className="text-gray-600 flex items-center gap-2">
                      <FontAwesomeIcon icon={faTag} className="text-green-500" />
                      <span className="capitalize">{distributor.distributor_type} Distributor</span>
                    </p>
                  )}
                </div> */}

                {/* Stats */}
                {distributor.stats?.length > 0 && (
                  <div className="grid grid-cols-3 gap-3">
                    {distributor.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="text-center bg-gray-50 py-3 px-2 rounded-2xl border border-dashed border-amber-300"
                      >
                        <div className="text-2xl font-black text-gray-800">
                          {stat.value || "—"}
                        </div>
                        <span className="text-[11px] font-medium text-gray-500">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                {/* {distributor.tags?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {distributor.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className={`text-xs px-3 py-1 rounded-full font-medium ${
                          tag.type === "category"
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                )} */}
              </div>

              {/* Map or product count card */}
              <div className="flex flex-col gap-4">
                {distributor.map_embed_url ? (
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-[350px]">
                    <iframe
                      title="Location Map"
                      src={distributor.map_embed_url}
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                ) : (
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                      {distributor?.image_urls?.slice(0, 4).map((image, index) => (
      <div
        key={index}
        className="relative overflow-hidden"
      >
        <img
          src={image}
          alt={`Distributor ${index + 1}`}
          className="block w-[280px] h-[180px] rounded-2xl  object-cover"
        />
      </div>
    ))}
                      {/* Products count */}
                      {/* <div className="col-span-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl">
                          <FontAwesomeIcon icon={faBox} />
                        </div>
                        <div>
                          <div className="text-2xl font-black text-gray-800">
                            {distributor.products_count || distributor.products_by_category?.reduce(
                              (acc, c) => acc + c.products.length, 0
                            ) || 0}
                          </div>
                          <span className="text-sm text-gray-500">Total Products</span>
                        </div>
                      </div> */}

                      {/* Categories */}
                      {/* {distributor.categories?.map((cat) => (
                        <div
                          key={cat.id}
                          className="bg-gray-50 rounded-xl p-3 text-center"
                        >
                          <div className="text-sm font-semibold text-gray-700">
                            {cat.name}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">Available</div>
                        </div>
                      ))} */}
                    </div>
                  </div>
                )}

               
              </div>
            </div>
          </div>
        </section>

        {/* ── Dynamic Product Categories ── */}
        {distributor.products_by_category?.length > 0 ? (
          distributor.products_by_category.map((categoryData, index) => (
            <CategorySection
              key={categoryData.category.id}
              categoryData={categoryData}
              index={index}
            />
          ))
        ) : (
          <section className="py-16 text-center bg-white">
            <div className="text-4xl mb-3">📦</div>
            <p className="text-gray-500 text-lg">No products listed yet for this distributor.</p>
          </section>
        )}

        {/* ── Floating cart summary ── */}
        {/* {totalCartItems > 0 && (
          <div className="fixed bottom-6 right-6 z-50">
            <button className="flex items-center gap-3 bg-green-600 text-white px-5 py-3 rounded-2xl shadow-lg hover:bg-green-700 transition font-semibold">
              🛒 {totalCartItems} item{totalCartItems > 1 ? "s" : ""} in cart
            </button>
          </div>
        )} */}
      </main>

      <Footer />

      <ToastContainer />
    </>
  );
}

export default DistributorDetails;