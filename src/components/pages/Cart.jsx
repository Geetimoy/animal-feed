import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./custom.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import cartbanner from "../../assets/images/cart-banner.jpg";
// import contactBaner from "../../assets/images/contact-banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupeeSign,
  faXmark,
  faPlus,
  faMinus,
  faLocationDot,
faMagnifyingGlass


} from "@fortawesome/free-solid-svg-icons";



export default function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );

  //  Update Quantity
  const updateQuantity = (id, type) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        if (type === "inc") {
          return { ...item, quantity: item.quantity + 1 };
        }
        if (type === "dec" && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  //  Remove Item
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const handleCheckeOut= () =>{
    navigate("/checkout")
  }

  return (
    <>
      <Header showLogout={true} />

      <main className="pt-16 overflow-x-hidden">
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
                Add to <span className="text-[#ffa800]"> Cart</span>
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
        <div className="max-w-7xl mx-auto px-4 py-12 relative z-20">
          <h2 className="text-4xl font-semibold text-center mb-12">
            Your <span className="text-[#ffa800]">Cart</span>
          </h2>

          {cartItems.length === 0 ? (
            <div className="flex items-center justify-center flex-col">
              <p className="text-center text-gray-500 text-lg">
                Your cart is empty.
              </p>
              <div className="mt-8">
                <button
                  onClick={() => navigate("/products")}
                  className="  bg-yellow-500 text-white
                               py-3 rounded-xl font-medium cursor-pointer hover:bg-yellow-400  text-[16px] px-8
                               hover:opacity-90 transition"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* LEFT SIDE - CART ITEMS */}
              <div className="md:col-span-2 space-y-8">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-md p-4 md:p-8 relative"
                  >
                    <button
                      onClick={() => removeItem(item.id)}
                      className="absolute top-4 right-4 
                                 w-8 h-8  bg-[#009a62] cursor-pointer
                                 text-white rounded-md
                                 flex items-center 
                                 justify-center 
                                 hover:opacity-90 transition"
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </button>

                    <div className="flex flex-col md:flex-row gap-12 items-center">
                      {/* Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-40 h-40 object-cover rounded-lg"
                      />

                      {/* Info */}
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-[18px] md:text-[20px] font-semibold text-gray-800 mb-2">
                          {item.name}
                        </h3>

                        {/* Unit Price */}
                        <p className="text-gray-600 text-[16px]  mb-4 font-bold">
                          <FontAwesomeIcon icon={faIndianRupeeSign} />
                          {item.price.toFixed(2)}
                        </p>

                        {/* Quantity */}
                        <div className="flex items-center justify-center md:justify-start  mb-4">
                          <button
                            onClick={() => updateQuantity(item.id, "dec")}
                            className="w-8 h-8   bg-gradient-to-r from-[#00a34a] to-[#009a62]
                                       text-white rounded-md text-md cursor-pointer"
                          >
                            <FontAwesomeIcon
                              icon={faMinus}
                              className="text-[10px]"
                            />
                          </button>

                          {/* <span className="text-lg font-medium border border-gray-200 px-4 py-4">
                            {item.quantity}
                          </span> */}
                          <span
                            className="inline-flex items-center justify-center
                 min-w-[40px] h-8
                 border-t border-b border-gray-300
                 rounded-md
                 text-lg font-medium"
                          >
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => updateQuantity(item.id, "inc")}
                            className="w-8 h-8   bg-gradient-to-r from-[#00a34a] to-[#009a62] cursor-pointer
                                       text-white rounded-md"
                          >
                            <FontAwesomeIcon
                              icon={faPlus}
                              className="text-[10px]"
                            />
                          </button>
                        </div>

                        {/* Total */}
                        <p className="text-[18px] font-semibold text-gray-800">
                          Total: <FontAwesomeIcon icon={faIndianRupeeSign} />
                          <span className="font-bold">
                            {(item.price * item.quantity).toFixed(2)}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Continue Shopping */}
                <div>
                  <button
                    onClick={() => navigate("/products")}
                    className="  bg-yellow-500 text-white
                               py-3 rounded-xl font-medium cursor-pointer hover:bg-yellow-400  text-[16px] px-8
                               hover:opacity-90 transition"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE - ORDER SUMMARY */}
              <div className="bg-white rounded-xl shadow-md p-6 h-fit">
                <h3 className="text-[20px] md:text-[24px] font-semibold text-gray-800 mb-2 mb-6">
                  Order Summary
                </h3>

                <div className="flex justify-between mb-4 text-[20px] font-semibold text-gray-800">
                  <span>Subtotal:</span>
                  <span className="font-bold">
                    <FontAwesomeIcon icon={faIndianRupeeSign} />
                    {subtotal.toFixed(2)}
                  </span>
                </div>

                {/* <p className="text-gray-500 text-sm mb-6">
                  Shipping, taxes and discounts will be calculated at checkout.
                </p> */}

                <button
                  onClick={handleCheckeOut}
                  className=" w-full bg-yellow-500 text-white
                               py-3 rounded-xl font-medium cursor-pointer hover:bg-yellow-400  text-[16px]
                             hover:opacity-90 transition"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
