import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars , faEye , faTrash
} from "@fortawesome/free-solid-svg-icons";
import ProfileDashboard from "./ProfileDashboard";
import Header from "../Header";
import Footer from "../Footer";
import specialproduct from "../../assets/images/special-product.jpeg";
import contactBaner from "../../assets/images/contact-banner.jpg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config/api";

export default function MyOrders() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const [banner, setBanner] = useState(null);
  const pageSlug = "my-orders";

  const mobileItem = (path, label) => (
    <Link
      to={path}
      onClick={() => setOpen(false)}
      className={`block px-4 py-3 text-sm rounded-lg ${
        pathname === path
          ? "bg-green-50 text-green-700 font-medium"
          : "text-gray-700"
      }`}
    >
      {label}
    </Link>
  );

  useEffect(() => {
  fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `${API_URL}/customers/orders`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      console.log("Orders:", response.data);

      setOrders(response.data.data || []);
    } catch (error) {
      console.error("Orders API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const cancelOrder = async (orderId) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.patch(
      `${API_URL}/customers/orders/${orderId}/cancel`,
      {}, // empty request body
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    );

    console.log(response.data);

    fetchOrders();

    toast.success(
      response.data?.message || "Order cancelled successfully!"
    );
  } catch (error) {
    console.log("Cancel Order Error:", error.response?.data);

    toast.error(
      error.response?.data?.message || "Failed to cancel order"
    );
  }
  };

  useEffect(() => {
        
    if (pageSlug) {
      fetchBanner();
    }
  }, [pageSlug]);

  const fetchBanner = async () => {
  try {
      const res = await axios.get(
        `${API_URL}/banners/${pageSlug}`
      );
      
      setBanner(res.data);
    } catch (err) {
      console.log("Banner API error:", err);
    }
  };

  const bannerItem = banner?.data?.[0];

  return (
    <>
      <Header showLogout={true} />
      <main className="pt-16 overflow-x-hidden">
        <section className="relative z-0">
          <div className="relative">
            <img
              src={bannerItem?.image_url}
              alt={bannerItem?.title}
              className="w-full md:h-auto h-[250px] object-cover"
            />
            <div className="absolute inset-0  flex items-center justify-center">
              <h1 className="text-white text-4xl md:text-6xl font-bold">
                {bannerItem?.title_white} <span className="text-[#ffa800]">{bannerItem?.title_gold}</span>
              </h1>
            </div>
          </div>
        </section>
        <div className="flex flex-col md:flex-row bg-[#f7f8fa] md:max-w-7xl md:mx-auto px-4 md:px-8 py-8 ">
          <div className="hidden md:block">
            <ProfileDashboard />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 p-4 md:p-6">
            {/*  MOBILE HEADER */}
            <div className="md:hidden mb-4">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#009a62] text-white flex items-center justify-center font-semibold text-xl">
                  A
                </div>
                {/* <h1 className="mt-3 font-semibold text-gray-800 ">User Name</h1> */}
                <h2 className="mt-3 font-semibold text-gray-800 text-[18px] md:text-[20px] ">
                  Amit Varma
                </h2>
              </div>

              <div className="mt-3 flex items-center justify-between px-4 py-4 bg-white shadow-xl rounded-[12px]">
                <h2 className="text-[18px] font-semibold text-gray-800  ">
                  Address
                </h2>
                <button onClick={() => setOpen(!open)}>
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>

              {open && (
                <div className="mt-2 bg-white rounded-[12px] shadow-lg p-2 space-y-1">
                  {mobileItem("/profile", "Profile")}
                  {mobileItem("/address-management", "Address")}
                  {mobileItem("/my-orders", "My Orders")}
                </div>
              )}
            </div>

            {/* ORDERS TABLE */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                My Orders
              </h2>

              <div className="w-full overflow-x-auto rounded-xl">
                <table className="min-w-[800px] border-collapse">
                  <thead className="bg-green-100 text-gray-800">
                    <tr className="text-left text-sm">
                      <th className="px-2 md:px-4 py-3 text-center text-sm md:text-base font-semibold border border-green-200">
                        Product
                      </th>
                      <th className="px-2 md:px-4 py-3 text-center text-sm md:text-base font-semibold border border-green-200">
                        Order ID
                      </th>
                      <th className="px-2 md:px-4 py-3 text-center text-sm md:text-base font-semibold border border-green-200">
                        Date
                      </th>
                      <th className="px-2 md:px-4 py-3 text-center text-sm md:text-base font-semibold border border-green-200">
                        Amount
                      </th>
                      <th className="px-2 md:px-4 py-3 text-center text-sm md:text-base font-semibold border border-green-200">
                        Status
                      </th>
                      <th className="px-2 md:px-4 py-3 text-center text-sm md:text-base font-semibold border border-green-200">
                        Action
                      </th>
                    </tr>
                  </thead>

                  {/* <tbody className="text-gray-700">
                    <tr className="hover:bg-green-50 transition">
                      <td className="px-2 md:px-4 py-3 text-center border border-green-200 whitespace-nowrap">
                        <div className="flex items-center gap-4">
                          <img
                            src={specialproduct}
                            alt="product"
                            className="w-[60px] h-[60px] rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-medium text-gray-800">
                              Specialty Feed
                            </p>
                            {/* <p className="text-xs text-gray-500">10 kg Pack</p> 
                          </div>
                        </div>
                      </td>

                      <td className="px-2 md:px-4 py-3 text-center border border-green-200 whitespace-nowrap">
                        #ORD-10234
                      </td>

                      <td className="px-2 md:px-4 py-3 text-center border border-green-200 whitespace-nowrap">
                        06 Feb 2026
                      </td>

                      <td className="px-2 md:px-4 py-3 text-center border border-green-200 whitespace-nowrap">
                        ₹ 1,490
                      </td>

                      <td className="px-2 md:px-4 py-3 text-center border border-green-200 whitespace-nowrap">
                        <span className="inline-block px-3 py-1 text-xs rounded-full bg-green-50 text-green-700 font-medium">
                          Delivered
                        </span>
                      </td>

                      <td className="px-2 md:px-4 py-3 text-center border border-green-200 whitespace-nowrap">
                        <Link
                          to="#"
                          className="text-[#2f855a] font-medium hover:underline"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  </tbody> */}

                  <tbody className="text-gray-700">
                    {loading ? (
                      <tr>
                        <td colSpan="6" className="text-center py-6">
                          Loading...
                        </td>
                      </tr>
                    ) : orders.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="text-center py-6">
                          No orders found
                        </td>
                      </tr>
                    ) : (
                    orders.map((order) => (
                      <tr
                        key={order.id}
                        className="hover:bg-green-50 transition"
                      >
                        <td className="px-2 md:px-4 py-3 border border-green-200">
                          <div className="flex items-center gap-4">
                            <img
                              src={
                                order.image_url ||
                                specialproduct
                              }
                              alt={order.product_name}
                              className="w-[60px] h-[60px] rounded-lg object-cover"
                            />

                            <div>
                              <p className="font-medium text-gray-800">
                                {order.product_name}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 md:px-4 py-3 text-center border border-green-200">
                          {order.order_number}
                        </td>

                        <td className="px-2 md:px-4 py-3 text-center border border-green-200">
                          {/* {order.created_at} */}
                          {new Date(order.created_at).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
        </td>

        <td className="px-2 md:px-4 py-3 text-center border border-green-200">
          ₹ {Number(order.subtotal).toFixed(2)}
        </td>

        <td className="px-2 md:px-4 py-3 text-center border border-green-200">
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-green-50 text-green-700 font-medium">
            {order.status}
          </span>
        </td>

        <td className="px-2 md:px-4 py-3 text-center border border-green-200">
          <div className="flex justify-center gap-4">
            <div className="relative group">
              <Link to={`/order-details/${order.id}`}>
                <FontAwesomeIcon icon={faEye} />
              </Link>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                View Details
              </span>
            </div>

            <div className="relative group">
              <button
                onClick={() => {
                  setSelectedOrderId(order.id);
                  setShowCancelModal(true);
                }}
              className="cursor-pointer">
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                Cancel Order
              </span>
            </div>
          </div>
          {/* <Link
            to={`/order-details/${order.id}`}
            className="text-[#2f855a] font-medium hover:underline"
 >
            <FontAwesomeIcon icon={faEye} /> 
          </Link> */}
          {/* <Link
             onClick={() => {
                setSelectedOrderId(order.id);
                setShowCancelModal(true);
              }}
            className="text-[#2f855a] font-medium hover:underline"
          ><FontAwesomeIcon icon={faTrash} />
          </Link> */}
        </td>
      </tr>
    ))
  )}
</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
        
        {showCancelModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md">
              <h2 className="text-xl font-semibold mb-3">
                Cancel Order
              </h2>

              <p className="text-gray-600 mb-6">
                Are you sure you want to cancel this order?
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowCancelModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg cursor-pointer"
                >
                  No
                </button>

                <button
                  onClick={() => {
                    cancelOrder(selectedOrderId);
                    setShowCancelModal(false);
                  }}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg cursor-pointer"
                >
                  Yes, Cancel
                </button>
              </div>
            </div>
          </div>
        )}

      <Footer />
      <ToastContainer />
    </>
  );
}
