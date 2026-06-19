import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import ProfileDashboard from "./ProfileDashboard";
import Header from "../Header";
import Footer from "../Footer";
import contactBaner from '../../assets/images/contact-banner.jpg';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Helmet } from "react-helmet";

import axios from "axios";
import { API_URL } from "../../config/api";

export default function AddressManagement() {
  const location = useLocation();
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(location.state?.openForm === true);

  const [banner, setBanner] = useState(null);
  const pageSlug = "address-management";

  const initialAddress = {
    fullName: "",
    mobile: "",
    city: "",
    landmark: "",
    address: "",
    pincode: "",
    address_type: "",
  };

  // const [addresses, setAddresses] = useState([
  //   {
  //     fullName: "Amit Verma",

  //     mobile: "+91 9876543210",
  //     address: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     pincode: " Kolkata – 700154, West Bengal",
  //   },
  // ]);

  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [addressData, setAddressData] = useState(initialAddress);
  // const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isDefault, setIsDefault] = useState(false);

  const [saving, setSaving] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const [deleteId, setDeleteId] = useState(null);


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

  const handleEdit = (id) => {
  const address = addresses.find((item) => item.id === id);

  if (!address) {
    toast.error("Address not found");
    return;
  }

  setAddressData({
    fullName: address.name || "",
    mobile: address.phone || "",
    city: address.city || "",
    landmark: address.landmark || "",
    address: address.address_line || "",
    pincode: "",
    address_type: address.address_type || "", 
  });

  setEditId(id);
  setIsEdit(true);
  setShowForm(true);
  };

  

  // const handleSave = () => {
  //   if (isEdit) {
  //     const updated = addresses.map((item, index) =>
  //       index === editIndex ? addressData : item,
  //     );
  //     setAddresses(updated);
  //   } else {
  //     setAddresses([...addresses, addressData]);
  //   }

  //   setShowForm(false);
  //   setAddressData(initialAddress);
  //   setIsEdit(false);
  // };

  const handleSave = async () => {
  try {
    setSaving(true);

    const token = localStorage.getItem("token");

    const payload = {
      name: addressData.fullName,
      phone: addressData.mobile,
      city: addressData.city,
      landmark: addressData.landmark,
      address_line: addressData.address,
      notes: "",
      is_default: isDefault,
      address_type: addressData.address_type,
    };

    if (isEdit) {
      // UPDATE ADDRESS
      await axios.put(
        `${API_URL}/customers/addresses/${editId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      toast.success("Address updated successfully!");
    } else {
      // ADD NEW ADDRESS
      await axios.post(
        `${API_URL}/customers/addresses`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      toast.success("Address added successfully!");
    }

    // Refresh address list
    await fetchAddresses();

    // Reset form
    setAddressData(initialAddress);
    setShowForm(false);
    setIsEdit(false);
    setEditId(null);

  } catch (error) {
    console.log(error.response?.data);

    toast.error(
      error.response?.data?.message || "Something went wrong"
    );
  } finally {
    setSaving(false);
  }
  };

  const handleDelete = async (id) => {

  try {
    const token = localStorage.getItem("token");

    await axios.delete(
      `${API_URL}/customers/addresses/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    );

    toast.success("Address deleted successfully!");

     // Close popup
    setDeleteId(null);

    // Refresh address list
    await fetchAddresses();

  } catch (error) {
    console.log("Delete Error:", error.response?.data || error);

    toast.error(
      error.response?.data?.message || "Failed to delete address"
    );
  }
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

    useEffect(() => {
      fetchAddresses();
    }, []);

  const fetchAddresses = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(
        `${API_URL}/customers/addresses`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      console.log("Addresses:", response.data);

      setAddresses(response.data.data || []);
    } catch (error) {
      console.log("Address Error:", error.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      
      if (pageSlug) {
        fetchBanner();
      }
    }, [pageSlug]);

  const fetchBanner = async () => {
  try {
      const res = await axios.get(
        `${API_URL}/banners/${pageSlug}`
      );
      
      setBanner(res.data);
    } catch (err) {
      console.log("Banner API error:", err);
    }
  };

  const bannerItem = banner?.data?.[0];

  return (
    <>
      <Helmet>
        <title>Address Management -  Animal Feed</title>
      </Helmet>
      <Header showLogout={true} />

      <main className="pt-16 overflow-x-hidden">
        {bannerItem?.image_url && (
        <section className="relative z-0">
          <div className="relative">
            <img
              src={bannerItem?.image_url}
              alt={bannerItem?.title}
              className="w-full md:h-auto h-[250px] object-cover"
            />
            <div className="absolute inset-0  flex items-center justify-center">
              <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
                {bannerItem?.title_white} <span className="text-[#ffa800]">{bannerItem?.title_gold}</span>
              </h1>
            </div>
          </div>
        </section>
        )}
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
                  {mobileItem("/profile", "Profile")}
                  {mobileItem("/address-management", "Address")}
                  {mobileItem("/my-orders", "My Orders")}
                </div>
              )}
            </div>

            {/* {MAIN CARD} */}

            <div className="max-w-[860px] mx-auto bg-white rounded-[12px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] p-4">
              <div className="flex items-center justify-between mb-4 ">
                <h2 className="text-[18px] md:text-[22px] font-semibold text-gray-800">
                  Address Management
                </h2>

                {!showForm && (
                  <button
                    onClick={handleAdd}
                    className=" md:flex items-center px-2 md:px-4 py-1 md
                    :py-3 rounded-[12px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white md:text-[14px] gap-1 cursor-pointer text-[12px]"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                    Add New
                  </button>
                )}
              </div>

              {/* ADDRESS LIST */}
              {!showForm && (
              <>
                {addresses.length === 0 ? (
                  <div className="text-center py-6">
                    <p className="text-gray-500">
                      No addresses found. Please add an address.
                    </p>
                  </div>
                ) : (
                addresses.map((item) => (
                  <div
                    key={item.id}
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
                          {item.name}
                        </h2>
                      </div>
                    <p className="mt-2 text-gray-600">
                      <span className="font-bold uppercase">{item.address_type}</span>
                    </p>
                    <p className="mt-2 text-gray-600">
                      <span className="font-medium">{item.phone}</span>
                    </p>

                    <p className="mt-2 text-gray-600">
                      <span className="font-medium">{item.city}</span>
                    </p>

                    <p className="mt-2 text-gray-600">
                      {" "}
                      <span className="font-medium">{item.landmark}</span>
                    </p>

                    <p className="mt-2 text-gray-600">{item.address_line}</p>
                    <p className="mt-2 text-gray-600">
                      {" "}
                      <span className="text-gray-600">{item.pincode}</span>
                    </p>

                    <div className="mt-4 flex gap-4">
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="text-green-700 hover:underline cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setDeleteId(item.id)}
                        className="text-red-600 hover:underline cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                 ))
                )}
                </>
              )}

              {/* FORM */}
              {showForm && (
                <div
                  className="w-full bg-transparent outline-none border border-gray-200 py-4 mt-2
    focus:outline-none focus:border-blue-400 pl-4 pr-4 rounded-xl font-semibold text-gray-800"
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
                    <select
                      className={`${inputClass} md:col-span-2`}
                      name="address_type"
                      value={addressData.address_type}
                      onChange={handleChange}
                    >
                      <option value="">Select Address Type</option>
                      <option value="home">Home</option>
                      <option value="office">Office</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mt-6 flex gap-4">
                    <button
  disabled={saving}
  onClick={() => {
    if (!addressData.fullName.trim()) {
      toast.error("Full Name is required");
      return;
    }

    if (!addressData.mobile.trim()) {
      toast.error("Mobile number is required");
      return;
    }

    if (!addressData.pincode.trim()) {
      toast.error("Pincode is required");
      return;
    }

    if (!addressData.address.trim()) {
      toast.error("Address is required");
      return;
    }

    handleSave();
  }}
  className="px-4 py-2 bg-green-600 text-white rounded-[12px] shadow-md hover:opacity-90 transition cursor-pointer disabled:opacity-50"
>
  {saving
    ? (isEdit ? "Updating..." : "Saving...")
    : (isEdit ? "Update Address" : "Save")}
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

      {deleteId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">
              Are you sure you want to delete this address?
            </h3>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                No
              </button>

              <button
                onClick={() => handleDelete(deleteId)}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </>
  );
}
