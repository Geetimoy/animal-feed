import Header from "../Header";
import Footer from "../Footer";


import distributorBanner from '../../assets/images/distributor-banner.jpg';

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";




function Distributor() {
  return (
    <>
    <Header></Header>
    <main className="pt-16 overflow-hidden">
      <section className="relative z-0">
          <div className="relative">
            <img
              src={distributorBanner}
              alt="Distributor Banner"
              className="w-full md:h-auto h-[450px] hidden md:block object-cover"
            />
           
            <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6  w-full">
              <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6">
                Distributor
              </h1>
              <p className="text-white text-[16px] md:text-xl text-center">
                Building Strong Distribution Partnerships Across Regions
              </p>
              <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
                <Link
                  to="/distributor"
                  className="mt-4 md:mt-6 w-full  md:w-[198px] h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2 "
                >
                  <span className="text-[20px] font-bold font-inter">
                    <FontAwesomeIcon icon={faMagnifyingGlass} /> Find
                    Distributor
                  </span>
                </Link>
                <Link
                  to="/contact-us"
                  className="mt-3 md:mt-6  w-full  md:w-[198px] h-[48px] border text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2"
                >
                  <span className="text-[20px] font-bold font-inter">
                    <FontAwesomeIcon icon={faLocationDot} /> Contact Us
                  </span>
                </Link>
              </div>
            </div>
          </div>
      </section>
      <section className="py-10 md:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl text-gray-800 font-semibold mb-4 text-center">
              Our Distributor <span className="text-[#ffa800]">Network</span>
            </h2>
          <div className="bg-white p-6 rounded-lg shadow mt-8">
            
            <form action="" className="">
              <div className="grid grid-cols-5 gap-4 ">
                <div>
                  <select name="state" id="state" className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm
        focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"><option value="">Select State</option></select>
        </div>
                <div>
                  <select name="region" id="region" className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm
        focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"><option value="">Select Region</option></select>
                  </div>
                
                <div><select name="category" id="category" className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm
        focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"><option value="">Category</option></select></div>
        <div><select name="distributor" id="distributor" className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm
        focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"><option value="">Distributor Type</option></select></div>
                <div><button type="submit" className=" bg-yellow-500 hover:bg-yellow-400 transition text-black px-4 py-2 rounded hover:opacity-90 w-full cursor-pointer text-center">Search</button></div>
              </div>
            </form>
            
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Distributor Cards */}
            {/* Example Card */}
            <div className="bg-white p-4 rounded-lg shadow">
              
              <div className="flex gap-2 text-gray-600">
                <div className="w-2/3 text-sm">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Green Gold Animal </h3>
                  <p className="text-gray-600 mb-0">Green Gold Animal Feed Pvt Ltd. </p>
                  <p className="text-gray-600 mb-3">Kolkata, West Bengal</p>
                  <p className="text-gray-600 mb-1"><span className="text-[#00a34a] mr-2">
                                      <FontAwesomeIcon icon={faPhone} />
                                    </span> (123) 456-7890</p>
                  <p className="text-gray-600"><span><FontAwesomeIcon className="text-[#00a34a] mr-2" icon={faEnvelope} /></span> <Link to="mailto:distributor@greengold.com" className="underline">distributor@greengold.com</Link></p>
                </div>
                <div className="w-1/3 border border-gray-200 overflow-hidden rounded-xl p-1">
                  <iframe
                title="Kolkata Location"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28415.468456355145!2d93.80497037525176!3d27.095390854376515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDolikoto%2C%20Banderdewa%2C%20Arunachal%20Pradesh%20%E2%80%93%20791123!5e0!3m2!1sen!2sin!4v1769078245418!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              
              <div className="flex gap-2 text-gray-600">
                <div className="w-2/3 text-sm">
                <h3 className="text-xl font-bold mb-2 text-[#009a62]">Green Gold Animal </h3>
                  <p className="text-gray-600 mb-0">Green Gold Animal Feed Pvt Ltd. </p>
                  <p className="text-gray-600 mb-3">Kolkata, West Bengal</p>
                  <p className="text-gray-600 mb-1"><span className="text-[#00a34a] mr-2">
                                      <FontAwesomeIcon icon={faPhone} />
                                    </span> (123) 456-7890</p>
                  <p className="text-gray-600"><span><FontAwesomeIcon className="text-[#00a34a] mr-2" icon={faEnvelope} /></span> <Link to="mailto:distributor@greengold.com" className="underline">distributor@greengold.com</Link></p>
                </div>
                <div className="w-1/3 border border-gray-200 overflow-hidden rounded-xl p-1">
                  <iframe
                title="Kolkata Location"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28415.468456355145!2d93.80497037525176!3d27.095390854376515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDolikoto%2C%20Banderdewa%2C%20Arunachal%20Pradesh%20%E2%80%93%20791123!5e0!3m2!1sen!2sin!4v1769078245418!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              
              <div className="flex gap-2 text-gray-600">
                <div className="w-2/3 text-sm">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Green Gold Animal </h3>
                  <p className="text-gray-600 mb-0">Green Gold Animal Feed Pvt Ltd. </p>
                  <p className="text-gray-600 mb-3">Kolkata, West Bengal</p>
                  <p className="text-gray-600 mb-1"><span className="text-[#00a34a] mr-2">
                                      <FontAwesomeIcon icon={faPhone} />
                                    </span> (123) 456-7890</p>
                  <p className="text-gray-600"><span><FontAwesomeIcon className="text-[#00a34a] mr-2" icon={faEnvelope} /></span> <Link to="mailto:distributor@greengold.com" className="underline">distributor@greengold.com</Link></p>
                </div>
                <div className="w-1/3 border border-gray-200 overflow-hidden rounded-xl p-1">
                  <iframe
                title="Kolkata Location"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28415.468456355145!2d93.80497037525176!3d27.095390854376515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDolikoto%2C%20Banderdewa%2C%20Arunachal%20Pradesh%20%E2%80%93%20791123!5e0!3m2!1sen!2sin!4v1769078245418!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              
              <div className="flex gap-2 text-gray-600">
                <div className="w-2/3 text-sm">
                <h3 className="text-xl font-bold mb-2 text-[#009a62]">Green Gold Animal </h3>
                  <p className="text-gray-600 mb-0">Green Gold Animal Feed Pvt Ltd. </p>
                  <p className="text-gray-600 mb-3">Kolkata, West Bengal</p>
                  <p className="text-gray-600 mb-1"><span className="text-[#00a34a] mr-2">
                                      <FontAwesomeIcon icon={faPhone} />
                                    </span> (123) 456-7890</p>
                  <p className="text-gray-600"><span><FontAwesomeIcon className="text-[#00a34a] mr-2" icon={faEnvelope} /></span> <Link to="mailto:distributor@greengold.com" className="underline">distributor@greengold.com</Link></p>
                </div>
                <div className="w-1/3 border border-gray-200 overflow-hidden rounded-xl p-1">
                  <iframe
                title="Kolkata Location"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28415.468456355145!2d93.80497037525176!3d27.095390854376515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDolikoto%2C%20Banderdewa%2C%20Arunachal%20Pradesh%20%E2%80%93%20791123!5e0!3m2!1sen!2sin!4v1769078245418!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              
              <div className="flex gap-2 text-gray-600">
                <div className="w-2/3 text-sm">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Green Gold Animal </h3>
                  <p className="text-gray-600 mb-0">Green Gold Animal Feed Pvt Ltd. </p>
                  <p className="text-gray-600 mb-3">Kolkata, West Bengal</p>
                  <p className="text-gray-600 mb-1"><span className="text-[#00a34a] mr-2">
                                      <FontAwesomeIcon icon={faPhone} />
                                    </span> (123) 456-7890</p>
                  <p className="text-gray-600"><span><FontAwesomeIcon className="text-[#00a34a] mr-2" icon={faEnvelope} /></span> <Link to="mailto:distributor@greengold.com" className="underline">distributor@greengold.com</Link></p>
                </div>
                <div className="w-1/3 border border-gray-200 overflow-hidden rounded-xl p-1">
                  <iframe
                title="Kolkata Location"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28415.468456355145!2d93.80497037525176!3d27.095390854376515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDolikoto%2C%20Banderdewa%2C%20Arunachal%20Pradesh%20%E2%80%93%20791123!5e0!3m2!1sen!2sin!4v1769078245418!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              
              <div className="flex gap-2 text-gray-600">
                <div className="w-2/3 text-sm">
                <h3 className="text-xl font-bold mb-2 text-[#009a62]">Green Gold Animal </h3>
                  <p className="text-gray-600 mb-0">Green Gold Animal Feed Pvt Ltd. </p>
                  <p className="text-gray-600 mb-3">Kolkata, West Bengal</p>
                  <p className="text-gray-600 mb-1"><span className="text-[#00a34a] mr-2">
                                      <FontAwesomeIcon icon={faPhone} />
                                    </span> (123) 456-7890</p>
                  <p className="text-gray-600"><span><FontAwesomeIcon className="text-[#00a34a] mr-2" icon={faEnvelope} /></span> <Link to="mailto:distributor@greengold.com" className="underline">distributor@greengold.com</Link></p>
                </div>
                <div className="w-1/3 border border-gray-200 overflow-hidden rounded-xl p-1">
                  <iframe
                title="Kolkata Location"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28415.468456355145!2d93.80497037525176!3d27.095390854376515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDolikoto%2C%20Banderdewa%2C%20Arunachal%20Pradesh%20%E2%80%93%20791123!5e0!3m2!1sen!2sin!4v1769078245418!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer></Footer>
    </>
  );
}

export default Distributor;