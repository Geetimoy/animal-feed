import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ProfileDashboard from "./ProfileDashboard";
import Header from "../Header";
import Footer from "../Footer";
import specialproduct from "../../assets/images/special-product.jpeg";
import contactBaner from "../../assets/images/contact-banner.jpg";

export default function MyOrders() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

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

  return (
    <>
      <Header showLogout={true} />
      <main className="pt-16 overflow-x-hidden">
        <section className="relative z-0">
          <div className="relative">
            <img
              src={contactBaner}
              alt="Contact Us Banner"
              className="w-full md:h-auto h-[250px] object-cover"
            />
            <div className="absolute inset-0  flex items-center justify-center">
              <h1 className="text-white text-4xl md:text-6xl font-bold">
                Profile
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

                  <tbody className="text-gray-700">
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
                            {/* <p className="text-xs text-gray-500">10 kg Pack</p> */}
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
