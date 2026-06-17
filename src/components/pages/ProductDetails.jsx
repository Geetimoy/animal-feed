import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faIndianRupeeSign,
  faArrowRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import productbanner from "../../assets/images/product-banner.jpeg";
import cattle from "../../assets/images/cattle1.png";
import broiler from "../../assets/images/poultry2.png";
import layer from "../../assets/images/poultry-feed1.jpg";
import pig from "../../assets/images/pig2.png";
import fish from "../../assets/images/fish2.png";
import ProductSidebar from "./ProductSidebar";

import { API_URL } from "../../config/api";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useCart } from "../../context/CartContext";

export default function ProductDetails() {
  const { categorySlug, subCategorySlug } = useParams();
  const { productSlug } = useParams();

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(3000); 
  const [selectedDistributors, setSelectedDistributors] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);


  const [cart, setCart] = useState({});
  const [cartItemIds, setCartItemIds] = useState({});
  const { setCartCount } = useCart();

  const productId = product?.id;
  const count = productId ? (cart[productId] || 0) : 0;


  const handleDistributorChange = (name) => {
    if (name === "All") {
      setSelectedDistributors([]); 
      return;
    }

    setSelectedDistributors(
      (prev) =>
        prev.includes(name)
          ? prev.filter((d) => d !== name) 
          : [...prev, name], 
    );
  };
  
  const distributors = ["All", ...new Set(products.map((p) => p.distributor))];

  const [openCategory, setOpenCategory] = useState(() => {
      if (
        location.pathname.includes("calf") ||
        location.pathname.includes("cattle")
      )
        return "cattle";
    
      if (
        location.pathname.includes("poultryprestarter") ||
        location.pathname.includes("starter") ||
        location.pathname.includes("grower")
      )
        return "poultry";
    
      if (location.pathname.includes("layer")) return "layer"; 
    
      if (location.pathname.includes("pig")) return "pig";
      if (location.pathname.includes("fish")) return "fish";
    
      return null;
    });

  const formatTitle = (slug) => {
  return slug
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  };

  const formattedTitle = formatTitle(subCategorySlug) || "";
  const words = formattedTitle.split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  useEffect(() => {
  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/products/${productSlug}`
      );

      console.log("Product Details:", response.data);

      setProduct(response.data.data); // adjust according to API response
    } catch (error) {
      console.error("Product fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (productSlug) {
    fetchProduct();
  }
}, [productSlug]);

const fetchCart = async () => {
  const token = localStorage.getItem("token");

  if (!token) return;

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

    setCart(qtyMap);
    setCartItemIds(itemIdMap);

    const total = Object.values(qtyMap).reduce(
      (sum, qty) => sum + qty,
      0
    );

    setCartCount(total);
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  fetchCart();
}, []);

 const addToCart = async (product) => {
  const token = localStorage.getItem("token");
  if (!token) {
    toast.error("Please login first");
    return;
  }

  try {
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

    await fetchCart();
    toast.success("Added to cart");
  } catch (err) {
    toast.error(err?.response?.data?.message || "Error");
  }
};

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

const updateCartQty = async (productId, newQty) => {
  const token = localStorage.getItem("token");

  const cartItemId = cartItemIds[productId];

  if (!cartItemId) return;

  await axios.put(
    `${API_URL}/customers/cart/items/${cartItemId}`,
    { quantity: newQty },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  await fetchCart();
};

  return(
    <>
    <Header />
    <main className="pt-16 overflow-x-hidden">
      <section className="relative z-0">
        <div className="relative">
          <img
            src={productbanner}
            alt="Contact Us Banner"
            className="w-full md:h-[500px] h-[500px] object-cover object-top"
          />
          {/* Overlay Layer (81%) */}
          <div className="absolute inset-0 bg-black/[0.60]"></div>
          {/* <div className="absolute inset-0  flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              Quality Feed Solution
            </h1>

          </div> */}
          <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6  w-full">
            <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6">
               {firstPart} <span className="text-[#ffa800]">{lastWord} </span>
            </h1>
            <p className="text-white text-[16px] md:text-xl text-center">
              Empowering livestock productivity with scientifically balanced
              nutrition for healthier animals and better returns.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
              <Link
                to="/distributor"
                className="mt-4 md:mt-6 w-full  md:w-[215px] h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2 "
              >
                <span className="text-[20px] font-bold font-inter">
                  <FontAwesomeIcon icon={faMagnifyingGlass} /> Find
                  Distributor
                </span>
              </Link>
              <Link
                to="/contact-us"
                className="mt-3 md:mt-6  w-full  md:w-[198px] h-[48px] border text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2"
              >
                <span className="text-[20px] font-bold font-inter">
                  <FontAwesomeIcon icon={faLocationDot} /> Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-12">
        {loading ? (
    <div className="text-center py-20 text-gray-500">
      Loading product details...
    </div>
  ) : !product ? (
    <div className="text-center py-20 text-red-500">
      Product not found
    </div>
  ) : (
    <>
        <div className="mb-3"><Link to="/" className="text-green-500 hover:underline">Home</Link> &gt; <Link to={`/products`} className="text-green-500 hover:underline">
          {product.category_name}
        </Link> &gt; <Link to={`/${product.category.slug}/${product.sub_category.slug}`} className="text-green-500 hover:underline">
          {product.sub_category_name}
        </Link> &gt; {product.name}</div>
        <div className="flex gap-8">
          <div className="w-1/3">
            
            <img
  src={product.image_url}
  alt={product.name}
  className="w-full h-auto mb-4 rounded-lg"
/>
          </div>
          <div className="w-2/3">
              <p className="text-white font-semibold text-sm bg-green-500 px-3 py-1 rounded-full inline-block mb-1">In Stock - {product.stock}</p>
              <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 text-[16px] mb-2 mt-4 font-bold">
                <FontAwesomeIcon icon={faIndianRupeeSign} />
                {product.price}
                <span className="line-through text-sm text-gray-400 ml-2">
                  <FontAwesomeIcon icon={faIndianRupeeSign} />
                  {product.mrp}
                </span>
              </p>
              <p className="text-gray-700 text-[16px] mb-4">
                {product.description}
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Nutrition Value:</h3>
              {product.nutrition_values && (
              <div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
      {product.nutrition_values.map((item, index) => (
        <li
          key={index}
          className="relative pl-7 text-gray-700 leading-relaxed"
        >
          <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-white text-[10px]"
            />
          </span>

          {item.name} - {item.value}
        </li>
      ))}
    </ul>
              </div>
)}
              {/* <button type="button" class="mt-4 bg-yellow-500 text-white
                              py-2 px-4 rounded-xl font-medium cursor-pointer hover:bg-yellow-400  text-[14px] inline-block">Add to Cart</button> */}
                              <div className="mt-4 flex items-center gap-3">
  
   {count === 0 ? (
    <button
      onClick={() => addToCart(product)}
      className="text-sm text-white bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium"
    >
      Add to Cart
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
    </>
    )}
      </div>
    </main>
    <Footer />
    
    {/* <ToastContainer /> */}
    </>
  );
}

