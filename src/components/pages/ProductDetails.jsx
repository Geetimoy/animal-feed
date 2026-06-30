import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faIndianRupeeSign,
  faLocationDot,
  faCheckCircle,
  faTruck,
  faShieldAlt,
  faMinus,
  faPlus,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import productbanner from "../../assets/images/product-banner.jpeg";
import { API_URL } from "../../config/api";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../../context/CartContext";

// For SEO
import SEO from "./SEO";
import usePageSEO from "../../hooks/usePageSEO";

import HeroBanner from "../HeroBanner";
import { useBanner } from "../../hooks/useBanner";

export default function ProductDetails() {
  const { productSlug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState({});
  const [cartItemIds, setCartItemIds] = useState({});
  const { setCartCount } = useCart();

  const pageSlug = `product-detail/${productSlug}`;
  // const { bannerItem, isLoading: bannerLoading } = useBanner(productSlug);
  const { bannerItem, isLoading: bannerLoading, } = useBanner(pageSlug);

  const { seo } = usePageSEO(
    productSlug ? `product_detail/${productSlug}` : null
  );

  const count = product?.id ? (cart[product.id] || 0) : 0;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${API_URL}/products/${productSlug}`);
        setProduct(response.data.data);
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
      const response = await axios.get(`${API_URL}/customers/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      const qtyMap = {};
      const itemIdMap = {};

      response.data.data.items.forEach((item) => {
        qtyMap[item.product_id] = item.quantity;
        itemIdMap[item.product_id] = item.id;
      });

      setCart(qtyMap);
      setCartItemIds(itemIdMap);

      const total = Object.values(qtyMap).reduce((sum, qty) => sum + qty, 0);
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
      if (!cartItemId) return;

      await axios.delete(`${API_URL}/customers/cart/items/${cartItemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      await fetchCart();
    } catch (error) {
      console.log("Delete Error:", error.response?.data || error.message);
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

  if (loading) {
    return (
      <>
        <SEO seo={seo} />
        <Header />
        <div className="flex justify-center items-center min-h-[60vh] pt-16">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <SEO seo={seo} />
        <Header />
        <div className="text-center py-20 pt-24 text-red-500">
          <h2 className="text-2xl font-bold">Product not found</h2>
          <Link to="/products" className="text-green-500 hover:underline mt-4 inline-block">
            Browse Products
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO seo={seo} />
      <Header />
      <main className="pt-24 overflow-x-hidden bg-gray-50">
        {/* Hero Banner */}
        {/* <section className="relative">
          <div className="relative">
            <img
              src={productbanner}
              alt="Product Banner"
              className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[380px] object-cover object-[90%_40%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                 
                  <Link
                    to="/products"
                    className="inline-flex items-center text-white/70 hover:text-white text-xs sm:text-sm font-medium mb-3 sm:mb-4 transition-all duration-300 hover:translate-x-[-4px] group"
                  >
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mr-2 group-hover:bg-white/20 transition-all">
                      <FontAwesomeIcon icon={faArrowLeft} className="text-xs sm:text-sm" />
                    </span>
                    Back to Products
                  </Link>

                  
                  <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 leading-tight">
                    {product.name}
                  </h1>

                 
                  <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                    Premium quality feed for your livestock needs
                  </p>

                  
                  {product.category_name && (
                    <div className="mt-3 sm:mt-4">
                      <span className="inline-block bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/10">
                        {product.category_name}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section> */}
<section className="product-details relative">
          

        <HeroBanner
    imageUrl={bannerItem?.image_url}
    titleWhite={bannerItem?.title_white}
    titleGold={bannerItem?.title_gold}
    subtitle={bannerItem?.subtitle}
    ctaPrimaryLabel={bannerItem?.cta_primary_label}
    ctaPrimaryUrl={bannerItem?.cta_primary_url}
    ctaSecondaryLabel={bannerItem?.cta_secondary_label}
    ctaSecondaryUrl={bannerItem?.cta_secondary_url}
    isLoading={bannerLoading}
/>

{product.category_name && (
                    <div className="absolute bottom-[140px] left-1/2 + -translate-x-1/2">
                      <span className="inline-block bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/10">
                        {product.category_name}
                      </span>
                    </div>
                  )}
</section>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <nav className="flex flex-wrap items-center text-xs sm:text-sm text-gray-500">
            <Link to="/" className="hover:text-green-600 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-green-600 transition-colors">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 font-medium truncate max-w-[150px] sm:max-w-[200px] md:max-w-none">
              {product.name}
            </span>
          </nav>
        </div>

        {/* Product Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-6 md:p-8">
              {/* Product Image */}
              <div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-square">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.stock > 0 && (
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-green-500 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full">
                    In Stock
                  </span>
                )}
                {product.stock === 0 && (
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full">
                    Out of Stock
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                {/* Product Header */}
                <div className="mb-3 sm:mb-4">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">
                    {product.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                    <span className="text-gray-500">SKU: {product.id || "FEED-001"}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-800">
                      <FontAwesomeIcon icon={faIndianRupeeSign} className="text-xl sm:text-2xl" />
                      {product.price}
                    </span>
                    {product.mrp && (
                      <span className="text-base sm:text-lg text-gray-400 line-through">
                        <FontAwesomeIcon icon={faIndianRupeeSign} />
                        {product.mrp}
                      </span>
                    )}
                    {product.mrp && (
                      <span className="bg-green-100 text-green-700 text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                        Save {Math.round(((product.mrp - product.price) / product.mrp) * 100)}%
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">Inclusive of all taxes</p>
                </div>

                {/* Description */}
                {product.description && (
                  <div className="mb-4 sm:mb-6">
                    <h3 className="font-semibold text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">
                      Description
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                )}

                {/* Nutritional Information */}
                {product.nutrition_values && product.nutrition_values.length > 0 && (
                  <div className="bg-gray-50 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                    <h3 className="font-semibold text-gray-700 text-sm sm:text-base mb-2">
                      Nutritional Information
                    </h3>
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 sm:gap-2">
                      {product.nutrition_values.map((item, index) => (
                        <div key={index} className="flex items-start gap-1.5 sm:gap-2">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-0.5 text-xs sm:text-sm" />
                          <span className="text-gray-600 text-xs sm:text-sm">
                            {item.name}: <span className="font-medium">{item.value}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity and Cart */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-gray-700 font-medium text-sm sm:text-base">Qty:</span>
                    {count === 0 ? (
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faCartShopping} className="text-sm sm:text-base" />
                        Add to Cart
                      </button>
                    ) : (
                      <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
                        <button
                          onClick={() => decrease(product.id)}
                          className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 hover:bg-red-600 text-white font-bold transition-colors flex items-center justify-center text-sm sm:text-base"
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className="w-10 sm:w-12 text-center font-semibold text-gray-800 text-sm sm:text-base">
                          {count}
                        </span>
                        <button
                          onClick={() => increase(product.id)}
                          className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 hover:bg-green-600 text-white font-bold transition-colors flex items-center justify-center text-sm sm:text-base"
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="border-t border-gray-400 pt-3 sm:pt-4 space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                    <FontAwesomeIcon icon={faTruck} className="text-green-600 text-base sm:text-lg" />
                    <span>Free delivery on orders above ₹500</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-green-600 text-base sm:text-lg" />
                    <span>100% authentic products</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                    <FontAwesomeIcon icon={faLocationDot} className="text-green-600 text-base sm:text-lg" />
                    <span>Available across India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}