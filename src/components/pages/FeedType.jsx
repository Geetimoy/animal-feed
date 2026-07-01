import Header from "../Header";
import Footer from "../Footer";
import EnquiryPopup from "../EnquiryPopup"; // Add this import

import { useState, useEffect } from "react";

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
import { Link, useLocation } from "react-router-dom";
import nutritionHero from "../../assets/images/nutrition-banner.png";
import { Helmet } from "react-helmet";

import { API_URL } from "../../config/api";
import axios from "axios";
import HeroBanner from "../HeroBanner";
import { useBanner } from "../../hooks/useBanner";

// For SEO
import SEO from "./SEO";
import usePageSEO from "../../hooks/usePageSEO";

function FeedType() {
  // Add popup state
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [selectedFeed, setSelectedFeed] = useState('');

  // Add popup functions
  const openPopup = (animalType = '', feedInterest = '') => {
    setSelectedAnimal(animalType);
    setSelectedFeed(feedInterest);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedAnimal('');
    setSelectedFeed('');
  };

  const [showAll, setShowAll] = useState(false);
  const { seo } = usePageSEO("static/feed-type");

  const iconMap = {
    faDrumstickBite,
    faShieldVirus,
    faEgg,
    faDumbbell,
  };

  const pageSlug = "feed-type";
  const { bannerItem, isLoading, error } = useBanner(pageSlug);



  const [feedSettings, setFeedSettings] = useState(null);

  useEffect(() => {
    fetchFeedSettings();
  }, []);

  const fetchFeedSettings = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/feed-type-settings`
      );

      setFeedSettings(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const cattle = feedSettings?.data?.cattle;
  const poultry = feedSettings?.data?.poultry;
  const pig = feedSettings?.data?.pig;
  const fish = feedSettings?.data?.fish;

  const location = useLocation();

  useEffect(() => {
    if (!feedSettings) return;

    if (location.hash) {
      const sectionId = location.hash.substring(1);

      setTimeout(() => {
        const element = document.getElementById(sectionId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);
    }
  }, [feedSettings, location.hash]);

  return (
    <>
      <SEO seo={seo} />
      <Header></Header>
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
          height="h-[500px]"
          isLoading={isLoading}
        />

        {/* ================= CATTLE ================= */}
        <section id="cattle" className="py-10 md:py-12 bg-gray-100">
          <div className="text-center  mb-6">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center ">
              {cattle?.heading} <span className="text-[#ffa800]"> {" "}
                {cattle?.heading_highlight}</span>
            </h2>
          </div>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12">
            <img
              src={cattle?.image_url}
              className="block w-full h-[280px] rounded-2xl md:h-[350px] object-cover"
              alt=""
            />

            <div className="space-y-6 md:space-y-8">
              {cattle?.feed_cards?.map((feed, index) => (
                <div key={index}
                  className="relative w-full h-auto bg-white rounded-2xl p-4 md:p-8 space-y-5
                      shadow-sm z-30"
                >
                  <h3 className="text-[22px] md:text-[24px] font-bold text-gray-800">
                    {feed.title}
                  </h3>

                  <ul className="space-y-3 text-sm text-gray-700">
                    {feed.bullets?.map((bullet, i) => (
                      <li key={i} className="relative pl-7 text-gray-700 leading-relaxed">
                        <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-white text-[10px]"
                          />
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Feeding Schedule */}
          <div className="mt-6 md:mt-14 max-w-7xl mx-auto px-4 ">
            <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-3 mb-4 md:mb-6 text-center justify-center">
              Cattle Feeding Schedule
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8   p-4 md:p-8 ">
              {cattle?.schedule_tables?.map((table, tableIndex) => (
                <div key={tableIndex}>
                  <div className=" bg-white rounded-2xl  border border-gray-200 shadow-sm ">
                    <h4 className="text-[16px] md:text-[18px] font-bold text-gray-800 leading-normal text-center md:text-left mb-4 mt-4 ml-0 md:ml-6 ">
                      {table.title}
                    </h4>

                    <div className="overflow-x-auto  ">
                      <table className="w-full  border-collapse">
                        <thead className="bg-green-100 ">
                          <tr>
                            {table.columns?.map((column, colIndex) => (
                              <th key={colIndex} className="px-4 py-3 text-center text-sm md:text-base font-semibold ">
                                {column}
                              </th>
                            ))}
                          </tr>
                        </thead>

                        <tbody className="text-gray-700">
                          {table.rows?.map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-green-50 transition">
                              {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="px-4 py-3 text-center  whitespace-nowrap">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enquiry Button - CATTLE */}
            <div className="mt-8 text-center">
              <button
                onClick={() => openPopup('cattle', '')}
                className="bg-[#009a62] hover:bg-[#007a4d] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 cursor-pointer"
              >
                Enquire about Cattle Feed
              </button>
            </div>
          </div>
        </section>

        {/* ================= Poultry ================= */}
        <section id="poultry" className="py-10 md:py-12">
          <div className="text-center  mb-6 px-4">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center">
              {poultry?.heading} <span className="text-[#ffa800]">{poultry?.heading_highlight}</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-[16px] md:text-[18px]">
              {poultry?.description}
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-stretch gap-6">
            {poultry?.feed_cards?.map((card, index) => (
              <div key={index} className="relative w-full h-full bg-white rounded-2xl  p-4 md:p-8 shadow-sm z-30 flex flex-col">
                <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center leading-[40px] mb-2 md:mb-4">
                  <FontAwesomeIcon icon={iconMap[card.icon_key] || faDrumstickBite} />
                </span>

                <h2 className="text-lg font-bold text-gray-900 mb-2 text-center min-h-[48px] flex items-center ">
                  {card.title}
                </h2>

                <ul className="space-y-3 text-sm text-gray-700">
                  {card.bullets?.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="relative pl-7 text-gray-700 leading-relaxed">
                      <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white text-[10px]"
                        />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Feeding Schedule */}
          <div className="mt-8 md:mt-14 max-w-7xl mx-auto px-4 ">
            <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-3 mb-4 md:mb-6 text-center justify-center">
              Poultry Feeding Schedule
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl p-4 md:p-8 shadow-sm">
              {poultry?.schedule_tables?.map((table, tableIndex) => (
                <div key={tableIndex} className=" bg-white rounded-2xl  border border-gray-200 shadow-sm">
                  <h4 className="text-[16px] md:text-[18px] font-bold text-gray-800 leading-normal text-center md:text-left mb-4 mt-4 md:ml-6">
                    {table.title}
                  </h4>

                  <div className="overflow-x-auto  ">
                    <table className="w-full border-collapse">
                      <thead className="bg-green-100 text-gray-800">
                        <tr>
                          {table.columns?.map((column, index) => (
                            <th key={index} className="px-2 md:px-4 py-3 text-center text-sm md:text-base font-semibold ">
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody className="text-gray-700">
                        {table.rows?.map((row, rowIndex) => (
                          <tr key={rowIndex} className="hover:bg-green-50 transition">
                            {row.map((cell, cellIndex) => (
                              <td key={cellIndex} className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {tableIndex === 0 && poultry?.schedule_note && (
                    <div className="p-4 font-semibold text-gray-800">
                      {poultry.schedule_note}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Enquiry Button - POULTRY */}
            <div className="mt-8 text-center">
              <button
                onClick={() => openPopup('poultry', '')}
                className="bg-[#009a62] hover:bg-[#007a4d] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 cursor-pointer"
              >
                Enquire about Poultry Feed
              </button>
            </div>
          </div>
        </section>

        {/* ================= PIG ================= */}
        <section id="pig" className="py-10 md:py-12 bg-gray-100">
          <div className="text-center mb-6  px-4">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center ">
              {pig?.heading} <span className="text-[#ffa800]">{pig?.heading_highlight}</span>
            </h2>

            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-[16px] md:text-[18px]">
              {pig?.description}
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch gap-4 md:gap-6">
            {pig?.feed_cards?.map((card, index) => (
              <div key={index} className="relative w-full h-full bg-white rounded-2xl  p-4 md:p-8 shadow-sm z-30 flex flex-col">
                <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center  leading-[40px]  mb-2 md:mb-4">
                  <FontAwesomeIcon icon={iconMap[card.icon_key] || faPiggyBank} />
                </span>

                <h2 className="text-lg font-bold text-gray-900 mb-2 text-center min-h-[48px] flex items-center ">
                  {card.title}
                </h2>

                <ul className="space-y-3 text-sm text-gray-700">
                  {card.bullets?.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="relative pl-7 text-gray-700 leading-relaxed">
                      <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white text-[10px]"
                        />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Feeding Schedule */}
          <div className="mt-8 md:mt-14 max-w-7xl mx-auto px-4">
            <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-3 mb-6 text-center justify-center">
              Pig Feeding Schedule
            </h3>

            <div className="bg-white rounded-2xl p-4 md:p-8 shadow-sm ">
              {pig?.schedule_tables?.map((table, index) => (
                <div key={index} className=" bg-white rounded-2xl  border border-gray-200 shadow-sm">
                  <h4 className="text-[18px] font-bold text-gray-800 leading-normal text-center md:text-left mb-4 mt-4 md:ml-6">
                    {table.title}
                  </h4>

                  <div className="overflow-x-auto  ">
                    <table className="w-full border-collapse">
                      <thead className="bg-green-100 text-gray-800">
                        <tr>
                          {table.columns?.map((column, colIndex) => (
                            <th key={colIndex} className="px-2 md:px-4 py-3 text-center text-sm md:text-base font-semibold">
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody className="text-gray-700">
                        {table.rows?.map((row, rowIndex) => (
                          <tr key={rowIndex} className="hover:bg-green-50 transition">
                            {row.map((cell, cellIndex) => (
                              <td className="px-2 md:px-4 py-3 text-center  whitespace-nowrap">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            {/* Enquiry Button - PIG */}
            <div className="mt-8 text-center">
              <button
                onClick={() => openPopup('pig', '')}
                className="bg-[#009a62] hover:bg-[#007a4d] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 cursor-pointer"
              >
                Enquire about Pig Feed
              </button>
            </div>
          </div>
        </section>

        {/* ================= FISH ================= */}
        <section id="fish" className="py-10 md:py-12">
          <div className="text-center  mb-6 px-4">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center ">
              {fish?.heading} <span className="text-[#ffa800]">{fish?.heading_highlight}</span>
            </h2>
          </div>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
            <div className="  order-2 md:order-1">
              <div className="space-y-8">
                {fish?.feed_cards?.map((card, index) => (
                  <div key={index}
                    className="relative w-full h-auto bg-white rounded-2xl  p-4 md:p-8 space-y-5
                     shadow-sm z-30"
                  >
                    <h3 className="text-[22px] md:text-[24px] font-bold text-gray-800">
                      {card.title}
                    </h3>

                    <ul className="space-y-3 text-sm text-gray-700">
                      {card.bullets?.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="relative pl-7 text-gray-700 leading-relaxed">
                          <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-white text-[10px]"
                            />
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className=" order-1 md:order-2">
              <img
                src={fish?.image_url}
                className=" w-full  h-[280px]  md:h-[350px] object-cover  rounded-2xl "
                alt={fish?.heading}
              />
            </div>
          </div>

          {/* Enquiry Button - FISH */}
          <div className="mt-8 text-center">
            <button
              onClick={() => openPopup('fish', '')}
              className="bg-[#009a62] hover:bg-[#007a4d] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 cursor-pointer"
            >
              Enquire about Fish Feed
            </button>
          </div>
        </section>
      </main>

      {/* Enquiry Popup */}
      <EnquiryPopup
        isOpen={isPopupOpen}
        onClose={closePopup}
        animalType={selectedAnimal}
        feedInterest={selectedFeed}
      />

      <Footer></Footer>
    </>
  );
}

export default FeedType;