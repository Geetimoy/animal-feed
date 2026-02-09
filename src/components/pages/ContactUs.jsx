import Header from "../Header";
import Footer from "../Footer";

import contactBaner from '../../assets/images/contact-banner.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLocationDot,faEnvelope,faClock, faArrowLeft, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function ContactUs(){
  return (
    <>
      <Header></Header>
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
                Contact Us
              </h1>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-8">
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg mb-8">We would love to hear from you! Whether you have questions about our products, need support, or want to provide feedback, our team is here to assist you.</p>
            
          </div>
          <div>
            <form className="space-y-6">  
              <div className="mb-4">
                <input type="text" placeholder="First Name *" required="" className="w-full p-3 border rounded-lg focus:ring-primary focus:ring-2 outline-none" />
              </div>
              <div className="mb-4">
                <input type="text" placeholder="Last Name *" required="" className="w-full p-3 border rounded-lg focus:ring-primary focus:ring-2 outline-none" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Email Address *" required="" className="w-full p-3 border rounded-lg focus:ring-primary focus:ring-2 outline-none" />
              </div>
              <div className="mb-4">
                <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg focus:ring-primary focus:ring-2 outline-none" />
              </div>
              <div className="mb-4">
                <textarea rows="5" placeholder="Write your message..." required="" className="w-full p-3 border rounded-lg focus:ring-primary focus:ring-2 outline-none"></textarea>

                
              </div>
            </form>
          </div>
        </div> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
              {/* LEFT CONTENT */}
              <div className="space-y-8 py-2 order-2 md:order-1">
                {/* Quick connection */}

                <div className="group flex items-center gap-8 pb-6 border-b border-gray-200">
                  <div
                    className="h-12 w-12 flex items-center justify-center
               rounded-full bg-[#EECD15] text-white text-lg
               transition-transform duration-300
               group-hover:scale-105"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h2 className="font-bold  text-gray-900 text-xl mb-2">
                      Quick Connection
                    </h2>

                    <div className="flex flex-col gap-1 text-lg font-regular">
                      <Link
                        to="mailto:info@greengold.com"
                        className="text-gray-900  hover:text-[#083b1a]"
                      >
                        info@greengold.com
                      </Link>

                      <Link
                        to="tel:+919999999999"
                        className="text-gray-900  hover:text-[#083b1a]"
                      >
                        {" "}
                        +91 9999999999
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Location */}

                <div className="group flex items-center gap-8 pb-6 border-b border-gray-200">
                  <div
                    className="h-12 w-12 min-w-12 min-h-12 flex-shrink-0
             flex items-center justify-center
             rounded-full bg-[#EECD15] text-white text-lg
             transition-transform duration-300
             group-hover:scale-105"
                  >
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h2 className="font-bold  text-gray-900 text-xl mb-2 ">
                      Our Location
                    </h2>
                    <p className="text-gray-900 text-lg font-regular">
                      Rongoge Mega Food Park <br />
                      Dolikoto Banderdewa, <br />
                      Arunachal Pradesh 791123 
                    </p>
                  </div>
                </div>

                {/* Working Hours */}

                <div className="group flex items-center gap-8 pb-6 border-b border-gray-200">
                  <div
                    className="h-12 w-12 flex items-center justify-center
               rounded-full bg-[#EECD15] text-white text-lg
               transition-transform duration-300
               group-hover:scale-105"
                  >
                    <FontAwesomeIcon icon={faClock} />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h2
                      className="font-bold  text-gray-900 text-xl mb-2
               
                 "
                    >
                      Working Hours
                    </h2>

                    {/* Address + Phone stacked */}
                    <div className="flex flex-col gap-1 text-lg font-regular">
                      <p className="text-gray-900">
                        Mon – Fri: 8:00am – 6:00pm
                      </p>

                      <p className="text-gray-900">Sat: 8:00am – 1:00pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT CARD FORM */}

              <div className="rounded-xl bg-white px-8 py-2 pb-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)] order-1 md:order-2">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Get in <span className="text-[#ffa800]">touch</span>
                  </h2>
                  <p className="mt-3 text-gray-600 max-w-md">
                    Just fill out the form and our global experts will be in
                    touch right away with the right methods and price to help
                    you.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border border-gray-300 rounded-md px-4 py-3 text-md focus:ring-2 focus:ring-green-600 focus:outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="border border-gray-300 rounded-md px-4 py-3 text-md focus:ring-2 focus:ring-green-600 focus:outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="border border-gray-300 rounded-md px-4 py-3 text-md focus:ring-2 focus:ring-green-600 focus:outline-none"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="border border-gray-300 rounded-md px-4 py-3 text-md focus:ring-2 focus:ring-green-600 focus:outline-none"
                  />

                  <textarea
                    rows="4"
                    placeholder="Kindly provide enough information about your farm business"
                    className="md:col-span-2 border border-gray-300 rounded-md px-4 py-3 text-md focus:ring-2 focus:ring-green-600 focus:outline-none"
                  ></textarea>

                  <button className="md:col-span-2 px-4 py-3 bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center  text-[18px] cursor-pointer">
                    Submit{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4">
          <div className="">
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mb-8 ">
              {/* Heading */}
              <h2 className="text-2xl md:text-5xl font-semibold tracking-wide text-gray-900">
                Our
                <span className="text-[#ffa800] font-medium"> Location</span>
              </h2>

              {/* Description */}
              <p className="mt-2 text-md md:text-xl text-gray-900  leading-relaxed max-w-3xl mx-auto">
                Visit our office or reach us easily using the map below.
              </p>
            </div>

            {/* Map */}
            <div className="w-full h-[480px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              {/* <iframe
                title="Kolkata Location"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28415.468456355145!2d93.80497037525176!3d27.095390854376515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDolikoto%2C%20Banderdewa%2C%20Arunachal%20Pradesh%20%E2%80%93%20791123!5e0!3m2!1sen!2sin!4v1769078245418!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              /> */}

              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28412.610896202965!2d93.80259320641548!3d27.106650600337588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDolikoto%2C%20Banderdewa%2C%20Arunachal%20Pradesh!5e0!3m2!1sen!2sin!4v1770640178490!5m2!1sen!2sin" className="w-full h-full border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default ContactUs;