import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupeeSign,
  faPlus,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import cartbanner from "../../assets/images/cart-banner.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Checkout() {
  const navigate = useNavigate();

  
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const [paymentMethod, setPaymentMethod] = useState("bank");

  return (
    <>
      <Helmet>
        <title>Checkout -  Animal Feed</title>
      </Helmet>
      <Header showLogout={true} />

      <main className="pt-16 bg-[#f7f8fa] min-h-screen">
        <section className="relative ">
          <div className="relative">
            <img
              src={cartbanner}
              alt="Contact Us Banner"
              className="w-full  h-[500px] object-cover object-top"
            />
            {/* Overlay Layer (81%) */}
            <div className="absolute inset-0 bg-black/[0.60] pointer-events-none z-0"></div>
            {/* <div className="absolute inset-0  flex items-center justify-center">
              <h1 className="text-white text-4xl md:text-6xl font-bold">
                Quality Feed Solution
              </h1>

            </div> */}
            <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6  w-full z-10">
              <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6">
                CheckOut
              </h1>
              {/* <p className="text-white text-[16px] md:text-xl text-center">
                Empowering livestock productivity with scientifically balanced
                nutrition for healthier animals and better returns.
              </p> */}
              <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
                <Link
                  to="/distributor"
                  className="mt-4 md:mt-6 w-full  md:w-[198px] h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2 "
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

        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
          {/* ================= LEFT SIDE ================= */}
          <div className="md:col-span-2 space-y-6">
            {/* ADDRESS CARD */}
            <div className="bg-white rounded-[12px] shadow-md py-4 px-4">
              <div>
                <div className="flex justify-between items-center  ">
                  <h2 className="text-[20px] md:text-[20px] font-semibold text-gray-800">
                    Shipping Address
                  </h2>

                  <button
                    onClick={() => navigate("/address-management")}
                    className="flex items-center 
                            px-4 py-3 
                            rounded-[12px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white text-[14px] gap-1 cursor-pointer hidden md:block"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                    Add New
                  </button>
                </div>

                {/* ADDRESS BOX */}
                <div className="px-6 ">
                  <h2 className="font-normal text-gray-800 text-[16px] md:text-[20px]">
                    Amit Verma
                  </h2>

                  <p className="mt-1 text-gray-600">Phone : +91 9876543210</p>

                  <p className="mt-1 text-gray-600">
                    Kolkata, 123 Main Road, Salt Lake
                  </p>

                  <p className="mt-1 text-gray-600">700154, West Bengal</p>

                  <div className="mt-2 mb-4 flex gap-4">
                    <button
                      onClick={() => navigate("/address-management")}
                      className="text-green-700 hover:underline cursor-pointer"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => navigate("/address-management")}
                      className="text-red-600 hover:underline cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>

                  <div className="mt-4 md:hidden">
                    <button
                      onClick={() => navigate("/address-management")}
                      className="flex items-center 
                            px-4 py-3 
                            rounded-[12px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white text-[14px] gap-1 cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                      Add New
                    </button>
                  </div>
                </div>

                
              </div>
            </div>
            <div className="bg-white rounded-[12px] shadow-md py-4 px-4">
                <div className="flex justify-between items-center ">
                  <h2 className="text-[20px] md:text-[20px] font-semibold text-gray-800">
                    Billing Address
                  </h2>

                  <button
                    onClick={() => navigate("/address-management")}
                    className="flex items-center 
                            px-4 py-3 
                            rounded-[12px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white text-[14px] gap-1 cursor-pointer hidden md:block"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                    Add New
                  </button>
                </div>

                {/* ADDRESS BOX */}
                <div className="px-6 ">
                  <h2 className="normal text-gray-800 text-[16px] md:text-[20px]">
                    Amit Verma
                  </h2>

                  <p className="mt-1 text-gray-600">Phone : +91 9876543210</p>

                  <p className="mt-1 text-gray-600">Near City Mall, 120 Main Road</p>

                

                  <p className="mt-1 text-gray-600">700150, West Bengal</p>

                  <div className="mt-4 flex gap-4">
                    <button
                      onClick={() => navigate("/address-management")}
                      className="text-green-700 hover:underline cursor-pointer"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => navigate("/address-management")}
                      className="text-red-600 hover:underline cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>

                  <div className="mt-4 md:hidden">
                    <button
                      onClick={() => navigate("/address-management")}
                      className="flex items-center 
                            px-4 py-3 
                            rounded-[12px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white text-[14px] gap-1 cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                      Add New
                    </button>
                  </div>
                </div>
            </div>

       

          

            {/* Continue Shopping */}
            <div className="md:flex items-start justify-between hidden md:block">
              <button
                onClick={() => navigate("/products")}
                className="  bg-yellow-500 text-white
                               py-3 rounded-xl font-medium cursor-pointer hover:bg-yellow-400  text-[16px] px-8
                               hover:opacity-90 transition"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => navigate("/cart")}
                className="  bg-yellow-500 text-white
                               py-3 rounded-xl font-medium cursor-pointer hover:bg-yellow-400  text-[16px] px-8
                               hover:opacity-90 transition"
              >
                Update Cart
              </button>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="bg-white p-6 rounded-[12px] shadow-md h-fit">
            <h2 className="text-[20px] md:text-[24px] font-semibold text-gray-800  mb-6">
              Order Summary
            </h2>

            {/* CART PRODUCTS */}
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between mb-3">
                <span className="text-[16px]  font-medium text-gray-800 ">
                  {item.name} × {item.quantity}
                </span>

                <span className="text-[16px] font-semibold text-gray-800">
                  <FontAwesomeIcon icon={faIndianRupeeSign} />
                  {(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}

            <hr className="my-4  text-gray-400" />

            {/* TOTAL */}
            <div className="flex justify-between  font-medium mb-4 text-[18px] text-gray-800">
              <span>Total</span>
              <span className=" font-bold">
                <FontAwesomeIcon icon={faIndianRupeeSign} />
                {subtotal.toFixed(2)}
              </span>
            </div>

            {/* PAYMENT METHODS */}
            <div className="space-y-3 mt-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mt-1 accent-[#009a62] cursor-pointer"
                />
                <div>
                  <p className="font-medium text-gray-800">
                    Direct bank transfer
                  </p>
                  {paymentMethod === "bank" && (
                    <p className="text-sm text-gray-500 mt-1">
                      Make your payment directly into our bank account.
                    </p>
                  )}
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="check"
                  checked={paymentMethod === "check"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mt-1 accent-[#009a62] cursor-pointer"
                />
                <div>
                  <p className="font-medium text-gray-800">Check payments</p>
                  {paymentMethod === "check" && (
                    <p className="text-sm text-gray-500 mt-1">
                      Make your payment directly into our bank account.
                    </p>
                  )}
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mt-1 accent-[#009a62] cursor-pointer"
                />
                <div>
                  <p className="font-medium text-gray-800">Cash on delivery</p>
                  {paymentMethod === "cod" && (
                    <p className="text-sm text-gray-500 mt-1">
                      Make your payment directly into our bank account.
                    </p>
                  )}
                </div>
              </label>
            </div>

            <button
              className=" w-full bg-yellow-500 text-white
                               py-3 rounded-xl font-medium cursor-pointer hover:bg-yellow-400  text-[16px]
                             hover:opacity-90 transition mt-6"
            >
              Place Order
            </button>
          </div>

          {/* Continue Shopping */}
          <div className="flex items-center flex-col-reverse gap-4 md:hidden">
            <button
              onClick={() => navigate("/products")}
              className=" w-full bg-yellow-500 text-white
                               py-3 rounded-xl font-medium cursor-pointer hover:bg-yellow-400  text-[16px] px-8
                               hover:opacity-90 transition"
            >
              Continue Shopping
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="w-full  bg-yellow-500 text-white
                               py-3 rounded-xl font-medium cursor-pointer hover:bg-yellow-400  text-[16px] px-8
                               hover:opacity-90 transition"
            >
              Update Cart
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
