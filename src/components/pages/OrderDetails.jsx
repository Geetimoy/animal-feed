import Footer from "../Footer";
import Header from "../Header";

import { useState, useEffect } from "react";

import contactBaner from "../../assets/images/contact-banner.jpg";

import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { API_URL } from "../../config/api";


export default function OrderDetails(){

  const [selected, setSelected] = useState(1);
  const addresses = [
    {
      id: 1,
      position: "Home",
      name:"Amit Verma",
      phone:"9876543210",
      address: "Near City Mall, 120 Main Road, Kolkata, West Bengal 700150",
    },
    {
      id: 2,
      position: "Office",
      name:"Geetimoy Sahu",
      phone:"9876543210",
      address: "123 Main Road, Salt Lake, Kolkata, West Bengal 700091",
    },
  ];

  const current = addresses.find((a) => a.id === selected);

  const { orderId } = useParams();

  const [order, setOrder] = useState(null);
  const [cartItems, setCartItems] = useState([]);

   useEffect(() => {
  fetchOrderDetails();
}, [orderId]);

  const fetchOrderDetails = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      `${API_URL}/customers/orders/${orderId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    );

    console.log(response.data);

    setOrder(response.data.data);

    setCartItems(
      response.data.data.items ||
      response.data.data.order_items ||
      []
    );
  } catch (error) {
    console.log(error);
  }
};


const subtotal = cartItems.reduce(
  (acc, item) => acc + Number(item.unit_price) * item.quantity,
  0
);

    return(
      <>
        <Header showLogout={true} />
        <main className="pt-16 overflow-x-hidden">
          {/* <section className="relative z-0">
            <div className="relative">
              <img
                src={contactBaner}
                alt="Contact Us Banner"
                className="w-full md:h-auto h-[250px] object-cover"
              />
              <div className="absolute inset-0  flex items-center justify-center">
                <h1 className="text-white text-4xl md:text-6xl font-bold">
                 Order Details
                </h1>
              </div>
            </div>
          </section> */}
          <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 mt-16">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-[12px] shadow-md h-fit">
                <p className="normal text-gray-800 text-[16px] md:text-[20px]">ORDER : {order?.order_number}</p>
                <table className="w-full mt-4 border-collapse">
                  <thead className="bg-green-100 text-gray-800">
                    <tr className="text-left text-sm">
                      <th className="px-2 md:px-4 py-3 text-left text-sm md:text-base font-semibold border border-green-200">Product Image</th>
                      <th className="px-2 md:px-4 py-3 text-left text-sm md:text-base font-semibold border border-green-200">Product Name</th>
                      <th className="px-2 md:px-4 py-3 text-left text-sm md:text-base font-semibold border border-green-200">Price</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {cartItems.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                         <td className="px-2 md:px-4 py-3 border border-green-200">
                          <img src={item.image_url} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        </td>
                        <td className="px-2 md:px-4 py-3 border border-green-200">{item.product_name}</td>
                        <td className="px-2 md:px-4 py-3 border border-green-200">
                          {Number(item.unit_price).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              </div>
            <div>
              <div className="bg-white p-6 rounded-[12px] shadow-md h-fit mb-6">
                <h2 className="text-xl font-semibold mb-4">Delivery details</h2>
                <h2 className="normal text-gray-800 text-[16px] md:text-[20px]">
                        {order?.customer_name}
                      </h2>
                      <p className="mt-1 text-gray-600">Phone : {order?.customer_phone}</p>
                      <p className="mt-1 text-gray-600">{order?.shipping_address}</p>
              </div>
              <div className="bg-white p-6 rounded-[12px] shadow-md h-fit">
                
                <h2 className="text-xl font-semibold mb-4">Price details</h2>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between mb-3">
                    <span className="text-[16px]  font-medium text-gray-800 ">
                      {item.product_name} × {item.quantity}
                    </span>

                    <span className="text-[16px] font-semibold text-gray-800">
                      <FontAwesomeIcon icon={faIndianRupeeSign} />
                      {/* {(item.price * item.quantity).toFixed(2)} */}
                      {Number(item.unit_price).toFixed(2)}
                    </span>
                  </div>
                  
                ))}
                <hr class="my-4  text-gray-400" />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>
                    <FontAwesomeIcon icon={faIndianRupeeSign} />
                    {subtotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
}