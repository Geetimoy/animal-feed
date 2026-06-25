import Header from "../Header";
import Footer from "../Footer";
import { useState, useEffect } from "react";

import contactBaner from '../../assets/images/contact-banner.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLocationDot, faEnvelope, faClock, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import { API_URL } from "../../config/api";
import axios from "axios";

import { useSettings } from "../../context/SettingsContext";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useBanner } from "../../hooks/useBanner";
import HeroBanner from "../HeroBanner";

function ContactUs() {
  const pageSlug = "contact-us";
  const { bannerItem, isLoading, error } = useBanner(pageSlug);

  const { settings } = useSettings();

  // Form
  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    let updatedErrors = { ...errors };

    // NAME (simple required check)
    if (name === "name" && value.trim()) {
      updatedErrors.name = "";
    }

    // COMPANY
    if (name === "company_name" && value.trim()) {
      updatedErrors.company_name = "";
    }

    // MESSAGE
    if (name === "message" && value.trim()) {
      updatedErrors.message = "";
    }

    // EMAIL (validate format)
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailRegex.test(value)) {
        updatedErrors.email = "";
      }
    }

    // PHONE (validate 10 digits)
    if (name === "phone") {
      const phoneRegex = /^\d{10}$/;

      if (phoneRegex.test(value)) {
        updatedErrors.phone = "";
      }
    }

    setErrors(updatedErrors);
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    let tempErrors = {};

    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.company_name) tempErrors.company_name = "Company name is required";
    if (!formData.message) tempErrors.message = "Message is required";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Enter a valid email address";
    }

    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Enter a valid 10-digit phone number";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      await axios.post(
        `${API_URL}/get-in-touch`,
        formData
      );

      setFormData({
        name: "",
        company_name: "",
        email: "",
        phone: "",
        message: "",
      });

      setErrors({});
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (time) => {
    if (!time) return "";

    const [hour, minute] = time.split(":");
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute);

    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Animal Feed</title>
      </Helmet>
      <Header />
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
          height="h-[400px] md:h-[500px]"
          isLoading={isLoading}
        />

        <section className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
              {/* LEFT CONTENT */}
              <div className="space-y-6 md:space-y-8 py-2 order-2 md:order-1">
                {/* Quick connection */}
                <div className="group flex items-center gap-4 sm:gap-6 md:gap-8 pb-4 md:pb-6 border-b border-gray-200">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[#EECD15] text-white text-base sm:text-lg transition-transform duration-300 group-hover:scale-105">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="font-bold text-gray-900 text-lg sm:text-xl mb-1 sm:mb-2">
                      Quick Connection
                    </h2>

                    <div className="flex flex-col gap-1 text-sm sm:text-base md:text-lg font-regular">
                      <Link
                        to={`mailto:${settings?.data?.contact?.email}`}
                        className="text-gray-900 hover:text-[#083b1a] truncate"
                      >
                        {settings?.data?.contact?.email}
                      </Link>

                      <Link
                        to={`tel:${settings?.data?.contact?.phone_primary}`}
                        className="text-gray-900 hover:text-[#083b1a]"
                      >
                        {settings?.data?.contact?.phone_primary}
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="group flex items-center gap-4 sm:gap-6 md:gap-8 pb-4 md:pb-6 border-b border-gray-200">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[#EECD15] text-white text-base sm:text-lg transition-transform duration-300 group-hover:scale-105">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="font-bold text-gray-900 text-lg sm:text-xl mb-1 sm:mb-2">
                      Our Location
                    </h2>
                    <p className="text-gray-900 text-sm sm:text-base md:text-lg font-regular break-words">
                      {settings?.data?.contact?.address}
                      {settings?.data?.contact?.city && <>, {settings?.data?.contact?.city}</>}
                      {settings?.data?.contact?.state && <>, {settings?.data?.contact?.state}</>}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="group flex items-center gap-4 sm:gap-6 md:gap-8 pb-4 md:pb-6 border-b border-gray-200">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[#EECD15] text-white text-base sm:text-lg transition-transform duration-300 group-hover:scale-105">
                    <FontAwesomeIcon icon={faClock} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="font-bold text-gray-900 text-lg sm:text-xl mb-1 sm:mb-2">
                      Working Hours
                    </h2>

                    <div className="flex flex-col gap-1 text-sm sm:text-base md:text-lg font-regular">
                      {settings?.data?.working_hours?.map((item, index) => (
                        <p key={index} className="text-gray-900">
                          {item.label}:{" "}
                          {item.closed
                            ? "Closed"
                            : `${formatTime(item.open)} - ${formatTime(item.close)}`}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT CARD FORM */}
              <div className="rounded-xl bg-white px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] order-1 md:order-2">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Get in <span className="text-[#ffa800]">touch</span>
                  </h2>
                  <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">
                    Just fill out the form and our global experts will be in
                    touch right away with the right methods and price to help
                    you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-green-600 focus:outline-none transition duration-200"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-green-600 focus:outline-none transition duration-200"
                      />
                      {errors.company_name && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.company_name}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-green-600 focus:outline-none transition duration-200"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-green-600 focus:outline-none transition duration-200"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Kindly provide enough information about your farm business"
                      className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-green-600 focus:outline-none transition duration-200 resize-y"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-4 py-2.5 sm:py-3 bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center text-sm sm:text-base md:text-[18px] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? "Submitting..." : "Submit"}
                      {!loading && (
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4 sm:mt-6 md:mt-8 pb-8 sm:pb-10 md:pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 max-w-5xl mx-auto text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-gray-900">
                Our
                <span className="text-[#ffa800] font-semibold"> Location</span>
              </h2>

              <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 leading-relaxed max-w-3xl mx-auto px-4">
                Visit our office or reach us easily using the map below.
              </p>
            </div>

            <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[480px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                src={settings?.data?.manufacturing_unit?.map_embed_url}
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ContactUs;