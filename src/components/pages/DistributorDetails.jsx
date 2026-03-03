import Header from "../Header";
import Footer from "../Footer";

import distributorDetailsBanner from '../../assets/images/distributor-details-banner.jpg';

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faLocationDot, faPhone, faEnvelope, faMapPin, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import pigfeed from '../../assets/images/pig2.png';
import pigfeed1 from '../../assets/images/pig-feed1.jpg';
import pigfeed2 from '../../assets/images/pig-feed2.jpg';
import pigfeed3 from '../../assets/images/pig-feed3.jpg';
import pigfeed4 from '../../assets/images/pig-feed4.jpg';

import poultryfeed from '../../assets/images/poultry2.png';
import poultryfeed1 from '../../assets/images/poultry-feed1.jpg';
import poultryfeed2 from '../../assets/images/poultry-feed2.jpg';
import poultryfeed3 from '../../assets/images/poultry-feed3.jpg';
import poultryfeed4 from '../../assets/images/poultry-feed4.jpg';

import cattlefeed from '../../assets/images/cattle1.png';
import cattlefeed1 from '../../assets/images/cattle-feed1.jpg';
import cattlefeed2 from '../../assets/images/cattle-feed2.jpg';
import cattlefeed3 from '../../assets/images/cattle-feed3.jpg';
import cattlefeed4 from '../../assets/images/cattle-feed4.jpg';

import fishfeed from '../../assets/images/fish2.png';
import fishfeed1 from '../../assets/images/fish-feed1.jpg';
import fishfeed2 from '../../assets/images/fish-feed2.jpg';
import fishfeed3 from '../../assets/images/fish-feed3.jpg';
import fishfeed4 from '../../assets/images/fish-feed4.jpg';



import { Helmet } from "react-helmet";

