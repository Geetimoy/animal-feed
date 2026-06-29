import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import ProfileDashboard from "./ProfileDashboard";
import Header from "../Header";
import Footer from "../Footer";
import specialproduct from "../../assets/images/special-product.jpeg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config/api";

// For SEO
import SEO from "./SEO";
import usePageSEO from "../../hooks/usePageSEO";

const STATUS_STYLES = {
  confirmed: "bg-green-50 text-green-700",
  pending: "bg-yellow-50 text-yellow-700",
  cancelled: "bg-red-50 text-red-600",
  delivered: "bg-blue-50 text-blue-700",
};

export default function MyOrders() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const { seo } = usePageSEO("my-orders");

  const mobileItem = (path, label) => (
    <Link
      to={path}
      onClick={() => setOpen(false)}
      className={`block px-4 py-3 text-sm rounded-lg ${pathname === path
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
      const response = await axios.get(`${API_URL}/customers/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
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
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      fetchOrders();
      toast.success(response.data?.message || "Order cancelled successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to cancel order");
    }
  };



  return (
    <>
      <SEO seo={seo} />
      <Header showLogout={true} />
      <main className="pt-16 overflow-x-hidden">


        <div className="flex flex-col md:flex-row bg-[#f7f8fa] md:max-w-7xl md:mx-auto px-4 md:px-8 py-8 mt-16">
          <div className="hidden md:block">
            <ProfileDashboard />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 p-4 md:p-6">
            {/* MOBILE HEADER */}
            <div className="md:hidden mb-4">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#009a62] text-white flex items-center justify-center font-semibold text-xl">
                  A
                </div>
                <h2 className="mt-3 font-semibold text-gray-800 text-[18px] md:text-[20px]">
                  Amit Varma
                </h2>
              </div>
              <div className="mt-3 flex items-center justify-between px-4 py-4 bg-white shadow-xl rounded-[12px]">
                <h2 className="text-[18px] font-semibold text-gray-800">Address</h2>
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
              <h2 className="text-xl font-semibold text-gray-800 mb-6">My Orders</h2>

              <div className="w-full overflow-x-auto rounded-xl">
                <table className="min-w-[800px] border-collapse w-full">
                  <thead className="bg-green-100 text-gray-800">
                    <tr className="text-left text-sm">
                      <th className="px-2 md:px-4 py-3 text-center font-semibold border border-green-200">
                        Product(s)
                      </th>
                      <th className="px-2 md:px-4 py-3 text-center font-semibold border border-green-200">
                        Order ID
                      </th>
                      <th className="px-2 md:px-4 py-3 text-center font-semibold border border-green-200">
                        Date
                      </th>
                      <th className="px-2 md:px-4 py-3 text-center font-semibold border border-green-200">
                        Amount
                      </th>
                      <th className="px-2 md:px-4 py-3 text-center font-semibold border border-green-200">
                        Status
                      </th>
                      <th className="px-2 md:px-4 py-3 text-center font-semibold border border-green-200">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-gray-700">
                    {loading ? (
                      <tr>
                        <td colSpan="6" className="text-center py-6 text-gray-500">
                          Loading...
                        </td>
                      </tr>
                    ) : orders.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="text-center py-6 text-gray-500">
                          No orders found
                        </td>
                      </tr>
                    ) : (
                      orders.map((order) => (
                        <tr key={order.id} className="hover:bg-green-50 transition align-top">

                          {/* Products column — shows all items in this order */}
                          <td className="px-2 md:px-4 py-3 border border-green-200">
                            <div className="flex flex-col gap-3">
                              {order.items?.map((item) => (
                                <div key={item.id} className="flex items-center gap-3">
                                  <img
                                    src={item.image_url || specialproduct}
                                    alt={item.product_name}
                                    className="w-[56px] h-[56px] rounded-lg object-cover flex-shrink-0"
                                    onError={(e) => { e.target.src = specialproduct; }}
                                  />
                                  <div>
                                    <p className="font-medium text-gray-800 text-sm leading-tight">
                                      {item.product_name}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                      Qty: {item.quantity} &nbsp;·&nbsp; ₹{Number(item.unit_price).toLocaleString("en-IN")} each
                                    </p>
                                    <p className="text-xs text-gray-400">
                                      {item.manufacturer_name}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </td>

                          {/* Order number */}
                          <td className="px-2 md:px-4 py-3 text-center border border-green-200 whitespace-nowrap text-sm">
                            <span className="font-mono text-xs">{order.order_number}</span>
                          </td>

                          {/* Date */}
                          <td className="px-2 md:px-4 py-3 text-center border border-green-200 whitespace-nowrap text-sm">
                            {new Date(order.created_at).toLocaleDateString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </td>

                          {/* Amount */}
                          <td className="px-2 md:px-4 py-3 text-center border border-green-200 whitespace-nowrap text-sm font-medium">
                            ₹ {Number(order.total).toLocaleString("en-IN")}
                          </td>

                          {/* Status */}
                          <td className="px-2 md:px-4 py-3 text-center border border-green-200 whitespace-nowrap">
                            <span
                              className={`inline-block px-3 py-1 text-xs rounded-full font-medium capitalize ${STATUS_STYLES[order.status] || "bg-gray-100 text-gray-600"
                                }`}
                            >
                              {order.status}
                            </span>
                          </td>

                          {/* Actions */}
                          <td className="px-2 md:px-4 py-3 text-center border border-green-200 whitespace-nowrap">
                            <div className="flex justify-center gap-4">
                              <div className="relative group">
                                <Link to={`/order-details/${order.id}`}>
                                  <FontAwesomeIcon icon={faEye} />
                                </Link>
                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                                  View Details
                                </span>
                              </div>

                              {order.status !== "cancelled" && (
                                <div className="relative group">
                                  <button
                                    onClick={() => {
                                      setSelectedOrderId(order.id);
                                      setShowCancelModal(true);
                                    }}
                                    className="cursor-pointer text-red-400 hover:text-red-600 transition"
                                  >
                                    <FontAwesomeIcon icon={faTrash} />
                                  </button>
                                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                                    Cancel Order
                                  </span>
                                </div>
                              )}
                            </div>
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

      {/* Cancel confirmation modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-3">Cancel Order</h2>
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