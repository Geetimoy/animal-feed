import Footer from "../Footer";
import Header from "../Header";

import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import banner1 from '../../assets/images/Layer35-cattle.png';
import banner2 from '../../assets/images/Layer37-fish.png';
import banner3 from '../../assets/images/Layer38-poultry.png';
import banner4 from '../../assets/images/Layer39-pig.png';
import logo from '../../assets/images/logo.png';
import about1 from '../../assets/images/about1.png';
import about2 from '../../assets/images/about2.png';
import bgImage from "../../assets/images/slider-bg.png";
import cardIcon1 from '../../assets/images/card-icon1.png';
import cardIcon2 from '../../assets/images/card-icon2.png';
import cardIcon3 from '../../assets/images/card-icon3.png'; 
import animal1 from '../../assets/images/cattle1.png';
import animal2 from '../../assets/images/pig2.png';
import animal3 from '../../assets/images/poultry2.png';
import animal4 from '../../assets/images/fish2.png';
import commitment from '../../assets/images/commitment-bg.jpg';
import research from '../../assets/images/Layer25.png';
import bgNationwideImage from '../../assets/images/Laye28.png';
import newsslider1 from '../../assets/images/newfish.jpeg';
import newsslider2 from '../../assets/images/pig2.png';
import newsslider3 from '../../assets/images/cattle1.png';
import newsslider4 from '../../assets/images/poultry2.png';
import newsslider5 from '../../assets/images/fish2.png';

import { Link, useLocation } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './custom.css';