function DistributorDetails(){
  return(
    <>
      <Helmet>
        <title>Distributor Details -  Animal Feed</title>
      </Helmet>
      <Header></Header>
      <main className="pt-16 overflow-hidden">
        <section className="relative z-0">
          <div className="relative">
            <img
              src={distributorDetailsBanner}
              alt="Distributor Banner"
              className="w-full md:h-auto h-[450px]  object-cover"
            />

            <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6  w-full">
              <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6">
                Distributor Details
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
        <section className="py-10 md:py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl text-gray-800 font-semibold mb-4 text-center">
              Green Gold <span className="text-[#ffa800]">Animal</span>
            </h2>
            <p className="text-gray-600 mb-3 text-center">Premium Animal Feed Supplier Since 2010</p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">About the <span className="text-[#ffa800]">Distributor</span></h3>
                <p className="text-gray-700 text-base leading-relaxed text-center md:text-left mb-4">Green Gold Animal Feed Suppliers specializes in nutritionally balanced animal feed formulations.
        With modern storage facilities and strong logistics support, we ensure timely
        delivery of high-quality feed products to farms and retailers.</p>
        <p class="text-gray-600 mb-0 mb-2">
          <span className="text-[#00a34a] mr-2"><FontAwesomeIcon icon={faMapPin} /></span>
          Green Gold Animal Feed Pvt Ltd. Kolkata, West Bengal</p>
        <p className="text-gray-600 mb-2">
                      <span className="text-[#00a34a] mr-2">
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                      (123) 456-7890
                    </p>
                    <p className="text-gray-600">
                      <span>
                        <FontAwesomeIcon
                          className="text-[#00a34a] mr-2"
                          icon={faEnvelope}
                        />
                      </span>
                      <Link
                        to="mailto:distributor@greengold.com"
                        className="underline"
                      >
                        distributor@greengold.com
                      </Link>
                    </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="text-center flex-1 bg-white/70 py-3 px-1 rounded-2xl shadow-sm border border-dashed border-[#ffa800]/30">
                      <div class="text-2xl font-black text-gray-800">100%</div>
                      <span class="text-[11px] font-medium text-gray-500">Quality Focus</span>
                    </div>
                    <div className="text-center flex-1 bg-white/70 py-3 px-1 rounded-2xl shadow-sm border border-dashed border-[#ffa800]/30">
                      <div class="text-2xl font-black text-gray-800">25+</div>
                      <span class="text-[11px] font-medium text-gray-500">Years Legacy</span>
                    </div>
                    <div className="text-center flex-1 bg-white/70 py-3 px-1 rounded-2xl shadow-sm border border-dashed border-[#ffa800]/30">
                      <div class="text-2xl font-black text-gray-800">150+</div>
                      <span class="text-[11px] font-medium text-gray-500">Happy Farmers</span>
                    </div>
                  </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
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
        </section>

        {/* Poultry Feed */}

        <section className="py-10 md:py-12 mb-10">
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
            <h2 class="text-3xl md:text-4xl font-semibold text-gray-800 text-center">Poultry <span class="text-[#ffa800]">Feed</span></h2>
            <p class="text-gray-600 mt-3 max-w-2xl mx-auto text-[16px] md:text-[18px] text-center">Proper feeding at the right age and quantity ensures better growth, lower feed cost, and higher productivity.</p>
            <div className="hidden md:flex items-center gap-3 absolute -bottom-[50px] left-[50%] -translate-x-1/2">
              {/* <!-- Prev --> */}
              <button class="news-prev w-10 h-10 rounded-full border border-gray-300
            flex items-center justify-center  text-gray-600  hover:border-green-500 hover:text-green-500
            transition-colors duration-300 cursor-pointer swiper-prev1  transition-transform duration-300 easy-in-out hover:-translate-x-1" >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
          
              {/* <!-- Next --> */}
              <button
                class=" news-next w-10 h-10 rounded-full border border-gray-300
            flex items-center justify-center
            text-gray-600
            hover:border-green-500 hover:text-green-500
            transition-colors duration-300 cursor-pointer swiper-next1  transition-transform duration-300 easy-in-out hover:translate-x-1"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="distributionDetailsSwiper mt-10">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  prevEl: ".swiper-prev1",
                  nextEl: ".swiper-next1",
                }}
                // pagination={{ clickable: true }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
              >
                {/* <!-- Card --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md relative overflow-hidden h-full flex flex-col group">
                    {/* <!-- Image --> */}
                    <img
                      src={poultryfeed4}
                      className="h-48 w-full object-cover rounded-b-2xl transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 transition duration-500 
                      flex items-end p-6">

                      <div className="translate-y-6 group-hover:translate-y-0  transition duration-500">
                        <Link to="/cart" className="text-sm mt-2 text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium cursor-pointer inline-block text-center transform left-1/2 top-1/2 -translate-y-1/2 h-full relative">Order Book</Link>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>
                {/* <!-- Card 2 --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white group rounded-tr-2xl rounded-b-2xl shadow-md relative overflow-hidden h-full flex flex-col">
                    {/* <!-- Image --> */}
                    <img
                      src={poultryfeed}
                      className="h-48 w-full object-cover rounded-b-2xl transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 transition duration-500 
                      flex items-end p-6">

                      <div className="translate-y-6 group-hover:translate-y-0  transition duration-500">
                        <Link to="/cart" className="text-sm mt-2 text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium cursor-pointer inline-block text-center transform left-1/2 top-1/2 -translate-y-1/2 h-full relative">Order Book</Link>
                      </div>

                    </div>
                    
                  </div>
                </SwiperSlide>
                {/* <!-- Card 3 --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col group relative">
                    {/* <!-- Image --> */}
                    <img
                      src={poultryfeed1}
                      className="h-48 w-full object-cover rounded-b-2xl transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 transition duration-500 
                      flex items-end p-6">

                      <div className="translate-y-6 group-hover:translate-y-0  transition duration-500">
                        <Link to="/cart" className="text-sm mt-2 text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium cursor-pointer inline-block text-center transform left-1/2 top-1/2 -translate-y-1/2 h-full relative">Order Book</Link>
                      </div>

                    </div>
                    
                  </div>
                </SwiperSlide>
                {/* <!-- Card 4 --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col group relative">
                    {/* <!-- Image --> */}
                    <img
                      src={poultryfeed2}
                      className="h-48 w-full object-cover rounded-b-2xl transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 transition duration-500 
                      flex items-end p-6">

                      <div className="translate-y-6 group-hover:translate-y-0  transition duration-500">
                        <Link to="/cart" className="text-sm mt-2 text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium cursor-pointer inline-block text-center transform left-1/2 top-1/2 -translate-y-1/2 h-full relative">Order Book</Link>
                      </div>

                    </div>
                    
                  </div>
                </SwiperSlide>
                {/* <!-- Card 5 --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col group relative">
                    {/* <!-- Image --> */}
                    <img
                      src={poultryfeed3}
                      className="h-48 w-full object-cover rounded-b-2xl transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 transition duration-500 
                      flex items-end p-6">

                      <div className="translate-y-6 group-hover:translate-y-0  transition duration-500">
                        <Link to="/cart" className="text-sm mt-2 text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium cursor-pointer inline-block text-center transform left-1/2 top-1/2 -translate-y-1/2 h-full relative">Order Book</Link>
                      </div>

                    </div>
                    
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        {/* Cattle Feed */}
        <section className="py-10 md:pt-12 md:pb-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
            <h2 class="text-3xl md:text-4xl font-semibold text-gray-800 text-center">Cattle <span class="text-[#ffa800]">Feed</span></h2>
            <p class="text-gray-600 mt-3 max-w-2xl mx-auto text-[16px] md:text-[18px] text-center">Nutritionally balanced feed designed to improve milk yield, digestion, and overall cattle health with high-quality protein and essential minerals.</p>
            <div className="hidden md:flex items-center gap-3 absolute -bottom-[50px] left-[50%] -translate-x-1/2">
              {/* <!-- Prev --> */}
              <button class="news-prev w-10 h-10 rounded-full border border-gray-300
            flex items-center justify-center  text-gray-600  hover:border-green-500 hover:text-green-500
            transition-colors duration-300 cursor-pointer swiper-prev2  transition-transform duration-300 easy-in-out hover:-translate-x-1" >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
          
              {/* <!-- Next --> */}
              <button
                class=" news-next w-10 h-10 rounded-full border border-gray-300
            flex items-center justify-center
            text-gray-600
            hover:border-green-500 hover:text-green-500
            transition-colors duration-300 cursor-pointer swiper-next2  transition-transform duration-300 easy-in-out hover:translate-x-1"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="distributionDetailsSwiper mt-10">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  prevEl: ".swiper-prev2",
                  nextEl: ".swiper-next2",
                }}
                // pagination={{ clickable: true }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
              >
                {/* <!-- Card --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col group relative">
                    {/* <!-- Image --> */}
                    <img
                      src={cattlefeed}
                      className="h-48 w-full object-cover rounded-b-2xl transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 transition duration-500 
                      flex items-end p-6">

                      <div className="translate-y-6 group-hover:translate-y-0  transition duration-500">
                        <Link to="/cart" className="text-sm mt-2 text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium cursor-pointer inline-block text-center transform left-1/2 top-1/2 -translate-y-1/2 h-full relative">Order Book</Link>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>
                {/* <!-- Card 2 --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col group relative">
                    {/* <!-- Image --> */}
                    <img
                      src={cattlefeed1}
                      className="h-48 w-full object-cover rounded-b-2xl transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 transition duration-500 
                      flex items-end p-6">

                      <div className="translate-y-6 group-hover:translate-y-0  transition duration-500">
                        <Link to="/cart" className="text-sm mt-2 text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium cursor-pointer inline-block text-center transform left-1/2 top-1/2 -translate-y-1/2 h-full relative">Order Book</Link>
                      </div>

                    </div>
                    
                  </div>
                </SwiperSlide>
                {/* <!-- Card 3 --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col group relative">
                    {/* <!-- Image --> */}
                    <img
                      src={cattlefeed2}
                      className="h-48 w-full object-cover rounded-b-2xl transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 transition duration-500 
                      flex items-end p-6">

                      <div className="translate-y-6 group-hover:translate-y-0  transition duration-500">
                        <Link to="/cart" className="text-sm mt-2 text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium cursor-pointer inline-block text-center transform left-1/2 top-1/2 -translate-y-1/2 h-full relative">Order Book</Link>
                      </div>

                    </div>
                    
                  </div>
                </SwiperSlide>
                {/* <!-- Card 4 --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col group relative">
                    {/* <!-- Image --> */}
                    <img
                      src={cattlefeed3}
                      className="h-48 w-full object-cover rounded-b-2xl transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 transition duration-500 
                      flex items-end p-6">

                      <div className="translate-y-6 group-hover:translate-y-0  transition duration-500">
                        <Link to="/cart" className="text-sm mt-2 text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium cursor-pointer inline-block text-center transform left-1/2 top-1/2 -translate-y-1/2 h-full relative">Order Book</Link>
                      </div>

                    </div>
                    
                  </div>
                </SwiperSlide>
                {/* <!-- Card 5 --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col group relative">
                    {/* <!-- Image --> */}
                    <img
                      src={cattlefeed4}
                      className="h-48 w-full object-cover rounded-b-2xl transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 transition duration-500 
                      flex items-end p-6">

                      <div className="translate-y-6 group-hover:translate-y-0  transition duration-500">
                        <Link to="/cart" className="text-sm mt-2 text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium cursor-pointer inline-block text-center transform left-1/2 top-1/2 -translate-y-1/2 h-full relative">Order Book</Link>
                      </div>

                    </div>

                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>


        {/* Fish Feed */}
        <section className="py-10 md:py-12 mb-10">
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
            <h2 class="text-3xl md:text-4xl font-semibold text-gray-800 text-center">Fish <span class="text-[#ffa800]">Feed</span></h2>
            <p class="text-gray-600 mt-3 max-w-2xl mx-auto text-[16px] md:text-[18px] text-center">High-protein, nutrient-rich feed designed for faster growth, strong immunity, and improved survival rates in aquaculture.</p>
            <div className="hidden md:flex items-center gap-3 absolute -bottom-[50px] left-[50%] -translate-x-1/2">
              {/* <!-- Prev --> */}
              <button class="news-prev w-10 h-10 rounded-full border border-gray-300
            flex items-center justify-center  text-gray-600  hover:border-green-500 hover:text-green-500
            transition-colors duration-300 cursor-pointer swiper-prev3  transition-transform duration-300 easy-in-out hover:-translate-x-1" >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
          
              {/* <!-- Next --> */}
              <button
                class=" news-next w-10 h-10 rounded-full border border-gray-300
            flex items-center justify-center
            text-gray-600
            hover:border-green-500 hover:text-green-500
            transition-colors duration-300 cursor-pointer swiper-next3  transition-transform duration-300 easy-in-out hover:translate-x-1"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="distributionDetailsSwiper mt-10">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  prevEl: ".swiper-prev3",
                  nextEl: ".swiper-next3",
                }}
                // pagination={{ clickable: true }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
              >
                {/* <!-- Card --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col group relative">
                    {/* <!-- Image --> */}
                    <img
                      src={fishfeed}
                      className="h-48 w-full object-cover rounded-b-2xl transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 transition duration-500 
                      flex items-end p-6">

                      <div className="translate-y-6 group-hover:translate-y-0  transition duration-500">
                        <Link to="/cart" className="text-sm mt-2 text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium cursor-pointer inline-block text-center transform left-1/2 top-1/2 -translate-y-1/2 h-full relative">Order Book</Link>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>
                {/* <!-- Card 2 --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col group relative">
                    {/* <!-- Image --> */}
                    <img
                      src={fishfeed1}
                      className="h-48 w-full object-cover rounded-b-2xl transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 transition duration-500 
                      flex items-end p-6">

                      <div className="translate-y-6 group-hover:translate-y-0  transition duration-500">
                        <Link to="/cart" className="text-sm mt-2 text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium cursor-pointer inline-block text-center transform left-1/2 top-1/2 -translate-y-1/2 h-full relative">Order Book</Link>
                      </div>

                    </div>
                    
                  </div>
                </SwiperSlide>
                {/* <!-- Card 3 --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col group relative">
                    {/* <!-- Image --> */}
                    <img
                      src={fishfeed2}
                      className="h-48 w-full object-cover rounded-b-2xl transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 transition duration-500 
                      flex items-end p-6">

                      <div className="translate-y-6 group-hover:translate-y-0  transition duration-500">
                        <Link to="/cart" className="text-sm mt-2 text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium cursor-pointer inline-block text-center transform left-1/2 top-1/2 -translate-y-1/2 h-full relative">Order Book</Link>
                      </div>

                    </div>
                    
                  </div>
                </SwiperSlide>
                {/* <!-- Card 4 --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col group relative">
                    {/* <!-- Image --> */}
                    <img
                      src={fishfeed3}
                      className="h-48 w-full object-cover rounded-b-2xl transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 transition duration-500 
                      flex items-end p-6">

                      <div className="translate-y-6 group-hover:translate-y-0  transition duration-500">
                        <Link to="/cart" className="text-sm mt-2 text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium cursor-pointer inline-block text-center transform left-1/2 top-1/2 -translate-y-1/2 h-full relative">Order Book</Link>
                      </div>

                    </div>
                    
                  </div>
                </SwiperSlide>
                {/* <!-- Card 5 --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col group relative">
                    {/* <!-- Image --> */}
                    <img
                      src={fishfeed4}
                      className="h-48 w-full object-cover rounded-b-2xl transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 transition duration-500 
                      flex items-end p-6">

                      <div className="translate-y-6 group-hover:translate-y-0  transition duration-500">
                        <Link to="/cart" className="text-sm mt-2 text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium cursor-pointer inline-block text-center transform left-1/2 top-1/2 -translate-y-1/2 h-full relative">Order Book</Link>
                      </div>

                    </div>
                    
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        

        {/* Pig Feed */}
         <section className="py-10 md:pt-12 md:pb-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
            <h2 class="text-3xl md:text-4xl font-semibold text-gray-800 text-center">Pig <span class="text-[#ffa800]">Feed</span></h2>
            <p class="text-gray-600 mt-3 max-w-2xl mx-auto text-[16px] md:text-[18px] text-center">Nutrient-rich, protein-balanced feed designed for faster growth, improved immunity, and better feed efficiency in pigs.</p>
            <div className="hidden md:flex items-center gap-3 absolute -bottom-[50px] left-[50%] -translate-x-1/2">
              {/* <!-- Prev --> */}
              <button class="news-prev w-10 h-10 rounded-full border border-gray-300
            flex items-center justify-center  text-gray-600  hover:border-green-500 hover:text-green-500
            transition-colors duration-300 cursor-pointer swiper-prev4  transition-transform duration-300 easy-in-out hover:-translate-x-1" >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
          
              {/* <!-- Next --> */}
              <button
                class=" news-next w-10 h-10 rounded-full border border-gray-300
            flex items-center justify-center
            text-gray-600
            hover:border-green-500 hover:text-green-500
            transition-colors duration-300 cursor-pointer swiper-next4  transition-transform duration-300 easy-in-out hover:translate-x-1"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="distributionDetailsSwiper mt-10">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  prevEl: ".swiper-prev4",
                  nextEl: ".swiper-next4",
                }}
                // pagination={{ clickable: true }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
              >
                {/* <!-- Card --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col group relative">
                    {/* <!-- Image --> */}
                    <img
                      src={pigfeed}
                      className="h-48 w-full object-cover rounded-b-2xl transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 transition duration-500 
                      flex items-end p-6">

                      <div className="translate-y-6 group-hover:translate-y-0  transition duration-500">
                        <Link to="/cart" className="text-sm mt-2 text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium cursor-pointer inline-block text-center transform left-1/2 top-1/2 -translate-y-1/2 h-full relative">Order Book</Link>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>
                {/* <!-- Card 2 --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col group relative">
                    {/* <!-- Image --> */}
                    <img
                      src={pigfeed1}
                      className="h-48 w-full object-cover rounded-b-2xl transform group-hover:scale-110 transition duration-500" 
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 transition duration-500 
                      flex items-end p-6">

                      <div className="translate-y-6 group-hover:translate-y-0  transition duration-500">
                        <Link to="/cart" className="text-sm mt-2 text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium cursor-pointer inline-block text-center transform left-1/2 top-1/2 -translate-y-1/2 h-full relative">Order Book</Link>
                      </div>

                    </div>
                    
                  </div>
                </SwiperSlide>
                {/* <!-- Card 3 --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col group relative">
                    {/* <!-- Image --> */}
                    <img
                      src={pigfeed2}
                      className="h-48 w-full object-cover rounded-b-2xl transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 transition duration-500 
                      flex items-end p-6">

                      <div className="translate-y-6 group-hover:translate-y-0  transition duration-500">
                        <Link to="/cart" className="text-sm mt-2 text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium cursor-pointer inline-block text-center transform left-1/2 top-1/2 -translate-y-1/2 h-full relative">Order Book</Link>
                      </div>

                    </div>
                    
                  </div>
                </SwiperSlide>
                {/* <!-- Card 4 --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col group relative">
                    {/* <!-- Image --> */}
                    <img
                      src={pigfeed3}
                      className="h-48 w-full object-cover rounded-b-2xl transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 transition duration-500 
                      flex items-end p-6">

                      <div className="translate-y-6 group-hover:translate-y-0  transition duration-500">
                        <Link to="/cart" className="text-sm mt-2 text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium cursor-pointer inline-block text-center transform left-1/2 top-1/2 -translate-y-1/2 h-full relative">Order Book</Link>
                      </div>

                    </div>
                    
                  </div>
                </SwiperSlide>
                {/* <!-- Card 5 --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col group relative">
                    {/* <!-- Image --> */}
                    <img
                      src={pigfeed4}
                      className="h-48 w-full object-cover rounded-b-2xl transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 transition duration-500 
                      flex items-end p-6">

                      <div className="translate-y-6 group-hover:translate-y-0  transition duration-500">
                        <Link to="/cart" className="text-sm mt-2 text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-xl font-medium cursor-pointer inline-block text-center transform left-1/2 top-1/2 -translate-y-1/2 h-full relative">Order Book</Link>
                      </div>

                    </div>
                    
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

      </main>
      <Footer></Footer>
    </>
  );
}


export default DistributorDetails;