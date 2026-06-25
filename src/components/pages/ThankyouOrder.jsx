import Header from "../Header";
import Footer from "../Footer";
import contactBaner from "../../assets/images/contact-banner.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL } from "../../config/api";
import axios from "axios";

// FontAwesome imports
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
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

export default function MyOrders() {
  const navigate = useNavigate();
  const [banner, setBanner] = useState(null);
  const pageSlug = "thankyou-order";

  useEffect(() => {
    if (pageSlug) {
      fetchBanner();
    }
  }, [pageSlug]);

  const fetchBanner = async () => {
    try {
      const res = await axios.get(`${API_URL}/banners/${pageSlug}`);
      setBanner(res.data);
    } catch (err) {
      console.log("Banner API error:", err);
    }
  };

  const bannerItem = banner?.data?.[0];

  const location = useLocation();

const order = location.state?.orders?.[0];
const summary = location.state?.summary;

console.log(order);
console.log(summary);

  return (
    <>
      <Header showLogout={true} />
      <main className="pt-36 overflow-x-hidden min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Banner Section */}
        {bannerItem?.image_url && (
          <section className="relative z-0">
            <div className="relative">
              <img
                src={bannerItem?.image_url}
                alt={bannerItem?.title}
                className="w-full md:h-[400px] h-[250px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center animate-fadeInUp">
                  <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight">
                    {bannerItem?.title_white}{" "}
                    <span className="text-[#ffa800]">{bannerItem?.title_gold}</span>
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl mt-4 font-light">
                    Your journey with us matters
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Success Content */}
        <div className="md:max-w-4xl md:mx-auto px-4 md:px-8 py-12 -mt-8 relative z-10">
          {/* Success Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                  <div className="absolute left-0 top-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0.8s' }}></div>
                </div>
                <div className="relative bg-gradient-to-br from-green-400 to-emerald-600 w-24 h-24 rounded-full flex items-center justify-center shadow-xl">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-white" size="5x"
                  />
                </div>
              </div>
            </div>


            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
              Order Confirmed! 🎉
            </h2>

            {/* Message */}
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-gray-600 text-lg leading-relaxed">
                Thank you for your order! Your order has been successfully placed.
                <br className="hidden md:block" />
                <span className="text-gray-500 text-base">
                  We appreciate your business and look forward to serving you again in the future.
                </span>
              </p>
            </div>

            {/* Order Details Placeholder */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-b border-gray-100 py-6 my-6">
              <div className="flex items-center justify-center gap-3 text-gray-600">
                <FontAwesomeIcon icon={faBox} className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Order #{order?.order_number}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-600">
                <FontAwesomeIcon icon={faClock} className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-medium">{order?.status}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-600">
                <FontAwesomeIcon icon={faShoppingBag} className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium">{order?.items_count} items</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/my-orders")}
                className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-10 py-4 rounded-xl font-semibold 
                         hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 
                         shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={faShoppingBag} className="w-5 h-5" />
                Go to My Orders
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={() => navigate("/")}
                className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-medium 
                         hover:bg-gray-200 transition-all duration-300
                         border border-gray-200 hover:border-gray-300"
              >
                Continue Shopping
              </button>
            </div>

            {/* Help Text */}
            <p className="text-center text-sm text-gray-400 mt-6">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              A confirmation email has been sent to your registered email address.
            </p>
          </div>

          {/* Additional Info Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-50 hover:shadow-lg transition-shadow text-center">
              <div className="text-blue-500 text-3xl mb-2">
                <FontAwesomeIcon icon={faTruck} />
              </div>
              <h4 className="font-semibold text-gray-800 text-sm">Free Delivery</h4>
              <p className="text-xs text-gray-500 mt-1">On orders above ₹499</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-50 hover:shadow-lg transition-shadow text-center">
              <div className="text-green-500 text-3xl mb-2">
                <FontAwesomeIcon icon={faRotateLeft} />
              </div>
              <h4 className="font-semibold text-gray-800 text-sm">Easy Returns</h4>
              <p className="text-xs text-gray-500 mt-1">7-day return policy</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-50 hover:shadow-lg transition-shadow text-center">
              <div className="text-purple-500 text-3xl mb-2">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <h4 className="font-semibold text-gray-800 text-sm">Secure Payment</h4>
              <p className="text-xs text-gray-500 mt-1">100% protected</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}