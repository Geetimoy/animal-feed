import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
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
import { Link } from "react-router-dom";
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
  faArrowRight,
  faMagnifyingGlass,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import nutritionHero from "../../assets/images/nutrition-banner.png";

import { Helmet } from "react-helmet";

import { API_URL } from "../../config/api";
import axios from "axios";
import HeroBanner from "../HeroBanner";
import { useBanner } from "../../hooks/useBanner";

// For SEO
import SEO from "./SEO";
import usePageSEO from "../../hooks/usePageSEO";
import EnquiryPopup from "../EnquiryPopup";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInUp = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};



function Nutrition() {
  const pageSlug = "nutrition";
  const { bannerItem, isLoading, error } = useBanner(pageSlug);

  // State for popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [selectedFeed, setSelectedFeed] = useState('');

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

  const { seo } = usePageSEO("static/nutrition");

  return (
    <>
      {/* <Helmet>
        <title>Nutrition - Animal Feed</title>
      </Helmet> */}
      <SEO seo={seo} />
      <Header></Header>
      <main className="pt-16 overflow-x-hidden">
        {/* Hero Section - remains same */}
        <HeroBanner
          imageUrl={bannerItem?.image_url}
          titleWhite={bannerItem?.title_white}
          titleGold={bannerItem?.title_gold}
          subtitle={bannerItem?.subtitle}
          ctaPrimaryLabel={bannerItem?.cta_primary_label || "Find Distributor"}
          ctaPrimaryUrl={bannerItem?.cta_primary_url || "/distributor"}
          ctaSecondaryLabel={bannerItem?.cta_secondary_label || "Contact Us"}
          ctaSecondaryUrl={bannerItem?.cta_secondary_url || "/contact-us"}
          height="h-[450px]"
          isLoading={isLoading}
        />

        {/* ================= ANIMAL NUTRITION OVERVIEW ================= */}
        <motion.section
          className="bg-white py-10 md:py-16 gsap-fade-in"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto px-4">
            {/* Header */}
            <motion.div
              className="text-center mb-8 md:mb-12"
              variants={slideInUp}
            >
              <motion.h2
                className="text-3xl md:text-5xl font-semibold text-gray-900 mb-3 md:mb-4"
                variants={slideInUp}
              >
                Animal <span className="text-[#ffa800]">Nutrition</span>
              </motion.h2>
              <motion.p
                className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
                variants={slideInUp}
                transition={{ delay: 0.1 }}
              >
                Nutrition is the foundation of healthy livestock and profitable farming. Every animal requires the
                right balance of energy, protein, fibre, vitamins, minerals, and essential micronutrients to achieve
                optimum growth, productivity, reproductive performance, and disease resistance.
              </motion.p>
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left Column - Description */}
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.p
                  className="text-base md:text-lg text-gray-700 leading-relaxed mb-6"
                  variants={slideInUp}
                >
                  At GreenGold, we formulate feed according to species, age, production stage, and physiological
                  requirements, ensuring that every animal receives complete and balanced nutrition.
                </motion.p>

                <motion.h3
                  className="text-xl md:text-2xl font-bold text-gray-800 mb-4"
                  variants={slideInUp}
                  transition={{ delay: 0.1 }}
                >
                  Scientific feeding improves:
                </motion.h3>

                <motion.ul
                  className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    "Growth rate",
                    "Milk production",
                    "Weight gain",
                    "Egg production",
                    "Feed efficiency",
                    "Fertility",
                    "Immunity",
                    "Animal welfare"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="relative pl-7 text-sm md:text-base text-gray-700 leading-relaxed"
                      variants={itemVariant}
                    >
                      <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#00a63e]">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-white text-[10px]"
                        />
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              {/* Right Column - Updated Design with Glassmorphism */}
              <motion.div
                className="rounded-2xl p-0 h-full min-h-[200px] md:min-h-[300px] relative"
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={scaleIn}
                  transition={{ delay: 0.2 }}
                  className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#009a62] to-[#006b44] p-8 h-full flex flex-col justify-between shadow-2xl"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-yellow-400 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full border border-yellow-300"></div>

                    {/* Grid Pattern */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
                `,
                        backgroundSize: "28px 28px",
                      }}
                    />

                    {/* Decorative circles */}
                    <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-yellow-400/10 blur-2xl"></div>
                    <div className="absolute bottom-1/3 right-1/4 h-24 w-24 rounded-full bg-white/10 blur-xl"></div>
                  </div>

                  <div className="relative z-10">
                    {/* Badge */}
                    <span className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300 backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2 animate-pulse"></span>
                      Quality Feed
                    </span>

                    {/* Main Content */}
                    <div className="mt-6">
                      <div className="border-l-4 border-yellow-400 pl-6">
                        <h3 className="text-3xl md:text-4xl font-extrabold leading-tight text-white">
                          Better Nutrition
                          <span className="block text-yellow-300">Better Results</span>
                        </h3>
                      </div>

                      <p className="mt-5 max-w-lg text-base md:text-lg leading-8 text-white/90">
                        Better nutrition creates healthier animals, improves milk production,
                        increases farmer income, and builds a stronger livestock economy for a
                        sustainable future.
                      </p>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="relative z-10 mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center gap-3 text-sm text-white/80">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <FontAwesomeIcon icon={faLeaf} className="text-yellow-300" />
                      </span>
                      <span>Sustainable farming solutions</span>
                    </div>
                  </div>

                  {/* Floating dots decoration */}
                  <div className="absolute bottom-4 right-4 flex gap-1.5 opacity-30">
                    <span className="h-2 w-2 rounded-full bg-white"></span>
                    <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
                    <span className="h-2 w-2 rounded-full bg-white"></span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ================= CATTLE ================= */}
        <motion.section
          className="bg-gray-100 py-10 md:py-12 gsap-fade-in"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto px-4 mb-4 md:hidden">
            <motion.h2
              className="text-3xl md:text-5xl font-semibold text-gray-900 text-center md:text-left"
              variants={slideInUp}
            >
              Cattle <span className="text-[#ffa800]">Nutrition</span>
            </motion.h2>
          </div>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <motion.div
              className="relative"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.img
                src={animal1}
                alt="Research and Development"
                className="rounded-2xl w-full h-[300px] md:h-[500px] object-cover"
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.div>
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-3xl md:text-5xl font-semibold text-gray-900 text-center md:text-left hidden md:block"
                variants={slideInUp}
              >
                Cattle <span className="text-[#ffa800]">Nutrition</span>
              </motion.h2>

              <motion.ul
                className="space-y-2 text-[16px] text-gray-700 mt-4 text-left"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.li
                  className="relative pl-7 text-gray-700 leading-relaxed"
                  variants={itemVariant}
                >
                  <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-[10px]"
                    />
                  </span>
                  Average milk yield increase: 10–15%
                </motion.li>
                <motion.li
                  className="relative pl-7 text-gray-700 leading-relaxed"
                  variants={itemVariant}
                >
                  <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-[10px]"
                    />
                  </span>
                  Improved digestion efficiency Better fertility and body
                  condition
                </motion.li>
              </motion.ul>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 mt-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-white rounded-2xl p-2 md:p-4 border border-gray-100 shadow-sm"
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-4">
                    <FontAwesomeIcon icon={faCow} />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    Crude Protein
                  </h4>
                  <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
                    16–18%
                  </p>
                </motion.div>
                <motion.div
                  className="bg-white rounded-2xl p-2 md:p-4 border border-gray-100 shadow-sm"
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-4">
                    <FontAwesomeIcon icon={faDumbbell} />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    Total Digestible Nutrients
                  </h4>
                  <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
                    65–70%
                  </p>
                </motion.div>
                <motion.div
                  className="bg-white rounded-2xl p-2 md:p-4 border border-gray-100 shadow-sm"
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-4">
                    <FontAwesomeIcon icon={faChartLine} />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    Calcium
                  </h4>
                  <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
                    0.6–0.8%
                  </p>
                </motion.div>
                <motion.div
                  className="bg-white rounded-2xl p-2 md:p-4 border border-gray-100 shadow-sm"
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-4 md:mb-6">
                    <FontAwesomeIcon icon={faLeaf} />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    Phosphorus
                  </h4>
                  <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
                    0.4–0.6%
                  </p>
                </motion.div>
              </motion.div>

              {/* Add Enquiry Button */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => openPopup('cattle', '')}
                  className="bg-[#009a62] hover:bg-[#007a4d] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 cursor-pointer"
                >
                  Enquire about Cattle Feed
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* ================= POULTRY ================= */}
        <motion.section
          className="bg-white py-10 md:py-12 gsap-fade-in"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto px-4 mb-4 md:hidden">
            <motion.h2
              className="text-3xl md:text-5xl font-semibold text-gray-900 text-center md:text-left"
              variants={slideInUp}
            >
              Poultry <span className="text-[#ffa800]">Nutrition</span>
            </motion.h2>
          </div>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              className="order-2 md:order-1"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-[26px] md:text-5xl font-semibold text-gray-900 text-center md:text-left hidden md:block"
                variants={slideInUp}
              >
                Poultry <span className="text-[#ffa800]">Nutrition</span>
              </motion.h2>

              <motion.p
                className="text-[16px] text-gray-600 mt-1 text-center md:text-left mt-2 mb-4 hidden md:block"
                variants={slideInUp}
                transition={{ delay: 0.1 }}
              >
                Balanced calcium ensures strong eggshells and reduced breakage
              </motion.p>

              <motion.div
                className="bg-white rounded-2xl border border-gray-200 shadow-sm"
                variants={slideInUp}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <h3 className="text-[18px] md:text-[18px] font-bold text-gray-800 leading-normal text-center md:text-left mb-4 mt-4 ml-0 md:ml-6">
                  Broiler Feed Standards
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full rounded-xl">
                    <thead className="bg-green-100 text-gray-800">
                      <tr>
                        <th className="px-4 py-3 text-center text-sm md:text-base font-semibold">
                          Phase
                        </th>
                        <th className="px-4 py-3 text-center text-sm md:text-base font-semibold">
                          CP %
                        </th>
                        <th className="px-4 py-3 text-center text-sm md:text-base font-semibold">
                          Energy (Kcal/kg)
                        </th>
                        <th className="px-4 py-3 text-center text-sm md:text-base font-semibold">
                          FCR
                        </th>
                      </tr>
                    </thead>

                    <tbody className="text-gray-700 whitespace-nowrap">
                      <motion.tr
                        className="hover:bg-green-50 transition"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <td className="px-4 py-3 text-center font-medium">
                          Starter
                        </td>
                        <td className="px-4 py-3 text-center">22–23%</td>
                        <td className="px-4 py-3 text-center">3000</td>
                        <td className="px-4 py-3 text-center">1.4</td>
                      </motion.tr>

                      <motion.tr
                        className="hover:bg-green-50 transition"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <td className="px-4 py-3 text-center font-medium">
                          Grower
                        </td>
                        <td className="px-4 py-3 text-center">20–21%</td>
                        <td className="px-4 py-3 text-center">3100</td>
                        <td className="px-4 py-3 text-center">1.6</td>
                      </motion.tr>

                      <motion.tr
                        className="hover:bg-green-50 transition"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <td className="px-4 py-3 text-center font-medium">
                          Finisher
                        </td>
                        <td className="px-4 py-3 text-center">18–19%</td>
                        <td className="px-4 py-3 text-center">3200</td>
                        <td className="px-4 py-3 text-center">1.8</td>
                      </motion.tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>

              <motion.h3
                className="text-[20px] md:text-[22px] font-bold text-gray-800 leading-normal text-center md:text-left mt-6 mb-4"
                variants={slideInUp}
                transition={{ delay: 0.3 }}
              >
                Layer Nutrition
              </motion.h3>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 mt-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-white rounded-2xl p-2 md:p-4 border border-gray-100 shadow-sm"
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-4">
                    <FontAwesomeIcon icon={faDumbbell} />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    Crude Protein
                  </h4>
                  <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
                    16–18%
                  </p>
                </motion.div>
                <motion.div
                  className="bg-white rounded-2xl p-2 md:p-4 border border-gray-100 shadow-sm"
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-4">
                    <FontAwesomeIcon icon={faChartLine} />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    Calcium
                  </h4>
                  <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
                    3.5–4%
                  </p>
                </motion.div>
                <motion.div
                  className="bg-white rounded-2xl p-2 md:p-4 border border-gray-100 shadow-sm"
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-4">
                    <FontAwesomeIcon icon={faEgg} />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    Egg Production
                  </h4>
                  <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
                    90–95% peak
                  </p>
                </motion.div>
              </motion.div>

              {/* Add Enquiry Button */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => openPopup('poultry', '')}
                  className="bg-[#009a62] hover:bg-[#007a4d] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 cursor-pointer"
                >
                  Enquire about Poultry Feed
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative order-1 md:order-2"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.img
                src={animal3}
                alt="Research and Development"
                className="rounded-2xl w-full h-[300px] md:h-[500px] object-cover"
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </div>
        </motion.section>

        {/* ================= PIG ================= */}
        <motion.section
          className="bg-gray-100 py-10 md:py-12 gsap-fade-in"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto px-4 mb-4 md:hidden">
            <motion.h2
              className="text-3xl md:text-5xl font-semibold text-gray-900 text-center md:text-left mb-4"
              variants={slideInUp}
            >
              Pig <span className="text-[#ffa800]">Nutrition</span>
            </motion.h2>
          </div>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              className="relative"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.img
                src={animal2}
                alt="Research and Development"
                className="rounded-2xl w-full h-[300px] md:h-[500px] object-cover"
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.div>
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-3xl md:text-5xl font-semibold text-gray-900 text-center md:text-left mb-4 hidden md:block"
                variants={slideInUp}
              >
                Pig <span className="text-[#ffa800]">Nutrition</span>
              </motion.h2>

              <motion.div
                className="bg-white rounded-2xl border border-gray-200 shadow-sm"
                variants={slideInUp}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <h3 className="text-[18px] md:text-[18px] font-bold text-gray-800 leading-normal text-center md:text-left mb-4 mt-4 ml-0 md:ml-6">
                  Pig Feed
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-green-100 text-gray-800">
                      <tr>
                        <th className="px-4 py-3 text-center text-sm md:text-base font-semibold">
                          Phase
                        </th>
                        <th className="px-4 py-3 text-center text-sm md:text-base font-semibold">
                          CP %
                        </th>
                        <th className="px-4 py-3 text-center text-sm md:text-base font-semibold">
                          Energy (Kcal/kg)
                        </th>
                        <th className="px-4 py-3 text-center text-sm md:text-base font-semibold">
                          FCR
                        </th>
                      </tr>
                    </thead>

                    <tbody className="text-gray-700 whitespace-nowrap">
                      <motion.tr
                        className="hover:bg-green-50 transition"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <td className="px-4 py-3 text-center font-medium">
                          Starter
                        </td>
                        <td className="px-4 py-3 text-center">20–22%</td>
                        <td className="px-4 py-3 text-center">3200</td>
                        <td className="px-4 py-3 text-center">1.6</td>
                      </motion.tr>

                      <motion.tr
                        className="hover:bg-green-50 transition"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <td className="px-4 py-3 text-center font-medium">
                          Grower
                        </td>
                        <td className="px-4 py-3 text-center">18–20%</td>
                        <td className="px-4 py-3 text-center">3300</td>
                        <td className="px-4 py-3 text-center">2.2</td>
                      </motion.tr>

                      <motion.tr
                        className="hover:bg-green-50 transition"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <td className="px-4 py-3 text-center font-medium">
                          Finisher
                        </td>
                        <td className="px-4 py-3 text-center">16-18%</td>
                        <td className="px-4 py-3 text-center">3400</td>
                        <td className="px-4 py-3 text-center border border-gray-100">
                          2.8
                        </td>
                      </motion.tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Add Enquiry Button */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => openPopup('pig', '')}
                  className="bg-[#009a62] hover:bg-[#007a4d] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 cursor-pointer"
                >
                  Enquire about Pig Feed
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* ================= FISH ================= */}
        <motion.section
          className="bg-white py-8 md:py-12 gsap-fade-in"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-5xl font-semibold text-gray-900 text-center md:text-left md:hidden"
              variants={slideInUp}
            >
              Fish <span className="text-[#ffa800]">Nutrition</span>
            </motion.h2>

            <motion.p
              className="text-[16px] text-gray-600 mt-1 text-center md:text-left mt-2 mb-4 md:hidden"
              variants={slideInUp}
              transition={{ delay: 0.1 }}
            >
              Reduce feed wastage improves water quality and survival rate.
            </motion.p>
          </div>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              className="order-2 md:order-1"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-[26px] md:text-5xl font-semibold text-gray-900 text-center md:text-left hidden md:block"
                variants={slideInUp}
              >
                Fish <span className="text-[#ffa800]">Nutrition</span>
              </motion.h2>

              <motion.p
                className="text-[16px] text-gray-600 mt-1 text-center md:text-left mt-2 mb-4 hidden md:block"
                variants={slideInUp}
                transition={{ delay: 0.1 }}
              >
                Reduce feed wastage improves water quality and survival rate.
              </motion.p>

              <motion.h3
                className="text-[20px] md:text-[22px] font-bold text-gray-800 leading-normal text-center md:text-left mt-0 md:mt-6 mb-4"
                variants={slideInUp}
                transition={{ delay: 0.2 }}
              >
                Feed Composition
              </motion.h3>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 mt-2 md:mt-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-white rounded-2xl p-2 md:p-4 border border-gray-100 shadow-sm"
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-4">
                    <FontAwesomeIcon icon={faDumbbell} />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    Crude Protein
                  </h4>
                  <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
                    28-32%
                  </p>
                </motion.div>
                <motion.div
                  className="bg-white rounded-2xl p-2 md:p-4 border border-gray-100 shadow-sm"
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-4">
                    <FontAwesomeIcon icon={faChartLine} />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    Fat
                  </h4>
                  <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
                    4-6%
                  </p>
                </motion.div>
                <motion.div
                  className="bg-white rounded-2xl p-2 md:p-4 border border-gray-100 shadow-sm"
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-4">
                    <FontAwesomeIcon icon={faEgg} />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    FCR
                  </h4>
                  <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
                    1.2-1.5
                  </p>
                </motion.div>
              </motion.div>

              {/* Add Enquiry Button */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => openPopup('fish', '')}
                  className="bg-[#009a62] hover:bg-[#007a4d] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 cursor-pointer"
                >
                  Enquire about Fish Feed
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative order-1 md:order-2"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.img
                src={animal4}
                alt="Research and Development"
                className="rounded-2xl w-full h-[300px] md:h-[500px] object-cover"
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Why GGAF Nutrition Works - remains same */}
        <motion.section
          className="w-full bg-gray-100 py-8 md:py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-5xl font-semibold text-gray-800 text-center mb-4 md:mb-8"
              variants={slideInUp}
            >
              Why GGAF <span className="text-[#ffa800]">Nutrition Works</span>
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Cards remain the same */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg transition"
                variants={scaleIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <FontAwesomeIcon
                  icon={faFlask}
                  className="text-4xl text-[#009a62] mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Scientifically Balanced
                </h3>
                <p className="text-gray-600">
                  Precise nutrient formulations based on species-specific
                  requirements.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg transition"
                variants={scaleIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <FontAwesomeIcon
                  icon={faGaugeHigh}
                  className="text-4xl text-[#009a62] mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">Optimized FCR</h3>
                <p className="text-gray-600">
                  Improved feed conversion ratios for better efficiency.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg transition"
                variants={scaleIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <FontAwesomeIcon
                  icon={faRecycle}
                  className="text-4xl text-[#009a62] mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">Reduced Waste</h3>
                <p className="text-gray-600">
                  Minimized feed wastage for economic and environmental
                  benefits.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg transition"
                variants={scaleIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <FontAwesomeIcon
                  icon={faBolt}
                  className="text-4xl text-[#009a62] mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">Faster Growth</h3>
                <p className="text-gray-600">
                  Accelerated development and better animal health.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition"
                variants={scaleIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="text-4xl text-[#009a62] mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Measurable Results
                </h3>
                <p className="text-gray-600">
                  Visible improvements in farm productivity and economics.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
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

export default Nutrition;