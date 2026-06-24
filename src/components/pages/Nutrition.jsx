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
  const [banner, setBanner] = useState(null);
  const pageSlug = "nutrition";

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

  const [nutritionSettings, setNutritionSettings] = useState(null);

  useEffect(() => {
    fetchNutritionSettings();
  }, []);

  const fetchNutritionSettings = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/nutrition-page-settings`
      );

      setNutritionSettings(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const cattle = nutritionSettings?.data?.cattle;
  const poultry = nutritionSettings?.data?.poultry;
  const pig = nutritionSettings?.data?.pig;
  const fish = nutritionSettings?.data?.fish;
  const whyGGAF = nutritionSettings?.data?.why_ggaf;

  const iconMap = {
  cow: faCow,
  dumbbell: faDumbbell,
  "chart-line": faChartLine,
  leaf: faLeaf,
  faCow,
  faDumbbell,
  faChartLine,
  faLeaf,
  faEgg,
  faFlask,
  faGaugeHigh,
  faRecycle,
  faBolt,
};


  return (
    <>
      <Helmet>
        <title>Nutrition - Animal Feed</title>
      </Helmet>
      <Header></Header>
      <main className="pt-16 overflow-x-hidden">
        {/* Hero Section */}
        {bannerItem?.image_url && (
          <motion.section
            className="relative z-0"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="relative">
              <motion.img
                src={bannerItem?.image_url}
                alt={bannerItem?.title}
                className="w-full md:h-auto h-[500px] object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
              <motion.div
                className="absolute inset-0  flex items-center justify-center flex-col"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.h1
                  className="text-white text-4xl md:text-6xl font-bold max-w-6xl px-4"
                  variants={slideInUp}
                >
                  {bannerItem?.title_white}
                </motion.h1>

                <motion.p
                  className="text-gray-200 text-[16px] md:text-xl text-center max-w-6xl px-4 mt-6"
                  variants={slideInUp}
                  transition={{ delay: 0.1 }}
                >
                  {/* At Green Gold Animal Feed, our nutrition programs are designed
                  using scientific nutrient requirements, feed conversion ratios
                  (FCR), and performance calculations to deliver measurable
                  results for farmers. */}
                  {bannerItem?.subtitle}
                </motion.p>
                <motion.div
                  className="flex flex-col md:flex-row gap-2 md:gap-4 w-full justify-center max-w-6xl px-4"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={itemVariant} className="w-full md:w-auto">
                    <Link
                      to={bannerItem?.cta_primary_url || "/distributor"}
                      className="mt-4 md:mt-6 w-full md:w-[215px] h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2"
                    >
                      <span className="text-[20px] font-bold font-inter">
                        <FontAwesomeIcon icon={faMagnifyingGlass} /> 
                        {bannerItem?.cta_primary_label || "Find Distributor"}
                      </span>
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariant}>
                    <Link
                      to={bannerItem?.cta_secondary_url || "/contact-us"}
                      className="mt-2 md:mt-6 w-full md:w-[198px] h-[48px] border text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2"
                    >
                      <span className="text-[20px] font-bold font-inter">
                        <FontAwesomeIcon icon={faLocationDot} /> {bannerItem?.cta_secondary_label || "Contact Us"}
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        )}
        {/*  CATTLE  */}
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
              {" "}
              {cattle?.heading} <span className="text-[#ffa800]">{cattle?.heading_highlight}</span>{" "}
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
              {" "}
              <motion.img
                src={cattle?.image_url}
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
                {" "}
                {cattle?.heading} <span className="text-[#ffa800]">{cattle?.heading_highlight}</span>{" "}
              </motion.h2>

              <motion.ul
                className="space-y-2 text-[16px] text-gray-700 mt-4 text-left"
              >
                 {cattle?.bullets?.map((bullet, index) => (
                <motion.li  key={index}
                  className="relative pl-7 text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.15,
      }}
                >
                  <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white text-[10px]"
                    />
                  </span>
                  {/* Average milk yield increase: 10–15% */}
                  {bullet}
                </motion.li>
                ))}
              </motion.ul>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
  {cattle?.stat_cards?.map((item, index) => (
    <motion.div
      key={index}
      className="bg-white rounded-2xl p-2 md:p-4 border border-gray-100 shadow-sm"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
      }}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.3 },
      }}
    >
      <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-4">
        <FontAwesomeIcon
          icon={iconMap[item.icon_key] || faLeaf}
        />
      </span>

      <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
        {item.title}
      </h4>

      <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
        {item.value}
      </p>
    </motion.div>
  ))}
</div>
            </motion.div>
          </div>
        </motion.section>

        {/*  POULTRY  */}
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
              
              {poultry?.heading}{" "} <span className="text-[#ffa800]">{poultry?.heading_highlight}</span>{" "}
            </motion.h2>

            <motion.p
              className="text-[16px] text-gray-600 mt-1 text-center md:text-left mt-2 mb-4"
              variants={slideInUp}
              transition={{ delay: 0.1 }}
            >
              {/* Balanced calcium ensures strong eggshells and reduced breaka */}
              {poultry?.description}
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
                
                {poultry?.heading}{" "} <span className="text-[#ffa800]">{poultry?.heading_highlight}{" "}</span>{" "}
              </motion.h2>

              <motion.p
                className="text-[16px] text-gray-600 mt-1 text-center md:text-left mt-2 mb-4 hidden md:block"
                variants={slideInUp}
                transition={{ delay: 0.1 }}
              >
                {/* Balanced calcium ensures strong eggshells and reduced breaka */}
                {poultry?.description}
              </motion.p>

              <motion.div
                className="bg-white rounded-2xl border border-gray-200 shadow-sm"
                variants={slideInUp}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <h3 className="text-[18px] md:text-[18px] font-bold text-gray-800 leading-normal text-center md:text-left mb-4 mt-4 ml-0 md:ml-6">
                  {/* Broiler Feed Standards */}
                  {poultry?.broiler_table_title}
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
                      {poultry?.broiler_rows?.map((row, index) => (
                      <motion.tr key={index}
                        className="hover:bg-green-50 transition"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <td className="px-4 py-3 text-center font-medium">
                          {/* Starter */}
                          {row.phase}
                        </td>
                        <td className="px-4 py-3 text-center">
                          {/* 22–23% */}
                          {row.cp}
                        </td>
                        <td className="px-4 py-3 text-center">
                          {/* 3000 */}
                          {row.energy}
                        </td>
                        <td className="px-4 py-3 text-center">
                          {/* 1.4 */}
                          {row.fcr}
                        </td>
                      </motion.tr>
                       ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              <motion.h3
                className="text-[20px] md:text-[22px] font-bold text-gray-800 leading-normal text-center md:text-left mt-6 mb-4"
                variants={slideInUp}
                transition={{ delay: 0.3 }}
              >
                {/* Layer Nutrition */}
                {poultry?.layer_heading}
              </motion.h3>

              <motion.div
  className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 mt-6"
>
  {poultry?.layer_stat_cards?.map((item, index) => (
    <motion.div
      key={index}
      className="bg-white rounded-2xl p-2 md:p-4 border border-gray-100 shadow-sm"
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.3 },
      }}
    >
      <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-4">
        <FontAwesomeIcon
          icon={iconMap[item.icon_key] || faLeaf}
        />
      </span>

      <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
        {item.title}
      </h4>

      <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
        {item.value}
      </p>
    </motion.div>
  ))}
</motion.div>
            </motion.div>

            <motion.div
              className="relative order-1 md:order-2"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {" "}
              <motion.img
                src={poultry?.image_url}
                alt={poultry?.heading}
                className="rounded-2xl w-full h-[300px] md:h-[500px] object-cover"
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </div>
        </motion.section>

        {/*  PIG  */}
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
              {pig?.heading}{" "} <span className="text-[#ffa800]">{pig?.heading_highlight}</span>{" "}
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
              {" "}
              <motion.img
                src={pig?.image_url}
                alt={pig?.heading}
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
                {pig?.heading}{" "} <span className="text-[#ffa800]">{pig?.heading_highlight}</span>{" "}
              </motion.h2>

              <motion.div
                className="bg-white rounded-2xl border border-gray-200 shadow-sm"
                variants={slideInUp}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <h3 className="text-[18px] md:text-[18px] font-bold text-gray-800 leading-normal text-center md:text-left mb-4 mt-4 ml-0 md:ml-6">
                 {pig?.table_title}
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
                      {pig?.table_rows?.map((row, index) => (
                      <motion.tr key={index}
                        className="hover:bg-green-50 transition"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <td className="px-4 py-3 text-center font-medium">
                          {row.phase}
                        </td>
                        <td className="px-4 py-3 text-center">{row.cp}</td>
                        <td className="px-4 py-3 text-center">{row.energy}</td>
                        <td className="px-4 py-3 text-center">{row.fcr}</td>
                      </motion.tr>
))}
                      {/* <motion.tr
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
                      </motion.tr> */}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/*  FISH  */}
        <motion.section
          className="bg-white py-8 md:py-12 gsap-fade-in"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              className="text-3xl  md:text-5xl font-semibold text-gray-900 text-center md:text-left md:hidden"
              variants={slideInUp}
            >
              
              {fish?.heading}{" "} <span className="text-[#ffa800]">{fish?.heading_highlight}</span>{" "}
            </motion.h2>

            <motion.p
              className="text-[16px] text-gray-600 mt-1 text-center md:text-left mt-2 mb-4 md:hidden"
              variants={slideInUp}
              transition={{ delay: 0.1 }}
            >
              {fish?.description}
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
                 {fish?.heading}{" "} <span className="text-[#ffa800]">{fish?.heading_highlight}</span>{" "}
              </motion.h2>

              <motion.p
                className="text-[16px] text-gray-600 mt-1 text-center md:text-left mt-2 mb-4 hidden md:block"
                variants={slideInUp}
                transition={{ delay: 0.1 }}
              >
                {/* Reduce feed wastage improves water quality and survival rate. */}
                {fish?.description}
              </motion.p>

              <motion.h3
                className="text-[20px] md:text-[22px] font-bold text-gray-800 leading-normal text-center md:text-left mt-0 md:mt-6 mb-4"
                variants={slideInUp}
                transition={{ delay: 0.2 }}
              >
                {fish?.composition_heading}
              </motion.h3>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 mt-2 md:mt-6"
                >
                  {fish?.stat_cards?.map((item, index) => (
                <motion.div key={index}
                  className="bg-white rounded-2xl p-2 md:p-4 border border-gray-100 shadow-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-4">
                    <FontAwesomeIcon icon={iconMap[item.icon_key] || faLeaf} />
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-[16px] md:text-[18px] text-center mb-0">
                    {item.value}
                  </p>
                </motion.div>
                ))}
                {/* <motion.div
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
                </motion.div> */}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative order-1 md:order-2"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {" "}
              <motion.img
                src={fish?.image_url}
                alt={fish?.heading}
                className="rounded-2xl w-full h-[300px] md:h-[500px] object-cover"
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Why GGAF Nutrition Works */}
        <motion.section
          className="w-full bg-gray-100 py-8 md:py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto px-4">
            {/* Heading */}
            <motion.h2
              className="text-3xl md:text-5xl font-semibold text-gray-800 text-center mb-4 md:mb-8"
              variants={slideInUp}
            >
             {whyGGAF?.heading}{" "} <span className="text-[#ffa800]">{whyGGAF?.heading_highlight}</span>
            </motion.h2>

            {/* Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5  gap-4 md:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Card 1 */}
              {whyGGAF?.cards?.map((card, index) => (
                <motion.div key={index}
                  className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg transition"
                  initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
                >
                  <FontAwesomeIcon
                    icon={iconMap[card.icon_key] || faLeaf}
                    className="text-4xl text-[#009a62] mb-4 mx-auto"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 ">
                   {card.description}
                  </p>
                </motion.div>
              ))}
              {/* Card 2 */}
              {/* <motion.div
                className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg transition"
                variants={scaleIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <FontAwesomeIcon
                  icon={faGaugeHigh}
                  className="text-4xl text-[#009a62] mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">Optimized FCR</h3>
                <p className="text-gray-600 ">
                  Improved feed conversion ratios for better efficiency.
                </p>
              </motion.div> */}

              {/* Card 3 */}
              {/* <motion.div
                className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg transition"
                variants={scaleIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <FontAwesomeIcon
                  icon={faRecycle}
                  className="text-4xl text-[#009a62] mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">Reduced Waste</h3>
                <p className="text-gray-600 ">
                  Minimized feed wastage for economic and environmental
                  benefits.
                </p>
              </motion.div> */}

              {/* Card 4 */}
              {/* <motion.div
                className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg transition"
                variants={scaleIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <FontAwesomeIcon
                  icon={faBolt}
                  className="text-4xl text-[#009a62] mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">Faster Growth</h3>
                <p className="text-gray-600 ">
                  Accelerated development and better animal health.
                </p>
              </motion.div> */}

              {/* Card 5 */}
              {/* <motion.div
                className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition"
                variants={scaleIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="text-4xl text-[#009a62] mb-4 mx-auto "
                />
                <h3 className="text-xl font-semibold mb-2">
                  Measurable Results
                </h3>
                <p className="text-gray-600 ">
                  Visible improvements in farm productivity and economics.
                </p>
              </motion.div> */}
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Nutrition;