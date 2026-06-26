// import React, { useState } from "react";
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
  faTrashCan,
  faPlus,
  faMinus,
  faLocationDot,
  faMagnifyingGlass, faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import { API_URL } from "../../config/api";

import axios from "axios";
import { useState, useEffect } from "react";
import { useBanner } from "../../hooks/useBanner";
import HeroBanner from "../HeroBanner";


export default function Cart() {
  const navigate = useNavigate();

  // const [cartItems, setCartItems] = useState(
  //   JSON.parse(localStorage.getItem("cart")) || [],
  // );

  const [cartItems, setCartItems] = useState([]);
  const [summary, setSummary] = useState(null);


  const pageSlug = "cart";
  const { bannerItem, isLoading, error } = useBanner(pageSlug);



  // const fetchCart = async () => {
  //   const token = localStorage.getItem("token");
  //   try {
  //     const response = await axios.get(
  //       `${API_URL}/customers/cart`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           Accept: "application/json",
  //         },
  //       }
  //     );

  //     setCartItems(response.data.data.items);
  //     setSummary(response.data.data.summary);
  //   } catch (error) {
  //     console.error("Cart API Error:", error);
  //   }
  // };


  const fetchCart = async () => {
    const token = localStorage.getItem("token");
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

      setCartItems(response.data.data.items);
      setSummary(response.data.data.summary);


      window.dispatchEvent(new Event('cartUpdated'));

    } catch (error) {
      console.error("Cart API Error:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    const handleFocus = () => {
      fetchCart();
    };

    window.addEventListener("focus", handleFocus);

    return () =>
      window.removeEventListener("focus", handleFocus);
  }, []);

  //  Update Quantity
  const updateQuantity = async (cartItemId, type) => {
    const token = localStorage.getItem("token");

    try {
      const item = cartItems.find(
        (cartItem) => cartItem.id === cartItemId
      );

      if (!item) return;

      let newQty =
        type === "inc"
          ? item.quantity + 1
          : item.quantity - 1;

      if (newQty < 1) return;

      await axios.put(
        `${API_URL}/customers/cart/items/${cartItemId}`,
        {
          quantity: newQty,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      // Reload cart from server
      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  //  Remove Item
  const removeItem = async (cartItemId) => {
    const token = localStorage.getItem("token");

    try {
      await axios.delete(
        `${API_URL}/customers/cart/items/${cartItemId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  //  Clear Cart
  const clearCart = async () => {
    const token = localStorage.getItem("token");

    try {
      await axios.delete(
        `${API_URL}/customers/cart`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  // Subtotal
  // const subtotal = cartItems.reduce(
  //   (acc, item) => acc + item.price * item.quantity,
  //   0,
  // );
  const subtotal = cartItems.reduce(
    (acc, item) => acc + Number(item.unit_price) * item.quantity,
    0
  );

  const handleCheckeOut = () => {
    navigate("/checkout")
  }




  return (
    <>
      <Helmet>
        <title>Cart -  Animal Feed</title>
      </Helmet>
      <Header showLogout={true} />

      <main className="pt-16 overflow-x-hidden">
        {/* Hero Section */}
        <HeroBanner
          imageUrl={bannerItem?.image_url}
          titleWhite={bannerItem?.title_white}
          titleGold={bannerItem?.title_gold}
          subtitle={bannerItem?.subtitle}
          ctaPrimaryLabel={bannerItem?.cta_primary_label}
          ctaPrimaryUrl={bannerItem?.cta_primary_url}
          ctaSecondaryLabel={bannerItem?.cta_secondary_label}
          ctaSecondaryUrl={bannerItem?.cta_secondary_url}
          height="h-[500px]"
          isLoading={isLoading}
        />

        <div className="max-w-7xl mx-auto px-4 py-12 relative z-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12">
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
            <div className="grid grid-cols-1 md:grid-cols-3  gap-6 md:gap-12">
              {/* LEFT SIDE - CART ITEMS */}
              <div className="md:col-span-2 space-y-8">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-md p-6 md:p-8 relative"
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
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center mt-6 md:mt-0">
                      {/* Image */}
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-40 h-40 object-cover rounded-lg"
                      />

                      {/* Info */}
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-[20px] font-semibold text-gray-800 mb-2">
                          {item.name}
                        </h3>

                        {/* Unit Price */}
                        <p className="text-gray-600 text-[16px]  mb-4 font-medium">
                          <FontAwesomeIcon icon={faIndianRupeeSign} />
                          {/* {item.price.toFixed(2)} */}
                          {Number(item.unit_price).toFixed(2)}
                        </p>

                        {/* Quantity */}
                        <div className="flex items-center justify-center md:justify-start  mb-4">
                          <button
                            onClick={() => updateQuantity(item.id, "dec")}
                            className=" px-2 bg-gradient-to-r from-[#00a34a] to-[#009a62]
                                       text-white rounded-md cursor-pointer"
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
                 px-6 
                 border-t border-b border-gray-300
                 rounded-md
                 text-md font-normal"
                          >
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => updateQuantity(item.id, "inc")}
                            className=" px-2  bg-gradient-to-r from-[#00a34a] to-[#009a62]
                                       text-white rounded-md cursor-pointer"
                          >
                            <FontAwesomeIcon
                              icon={faPlus}
                              className="text-[10px]"
                            />
                          </button>
                        </div>

                        {/* Total */}
                        <p className="text-[18px]  text-gray-800">
                          Total: <FontAwesomeIcon icon={faIndianRupeeSign} />
                          <span className="font-semibold">
                            {/* {(item.price * item.quantity).toFixed(2)} */}
                            {/* {Number(item.unit_price * item.quantity).toFixed(2)} */}
                            {(Number(item.unit_price) * item.quantity).toFixed(2)}
                            {/* {Number(item.line_total).toFixed(2)} */}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Continue Shopping */}
                <div className="hidden md:flex items-center justify-between">
                  <button
                    onClick={() => navigate("/distributor")}
                    className="  bg-yellow-500 text-white
                               py-3 rounded-xl font-medium cursor-pointer hover:bg-yellow-400  text-[16px] px-8
                               hover:opacity-90 transition"
                  >
                    Continue Shopping
                  </button>
                  <button
                    onClick={() => clearCart()}
                    className="  bg-yellow-500 text-white
                               py-3 rounded-xl font-medium cursor-pointer hover:bg-yellow-400  text-[16px] px-8
                               hover:opacity-90 transition"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE - ORDER SUMMARY */}
              <div className="bg-white rounded-xl shadow-md p-6 h-fit">
                <h3 className="text-[20px] md:text-[24px] font-semibold text-gray-800 mb-2 mb-6">
                  Order Summary
                </h3>

                <div className="flex justify-between mb-4 text-[20px]  text-gray-800">
                  <span>Subtotal:</span>
                  <span className="font-semibold">
                    <FontAwesomeIcon icon={faIndianRupeeSign} />
                    {/* {subtotal.toFixed(2)} */}
                    {Number(subtotal).toFixed(2)}
                  </span>
                </div>

                <p className="text-gray-500 text-sm mb-6">
                  Shipping, taxes and discounts will be calculated at checkout.
                </p>

                <button
                  onClick={() => navigate("/checkout")}
                  className=" w-full bg-yellow-500 text-white
                               py-3 rounded-xl font-medium cursor-pointer hover:bg-yellow-400  text-[16px]
                             hover:opacity-90 transition"
                >
                  Proceed to Checkout
                </button>
              </div>

              {/* Continue Shopping */}
              <div className=" md:hidden">
                <button
                  onClick={() => navigate("/distributor")}
                  className=" w-full bg-yellow-500 text-white
                               py-3 rounded-xl font-medium cursor-pointer hover:bg-yellow-400  text-[16px] px-8
                               hover:opacity-90 transition"
                >
                  Continue Shopping
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
