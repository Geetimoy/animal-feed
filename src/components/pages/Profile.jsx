import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ProfileDashboard from "./ProfileDashboard";
import Header from "../Header";
import Footer from "../Footer";
import contactBaner from "../../assets/images/contact-banner.jpg";

export default function Profile() {
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

  const [isProfileEdit, setIsProfileEdit] = useState(false);
  const [isContactEdit, setIsContactEdit] = useState(false);
  const [isPasswordEdit, setIsPasswordEdit] = useState(false);
  const [user, setUser] = useState();
  const [showPassword, setShowPassword] = useState(false);


  const [formData, setFormData] = useState({
    fullName: "Amit Verma",
    lastName: "Verma",
    gender: "Male",
    email: "example@gmail.com",
    mobile: "+91 9876543210",
    password: "Amit@123"
  });

 
  const [originalData, setOriginalData] = useState(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleProfileEdit = () => {
    setOriginalData(formData);
    setIsProfileEdit(true);
    setIsContactEdit(false);
    setIsPasswordEdit(false);
  };

  const handleProfileCancel = () => {
    setFormData(originalData);
    setIsProfileEdit(false);
  };

  const handleProfileSave = () => {
    setOriginalData(formData);
    setIsProfileEdit(false);
  };

  const handleContactEdit = () => {
    setOriginalData(formData);
    setIsContactEdit(true);
    setIsProfileEdit(false);
     setIsPasswordEdit(false);
  };

  const handleContactCancel = () => {
    setFormData(originalData);
    setIsContactEdit(false);
  };

  const handleContactSave = () => {
    setOriginalData(formData);
    setIsContactEdit(false);
  };

  
  const handlePasswordEdit = () => {
     setOriginalData(formData);
       setOriginalData(formData);
       setIsPasswordEdit(true);
       setIsContactEdit(false);
     setIsProfileEdit(false);
  };

  const handlePasswordCancel = () => {
    setFormData(originalData);
    setIsPasswordEdit(false);
  };

  const handlePasswordSave = () => {
    setOriginalData(formData);
    setIsPasswordEdit(false);
  };

  return (
    <>
      <Header />
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

        <div className="flex bg-[#f7f8fa] md:max-w-7xl md:mx-auto px-4 md:px-8 py-8 ">
          <div className="hidden md:block">
            <ProfileDashboard user={formData} />
          </div>

          <div className="flex-1 p-[16px] md:p-[24px]">
            {/*  MOBILE HEADER */}
            <div className="md:hidden mb-4">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#009a62] text-white flex items-center justify-center font-semibold text-xl">
                  {formData.fullName?.charAt(0)}
                </div>
                {/* <h1 className="mt-3 font-semibold text-gray-800 ">User Name</h1> */}
                <h2 className="mt-3 font-semibold text-gray-800 text-[18px] md:text-[20px] ">
                  {formData.fullName}
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
                  {mobileItem("/my-profile", "Profile")}
                  {mobileItem("/address-management", "Address")}
                  {mobileItem("/my-orders", "My Orders")}
                </div>
              )}
            </div>

            {/* {MAIN CARD} */}

            <div className="max-w-[860px] mx-auto bg-white rounded-[12px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] md:p-[28px] p-[12px]">
              {/* PROFILE SECTION */}
              <div className="flex items-center justify-between mb-[18px]">
                <h2 className="text-[16px] md:text-[20px] font-semibold text-gray-800">
                  Profile Information
                </h2>

                {!isProfileEdit && (
                  <button
                    onClick={handleProfileEdit}
                    className="px-4 py-2 rounded-[12px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white text-[15px] cursor-pointer"
                  >
                    Edit
                  </button>
                )}
              </div>

              {/* Full Name */}
              <div className="mb-[18px] bg-[#fbfcfd] rounded-[12px] p-[12px] shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                <p className="text-[14px] text-[#9aa0a6]">Full Name</p>
                {isProfileEdit ? (
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none border border-gray-200 py-3 mt-2 focus:outline-none
                focus:border-blue-400 pl-4 rounded-xl font-semibold text-gray-800"
                  />
                ) : (
                  <h2 className="font-semibold text-gray-800">
                    {formData.fullName}
                  </h2>
                )}
              </div>

              {/* Gender */}
              <div className="mb-[18px] bg-[#fbfcfd] rounded-[16px] p-[14px] shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                <p className="text-[14px] text-[#9aa0a6] mb-[8px]">
                  Your Gender
                </p>

                {isProfileEdit ? (
                  <div className="flex gap-6">
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === "Male"}
                        onChange={handleChange}
                        className="accent-[#2f855a]"
                      />{" "}
                      Male
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={handleChange}
                        className="accent-[#2f855a]"
                      />{" "}
                      Female
                    </label>
                  </div>
                ) : (
                  <h2 className="font-semibold text-gray-800">
                    {formData.gender}
                  </h2>
                )}
              </div>

              {/* Profile Save Cancel */}
              {isProfileEdit && (
                <div className="flex gap-3 mb-[24px]">
                  <button
                    onClick={handleProfileSave}
                    className="px-4 py-2 rounded-[12px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white shadow-md
              hover:opacity-90
              transition cursor-pointer"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleProfileCancel}
                    className="px-4 py-2 bg-red-600 text-white rounded-[12px] shadow-md
              hover:opacity-90
              transition cursor-pointer "
                  >
                    Cancel
                  </button>
                </div>
              )}

              {/* ================= CONTACT INFORMATION ================= */}
              <div className="flex items-center justify-between mb-[16px] mt-[40px]">
                <h2 className="text-[16px] md:text-[20px] font-semibold text-gray-800">
                  Contact Information
                </h2>

                {!isContactEdit && (
                  <button
                    onClick={handleContactEdit}
                    className="px-4 py-2 rounded-[12px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white text-[15px] md:text-md cursor-pointer"
                  >
                    Edit
                  </button>
                )}
              </div>

              {/* EMAIL */}
              <div className="bg-[#fbfcfd] rounded-[16px] p-[14px] shadow-[0_10px_24px_rgba(0,0,0,0.08)] mb-[18px]">
                <p className="text-[14px] text-[#9aa0a6] mb-[8px]">
                  Email Address
                </p>

                {isContactEdit ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none border border-gray-200 py-3 mt-2 focus:outline-none
                focus:border-blue-400 pl-4 rounded-xl font-semibold text-gray-800"
                  />
                ) : (
                  <h2 className="text-[16px] md:text-[18px] font-semibold text-gray-800">
                    {formData.email}
                  </h2>
                )}
              </div>

              {/* MOBILE */}
              <div className="bg-[#fbfcfd] rounded-[16px] p-[14px] shadow-[0_10px_24px_rgba(0,0,0,0.08)] mb-[18px]">
                <p className="text-[14px] text-[#9aa0a6] mb-[8px]">
                  Mobile Number
                </p>

                {isContactEdit ? (
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none border border-gray-200 py-3 mt-2 focus:outline-none
                focus:border-blue-400 pl-4 rounded-xl font-semibold text-gray-800"
                  />
                ) : (
                  <h2 className="text-[16px] md:text-[18px] font-semibold text-gray-800">
                    {formData.mobile}
                  </h2>
                )}
              </div>

              {/* SAVE / CANCEL */}
              {isContactEdit && (
                <div className="flex gap-3">
                  <button
                    onClick={handleContactSave}
                    className="px-4 py-2 rounded-[12px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white shadow-md
              hover:opacity-90
              transition cursor-pointer"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleContactCancel}
                    className="px-4 py-2 bg-red-500 text-white rounded-[12px] shadow-md
              hover:opacity-90
              transition cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              )}

              {/* Password Change */}

              <div className="flex items-center justify-between mb-[16px] mt-[40px]">
                <h2 className="text-[16px] md:text-[20px] font-semibold text-gray-800">
                  Contact Information
                </h2>

                {!isPasswordEdit && (
                  <button
                    onClick={handlePasswordEdit}
                    className="px-4 py-2 rounded-[12px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white text-[15px] md:text-md cursor-pointer"
                  >
                    Edit
                  </button>
                )}
              </div>

              {/* EMAIL */}
              <div className="bg-[#fbfcfd] rounded-[16px] p-[14px] shadow-[0_10px_24px_rgba(0,0,0,0.08)] mb-[18px]">
                <p className="text-[14px] text-[#9aa0a6] mb-[8px]">
                  Email Address
                </p>

                {isPasswordEdit ? (
  <div className="relative mt-2">
    <input
      type={showPassword ? "text" : "password"}
      name="password"
      value={formData.password}
      onChange={handleChange}
      className="w-full border border-gray-200 py-3 pl-4 pr-12 rounded-xl font-semibold text-gray-800
      focus:outline-none focus:border-blue-400"
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-gray-700"
    >
      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
    </button>
  </div>
) : (
                  <h2 className="text-[16px] md:text-[18px] font-semibold text-gray-800">
                    {formData.password}
                  </h2>
                )}
              </div>

              {/* SAVE / CANCEL */}
              {isPasswordEdit && (
                <div className="flex gap-3">
                  <button
                    onClick={handlePasswordSave}
                    className="px-4 py-2 rounded-[12px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white shadow-md
              hover:opacity-90
              transition cursor-pointer"
                  >
                    Save
                  </button>
                  <button
                    onClick={handlePasswordCancel}
                    className="px-4 py-2 bg-red-500 text-white rounded-[12px] shadow-md
              hover:opacity-90
              transition cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
