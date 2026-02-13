import Header from "../Header";
import Footer from "../Footer";

import { useState } from "react";

import banner1 from '../../assets/images/Layer35-cattle.png';
import banner2 from '../../assets/images/Layer37-fish.png';
import banner3 from '../../assets/images/Layer38-poultry.png';
import banner4 from '../../assets/images/Layer39-pig.png';
import contactBaner from '../../assets/images/contact-banner.jpg';
import animal1 from "../../assets/images/cattle1.png";
import animal2 from "../../assets/images/pig2.png";
import animal3 from "../../assets/images/poultry2.png";
import animal4 from "../../assets/images/fish2.png";
import feedbanner from "../../assets/images/cattle-banner-2.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCow,
  faChartLine,
  faDumbbell,
  faSeedling,
  faShieldHalved,
  faLeaf,
  faEgg,
  faShieldVirus,
  faArrowTrendUp,
  faGaugeHigh,
  faBolt,
  faDrumstickBite,
  faPiggyBank,
  faFish,
  faWater,
  faFlask,
  faRecycle,
  faCheck,
  faArrowRight,
  faLocationDot,
  faMagnifyingGlass,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import nutritionHero from "../../assets/images/nutrition-banner.png";

function FeedType(){

  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <Header></Header>
      <main className="pt-16 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative z-0">
          <div className="relative">
            <img
              src={feedbanner}
              alt="Contact Us Banner"
              className="w-full md:h-[500px] h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
            <div className="absolute inset-0  flex items-center justify-center flex-col px-4">
              <h1 className="text-white text-4xl md:text-6xl font-bold max-w-6xl px-4">
                Types of <span className="text-[#ffa800]">Feeds</span>
              </h1>

              <p className="text-gray-200 text-[16px] md:text-xl text-center max-w-6xl mt-6">
                At Green Gold Animal Feed, our nutrition programs are designed
                using scientific nutrient requirements, feed conversion ratios
                (FCR), and performance calculations to deliver measurable
                results for farmers.
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

        {/* ================= CATTLE ================= */}
        <section className="py-8 md:py-12 bg-gray-100">
          <div className="text-center  mb-6">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center ">
              Cattle <span className="text-[#ffa800]">Feed</span>
            </h2>
          </div>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
            <img
              src={animal1}
              className="block w-full h-[280px] rounded-2xl md:h-[350px] object-cover"
              alt=""
            />

            <div className="space-y-8">
              <div
                className="relative w-full h-auto bg-white rounded-2xl p-8 space-y-5
                      shadow-sm z-30"
              >
                <h3 className="text-[22px] md:text-[24px] font-bold text-gray-800">
                  Cattle Concentrate Feed
                </h3>

                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="relative pl-7 text-gray-700 leading-relaxed">
                    <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-white text-[10px]"
                      />
                    </span>
                    Protein: 16–18%
                  </li>
                  <li className="relative pl-7 text-gray-700 leading-relaxed">
                    <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-white text-[10px]"
                      />
                    </span>
                    Enhances digestion & feed efficiency
                  </li>
                  <li className="relative pl-7 text-gray-700 leading-relaxed">
                    <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-white text-[10px]"
                      />
                    </span>
                    Suitable for dairy cattle & buffaloes
                  </li>
                  {/* <li className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-[10px] h-[10px] bg-green-600 rounded-full">
                      <i className="fa-solid fa-arrow-right text-white text-[10px]"></i>
                    </span>
                    Enhances digestion & feed efficiency
                  </li> */}
                  {/* <li className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-[10px] h-[10px] bg-green-600 rounded-full">
                      <i className="fa-solid fa-arrow-right text-white text-[10px]"></i>
                    </span>
                    Suitable for dairy cattle & buffaloes
                  </li> */}
                </ul>
              </div>
              <div
                className="relative w-full h-auto bg-white rounded-2xl p-8 space-y-5
                       shadow-sm z-30"
              >
                <h3 className="text-[22px] md:text-[24px] font-bold text-gray-800">
                  Calf Starter Feed
                </h3>

                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="relative pl-7 text-gray-700 leading-relaxed">
                    <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-white text-[10px]"
                      />
                    </span>
                    Protein: 20–22%
                  </li>

                  <li className="relative pl-7 text-gray-700 leading-relaxed">
                    <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-white text-[10px]"
                      />
                    </span>
                    Supports early rumen development
                  </li>
                  <li className="relative pl-7 text-gray-700 leading-relaxed">
                    <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-white text-[10px]"
                      />
                    </span>
                    Promotes faster & healthier growth
                  </li>
                  <li className="relative pl-7 text-gray-700 leading-relaxed">
                    <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-white text-[10px]"
                      />
                    </span>
                    Suitable for calves (up to 6 months)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Feeding Schedule */}
          <div className="mt-8 md:mt-14 max-w-7xl mx-auto px-4 ">
            <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-3 mb-6 text-center justify-center">
              {/* <FontAwesomeIcon icon={faClipboardList} /> */}
              Cattle Feeding Schedule
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8   p-4 md:p-8 ">
              <div>
                {/* Calves */}
                <div className=" bg-white rounded-2xl  border border-gray-200 shadow-sm ">
                  <h4 className="text-[16px] md:text-[18px] font-bold text-gray-800 leading-normal text-center md:text-left mb-4 mt-4 ml-0 md:ml-6 ">
                    {/* <FontAwesomeIcon icon={faCow} /> */}
                    Calves (0–6 Months)
                  </h4>

                  <div className="overflow-x-auto  ">
                    <table className="w-full  border-collapse">
                      <thead className="bg-green-100 ">
                        <tr>
                          <th className="px-4 py-3 text-center text-sm md:text-base font-semibold ">
                            Age
                          </th>
                          <th className="px-4 py-3 text-center text-sm md:text-base font-semibold ">
                            Feed Type
                          </th>
                          <th className="px-4 py-3 text-center text-sm md:text-base font-semibold ">
                            Quantity / Day
                          </th>
                        </tr>
                      </thead>

                      <tbody className="text-gray-700">
                        <tr className="hover:bg-green-50 transition">
                          <td className="px-4 py-3 text-center  whitespace-nowrap">
                            0–3 months
                          </td>
                          <td className="px-4 py-3 text-center  whitespace-nowrap">
                            Calf Starter
                          </td>
                          <td className="px-4 py-3 text-center  whitespace-nowrap">
                            0.5 – 1.0 kg
                          </td>
                        </tr>

                        <tr className="hover:bg-green-50 transition">
                          <td className="px-4 py-3 text-center  whitespace-nowrap">
                            3–6 months
                          </td>
                          <td className="px-4 py-3 text-center  whitespace-nowrap">
                            Calf Starter + Green Fodder
                          </td>
                          <td className="px-4 py-3 text-center  whitespace-nowrap">
                            1.0–2.0 kg
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Growing Cattle */}
              <div>
                <div className=" bg-white rounded-2xl  border border-gray-200 shadow-sm ">
                  <h4 className="text-[16px] md:text-[18px] font-bold text-gray-800 leading-normal text-center md:text-left mb-4 mt-4  ml-0 md:ml-6">
                    {/* <FontAwesomeIcon icon={faCow} /> */}
                    Growing Cattle (6–24 Months)
                  </h4>
                  <div className="overflow-x-auto   hidden md:block ">
                    <table className="w-full border-collapse">
                      <thead className="bg-green-100 ">
                        <tr>
                          <th className="px-4 py-3 text-center text-sm md:text-base font-semibold ">
                            Feed Type
                          </th>

                          <th className="px-4 py-3 text-center text-sm md:text-base font-semibold ">
                            Quantity / Day
                          </th>
                        </tr>
                      </thead>

                      <tbody className="text-gray-700">
                        {/* Row 1 */}
                        <tr className="hover:bg-green-50 transition">
                          <td className="px-4 py-3 text-center">Cattle Feed</td>
                          <td className="px-4 py-3 text-center">2 – 3 kg</td>
                        </tr>

                        {/* Row 2 - Green Fodder */}
                        <tr
                          className={`hover:bg-green-50 transition  ${!showAll ? "relative" : ""}`}
                        >
                          <td className="px-4 py-3 text-center">
                            Green Fodder
                          </td>
                          <td className="px-4 py-3 text-center">10–15 kg</td>

                          {!showAll && (
                            <button
                              onClick={() => setShowAll(true)}
                              className="absolute left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        w-10 h-10 rounded-full border border-gray-300
        bg-white shadow-md
        flex items-center justify-center
        text-gray-600
        hover:border-green-500 hover:text-green-500
        transition-all duration-500 ease-in-out
        animate-bounce"
                            >
                              <FontAwesomeIcon icon={faArrowDown} />
                            </button>
                          )}
                        </tr>

                        {/* Row 3 - Dry Fodder */}
                        {showAll && (
                          <tr className="hover:bg-green-50 transition relative">
                            <td className="px-4 py-3 text-center">
                              Dry Fodder
                            </td>
                            <td className="px-4 py-3 text-center">4–5 kg</td>

                            <button
                              onClick={() => setShowAll(false)}
                              className="absolute left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        w-10 h-10 rounded-full border border-gray-300
        bg-white shadow-md
        flex items-center justify-center
        text-gray-600
        hover:border-green-500 hover:text-green-500
        transition-all duration-500 ease-in-out
        animate-bounce"
                            >
                              <FontAwesomeIcon icon={faArrowUp} />
                            </button>
                          </tr>
                        )}
                      </tbody>

                      {/* <tbody className="text-gray-700">
                        <tr className="hover:bg-green-50 transition">
                          <td className="px-4 py-3 text-center  whitespace-nowrap">
                            Cattle Feed
                          </td>
                          <td className="px-4 py-3 text-center  whitespace-nowrap">
                            2 – 3 kg
                          </td>
                        </tr>
                        

                        <tr className="hover:bg-green-50 transition relative">
                          <td className="px-4 py-3 text-center  whitespace-nowrap">
                            Green Fodder
                          </td>
                          
                          <td className="px-4 py-3 text-center  whitespace-nowrap ">
                            10–15 kg
                          </td>
                        </tr>

                        {showAll && (
                          <tr className="hover:bg-green-50 transition">
                            <td className="px-4 py-3 text-center  whitespace-nowrap">
                              Dry Fodder
                            </td>
                            <td className="px-4 py-3 text-center  whitespace-nowrap">
                              4–5 kg
                            </td>
                          </tr>
                        )}
                      </tbody> */}
                    </table>
                  </div>

                  <div className="overflow-x-auto    md:hidden ">
                    <table className="w-full border-collapse">
                      <thead className="bg-green-100 ">
                        <tr>
                          <th className="px-4 py-3 text-center text-sm md:text-base font-semibold ">
                            Feed Type
                          </th>

                          <th className="px-4 py-3 text-center text-sm md:text-base font-semibold ">
                            Quantity / Day
                          </th>
                        </tr>
                      </thead>

                      <tbody className="text-gray-700">
                        {/* Row 1 */}
                        <tr className="hover:bg-green-50 transition">
                          <td className="px-4 py-3 text-center">Cattle Feed</td>
                          <td className="px-4 py-3 text-center">2 – 3 kg</td>
                        </tr>

                        {/* Row 2 - Green Fodder */}
                        <tr className="hover:bg-green-50 transition">
                          <td className="px-4 py-3 text-center">
                            Green Fodder
                          </td>
                          <td className="px-4 py-3 text-center">10–15 kg</td>
                        </tr>

                        {/* Row */}

                        <tr className="hover:bg-green-50 transition">
                          <td className="px-4 py-3 text-center">Dry Fodder</td>
                          <td className="px-4 py-3 text-center">4–5 kg</td>
                        </tr>
                      </tbody>

                      {/* <tbody className="text-gray-700">
                        <tr className="hover:bg-green-50 transition">
                          <td className="px-4 py-3 text-center  whitespace-nowrap">
                            Cattle Feed
                          </td>
                          <td className="px-4 py-3 text-center  whitespace-nowrap">
                            2 – 3 kg
                          </td>
                        </tr>
                        

                        <tr className="hover:bg-green-50 transition relative">
                          <td className="px-4 py-3 text-center  whitespace-nowrap">
                            Green Fodder
                          </td>
                          
                          <td className="px-4 py-3 text-center  whitespace-nowrap ">
                            10–15 kg
                          </td>
                        </tr>

                        {showAll && (
                          <tr className="hover:bg-green-50 transition">
                            <td className="px-4 py-3 text-center  whitespace-nowrap">
                              Dry Fodder
                            </td>
                            <td className="px-4 py-3 text-center  whitespace-nowrap">
                              4–5 kg
                            </td>
                          </tr>
                        )}
                      </tbody> */}
                    </table>
                  </div>
                </div>

                {/* <div className="flex justify-center py-3 ">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    class=" news-next w-10 h-10 rounded-full border border-gray-300
              flex items-center justify-center
              text-gray-600
              hover:border-green-500 hover:text-green-500
              transition-colors duration-300 cursor-pointer swiper-next1  transition-transform duration-300 easy-in-out hover:translate-y-1"
                  >
                    {showAll ? (
                      <>
                        <FontAwesomeIcon icon={faArrowUp} />
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faArrowDown} />
                      </>
                    )}
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* ================= Poultry ================= */}
        <section className="py-8 md:py-12">
          <div className="text-center  mb-6 px-4">
            {/* <h2 className="text-3xl md:text-5xl font-semibold text-green-800 flex items-center justify-center gap-3">
                Feed
              </h2> */}
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center">
              Poultry <span className="text-[#ffa800]">Feed</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-[16px] md:text-[18px]">
              Proper feeding at the right age and quantity ensures better
              growth, lower feed cost, and higher productivity.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-stretch gap-6">
            {/* card-1 */}
            <div className="relative w-full h-full bg-white rounded-2xl p-8 shadow-sm z-30 flex flex-col">
              <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center leading-[40px] mb-4">
                <FontAwesomeIcon icon={faDrumstickBite} />
              </span>

              <h2 className="text-lg font-bold text-gray-900 mb-2 text-center min-h-[48px] flex items-center ">
                Broiler Starter Feed
              </h2>

              <ul className="space-y-3 text-sm text-gray-700">
                <li className="relative pl-7 text-gray-700 leading-relaxed">
                  <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-[10px]"
                    />
                  </span>
                  Protein: 22–23%
                </li>{" "}
                <li className="relative pl-7 text-gray-700 leading-relaxed">
                  <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-[10px]"
                    />
                  </span>
                  Rapid early growth and better FCR
                </li>
              </ul>
            </div>

       

            <div className="relative w-full h-full bg-white rounded-2xl p-8 shadow-sm z-30 flex flex-col">
              <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center  leading-[40px] mb-4">
                <FontAwesomeIcon icon={faShieldVirus} />
              </span>

              <h2 className="text-lg font-bold text-gray-900 mb-2 text-center min-h-[48px] flex items-center ">
                Broiler Grower Feed
              </h2>

              <ul className="space-y-3 text-sm text-gray-700">
                <li className="relative pl-7 text-gray-700 leading-relaxed">
                  <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-[10px]"
                    />
                  </span>
                  Protein: 20–21%
                </li>
                <li className="relative pl-7 text-gray-700 leading-relaxed">
                  <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-[10px]"
                    />
                  </span>
                  Balanced growth and muscle development
                </li>
              </ul>
            </div>

            {/* card-3 */}
            <div className="relative w-full h-full bg-white rounded-2xl p-8 shadow-sm z-30 flex flex-col">
              <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center  leading-[40px] mb-4">
                <FontAwesomeIcon icon={faEgg} />
              </span>

              <h2 className="text-lg font-bold text-gray-900 mb-2 text-center min-h-[48px] flex items-center ">
                Broiler Finisher Feed
              </h2>

              <ul className="space-y-3 text-sm text-gray-700">
                <li className="relative pl-7 text-gray-700 leading-relaxed">
                  <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-[10px]"
                    />
                  </span>
                  Protein: 18-19%
                </li>
                <li className="relative pl-7 text-gray-700 leading-relaxed">
                  <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-[10px]"
                    />
                  </span>
                  Efficient weight gain and market readiness
                </li>
              </ul>
            </div>

            {/* card-4 */}
            <div className="relative w-full h-full bg-white rounded-2xl p-8 shadow-sm z-30 flex flex-col">
              <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center  leading-[40px] mb-4">
                <FontAwesomeIcon icon={faDumbbell} />
              </span>

              <h2 className="text-lg font-bold text-gray-900 mb-2 text-center min-h-[48px] flex items-center ">
                Layer Feed
              </h2>

              <ul className="space-y-3 text-sm text-gray-700">
                <li className="relative pl-7 text-gray-700 leading-relaxed">
                  <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-[10px]"
                    />
                  </span>
                  Protein: 16–18%
                </li>{" "}
                <li className="relative pl-7 text-gray-700 leading-relaxed">
                  <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-[10px]"
                    />
                  </span>
                  Calcium: 3.5–4%
                </li>{" "}
                <li className="relative pl-7 text-gray-700 leading-relaxed">
                  <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-[10px]"
                    />
                  </span>
                  Supports high egg production and strong shells
                </li>
              </ul>
            </div>
          </div>

          {/* Feeding Schedule */}
          <div className="mt-8 md:mt-14 max-w-7xl mx-auto px-4 ">
            <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-3 mb-4 md:mb-6 text-center justify-center">
              {/* <FontAwesomeIcon icon={faClipboardList} /> */}
              Poultry Feeding Schedule
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl p-4 md:p-8 shadow-sm">
              {/* Broiler Feeding Program */}

              <div className=" bg-white rounded-2xl  border border-gray-200 shadow-sm">
                <h4 className="text-[16px] md:text-[18px] font-bold text-gray-800 leading-normal text-center md:text-left mb-4 mt-4 md:ml-6">
                  Broiler Feeding Program
                </h4>

                <div className="overflow-x-auto  ">
                  <table className="w-full border-collapse">
                    <thead className="bg-green-100 text-gray-800">
                      <tr>
                        <th className="px-2 md:px-4 py-3 text-center text-sm md:text-base font-semibold ">
                          Age (Days)
                        </th>
                        <th className="px-2 md:px-4 py-3 text-center text-sm md:text-base font-semibold ">
                          Feed Type
                        </th>
                        <th className="px-2 md:px-4 py-3 text-center text-sm md:text-base font-semibold ">
                          Feed Intake / Bird
                        </th>
                      </tr>
                    </thead>

                    <tbody className="text-gray-700">
                      <tr className="hover:bg-green-50 transition">
                        <td className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                          0–10 Days
                        </td>
                        <td className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                          Starter
                        </td>
                        <td className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                          250 g
                        </td>
                      </tr>

                      <tr className="hover:bg-green-50 transition">
                        <td className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                          11–24 Days
                        </td>
                        <td className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                          Grower
                        </td>
                        <td className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                          850 g
                        </td>
                      </tr>

                      <tr className="hover:bg-green-50 transition">
                        <td className="px-2 md:px-4 py-3 text-center  font-medium whitespace-nowrap">
                          25–42 Days
                        </td>
                        <td className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                          Finisher
                        </td>
                        <td className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                          1,800 g
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="text-[16px] md:text-[18px] font-bold text-gray-800 leading-normal text-center md:text-left mb-4 mt-4 md:ml-6">
                  Total Feed per Broiler: ~2.9 kg <br />
                  Target FCR: 1.6–1.8
                </h4>
              </div>

              {/* Layer Feeding Program */}
              <div className=" bg-white rounded-2xl  border border-gray-200 shadow-sm">
                <h4 className="text-[16px] md:text-[18px] font-bold text-gray-800 leading-normal text-center md:text-left mb-4 mt-4 md:ml-6">
                  Layer Feeding Program
                </h4>

                <div className="overflow-x-auto  ">
                  <table className="w-full border-collapse">
                    <thead className="bg-green-100 text-gray-800">
                      <tr>
                        <th className="px-4 py-3 text-center text-sm md:text-base font-semibold">
                          Age (Weeks)
                        </th>
                        <th className="px-4 py-3 text-center text-sm md:text-base font-semibold ">
                          Feed Type
                        </th>
                        <th className="px-4 py-3 text-center text-sm md:text-base font-semibold ">
                          Feed Intake / Bird
                        </th>
                      </tr>
                    </thead>

                    <tbody className="text-gray-700">
                      <tr className="hover:bg-green-50 transition">
                        <td className="px-4 py-3 text-center whitespace-nowrap">
                          0–8 Weeks
                        </td>
                        <td className="px-4 py-3 text-center whitespace-nowrap">
                          Chick Starter
                        </td>
                        <td className="px-4 py-3 text-center whitespace-nowrap">
                          40–60 g
                        </td>
                      </tr>

                      <tr className="hover:bg-green-50 transition">
                        <td className="px-4 py-3 text-center  whitespace-nowrap">
                          9–18 Weeks
                        </td>
                        <td className="px-4 py-3 text-center  whitespace-nowrap">
                          Grower
                        </td>
                        <td className="px-4 py-3 text-center  whitespace-nowrap">
                          70–90 g
                        </td>
                      </tr>

                      <tr className="hover:bg-green-50 transition">
                        <td className="px-4 py-3 text-center  whitespace-nowrap">
                          19+ Weeks
                        </td>
                        <td className="px-4 py-3 text-center  whitespace-nowrap">
                          Layer Feed
                        </td>
                        <td className="px-4 py-3 text-center  whitespace-nowrap">
                          110–120 g
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PIG ================= */}

        <section className="py-8 md:py-12 bg-gray-100">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center ">
              Pig <span className="text-[#ffa800]">Feed</span>
            </h2>

            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-[16px] md:text-[18px]">
              Proper feeding at the right age and quantity ensures better
              growth, lower feed cost, and higher productivity.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch gap-4 md:gap-6">
            {/* card-1 */}

            <div className="relative w-full h-full bg-white rounded-2xl p-8 shadow-sm z-30 flex flex-col">
              <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center  leading-[40px] mb-4">
                <FontAwesomeIcon icon={faPiggyBank} />
              </span>

              <h2 className="text-lg font-bold text-gray-900 mb-2 text-center min-h-[48px] flex items-center ">
               Pig Starter Feed
              </h2>

              <ul className="space-y-3 text-sm text-gray-700">
                <li className="relative pl-7 text-gray-700 leading-relaxed">
                  <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-[10px]"
                    />
                  </span>
                 Protein: 20-22%
                </li>{" "}
                <li className="relative pl-7 text-gray-700 leading-relaxed">
                  <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-[10px]"
                    />
                  </span>
                Improves early growth and gut health
                </li>{" "}
              
              </ul>
            </div>

          

            {/* card-2 */}

             <div className="relative w-full h-full bg-white rounded-2xl p-8 shadow-sm z-30 flex flex-col">
              <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center  leading-[40px] mb-4">
                <FontAwesomeIcon icon={faDrumstickBite} />
              </span>

              <h2 className="text-lg font-bold text-gray-900 mb-2 text-center min-h-[48px] flex items-center ">
               Pig Grower Feed
              </h2>

              <ul className="space-y-3 text-sm text-gray-700">
                <li className="relative pl-7 text-gray-700 leading-relaxed">
                  <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-[10px]"
                    />
                  </span>
                  Protein: 18-20%
                </li>{" "}
                <li className="relative pl-7 text-gray-700 leading-relaxed">
                  <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-[10px]"
                    />
                  </span>
               Faster weight gain with better feed conversion
                </li>{" "}
              
              </ul>
            </div>
          

            {/* card-3 */}

            
             <div className="relative w-full h-full bg-white rounded-2xl p-8 shadow-sm z-30 flex flex-col">
              <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center  leading-[40px] mb-4">
                <FontAwesomeIcon icon={faShieldVirus} />
              </span>

              <h2 className="text-lg font-bold text-gray-900 mb-2 text-center min-h-[48px] flex items-center ">
                Pig Finisher Feed
              </h2>

              <ul className="space-y-3 text-sm text-gray-700">
                <li className="relative pl-7 text-gray-700 leading-relaxed">
                  <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-[10px]"
                    />
                  </span>
                  Protein: 16-18%
                </li>{" "}
                <li className="relative pl-7 text-gray-700 leading-relaxed">
                  <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-[10px]"
                    />
                  </span>
               Cost-effective finishing and improved carcass quality
                </li>{" "}
              
              </ul>
            </div>
          
          </div>

          {/* Feeding Schedule */}

          <div className="mt-8 md:mt-14 max-w-7xl mx-auto px-4">
            <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-3 mb-6 text-center justify-center">
              Pig Feeding Schedule
            </h3>

            <div className="bg-white rounded-2xl p-4 md:p-8 shadow-sm ">
              <div className=" bg-white rounded-2xl  border border-gray-200 shadow-sm">
                <h4 className="text-[16px] md:text-[18px] font-bold text-gray-800 leading-normal text-center md:text-left mb-4 mt-4 md:ml-6">
                  Pig Growth Stage
                </h4>

                {/* table wrapper */}
                <div className="overflow-x-auto  ">
                  <table className="w-full border-collapse">
                    <thead className="bg-green-100 text-gray-800">
                      <tr>
                        <th className="px-2 md:px-4 py-3 text-center text-sm md:text-base font-semibold">
                          Age (Weeks)
                        </th>
                        <th className="px-2 md:px-4 py-3 text-center text-sm md:text-base font-semibold ">
                          Feed Type
                        </th>
                        <th className="px-2 md:px-4 py-3 text-center text-sm md:text-base font-semibold ">
                          Body Weight
                        </th>
                        <th className="px-2 md:px-4 py-3 text-center text-sm md:text-base font-semibold ">
                          Feed / Day
                        </th>
                      </tr>
                    </thead>

                    <tbody className="text-gray-700">
                      <tr className="hover:bg-green-50 transition">
                        <td className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                          6–8 Weeks
                        </td>
                        <td className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                          Starter
                        </td>
                        <td className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                          8–25 kg
                        </td>
                        <td className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                          1.0–1.5 kg
                        </td>
                      </tr>

                      <tr className="hover:bg-green-50 transition">
                        <td className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                          8–16 Weeks
                        </td>
                        <td className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                          Grower
                        </td>
                        <td className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                          25–60 kg
                        </td>
                        <td className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                          2.0–2.5 kg
                        </td>
                      </tr>

                      <tr className="hover:bg-green-50 transition">
                        <td className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                          16–24 Weeks
                        </td>
                        <td className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                          Finisher
                        </td>
                        <td className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                          60–100 kg
                        </td>
                        <td className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                          2.5–3.5 kg
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* end table */}
              </div>
            </div>
          </div>
        </section>

        {/* ================= FISH ================= */}
        <section className="py-8 md:py-12">
          <div className="text-center  mb-6">
            {/* <h2 className="text-3xl md:text-5xl font-semibold text-green-800 flex items-center justify-center gap-3">
                Feed
              </h2> */}

            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center ">
              Fish <span className="text-[#ffa800]">Feed</span>
            </h2>
          </div>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
            <div className="  order-2 md:order-1">
              <div className="space-y-8">
                <div
                  className="relative w-full h-auto bg-white rounded-2xl p-8 space-y-5
                     shadow-sm z-30"
                >
                  <h3 className="text-[22px] md:text-[24px] font-bold text-gray-800">
                    Floating Fish Feed
                  </h3>

                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="relative pl-7 text-gray-700 leading-relaxed">
                      <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white text-[10px]"
                        />
                      </span>
                      Protein: 28–32%
                    </li>
                    <li className="relative pl-7 text-gray-700 leading-relaxed">
                      <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white text-[10px]"
                        />
                      </span>
                      Better feed intake monitoring
                    </li>
                    <li className="relative pl-7 text-gray-700 leading-relaxed">
                      <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white text-[10px]"
                        />
                      </span>
                      Reduces water pollution
                    </li>
                  </ul>
                </div>
                <div
                  className="relative w-full h-auto bg-white rounded-2xl p-8 space-y-5
                     shadow-sm z-30"
                >
                  <h3 className="text-[22px] md:text-[24px] font-bold text-gray-800">
                    Sinking Fish Feed
                  </h3>

                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="relative pl-7 text-gray-700 leading-relaxed">
                      <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white text-[10px]"
                        />
                      </span>
                      Protein: 24–28%
                    </li>
                    <li className="relative pl-7 text-gray-700 leading-relaxed">
                      <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white text-[10px]"
                        />
                      </span>
                      Sinking Fish Feed
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className="space-y-3">
                <div
                  className="relative w-full h-auto bg-white rounded-2xl p-8 space-y-5
                     shadow-[0_15px_40px_rgba(0,0,0,0.15)] z-30"
                >
                  <h3 className="text-[22px] md:text-[24px] font-bold text-gray-800">
                    Floating Fish Feed
                  </h3>

                  <ul className="space-y-2 text-[16px] text-gray-700">
                    <li className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white text-[10px]"
                        />
                      </span>
                      <strong>Protein:</strong> 28–32%
                    </li>
                    <li className="flex gap-2">
                      <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white text-[10px]"
                        />
                      </span>
                      Better feed intake monitoring
                    </li>
                    <li className="flex gap-2">
                      <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white text-[10px]"
                        />
                      </span>
                      Reduces water pollution
                    </li>
                  </ul>
                </div>
                <div
                  className="relative w-full h-auto bg-white rounded-2xl p-8 space-y-5
                     shadow-[0_15px_40px_rgba(0,0,0,0.15)] z-30"
                >
                  <h3 className="text-[22px] md:text-[24px] font-bold text-gray-800">
                    Sinking Fish Feed
                  </h3>

                  <ul className="space-y-2 text-[16px] text-gray-700">
                    <li className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white text-[10px]"
                        />
                      </span>
                      <strong>Protein:</strong> 24–28%
                    </li>
                    <li className="flex gap-2">
                      <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white text-[10px]"
                        />
                      </span>
                      Suitable for bottom-feeding species
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
            <div className=" order-1 md:order-2">
              <img
                src={animal4}
                className=" w-full  h-[280px]  md:h-[350px] object-cover  rounded-2xl "
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default FeedType;