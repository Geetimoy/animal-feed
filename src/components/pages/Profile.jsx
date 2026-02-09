import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ProfileDashboard from "./ProfileDashboard";
import Header from "../Header";
import Footer from "../Footer";

export default function Profile() {
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState("Female"); 
  const { pathname } = useLocation();

  const mobileItem = (path, label) => (
    <Link
      to={path}
      onClick={() => setOpen(false)}
      className={`block px-[16px] py-[12px] text-[14px] rounded-[10px]
        ${
          pathname === path
            ? "bg-[#e8f5ee] text-[#2f855a] font-medium"
            : "text-[#374151]"
        }`}
    >
      {label}
    </Link>
  );

  return (
    <>
      <Header />
      <main className="pt-16 overflow-x-hidden">
        <div className="flex  bg-[#f7f8fa] md:max-w-7xl md:mx-auto  px-4 md:px-8 py-8 md:py-16">
          {/* DESKTOP LEFT DASHBOARD */}
          <div className="hidden md:block">
            <ProfileDashboard />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 p-[16px] md:p-[24px]">
            {/* <div className="md:hidden mb-[16px]">
              <div className="flex flex-col items-center">
                <div className="w-[56px] h-[56px] rounded-full bg-[#2f855a] text-white flex items-center justify-center font-semibold text-[20px]">
                  R
                </div>
                <div className="mt-[6px] font-semibold text-[#1f2937]">
                  Rajani
                </div>
              </div>

              <div className="mt-[12px] flex items-center justify-between px-4 py-4 bg-white shadow-xl rounded-[12px]">
                <h2 className="text-[16px] font-semibold">Profile</h2>
                <button onClick={() => setOpen(!open)}>
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>

              {open && (
                <div className="mt-[10px] bg-white rounded-[16px] shadow-[0_12px_28px_rgba(0,0,0,0.08)] p-[10px] space-y-[4px]">
                  {mobileItem("/my-orders", "My Orders")}
                  {mobileItem("/my-profile", "Profile")}
                  {mobileItem("/address-management", "Address")}
                </div>
              )}
            </div> */}
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
                  Profile
                </h2>
                <button onClick={() => setOpen(!open)}>
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>

              {open && (
                <div className="mt-2 bg-white rounded-[12px] shadow-lg p-2 space-y-1">
                  {mobileItem("/my-orders", "My Orders")}
                  {mobileItem("/profile", "Profile")}
                  {mobileItem("/address-management", "Address")}
                </div>
              )}
            </div>
            {/* PROFILE CARD */}
            <div className="max-w-[860px] mx-auto bg-white rounded-[12px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] 
            md:p-[28px] p-[12px]">
              <div className="flex items-center justify-between mb-[18px]">
                <h2 className="text-[16px] md:text-[20px] font-semibold text-gray-800">
                  Profile Information
                </h2>
                <button className="px-4 py-2 rounded-[12px]  bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white text-[15px] md:text-md cursor-pointer">
                  <Link to="/address-management" state={{ openForm: true }}>
                    Edit
                  </Link>
                </button>
              </div>

              {/* NAME */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-[18px]">
                <div
                  className="bg-[#fbfcfd] rounded-[12px] p-[12px]
                  shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
                >
                  <p className="text-[14px] text-[#9aa0a6] ">First Name</p>
                  <h2 className="text-[16px] md:text-[18px] font-semibold text-gray-800">
                    Amit
                  </h2>
                </div>

                <div
                  className="bg-[#fbfcfd] rounded-[12px] p-[12px]
                  shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
                >
                  <p className="text-[14px] text-[#9aa0a6]">Last Name</p>
                  <h2 className="text-[16px] md:text-[18px] font-semibold text-gray-800">
                    Verma
                  </h2>
                </div>
              </div>

              {/* GENDER */}
              <div
                className="bg-[#fbfcfd] rounded-[16px] p-[14px]
                shadow-[0_10px_24px_rgba(0,0,0,0.08)] mb-[18px]"
              >
                <p className="text-[14px] text-[#9aa0a6] mb-[8px]">
                  Your Gender
                </p>

                <div className="flex items-center gap-[28px] text-[16px] md:text-[18px] font-semibold text-gray-800">
                  <label className="flex items-center gap-[14px] cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={gender === "Female"}
                      onChange={() => setGender("Female")}
                      className="accent-[#2f855a]"
                    />
                    Female
                  </label>

                  <label className="flex items-center gap-[14px] cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={gender === "Male"}
                      onChange={() => setGender("Male")}
                      className="accent-[#2f855a]"
                    />
                    Male
                  </label>
                </div>
              </div>

              {/* EMAIL */}

              <div className="flex items-center justify-between mb-[18px]">
                <h2 className="text-[16px] md:text-[20px] font-semibold text-gray-800">
                  Contact Information
                </h2>
                <button className="px-4 py-2 rounded-[12px]  bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white text-[15px] md:text-md cursor-pointer">
                  <Link to="/address-management" state={{ openForm: true }}>
                    Edit
                  </Link>
                </button>
              </div>

              <div
                className="bg-[#fbfcfd] rounded-[16px] p-[14px]
                shadow-[0_10px_24px_rgba(0,0,0,0.08)] mb-[18px]"
              >
                <p className="text-[14px] text-[#9aa0a6] mb-[8px]">
                  Email Address
                </p>
                <h2 className="text-[16px] md:text-[18px] font-semibold text-gray-800">
                  example@gmail.com
                </h2>
              </div>

              {/* MOBILE */}

              <div
                className="bg-[#fbfcfd] rounded-[16px] p-[14px]
                shadow-[0_10px_24px_rgba(0,0,0,0.08)] mb-[18px]"
              >
                <p className="text-[14px] text-[#9aa0a6] mb-[8px]">
                  Mobile Number
                </p>
                <h2 className="text-[16px] md:text-[18px] font-semibold text-gray-800">
                  +91 9876543210
                </h2>
              </div>

          
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
