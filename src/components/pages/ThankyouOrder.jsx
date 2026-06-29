import Header from "../Header";
import Footer from "../Footer";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL } from "../../config/api";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faBox,
  faClock,
  faShoppingBag,
  faArrowRight,
  faTruck,
  faRotateLeft,
  faLock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

// For SEO
import SEO from "./SEO";
import usePageSEO from "../../hooks/usePageSEO";

export default function ThankyouOrder() {
  const navigate = useNavigate();
  const location = useLocation();
  const [banner, setBanner] = useState(null);
  const [orderData, setOrderData] = useState(null);
  const pageSlug = "thankyou-order";

  const { seo } = usePageSEO("static/thankyou-order");

  useEffect(() => {
    // ── 1. location.state is the primary and ONLY trusted source ──────────────
    // It is set by Checkout's navigate() call and cannot be manually typed into
    // the address bar, so it's a reliable gate.
    const state = location.state;
    const order = state?.order || state?.orders?.[0] || null;

    const isValid =
      order &&
      order.orderId &&
      order.orderId !== "N/A" &&
      order.orderId !== null;

    if (isValid) {
      setOrderData(order);

      // ── 2. Clear storage immediately so back-button / direct URL
      //       visits can never re-validate from stale storage ───────────────────
      localStorage.removeItem("orderConfirmed");
      localStorage.removeItem("lastOrderDetails");
      sessionStorage.removeItem("orderConfirmed");
      sessionStorage.removeItem("lastOrderDetails");
    } else {
      // No valid state → redirect immediately, no flash of content
      navigate("/", { replace: true });
    }

    fetchBanner();
  }, []); // intentionally empty — only run once on mount

  const fetchBanner = async () => {
    try {
      const res = await axios.get(`${API_URL}/banners/${pageSlug}`);
      setBanner(res.data);
    } catch (err) {
      console.log("Banner API error:", err);
    }
  };

  // While orderData is null the redirect is already in-flight — render nothing
  if (!orderData) return null;

  const bannerItem = banner?.data?.[0];

  return (
    <>
      <SEO seo={seo} />
      <Header showLogout={true} />
      <main className="pt-36 overflow-x-hidden min-h-screen bg-gradient-to-b from-gray-50 to-white">

        {bannerItem?.image_url && (
          <section className="relative z-0">
            <div className="relative">
              <img
                src={bannerItem.image_url}
                alt={bannerItem.title}
                className="w-full md:h-[400px] h-[250px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight">
                    {bannerItem.title_white}{" "}
                    <span className="text-[#ffa800]">{bannerItem.title_gold}</span>
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl mt-4 font-light">
                    Your journey with us matters
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        <div className="md:max-w-4xl md:mx-auto px-4 md:px-8 py-12 -mt-8 relative z-10">
          {/* Success Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">

            {/* Animated icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0">
                  {[
                    "top-0 left-1/2 delay-200",
                    "bottom-0 left-1/2 delay-600",
                    "left-0 top-1/2 delay-400",
                    "right-0 top-1/2 delay-800",
                  ].map((cls, i) => (
                    <div
                      key={i}
                      className={`absolute ${cls} w-2 h-2 bg-yellow-400 rounded-full animate-ping`}
                      style={{ animationDelay: `${(i + 1) * 0.2}s` }}
                    />
                  ))}
                </div>
                <div className="relative bg-gradient-to-br from-green-400 to-emerald-600 w-24 h-24 rounded-full flex items-center justify-center shadow-xl">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-white" size="5x" />
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
              Order Confirmed! 🎉
            </h2>

            <div className="max-w-2xl mx-auto text-center">
              <p className="text-gray-600 text-lg leading-relaxed">
                Thank you for your order! Your order has been successfully placed.
                <br className="hidden md:block" />
                <span className="text-gray-500 text-base">
                  We appreciate your business and look forward to serving you again.
                </span>
              </p>
            </div>

            {/* Order meta */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-b border-gray-100 py-6 my-6">
              <div className="flex items-center justify-center gap-3 text-gray-600">
                <FontAwesomeIcon icon={faBox} className="text-blue-500" />
                <span className="text-sm font-medium">
                  Order #{orderData.orderNumber || orderData.orderId}
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-600">
                <FontAwesomeIcon icon={faClock} className="text-orange-500" />
                <span className="text-sm font-medium capitalize">
                  {orderData.status || "Processing"}
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-600">
                <FontAwesomeIcon icon={faShoppingBag} className="text-purple-500" />
                <span className="text-sm font-medium">
                  {orderData.items_count ?? orderData.items ?? 0} item(s)
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/my-orders")}
                className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-10 py-4 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={faShoppingBag} />
                Go to My Orders
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigate("/")}
                className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300 border border-gray-200 hover:border-gray-300"
              >
                Continue Shopping
              </button>
            </div>

            <p className="text-center text-sm text-gray-400 mt-6">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              A confirmation email has been sent to your registered email address.
            </p>
          </div>

          {/* Info cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: faTruck, color: "text-blue-500", title: "Free Delivery", sub: "On orders above ₹499" },
              { icon: faRotateLeft, color: "text-green-500", title: "Easy Returns", sub: "7-day return policy" },
              { icon: faLock, color: "text-purple-500", title: "Secure Payment", sub: "100% protected" },
            ].map(({ icon, color, title, sub }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-md border border-gray-50 hover:shadow-lg transition-shadow text-center">
                <div className={`${color} text-3xl mb-2`}><FontAwesomeIcon icon={icon} /></div>
                <h4 className="font-semibold text-gray-800 text-sm">{title}</h4>
                <p className="text-xs text-gray-500 mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}