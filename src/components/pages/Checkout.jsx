import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config/api";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupeeSign,
  faPlus,
  faLocationDot,
  faMagnifyingGlass,
  faArrowRight,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer";
import Header from "../Header";

export default function Checkout() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [banner, setBanner] = useState(null);
  const pageSlug = "checkout";

  const [checkoutData, setCheckoutData] = useState({
    name: "", phone: "", address: "", city: "", pin: "", notes: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [panelopen, setPanelOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [selected, setSelected] = useState(null);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [savingAddress, setSavingAddress] = useState(false);
  const [addressFormData, setAddressFormData] = useState({
    fullName: "", mobile: "", city: "", landmark: "", address: "", pincode: "", address_type: "home",
  });

  const subtotal = cartItems.reduce(
    (acc, item) => acc + Number(item.unit_price) * item.quantity, 0
  );
  const totalAmount = subtotal;

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken) setToken(storedToken);
    if (storedUser) setUser(JSON.parse(storedUser));
    fetchCart();
    fetchAddresses();
    fetchBanner();
  }, []);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) { navigate("/login"); return; }
      const response = await axios.get(`${API_URL}/customers/cart`, {
        headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
      });
      setCartItems(response.data.data.items || []);
    } catch (error) {
      console.log("Cart fetch error:", error);
      if (error.response?.status === 401) navigate("/login");
    }
  };

  const fetchAddresses = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const response = await axios.get(`${API_URL}/customers/addresses`, {
        headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
      });
      const addressList = response.data.data || [];
      setAddresses(addressList);
      if (addressList.length > 0 && !selected) setSelected(addressList[0].id);
    } catch (error) {
      console.log("Address Error:", error.response?.data || error);
    }
  };

  const fetchBanner = async () => {
    try {
      const res = await axios.get(`${API_URL}/banners/${pageSlug}`);
      setBanner(res.data);
    } catch (err) {
      console.log("Banner API error:", err);
    }
  };

  const handleAddressFormChange = (e) => {
    setAddressFormData({ ...addressFormData, [e.target.name]: e.target.value });
  };

  const handleSaveAddress = async () => {
    if (!addressFormData.fullName.trim()) { toast.error("Full Name is required"); return; }
    if (!addressFormData.mobile.trim()) { toast.error("Mobile number is required"); return; }
    if (!addressFormData.pincode.trim()) { toast.error("Pincode is required"); return; }
    if (!addressFormData.address.trim()) { toast.error("Address is required"); return; }
    if (!addressFormData.city.trim()) { toast.error("City is required"); return; }

    const token = localStorage.getItem("token");
    if (!token) { toast.error("Please login to add address"); return; }

    setSavingAddress(true);
    try {
      const payload = {
        name: addressFormData.fullName,
        phone: addressFormData.mobile,
        city: addressFormData.city,
        landmark: addressFormData.landmark || "",
        address_line: addressFormData.address,
        pincode: addressFormData.pincode,
        notes: "",
        is_default: false,
        address_type: addressFormData.address_type,
      };
      const response = await axios.post(`${API_URL}/customers/addresses`, payload, {
        headers: { Authorization: `Bearer ${token}`, Accept: "application/json", "Content-Type": "application/json" },
      });
      toast.success("Address added successfully!");
      await fetchAddresses();
      setAddressFormData({ fullName: "", mobile: "", city: "", landmark: "", address: "", pincode: "", address_type: "home" });
      setShowAddressForm(false);
      setPanelOpen(false);
      if (response.data.data?.id) setSelected(response.data.data.id);
    } catch (error) {
      console.error("Save Address Error:", error.response?.data || error);
      toast.error(error.response?.data?.message || "Failed to add address. Please try again.");
    } finally {
      setSavingAddress(false);
    }
  };

  const current = addresses.find((a) => a.id === selected) || {};

  const handlePlaceOrder = async () => {
    if (!selected) { toast.error("Please select a shipping address"); return; }
    if (cartItems.length === 0) { toast.error("Your cart is empty"); return; }

    const token = localStorage.getItem("token");
    if (!token) { toast.error("Please login to place order"); navigate("/login"); return; }

    setLoading(true);

    try {
      const addressParts = [
        current.address_line || "",
        current.landmark ? `Near: ${current.landmark}` : "",
        current.city || "",
        current.pincode || "",
      ].filter(Boolean);

      const orderData = {
        customer_name: current.name || user?.name || "",
        customer_email: user?.email || "",
        customer_phone: current.phone || user?.phone || "",
        shipping_address: addressParts.join(", "),
        notes: checkoutData.notes || "",
        payment_method: paymentMethod,
        items: cartItems.map((item) => ({
          product_id: item.product_id || item.id,
          quantity: item.quantity,
          unit_price: item.unit_price,
          name: item.name,
        })),
        total_amount: totalAmount,
      };

      const response = await axios.post(`${API_URL}/customers/checkout`, orderData, {
        headers: { Authorization: `Bearer ${token}`, Accept: "application/json", "Content-Type": "application/json" },
      });

      // ✅ FIXED: API returns { data: { orders: [ {...} ], summary: {} } }
      // Pull the first order out of the orders array
      const firstOrder = response.data?.data?.orders?.[0];

      if (!firstOrder) {
        toast.error("Order placement failed. No order data received.");
        return;
      }

      const orderId = firstOrder.id;
      const orderNumber = firstOrder.order_number || String(orderId);

      if (!orderId) {
        toast.error("Order placed but order ID not received. Please contact support.");
        return;
      }

      const orderDetails = {
        orderId: orderId,
        orderNumber: orderNumber,
        status: firstOrder.status || "pending",
        items: firstOrder.items_count ?? cartItems.length,
        items_count: firstOrder.items_count ?? cartItems.length,
        total: firstOrder.total ?? totalAmount,
        date: firstOrder.created_at || new Date().toISOString(),
        message: response.data.message || "Order placed successfully",
        rawData: firstOrder,
      };

      localStorage.setItem("orderConfirmed", "true");
      localStorage.setItem("lastOrderDetails", JSON.stringify(orderDetails));
      sessionStorage.setItem("orderConfirmed", "true");
      sessionStorage.setItem("lastOrderDetails", JSON.stringify(orderDetails));

      toast.success("Order placed successfully!", {
        autoClose: 2000,
        onClose: () => {
          navigate("/thankyou-order", {
            state: {
              order: orderDetails,
              orders: [orderDetails],
              summary: {
                total: firstOrder.total ?? totalAmount,
                items: firstOrder.items_count ?? cartItems.length,
                orderId: orderId,
              },
            },
          });
        },
      });

    } catch (error) {
      console.error("Order Error:", error.response?.data || error);
      toast.error(
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Failed to place order. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const bannerItem = banner?.data?.[0];

  return (
    <>
      <Helmet><title>Checkout - Animal Feed</title></Helmet>
      <Header showLogout={true} />

      <main className="pt-16 bg-[#f7f8fa] min-h-screen">
        {bannerItem?.image_url && (
          <section className="relative">
            <div className="relative">
              <img src={bannerItem?.image_url} alt={bannerItem?.title} className="w-full h-[500px] object-cover object-top" />
              <div className="absolute inset-0 bg-black/[0.60] pointer-events-none z-0"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6 w-full z-10">
                <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6">{bannerItem?.title_white}</h1>
                <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
                  <Link to={bannerItem?.cta_primary_url || "/distributor"} className="mt-4 md:mt-6 w-full md:w-[215px] h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2">
                    <span className="text-[20px] font-bold font-inter"><FontAwesomeIcon icon={faMagnifyingGlass} /> {bannerItem?.cta_primary_label || "Find Distributor"}</span>
                  </Link>
                  <Link to={bannerItem?.cta_secondary_url || "/contact-us"} className="mt-3 md:mt-6 w-full md:w-[198px] h-[48px] border text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2">
                    <span className="text-[20px] font-bold font-inter"><FontAwesomeIcon icon={faLocationDot} /> {bannerItem?.cta_secondary_label || "Contact Us"}</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 mt-16">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-[12px] shadow-md py-4 px-4">
              <div className="w-full mx-auto">
                <div className="flex justify-between items-start p-4">
                  <div>
                    <h2 className="text-[20px] font-semibold text-gray-800 mb-3">Shipping Address</h2>
                    {selected && current ? (
                      <>
                        <p className="text-sm text-gray-500">Deliver to</p>
                        <p className="text-lg font-semibold uppercase">{current.address_type || "Home"}</p>
                        <h2 className="text-gray-800 text-[16px] md:text-[20px]">{current.name || user?.name || "N/A"}</h2>
                        <p className="mt-1 text-gray-600">Phone: {current.phone || user?.phone || "N/A"}</p>
                        <p className="mt-1 text-gray-600">{current.address_line || "No address selected"}</p>
                        {current.landmark && <p className="mt-1 text-gray-600">Near: {current.landmark}</p>}
                        <p className="mt-1 text-gray-600">{current.city || ""} {current.pincode || ""}</p>
                      </>
                    ) : (
                      <p className="text-gray-500">No address selected. Please add or select an address.</p>
                    )}
                  </div>
                  <button onClick={() => setPanelOpen(!panelopen)} className="text-green-700 font-medium cursor-pointer">Change</button>
                </div>

                <div className={`transition-all duration-300 overflow-hidden ${panelopen ? "max-h-auto p-4" : "max-h-0"}`}>
                  {addresses.map((item) => (
                    <label key={item.id} className={`flex gap-3 p-3 border rounded-lg mb-3 cursor-pointer ${selected === item.id ? "border-green-500 bg-blue-50" : "border-gray-200"}`}>
                      <input type="radio" checked={selected === item.id} onChange={() => { setSelected(item.id); setPanelOpen(false); }} />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="font-medium">{item.phone}</p>
                        <p className="text-sm text-gray-600">{item.address_line}</p>
                        <p className="text-sm text-gray-600">{item.city} {item.pincode}</p>
                      </div>
                    </label>
                  ))}

                  {!showAddressForm ? (
                    <button onClick={() => setShowAddressForm(true)} className="w-full mt-3 py-3 border-2 border-dashed border-green-500 rounded-lg text-green-600 font-medium hover:bg-green-50 transition cursor-pointer flex items-center justify-center gap-2">
                      <FontAwesomeIcon icon={faPlus} /> Add New Address
                    </button>
                  ) : (
                    <div className="mt-4 p-4 border border-green-500 rounded-lg bg-green-50">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold text-gray-800">New Address</h3>
                        <button onClick={() => setShowAddressForm(false)} className="text-gray-500 hover:text-red-500 transition"><FontAwesomeIcon icon={faTimes} /></button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <select className="border border-gray-300 rounded-md px-4 py-3 text-md focus:ring-2 focus:ring-green-600 focus:outline-none" name="address_type" value={addressFormData.address_type} onChange={handleAddressFormChange}>
                          <option value="home">Home</option>
                          <option value="office">Office</option>
                          <option value="other">Other</option>
                        </select>
                        <input type="text" name="fullName" value={addressFormData.fullName} onChange={handleAddressFormChange} placeholder="Full Name *" className="border border-gray-300 rounded-md px-4 py-3 text-md focus:ring-2 focus:ring-green-600 focus:outline-none" />
                        <input type="tel" name="mobile" value={addressFormData.mobile} onChange={handleAddressFormChange} placeholder="Phone Number *" className="border border-gray-300 rounded-md px-4 py-3 text-md focus:ring-2 focus:ring-green-600 focus:outline-none" />
                        <input type="text" name="pincode" value={addressFormData.pincode} onChange={handleAddressFormChange} placeholder="Pincode *" className="border border-gray-300 rounded-md px-4 py-3 text-md focus:ring-2 focus:ring-green-600 focus:outline-none" />
                        <input type="text" name="city" value={addressFormData.city} onChange={handleAddressFormChange} placeholder="City / District *" className="border border-gray-300 rounded-md px-4 py-3 text-md focus:ring-2 focus:ring-green-600 focus:outline-none" />
                        <input type="text" name="landmark" value={addressFormData.landmark} onChange={handleAddressFormChange} placeholder="Landmark" className="border border-gray-300 rounded-md px-4 py-3 text-md focus:ring-2 focus:ring-green-600 focus:outline-none" />
                        <textarea rows="3" name="address" value={addressFormData.address} onChange={handleAddressFormChange} placeholder="Address (Area and Street) *" className="md:col-span-2 border border-gray-300 rounded-md px-4 py-3 text-md focus:ring-2 focus:ring-green-600 focus:outline-none resize-none"></textarea>
                        <div className="md:col-span-2 flex gap-3">
                          <button onClick={handleSaveAddress} disabled={savingAddress} className="px-6 py-3 bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50">
                            {savingAddress ? (<><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>Saving...</>) : (<><FontAwesomeIcon icon={faPlus} />Save Address</>)}
                          </button>
                          <button onClick={() => setShowAddressForm(false)} className="px-6 py-3 bg-gray-200 text-gray-700 rounded-[12px] hover:bg-gray-300 transition cursor-pointer">Cancel</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[12px] shadow-md py-4 px-4">
              <div className="flex flex-col gap-2 p-4">
                <label className="font-medium text-gray-700">Notes</label>
                <textarea value={checkoutData.notes} onChange={(e) => setCheckoutData({ ...checkoutData, notes: e.target.value })} placeholder="Any special instructions for delivery..." className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 w-full" rows="3" />
              </div>
            </div>

            <div className="md:flex items-start justify-between hidden md:block">
              <button onClick={() => navigate("/products")} className="bg-yellow-500 text-white py-3 rounded-xl font-medium cursor-pointer hover:bg-yellow-400 text-[16px] px-8 hover:opacity-90 transition">Continue Shopping</button>
              <button onClick={() => navigate("/cart")} className="bg-yellow-500 text-white py-3 rounded-xl font-medium cursor-pointer hover:bg-yellow-400 text-[16px] px-8 hover:opacity-90 transition ml-4">Back to Cart</button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-[12px] shadow-md h-fit">
            <h2 className="text-[20px] md:text-[24px] font-semibold text-gray-800 mb-6">Order Summary</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between mb-3">
                <span className="text-[16px] font-medium text-gray-800">{item.name} × {item.quantity}</span>
                <span className="text-[16px] font-semibold text-gray-800"><FontAwesomeIcon icon={faIndianRupeeSign} />{Number(item.unit_price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <hr className="my-4 text-gray-400" />
            <div className="flex justify-between font-medium mb-4 text-[18px] text-gray-800">
              <span>Total</span>
              <span className="font-bold"><FontAwesomeIcon icon={faIndianRupeeSign} />{subtotal.toFixed(2)}</span>
            </div>
            <button
              onClick={handlePlaceOrder}
              disabled={loading || cartItems.length === 0 || !selected}
              className={`w-full py-3 rounded-xl font-medium text-[16px] mt-6 flex items-center justify-center gap-2 transition ${loading || cartItems.length === 0 || !selected ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-400 text-white cursor-pointer"}`}
            >
              {loading ? (<><span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>Placing Order...</>) : ("Place Order")}
            </button>
            {!selected && <p className="text-red-500 text-sm text-center mt-2">Please select or add a shipping address</p>}
          </div>

          <div className="flex items-center flex-col-reverse gap-4 md:hidden">
            <button onClick={() => navigate("/products")} className="w-full bg-yellow-500 text-white py-3 rounded-xl font-medium cursor-pointer hover:bg-yellow-400 text-[16px] px-8 hover:opacity-90 transition">Continue Shopping</button>
            <button onClick={() => navigate("/cart")} className="w-full bg-yellow-500 text-white py-3 rounded-xl font-medium cursor-pointer hover:bg-yellow-400 text-[16px] px-8 hover:opacity-90 transition">Back to Cart</button>
          </div>
        </div>
      </main>

      <Footer />
      <ToastContainer />
    </>
  );
}