import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign, faPlus } from "@fortawesome/free-solid-svg-icons";

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
      <Header showLogout={true} />

      <main className="pt-20 bg-[#f7f8fa] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* ================= LEFT SIDE ================= */}
          <div className="md:col-span-2 space-y-6">
            {/* ADDRESS CARD */}
            <div className="bg-white rounded-[12px] shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[20px] md:text-[22px] font-semibold text-gray-800">
                  Shipping Address
                </h2>

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

              {/* ADDRESS BOX */}
              <div className=" p-6 ">
                <h2 className="font-semibold text-gray-800 text-[18px] md:text-[20px]">
                  Amit Verma
                </h2>

                <p className="mt-2 text-gray-600">+91 9876543210</p>

                <p className="mt-2 text-gray-600">Kolkata</p>

                <p className="mt-2 text-gray-600">Near City Mall</p>

                <p className="mt-2 text-gray-600">123 Main Road, Salt Lake</p>

                <p className="mt-2 text-gray-600">700154, West Bengal</p>

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
              </div>
            </div>
            {/* Continue Shopping */}
            <div className="flex items-center justify-between">
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
                <span className="text-[16px]  font-semibold text-gray-800 ">
                  {item.name} × {item.quantity}
                </span>

                <span className="text-[16px] font-bold text-gray-800">
                  <FontAwesomeIcon icon={faIndianRupeeSign} />
                  {(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}

            <hr className="my-4  text-gray-400" />

            {/* TOTAL */}
            <div className="flex justify-between  font-semibold mb-4 text-[18px] text-gray-800">
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
        </div>
      </main>

      <Footer />
    </>
  );
}
