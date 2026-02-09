import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import ProfileDashboard from "./ProfileDashboard";
import Header from "../Header";
import Footer from "../Footer";

export default function AddressManagement() {
    const location = useLocation();
      const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(
    location.state?.openForm === true
  );


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

  const inputClass =

    " w-full pl-6 py-3 rounded-xl bg-white  border border-gray-200  text-gray-700 placeholder-gray-400   focus:outline-none focus:border-blue-400";

  return (
    <>
      <Header />
      <main className="pt-16 overflow-x-hidden">
        <div className="flex  bg-[#f7f8fa] md:max-w-7xl md:mx-auto px-4 md:px-8 py-8 md:py-16">
          {/* DESKTOP DASHBOARD */}
          <div className="hidden md:block">
            <ProfileDashboard />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 p-4 md:p-6">
            {/*  MOBILE HEADER */}
            <div className="md:hidden mb-4">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#009a62] text-white flex items-center justify-center font-semibold text-lg">
                  U
                </div>
                {/* <h1 className="mt-3 font-semibold text-gray-800 ">User Name</h1> */}
                <h2 className="mt-3 font-semibold text-gray-800 text-[18px] md:text-[20px] ">
                  Amit Verma
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
                  {mobileItem("/my-orders", "My Orders")}
                  {mobileItem("/my-profile", "Profile")}
                  {mobileItem("/address-management", "Address")}
                </div>
              )}
            </div>

            {/* MAIN CARD */}
            <div className="max-w-[860px] mx-auto bg-white rounded-[12px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] p-4">
              {/* HEADER */}
              <div className="flex items-center justify-between mb-1 md:mb-4 ">
                <h2 className="text-[20px] md:text-[22px] font-semibold text-gray-800">
                  Address Management
                </h2>

                {!showForm && (
                  <button
                    onClick={() => setShowForm(true)}
                    className="flex items-center px-2 md:px-4 py-3 rounded-[12px]  bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white text-[14px] md:text-md cursor-pointer hidden md:block gap-1"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                    Add New
                  </button>
                )}
              </div>

              {/* ADDRESS LIST */}
              {!showForm && (
                <div className="bg-[#fbfcfd] rounded-[12px] p-4 md:p-6 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="font-semibold text-gray-800 text-[18px] md:text-[20px] ">
                      Amit Verma
                    </h2>
                    {/* <span className="text-xs text-green-700 bg-green-50 px-3 py-1 rounded-full">
                      HOME
                    </span> */}
                  </div>

                  <p className="text-[16px] md:text-md text-gray-600 ">
                    Lorem ipsum dolor sit, amet
                    <br />
                    consectetur adipisicing elit
                    <br />
                    Kolkata – 700154, West Bengal
                  </p>

                  <p className="mt-2 text-md text-gray-600">
                    Mobile: <span className="font-medium">+91 9876543210</span>
                  </p>

                  <div className="flex items-center justify-between mt-6 md:hidden ">
                    {!showForm && (
                      <button
                        onClick={() => setShowForm(true)}
                        className="flex items-center px-2 md:px-4 py-2 rounded-[12px]  bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white text-[14px] md:text-md cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faPlus} />
                        Add New
                      </button>
                    )}
                    <div className=" flex gap-4 text-[14px] md:hidden ">
                      <button
                        onClick={() => setShowForm(true)}
                        className="text-green-700 hover:underline cursor-pointer"
                      >
                        Edit
                      </button>
                      <button className="text-red-600 hover:underline cursor-pointer">
                        Delete
                      </button>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-5 text-md hidden md:block">
                    <button
                      onClick={() => setShowForm(true)}
                      className="text-green-700 hover:underline cursor-pointer"
                    >
                      Edit
                    </button>
                    <button className="text-red-600 hover:underline cursor-pointer ml-4">
                      Delete
                    </button>
                  </div>
                </div>
              )}

              {/* ADDRESS FORM */}
              {showForm && (
                <div className="bg-[#fbfcfd] rounded-[12px] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                  <h3 className="text-[18px] md:text-[22px] font-semibold mb-5">
                    Address Details
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      className={inputClass}
                      type="text"
                      placeholder="First Name"
                    />
                    <input
                      className={inputClass}
                      type="text"
                      placeholder="Last Name"
                    />
                    <input
                      className={inputClass}
                      type="email"
                      placeholder="Enter Your Email"
                    />
                    <input
                      className={inputClass}
                      type="number"
                      placeholder="10-digit mobile number"
                    />
                    <input
                      className={inputClass}
                      type="text"
                      placeholder="Pincode"
                    />
                    <input
                      className={inputClass}
                      type="text"
                      placeholder="Locality"
                    />

                    <textarea
                      className={`${inputClass} md:col-span-2 resize-none h-24`}
                      type="text"
                      placeholder="Address (Area and Street)"
                    />

                    <input
                      className={inputClass}
                      placeholder="City / District / Town"
                    />
                    <select className={inputClass}>
                      <option>Select State</option>
                      <option>West Bengal</option>
                      <option>Tripura</option>
                    </select>

                    <input
                      className={`${inputClass} md:col-span-2`}
                      placeholder="Landmark (Optional)"
                      type="text"
                    />
                  </div>

                  <div className="mt-6 flex gap-4">
                    <button
                      className="md:px-7 px-4 py-3  bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px]
              text-white font-semibold
              shadow-md
              hover:opacity-90
              transition cursor-pointer"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setShowForm(false)}
                      className="md:px-7 px-4 py-3 rounded-[12px] bg-gray-200 text-gray-700 font-semibold
              shadow-md
              hover:opacity-90
              transition cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </>
  );
}