function Home(){

  const [activeTab, setActiveTab] = useState("tab1");

  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");

    const el = document.getElementById(id);

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  }, [hash]);

  return (
    <>
      <Header></Header>
      <main className="pt-16 overflow-x-hidden">
        {/* <!-- Hero Section --> */}
        <section className="relative z-0">
          <div className="grid grid-cols-4 md:h-[700px] h-[350px] w-full">
            {/* <!-- Banner Item 1 --> */}
            <div className="relative">
              <img src={banner1} className="w-full h-full object-cover" />

              {/* Overlay Layer (81%) */}
              <div className="absolute inset-0 bg-black/[0.60]"></div>

              <div className="absolute bottom-[140px] md:bottom-[200px] left-[12px] md:left-[40px] z-10">
                <h3 className="text-white  text-[20px] md:text-[43px] font-normal">
                  CATTLE{" "}
                </h3>
                <p className="text-white  text-[16px] md:text-[28px] ">FEED</p>
              </div>
            </div>

            {/* <!-- Banner Item 2 --> */}
            <div className="relative">
              <img src={banner2} className="w-full h-full object-cover" />

              {/* <!-- Overlay Layer (81%) --> */}
              <div className="absolute inset-0 bg-black/[0.60]"></div>

              <div className="absolute bottom-[140px] md:bottom-[200px] left-[12px] md:left-[40px] z-10">
                <h3 className="text-white  text-[20px] md:text-[43px] font-normal">
                  FISH{" "}
                </h3>
                <p className="text-white  text-[16px] md:text-[28px] ">FEED</p>
              </div>
            </div>

            {/* <!-- Banner Item 3 --> */}
            <div className="relative">
              <img src={banner3} className="w-full h-full object-cover" />

              {/* <!-- Overlay Layer (81%) --> */}
              {/* <div className="absolute inset-0 bg-black/[0.60]"></div> */}
              <div className="absolute bottom-[140px] md:bottom-[200px] left-[6px] md:left-[40px] z-10">
                <h3 className="text-white  text-[18px] md:text-[43px] font-normal">
                  POULTRY
                </h3>
                <p className="text-white  text-[16px] md:text-[28px] ">FEED</p>
              </div>
            </div>

            {/* <!-- Banner Item 4 --> */}
            <div className="relative">
              <img src={banner4} className="w-full h-full object-cover" />

              {/* <!-- Overlay Layer (81%) --> */}
              <div className="absolute inset-0 bg-black/[0.81]"></div>
              <div className="absolute bottom-[140px] md:bottom-[200px] left-[12px] md:left-[40px] z-10">
                <h3 className="text-white  text-[20px] md:text-[43px] font-normal">
                  PIG{" "}
                </h3>
                <p className="text-white  text-[16px] md:text-[28px] ">FEED</p>
              </div>
            </div>
          </div>

          {/* Quote Form Container */}
          <div
            className="relative lg:absolute mt-4 md:mt-0 lg:-bottom-[80px] left-0 lg:left-1/2 lg:-translate-x-1/2
      z-[999]  gsap-fade-in "
            data-delay="1"
          >
            <div className="flex justify-center">
              {/* Card */}
              <div className="grid grid-cols-1 md:grid-cols-12 rounded-2xl overflow-hidden max-w-4xl w-full">
                {/* LEFT: Logo (small, white) */}
                <div className="col-span-3  bg-gradient-to-r  from-[#00a34a] to-[#009a62] md:bg-none md:bg-white  flex items-center justify-center py-4 md:py-0 ">
                  <img
                    src={logo}
                    alt="Green Gold Logo"
                    className="w-[100px] h-[100px] object-contain"
                  />
                </div>

                {/* RIGHT: Text (big, green) */}
                <div className="col-span-9  bg-gradient-to-r  from-[#00a34a] to-[#009a62]   text-white px-4 md:px-8 py-0 md:py-6 pb-6 flex items-center ">
                  <div>
                    <div className="text-2xl font-semibold leading-normal md:leading-snug text-center md:text-left">
                      Quality Animal Nutrition <br />
                      <span className="text-yellow-300">
                        {" "}
                        for Healthy Growth
                      </span>
                    </div>

                    <div className="mt-2 text-sm text-white/90 max-w-xl text-center md:text-left">
                      Green Gold delivers scientifically formulated animal feed
                      to ensure better health, growth, and productivity for
                      livestock and poultry.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-6 md:py-12 md:mt-12">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
              {/* <!-- LEFT SIDE (UNCHANGED) --> */}
              <div className="space-y-5 ">
                {/* <!-- Heading --> */}
                <div className="mb-[0px] md:mb-[0px]   gsap-slide-in-left">
                  <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center md:text-left">
                    About Green <span className="text-[#ffa800]">Gold</span>
                  </h2>
                  <p className="text-[16px] text-gray-600 mt-1 text-center md:text-left">
                    Reinforcing excellence in animal nutrition since 1983
                  </p>
                </div>

                {/* IMAGE + CARD WRAPPER */}
                <div className="relative w-full h-[260px]  sm:h-[420px] rounded-xl lg:overflow-visible gsap-scale-in">
                  {/* BACKGROUND IMAGE */}
                  <img
                    src={about1}
                    alt="Background"
                    className="relative lg:absolute inset-0 w-full h-full object-cover z-10 rounded-xl"
                  />

                  {/* ANIMALS IMAGE */}
                  <img
                    src={about2}
                    alt="Animals"
                    className="absolute bottom-0  md:-bottom-4   lg:bottom-0 left-1/2 -translate-x-1/2
                      w-[90%]  md:w-[80%]
                      object-contain z-20 max-h-[420px]"
                  />

                  {/* RIGHT CARD (FINAL CORRECT VERSION) */}
                  <div
                    className="hidden md:block relative md:absolute md:top-[0px] md:-right-[540px] w-full md:w-[420px] lg:w-[560px] bg-white rounded-2xl p-8 space-y-5 shadow-[0_15px_40px_rgba(0,0,0,0.15)]
                      z-30"
                  >
                    <h3 className="text-[28px] font-bold text-gray-800">
                      Commitment to Quality & Innovation
                    </h3>

                    <p className="text-[18px] text-gray-600">
                      At Green Gold, we blend scientific expertise with
                      agricultural wisdom to create feed solutions that optimize
                      animal health and farm profitability.
                    </p>

                    <ul className="space-y-2 text-[16px] text-gray-700">
                      <li className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-white text-[10px]"
                          />
                        </span>
                        Scientifically formulated nutrition
                      </li>
                      <li className="flex gap-2">
                        <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-white text-[10px]"
                          />
                        </span>
                        Sustainable production practices
                      </li>
                      <li className="flex gap-2">
                        <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-white text-[10px]"
                          />
                        </span>
                        Farmer education & support programs
                      </li>
                    </ul>

                    <div className="flex gap-4 pt-4">
                      <Link to="/about-us" className="bg-[#f1c40f] px-6 py-4 rounded-md text-[16px] font-medium cursor-pointer">
                        Our Full Story
                      </Link>
                      <Link to="/contact-us" className="border px-6 py-4 rounded-md text-sm border border-gray-800 cursor-pointer">
                        Talk to Expert
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  className="lg:hidden relative lg:absolute md:top-[0px] lg:-right-[540px] w-full lg:w-[420px] lg:w-[560px] bg-white rounded-2xl p-4 space-y-4 shadow-[0_15px_40px_rgba(0,0,0,0.15)]
                      z-30"
                >
                  <h3 className="text-[22px] md:text-[28px] font-bold text-gray-800 leading-normal">
                    Commitment to Quality & Innovation
                  </h3>

                  <p className="text-[15px] text-gray-600">
                    At Green Gold, we blend scientific expertise with
                    agricultural wisdom to create feed solutions that optimize
                    animal health and farm profitability.
                  </p>

                  <ul className="space-y-2 text-[15px] text-gray-700">
                    <li className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white text-[10px]"
                        />
                      </span>
                      Scientifically formulated nutrition
                    </li>
                    <li className="flex gap-2">
                      <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white text-[10px]"
                        />
                      </span>
                      Sustainable production practices
                    </li>
                    <li className="flex gap-2">
                      <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white text-[10px]"
                        />
                      </span>
                      Farmer education & support programs
                    </li>
                  </ul>

                  <div className="flex flex-col gap-2 pt-4">
                    <button className="bg-[#f1c40f] px-6 py-4 rounded-md text-[16px] font-medium cursor-pointer">
                      Our Full Story
                    </button>
                    <button className="border px-6 py-4 rounded-md text-sm border border-gray-800 cursor-pointer">
                      Talk to Expert
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="whygreengold"
          className="relative py-8 md:py-20 overflow-visible  gsap-fade-in scroll-mt-[100px]"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <!-- overlay --> */}
          <div className="absolute inset-0 bg-black/60 pointer-events-none z-0"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 items-center">
              {/* LEFT */}
              <div className="lg:col-span-1 relative z-20  text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-semibold text-white leanding-normal md:leading-snug">
                  Why Choose <br className="hidden md:block" />
                  <span className="text-yellow-400">Green Gold</span>
                </h2>

                <p className="text-gray-200 mt-4 text-[16px] md:text-[18px]  leanding-normal md:leading-relaxed max-w-sm">
                  Premium quality feed backed by scientific formulation and
                  trusted sourcing.
                </p>

                {/* SLIDER BUTTONS */}
                <div className="flex gap-4 mt-4  md:mt-6 relative z-30 items-center justify-center md:justify-end">
                  {/* LEFT */}
                  <button
                    type="button"
                    className="why-prev w-10 h-10  md:w-12 md:h-12  rounded-full
              border border-gray-400 text-gray-400
              flex items-center justify-center shadow-xl
              transition-all duration-300
              hover:border-green-600 hover:text-green-600 swiper-prev cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>

                  {/* RIGHT */}
                  <button
                    type="button"
                    className="why-next w-10 h-10  md:w-12 md:h-12 rounded-full
              border border-gray-400 text-gray-400
              flex items-center justify-center shadow-xl
              transition-all duration-300
              hover:border-green-600 hover:text-green-600 swiper-next cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>

              {/* RIGHT : SLIDER */}
              <div className="lg:col-span-2">
                <div className="whySwiper">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                      prevEl: ".swiper-prev",
                      nextEl: ".swiper-next",
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
                        slidesPerView: 3,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div className="why-card bg-[#f3f6f4] rounded-2xl p-6">
                        <div>
                          <img
                            src={cardIcon1}
                            className="w-[50px] h-[60px] mb-4"
                          />
                          <h4 className="text-[#009a62] font-semibold text-lg leading-snug">
                            Quality
                            <br />
                            You Can Trust
                          </h4>
                          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                            Each batch of Green Gold Feed is produced under strict quality control standards to ensure consistency, 
                          </p>
                        </div>

                        <Link
                          href="#"
                          className="read-more inline-flex items-center gap-3 text-sm text-gray-500 pt-6"
                        >
                          Read More
                          <span className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-xs"
                            />
                          </span>
                        </Link>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="why-card bg-[#f3f6f4] rounded-2xl p-6">
                        <div>
                          <img
                            src={cardIcon2}
                            className="w-[50px] h-[60px] mb-4"
                          />
                          <h4 className="text-[#009a62] font-semibold text-lg leading-snug">
                            Scientifically 
                            <br />
                            Balanced Nutrition
                          </h4>
                          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                            Green Gold livestock feed is scientifically formulated to deliver a complete and well-balanced diet. 
                          </p>
                        </div>

                        <Link
                          href="#"
                          className="read-more inline-flex items-center gap-3 text-sm text-gray-500 pt-6"
                        >
                          Read More
                          <span className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-xs"
                            />
                          </span>
                        </Link>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="why-card bg-[#f3f6f4] rounded-2xl p-6">
                        <div>
                          <img
                            src={cardIcon3}
                            className="w-[60px] h-[60px] mb-4"
                          />
                          <h4 className="text-[#009a62] font-semibold text-lg leading-snug">
                            Enhanced Feed 
                            <br />
                            Conversion Efficiency
                          </h4>
                          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                            Our advanced formulations are designed to maximize feed efficiency.
                          </p>
                        </div>

                        <Link
                          href="#"
                          className="read-more inline-flex items-center gap-3 text-sm text-gray-500 pt-6"
                        >
                          Read More
                          <span className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-xs"
                            />
                          </span>
                        </Link>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="why-card bg-[#f3f6f4] rounded-2xl p-6">
                        <div>
                          <img
                            src={cardIcon2}
                            className="w-[50px] h-[60px] mb-4"
                          />
                          <h4 className="text-[#009a62] font-semibold text-lg leading-snug">
                            Sustainable and Responsible Sourcing
                            <br />
                            Responsible Sourcing
                          </h4>
                          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                            We are committed to sustainability. Green Gold Feed uses responsibly sourced
                          </p>
                        </div>

                        <Link
                          href="#"
                          className="read-more inline-flex items-center gap-3 text-sm text-gray-500 pt-6"
                        >
                          Read More
                          <span className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-xs"
                            />
                          </span>
                        </Link>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute  lg:-bottom-[120px] md:left-1/2 lg:-translate-x-1/2 px-3 sm:px-0 ">
            <div className="w-full py-10">
              <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
                {/* Circle 1 */}
                <div className="w-36 h-36 2xl:w-40 2xl:h-40 rounded-full bg-emerald-300 flex flex-col items-center justify-center text-center shadow-md ring-2 ring-white">
                  <span className="text-3xl font-bold text-black">25+</span>{" "}
                  <span className="text-sm font-medium text-black leading-tight">
                    {" "}
                    Years
                    <br />
                    Experience{" "}
                  </span>
                </div>
                {/* Circle 2 */}
                <div className="w-36 h-36 2xl:w-40 2xl:h-40 rounded-full bg-yellow-400 flex flex-col items-center justify-center text-center shadow-md ring-2 ring-white">
                  <span className="text-3xl font-bold text-black">500+</span>{" "}
                  <span className="text-sm font-medium text-black leading-tight">
                    {" "}
                    Our
                    <br />
                    Products{" "}
                  </span>
                </div>
                {/* Circle 3 */}
                <div className="w-36 h-36 2xl:w-40 2xl:h-40 rounded-full bg-emerald-300 flex flex-col items-center justify-center text-center shadow-md ring-2 ring-white">
                  <span className="text-3xl font-bold text-black">98%</span>{" "}
                  <span className="text-sm font-medium text-black leading-tight">
                    {" "}
                    Farmer
                    <br />
                    Satisfaction{" "}
                  </span>
                </div>
                {/* Circle 4 */}
                <div className="w-36 h-36 2xl:w-40 2xl:h-40 rounded-full bg-yellow-400 flex flex-col items-center justify-center text-center shadow-md ring-2 ring-white">
                  <span className="text-3xl font-bold text-black">50+</span>{" "}
                  <span className="text-sm font-medium text-black leading-tight">
                    {" "}
                    Quality
                    <br />
                    Checks{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative lg:hidden   ">
          <div className="w-full py-4">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4  gap-2  justify-items-center text-center">
              {/* Circle 1 */}
              <div className="w-36 h-36 2xl:w-40 2xl:h-40 rounded-full bg-emerald-300 flex flex-col items-center justify-center text-center shadow-md ring-2 ring-white">
                <span className="text-3xl font-bold text-black">25+</span>{" "}
                <span className="text-sm font-medium text-black leading-tight">
                  {" "}
                  Years
                  <br />
                  Experience{" "}
                </span>
              </div>
              {/* Circle 2 */}
              <div className="w-36 h-36 2xl:w-40 2xl:h-40 rounded-full bg-yellow-400 flex flex-col items-center justify-center text-center shadow-md ring-2 ring-white">
                <span className="text-3xl font-bold text-black">500+</span>{" "}
                <span className="text-sm font-medium text-black leading-tight">
                  {" "}
                  Our
                  <br />
                  Products{" "}
                </span>
              </div>
              {/* Circle 3 */}
              <div className="w-36 h-36 2xl:w-40 2xl:h-40 rounded-full bg-emerald-300 flex flex-col items-center justify-center text-center shadow-md ring-2 ring-white">
                <span className="text-3xl font-bold text-black">98%</span>{" "}
                <span className="text-sm font-medium text-black leading-tight">
                  {" "}
                  Farmer
                  <br />
                  Satisfaction{" "}
                </span>
              </div>
              {/* Circle 4 */}
              <div className="w-36 h-36 2xl:w-40 2xl:h-40 rounded-full bg-yellow-400 flex flex-col items-center justify-center text-center shadow-md ring-2 ring-white">
                <span className="text-3xl font-bold text-black">50+</span>{" "}
                <span className="text-sm font-medium text-black leading-tight">
                  {" "}
                  Quality
                  <br />
                  Checks{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Animal Nutritions */}
        <section className="w-full bg-white py-6 md:py-12 pt-0 lg:pt-20 mt-0 md:mt-8">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center">
            {/* <!-- LEFT : IMAGE CARDS --> */}
            <div className="grid grid-cols-2 gap-2 md:gap-4 gsap-slide-in-left">
              {/* IMAGE 1 */}
              <div className="place-self-start">
                <div className="relative inline-block overflow-hidden">
                  <img
                    src={animal1}
                    className="block w-[280px] h-[280px] object-cover"
                    alt=""
                  />
                  <div
                    className="absolute inset-0 bg-black/60
                  opacity-0 hover:opacity-100
                  transition-opacity duration-300
                  flex flex-col items-center justify-center"
                  >
                    <h3 className="text-white text-xl font-semibold">
                      CATTLE <br /> Feed
                    </h3>

                    <div>
                      <Link
                        href="#"
                        className="read-more inline-flex items-center gap-3 text-sm text-white mt-3"
                      >
                        View Details
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-xs"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* IMAGE 2 */}
              <div className="place-self-start">
                <div className="relative inline-block overflow-hidden">
                  <img
                    src={animal2}
                    className="block w-[280px] h-[280px] object-cover"
                    alt=""
                  />
                  <div
                    className="absolute inset-0 bg-black/60
                  opacity-0 hover:opacity-100
                  transition-opacity duration-300
                  flex flex-col items-center justify-center"
                  >
                    <h3 className="text-white text-lg font-semibold ">
                      PIG <br /> FEED
                    </h3>
                    <div>
                      <Link
                        href="#"
                        className="read-more inline-flex items-center gap-3 text-sm text-white mt-3"
                      >
                        View Details
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-xs"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* IMAGE 3 */}
              <div className="place-self-start">
                <div className="relative inline-block overflow-hidden">
                  <img
                    src={animal3}
                    className="block w-[280px] h-[280px] object-cover"
                    alt=""
                  />
                  <div
                    className="absolute inset-0 bg-black/60
                  opacity-0 hover:opacity-100
                  transition-opacity duration-300
                  flex flex-col items-center justify-center"
                  >
                    <h3 className="text-white text-lg font-semibold">
                      POULTRY <br /> FEED
                    </h3>
                    <div>
                      <Link
                        href="#"
                        className="read-more inline-flex items-center gap-3 text-sm text-white mt-3"
                      >
                        View Details
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-xs"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* IMAGE 4 */}
              <div className="place-self-start">
                <div className="relative inline-block overflow-hidden">
                  <img
                    src={animal4}
                    className="block w-[280px] h-[280px] object-cover"
                    alt=""
                  />
                  <div
                    className="absolute inset-0 bg-black/60
                  opacity-0 hover:opacity-100
                  transition-opacity duration-300
                  flex flex-col items-center justify-center"
                  >
                    <h3 className="text-white text-lg font-semibold">
                      FISH <br /> FEED
                    </h3>
                    <div>
                      <Link
                        href="#"
                        className="read-more inline-flex items-center gap-3 text-sm text-white mt-3"
                      >
                        View Details
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-xs"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT : TEXT CONTENT */}
            <div className="text-center   max-w-md mx-auto lg:mx-0 gsap-slide-in-right">
              <h2 className="text-3xl lg:text-5xl font-semibold text-gray-800">
                Animals <br className="hidden md:block" />{" "}
                <span className="text-[#ffa800]">Nutrition</span>
              </h2>
              <p className="mt-2 md:mt-4 text-gray-600 max-w-md mx-auto lg:mx-0  text-center text-[16px] md:text-[18px]">
                High quality animal nutrition solutions designed to improve
                health, productivity and overall performance.
              </p>
            </div>
          </div>
        </section>

        {/* Our Unwavering Commitment */}
        <section className="relative w-full overflow-hidden  gsap-fade-in">
          {/* <!-- Background image --> */}
          <img
            src={commitment}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* <!-- Dark overlay --> */}
          <div className="absolute inset-0 bg-black/60"></div>
          {/* <!-- Content wrapper --> */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 ">
            {/* <!-- Heading --> */}
            <div className="text-center max-w-3xl mx-auto mb-6 md:mb-14 ">
              <h2 className="text-3xl sm:text-5xl font-semibold text-white">
                Our Unwavering{" "}
                <span className="text-yellow-400">Commitment</span>
              </h2>
              <p className="mt-4 text-gray-200 text-[16px] sm:text-[18px]">
                Quality is our foundation. Every product reflects our dedication
                to excellence, safety, and sustainable agriculture.
              </p>
            </div>

            {/* Main grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* LEFT CONTENT */}
              <div className="text-white max-w-lg  ">
                <h3 className="text-3xl md:text-5xl font-light mb-4 text-center md:text-left">
                  Our{" "}
                  <span className="text-[#ffa800] font-normal">Promise</span>
                </h3>

                <p className="text-gray-200  text-[16px] sm:text-[18px] leading-normal md:leading-relaxed mb-4 md:mb-8 text-center md:text-left">
                  We don’t just meet standards—we set them. Our commitment
                  extends beyond production to include farmer education,
                  sustainable practices, and continuous innovation in animal
                  nutrition.
                </p>

                {/* Green badge */}
                <div className="inline-flex items-center   bg-gradient-to-r  from-[#00a34a] to-[#009a62]   gap-3  px-6 py-4 rounded-xl shadow-lg">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      Triple-Assured Quality
                    </p>
                    <p className="text-xs text-white/80">
                      Tested at source, during production, and before dispatch
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT CARD */}
              <div className="w-full max-w-xl">
                {/* Tabs */}
                <div className="flex">
                  <button
                    id="tab-quality"
                    onClick={() => setActiveTab("tab1")}
                    className="tab-btn bg-white px-4 mb:px-12 py-4 text-[16px] md:text-lg font-semibold text-gray-900 rounded-t-xl md:text-left text-center cursor-pointer"
                  >
                    Rigorous Quality <br className="hidden md:block" /> Process
                  </button>

                  <button
                    id="tab-cert"
                    onClick={() => setActiveTab("tab2")}
                    className="tab-btn bg-yellow-200  px-4 mb:px-12 py-4  text-[16px] md:text-lg font-semibold text-gray-700 rounded-t-xl  md:text-left text-center  cursor-pointer"
                  >
                    Certifications & <br className="hidden md:block" />{" "}
                    Standards
                  </button>
                </div>

                {/* Card */}
                <div className="bg-white rounded-b-3xl md:rounded-tr-3xl p-4 md:p-8 shadow-2xl">
                  {/* QUALITY */}
                  {activeTab === "tab1" && (
                    <div id="content-quality">
                      <h4 className="text-green-600 font-semibold text-lg mb-4 md:mb-6">
                        Rigorous Quality Process
                      </h4>

                      <ul className="space-y-2 md:space-y-4 text-sm text-gray-700">
                        <li className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-white text-[10px]"
                            />
                          </span>
                          Raw material inspection before production
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-white text-[10px]"
                            />
                          </span>
                          In-process quality monitoring at every stage
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-white text-[10px]"
                            />
                          </span>
                          Final product testing & verification
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-white text-[10px]"
                            />
                          </span>
                          Strict compliance with industry standards
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-white text-[10px]"
                            />
                          </span>
                          Continuous improvement protocols
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-white text-[10px]"
                            />
                          </span>
                          Traceability from source to farm
                        </li>
                      </ul>
                    </div>
                  )}
                  {/* <!-- CERT --> */}
                  {activeTab === "tab2" && (
                    <div id="content-cert">
                      <h4 className="text-green-600 font-semibold text-lg   mb-4 md:mb-6">
                        Certifications & Standards
                      </h4>

                      <ul className="space-y-2 md:space-y-4 text-sm text-gray-700">
                        <li className="flex items-center gap-3">
                          {" "}
                          <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-white text-[10px]"
                            />
                          </span>
                          ISO 9001 Quality Management
                        </li>
                        <li className="flex items-center gap-3">
                          {" "}
                          <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-white text-[10px]"
                            />
                          </span>
                          GMP Certified Units
                        </li>
                        <li className="flex items-center gap-3">
                          {" "}
                          <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-white text-[10px]"
                            />
                          </span>
                          Statutory Compliance
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Development */}
        <section className="bg-white py-10 md:py-20  gsap-fade-in">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative">
              {" "}
              <img
                src={research}
                alt="Research and Development"
                className="rounded-2xl w-full h-[300px] md:h-[500px] object-cover "
              />
            </div>
            <div>
              <h2 className="text-[26px] md:text-5xl font-semibold text-gray-900 text-center md:text-left">
                {" "}
                Research & <br className="hidden md:block" />{" "}
                <span className="text-yellow-500">Development</span>{" "}
              </h2>
              <p className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center md:text-left">
                {" "}
                Our Research & Development team continuously works to improve
                feed efficiency, nutritional balance, and animal health. Using
                scientific research, modern laboratories, and field trials, we
                develop feed solutions that deliver consistent results.{" "}
              </p>
              <p className="mt-4 text-gray-600  leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center md:text-left">
                {" "}
                Innovation, testing, and validation are at the core of every
                formulation we create.{" "}
              </p>
              <Link to="/research-development" className="mt-4 md:mt-8 inline-flex items-center justify-center md:justify-start gap-2 rounded-xl bg-yellow-500 px-6 py-3 text-[16px] font-medium text-black hover:bg-yellow-400 transition cursor-pointer w-full md:w-auto text-center">
                Explore Our R&amp;D{" "}
              </Link>
            </div>
          </div>
        </section>

        {/* Nationwide Availability */}
        <section
          className="relative py-10 md:py-24 overflow-hidden bg-center bg-cover"
          style={{ backgroundImage: `url(${bgNationwideImage})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/80"></div>
          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-semibold tracking-wide text-white">
              Nationwide
              <span className="text-amber-400 font-medium"> Availability</span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-md md:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Green Gold Animal Feed is available through our trusted
              distributor network across multiple states. Get in touch with your
              nearest distributor or contact our sales team for personalized
              assistance.
            </p>

            {/* <!-- Buttons --> */}
            <div className="mt-6 md:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 text-lg">
              <Link
                to="tel:+1234567890"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-amber-400 text-black font-medium shadow-md hover:bg-amber-500 transition w-full md:w-auto "
              >
                <FontAwesomeIcon icon={faPhone} />
                Call Now
              </Link>

              <Link
                to="tel:+1234567890"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-green-500 text-white font-medium shadow-md hover:bg-green-600 transition w-full md:w-auto "
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                WhatsApp
              </Link>
            </div>

            {/* States */}
            <div className="mt-8 md:mt-14 flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-4 text-lg text-gray-300 tracking-wide">
              <span>West Bengal</span>
              <span>Odisha</span>
              <span>Bihar</span>
              <span>Jharkhand</span>
              <span>Assam</span>
              <span>Uttar Pradesh</span>
            </div>
          </div>
        </section>

        {/* News & Event */}
        <section className="py-10 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 md:mb-12">
              <div>
                <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 text-center md:text-left">
                  News & <span className="text-yellow-500">Event</span>
                </h2>
                <p className="mt-2 text-gray-500 max-w-md text-center md:text-left  text-[16px] md:text-[18px]">
                  Stay updated with the latest happenings, product launches, and
                  events at Green Gold.
                </p>
              </div>

              {/* Navigation */}
              <div className="hidden md:flex items-center gap-3">
                {/* <!-- Prev --> */}
                <button
                  class="news-prev w-10 h-10 rounded-full border border-gray-300
              flex items-center justify-center
              text-gray-600
              hover:border-green-500 hover:text-green-500
              transition-colors duration-300 cursor-pointer swiper-prev1"
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>

                {/* <!-- Next --> */}
                <button
                  class="news-next w-10 h-10 rounded-full border border-gray-300
              flex items-center justify-center
              text-gray-600
              hover:border-green-500 hover:text-green-500
              transition-colors duration-300 cursor-pointer swiper-next1"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
            {/* <!-- Slider --> */}
            <div className="newsSwiper">
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
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col">
                    {/* <!-- Image --> */}
                    <img
                      src={newsslider1}
                      className="h-48 w-full object-cover rounded-b-2xl"
                    />

                    {/* <!-- Content --> */}
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-xs text-green-600 font-medium">
                        12 Aug 2025
                      </span>

                      <h3 className="mt-2 font-bold text-gray-900">
                        Green Gold Launches Advanced Cattle Feed
                      </h3>

                      <p className="mt-2 text-sm text-gray-500 flex-grow">
                        Stay updated with the latest happenings, product
                        launches, and events at Green Gold.
                      </p>

                      <Link
                        to="/news-events"
                        className="mt-4 inline-flex items-center gap-2 text-green-600 font-medium group"
                      >
                        View Details
                        <span
                          className="w-5 h-5 rounded-full border border-green-500
                flex items-center justify-center
                group-hover:border-green-600
                transition-colors duration-300"
                        >
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-[10px]
                  group-hover:text-green-600
                  transition-colors duration-300"
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                {/* <!-- Card 2 --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col">
                    {/* <!-- Image --> */}
                    <img
                      src={newsslider2}
                      className="h-48 w-full object-cover rounded-b-2xl"
                    />

                    {/* <!-- Content --> */}
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-xs text-green-600 font-medium">
                        28 Aug 2025
                      </span>

                      <h3 className="mt-2 font-bold text-gray-900">
                        Farmer Awareness Program Conducted in Odisha
                      </h3>

                      <p className="mt-2 text-sm text-gray-500 flex-grow">
                        Stay updated with the latest happenings, product
                        launches, and events at Green Gold.
                      </p>

                      <Link
                        to="/news-events"
                        className="mt-4 inline-flex items-center gap-2 text-green-600 font-medium group"
                      >
                        View Details
                        <span
                          className="w-5 h-5 rounded-full border border-green-500
                flex items-center justify-center
                group-hover:border-green-600
                transition-colors duration-300"
                        >
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-[10px]
                  group-hover:text-green-600
                  transition-colors duration-300"
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                {/* <!-- Card 3 --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col">
                    {/* <!-- Image --> */}
                    <img
                      src={newsslider3}
                      className="h-48 w-full object-cover rounded-b-2xl"
                    />

                    {/* <!-- Content --> */}
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-xs text-green-600 font-medium">
                        12 Aug 2025
                      </span>

                      <h3 className="mt-2 font-bold text-gray-900">
                        Green Gold Launches Advanced Cattle Feed
                      </h3>

                      <p className="mt-2 text-sm text-gray-500 flex-grow">
                        Stay updated with the latest happenings, product
                        launches, and events at Green Gold.
                      </p>

                      <Link
                        to="/news-events"
                        className="mt-4 inline-flex items-center gap-2 text-green-600 font-medium group"
                      >
                        View Details
                        <span
                          className="w-5 h-5 rounded-full border border-green-500
                flex items-center justify-center
                group-hover:border-green-600
                transition-colors duration-300"
                        >
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-[10px]
                  group-hover:text-green-600
                  transition-colors duration-300"
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                {/* <!-- Card 4 --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col">
                    {/* <!-- Image --> */}
                    <img
                      src={newsslider4}
                      className="h-48 w-full object-cover rounded-b-2xl"
                    />

                    {/* <!-- Content --> */}
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-xs text-green-600 font-medium">
                        12 Aug 2025
                      </span>

                      <h3 className="mt-2 font-bold text-gray-900">
                        Farmer Awareness Program Conducted in Odisha
                      </h3>

                      <p className="mt-2 text-sm text-gray-500 flex-grow">
                        Stay updated with the latest happenings, product
                        launches, and events at Green Gold.
                      </p>

                      <Link
                        to="/news-events"
                        className="mt-4 inline-flex items-center gap-2 text-green-600 font-medium group"
                      >
                        View Details
                        <span
                          className="w-5 h-5 rounded-full border border-green-500
                flex items-center justify-center
                group-hover:border-green-600
                transition-colors duration-300"
                        >
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-[10px]
                  group-hover:text-green-600
                  transition-colors duration-300"
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                {/* <!-- Card 5 --> */}
                <SwiperSlide className="h-auto mb-2">
                  <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col">
                    {/* <!-- Image --> */}
                    <img
                      src={newsslider5}
                      className="h-48 w-full object-cover rounded-b-2xl"
                    />

                    {/* <!-- Content --> */}
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-xs text-green-600 font-medium">
                        12 Aug 2025
                      </span>

                      <h3 className="mt-2 font-bold text-gray-900">
                        Farmer Awareness Program Conducted in Odisha
                      </h3>

                      <p className="mt-2 text-sm text-gray-500 flex-grow">
                        Stay updated with the latest happenings, product
                        launches, and events at Green Gold.
                      </p>

                      <Link
                        to="/news-events"
                        className="mt-4 inline-flex items-center gap-2 text-green-600 font-medium group"
                      >
                        View Details
                        <span
                          className="w-5 h-5 rounded-full border border-green-500
                flex items-center justify-center
                group-hover:border-green-600
                transition-colors duration-300"
                        >
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-[10px]
                  group-hover:text-green-600
                  transition-colors duration-300"
                          />
                        </span>
                      </Link>
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


export default Home;