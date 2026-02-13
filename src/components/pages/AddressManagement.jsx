import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import ProfileDashboard from "./ProfileDashboard";
import Header from "../Header";
import Footer from "../Footer";
import contactBaner from '../../assets/images/contact-banner.jpg';

export default function AddressManagement() {
  const location = useLocation();
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(location.state?.openForm === true);

  const initialAddress = {
    fullName: "",

    mobile: "",

    city: "",
    landmark: "",
    address: "",
    pincode: "",
  };

  const [addresses, setAddresses] = useState([
    {
      fullName: "Amit Verma",

      mobile: "+91 9876543210",
      address: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      pincode: " Kolkata – 700154, West Bengal",
    },
  ]);

  const [addressData, setAddressData] = useState(initialAddress);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isDefault, setIsDefault] = useState(false);


  const handleChange = (e) => {
    setAddressData({
      ...addressData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    setAddressData(initialAddress);
    setIsEdit(false);
    setShowForm(true);
  };

  const handleEdit = (index) => {
    setAddressData(addresses[index]);
    setEditIndex(index);
    setIsEdit(true);
    setShowForm(true);
  };

  const handleSave = () => {
    if (isEdit) {
      const updated = addresses.map((item, index) =>
        index === editIndex ? addressData : item,
      );
      setAddresses(updated);
    } else {
      setAddresses([...addresses, addressData]);
    }

    setShowForm(false);
    setAddressData(initialAddress);
    setIsEdit(false);
  };

  const handleDelete = (index) => {
    const filtered = addresses.filter((_, i) => i !== index);
    setAddresses(filtered);
  };

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
    "w-full pl-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-400";

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
                Address Management
              </h1>
            </div>
          </div>
        </section>
        <div className="flex bg-[#f7f8fa] md:max-w-7xl md:mx-auto px-4 md:px-8 py-8 ">
          <div className="hidden md:block">
            <ProfileDashboard />
          </div>

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
                  {mobileItem("/my-profile", "Profile")}
                  {mobileItem("/address-management", "Address")}
                  {mobileItem("/my-orders", "My Orders")}
                </div>
              )}
            </div>

            {/* {MAIN CARD} */}

            <div className="max-w-[860px] mx-auto bg-white rounded-[12px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] p-4">
              <div className="flex items-center justify-between mb-4 ">
                <h2 className="text-[20px] md:text-[22px] font-semibold text-gray-800">
                  Address Management
                </h2>

                {!showForm && (
                  <button
                    onClick={handleAdd}
                    className=" md:flex items-center px-4 py-3 rounded-[12px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white text-[14px] gap-1 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                    Add New
                  </button>
                )}
              </div>

              {/* ADDRESS LIST */}
              {!showForm &&
                addresses.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#fbfcfd] rounded-[12px] p-4 md:p-6 shadow-[0_10px_24px_rgba(0,0,0,0.08)] mb-4"
                  >
                    {/* <h2 className="font-semibold text-gray-800 text-[18px] md:text-[20px]">
                      {item.fullName}
                    </h2> */}

<div className="flex items-center gap-3">
  <input
    type="checkbox"
    className="accent-[#009a62] w-4 h-4 cursor-pointer"
  />

  <h2 className="font-semibold text-gray-800 text-[18px] md:text-[20px]">
    {item.fullName}
  </h2>
</div>


                    <p className="mt-2 text-gray-600">
                      <span className="font-medium">{item.mobile}</span>
                    </p>

                    <p className="mt-2 text-gray-600">
                      <span className="font-medium">{item.city}</span>
                    </p>

                    <p className="mt-2 text-gray-600">
                      {" "}
                      <span className="font-medium">{item.landmark}</span>
                    </p>

                    <p className="text-gray-600">{item.address}</p>
                    <p className="mt-2 text-gray-600">
                      {" "}
                      <span className="text-gray-600">{item.pincode}</span>
                    </p>

                    <div className="mt-4 flex gap-4">
                      <button
                        onClick={() => handleEdit(index)}
                        className="text-green-700 hover:underline cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="text-red-600 hover:underline cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}

              {/* FORM */}
              {showForm && (
                <div
                  className="w-full bg-transparent outline-none border border-gray-200 py-4 mt-2
    focus:outline-none focus:border-blue-400 pl-4 rounded-xl font-semibold text-gray-800"
                >
                  <h3 className="text-[18px] font-semibold mb-5">
                    Address Details
                  </h3>

                  <div className="space-y-3">
                    <input
                      className={inputClass}
                      name="fullName"
                      value={addressData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                    />

                    <input
                      className={inputClass}
                      name="mobile"
                      value={addressData.mobile}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                    />

                    <input
                      className={inputClass}
                      name="pincode"
                      value={addressData.pincode}
                      onChange={handleChange}
                      placeholder="Pincode"
                    />

                    <input
                      className={inputClass}
                      name="city"
                      value={addressData.city}
                      onChange={handleChange}
                      placeholder="City / District / Town"
                    />

                    <input
                      className={`${inputClass} md:col-span-2`}
                      name="landmark"
                      value={addressData.landmark}
                      onChange={handleChange}
                      placeholder="Landmark"
                      type="text"
                    />

                    <textarea
                      className={`${inputClass} md:col-span-2 resize-none h-24`}
                      name="address"
                      value={addressData.address}
                      onChange={handleChange}
                      placeholder="Address (Area and Street)"
                    />
                  </div>

                  <div className="mt-6 flex gap-4">
                    <button
                      onClick={() => {
                        if (!addressData.fullName.trim()) {
                          alert("Full Name is required");
                          return;
                        }
                        if (!addressData.mobile.trim()) {
                          alert("Mobile number is required");
                          return;
                        }
                        if (!addressData.pincode.trim()) {
                          alert("Pincode is required");
                          return;
                        }
                        if (!addressData.address.trim()) {
                          alert("Address is required");
                          return;
                        }

                        handleSave();
                      }}
                      className="px-4 py-2 rounded-[12px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white shadow-md
        hover:opacity-90 transition cursor-pointer"
                    >
                      Save
                    </button>

                    <button
                      onClick={() => setShowForm(false)}
                      className="px-4 py-2 bg-red-600 text-white rounded-[12px] shadow-md
        hover:opacity-90 transition cursor-pointer"
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

      <Footer />
    </>
  );
}
