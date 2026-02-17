import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";

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
  return (
    <>
      <Header></Header>
      <main className="pt-16 overflow-x-hidden">
        {/* Hero Section */}
        <motion.section className="relative z-0"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="relative">
            <motion.img
              src={nutritionHero}
              alt="Contact Us Banner"
              className="w-full md:h-auto h-[500px] object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
            <motion.div className="absolute inset-0  flex items-center justify-center flex-col"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h1 className="text-white text-4xl md:text-6xl font-bold max-w-6xl px-4" variants={slideInUp}>
                Nutrition
              </motion.h1>

              <motion.p className="text-gray-200 text-[16px] md:text-xl text-center max-w-6xl mt-6"
                variants={slideInUp}
                transition={{ delay: 0.1 }}
              >
                At Green Gold Animal Feed, our nutrition programs are designed
                using scientific nutrient requirements, feed conversion ratios
                (FCR), and performance calculations to deliver measurable
                results for farmers.
              </motion.p>
              <motion.div className="flex flex-wrap gap-2 md:gap-4 justify-center"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariant}>
                  <Link
                    to="/distributor"
                    className="mt-4 md:mt-6 w-full  md:w-[198px] h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2 "
                  >
                    <span className="text-[20px] font-bold font-inter">
                      <FontAwesomeIcon icon={faMagnifyingGlass} /> Find
                      Distributor
                    </span>
                  </Link>
                </motion.div>


                <motion.div variants={itemVariant}>
                  <Link
                    to="/contact-us"
                    className="mt-3 md:mt-6  w-full  md:w-[198px] h-[48px] border text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2"
                  >
                    <span className="text-[20px] font-bold font-inter">
                      <FontAwesomeIcon icon={faLocationDot} /> Contact Us
                    </span>
                  </Link>
                </motion.div>

              </motion.div>
            </motion.div>
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
              className="text-[26px] md:text-5xl font-semibold text-gray-900 text-center md:text-left"
              variants={slideInUp}
            >
              {" "}
              Cattle <span className="text-[#ffa800]">Nutrition</span>{" "}
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
                className="text-[26px] md:text-5xl font-semibold text-gray-900 text-center md:text-left hidden md:block"
                variants={slideInUp}
              >
                {" "}
                Cattle <span className="text-[#ffa800]">Nutrition</span>{" "}
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
                  whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
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
                  whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
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
                  whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
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
                  whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
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
            </motion.div>
          </div>
        </motion.section>

        {/* ================= POULTRY ================= */}
        <motion.section
          className="bg-white py-8 md:py-12 gsap-fade-in"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto px-4 mb-4 md:hidden">
            <motion.h2
              className="text-[26px] md:text-5xl font-semibold text-gray-900 text-center md:text-left"
              variants={slideInUp}
            >
              {" "}
              Poultry <span className="text-[#ffa800]">Nutrition</span>{" "}
            </motion.h2>

            <motion.p
              className="text-[16px] text-gray-600 mt-1 text-center md:text-left mt-2 mb-4"
              variants={slideInUp}
              transition={{ delay: 0.1 }}
            >
              Balanced calcium ensures strong eggshells and reduced breaka
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
                {" "}
                Poultry <span className="text-[#ffa800]">Nutrition</span>{" "}
              </motion.h2>

              <motion.p
                className="text-[16px] text-gray-600 mt-1 text-center md:text-left mt-2 mb-4 hidden md:block"
                variants={slideInUp}
                transition={{ delay: 0.1 }}
              >
                Balanced calcium ensures strong eggshells and reduced breaka
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
                  whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
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
                  whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
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
                  whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
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
          className="bg-gray-100 py-8 md:py-12 gsap-fade-in"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto px-4 mb-4 md:hidden">
            <motion.h2
              className="text-[26px] md:text-5xl font-semibold text-gray-900 text-center md:text-left mb-4"
              variants={slideInUp}
            >
              {" "}
              Pig <span className="text-[#ffa800]">Nutrition</span>{" "}
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
                className="text-[26px] md:text-5xl font-semibold text-gray-900 text-center md:text-left mb-4 hidden md:block"
                variants={slideInUp}
              >
                {" "}
                Pig <span className="text-[#ffa800]">Nutrition</span>{" "}
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
              className="text-[26px] md:text-5xl font-semibold text-gray-900 text-center md:text-left md:hidden"
              variants={slideInUp}
            >
              {" "}
              Fish <span className="text-[#ffa800]">Nutrition</span>{" "}
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
                {" "}
                Fish <span className="text-[#ffa800]">Nutrition</span>{" "}
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
                  whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
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
                  whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
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
                  whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
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

        <motion.section className="w-full bg-gray-100 py-8 md:py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto px-4">
            {/* Heading */}
            <motion.h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center mb-4 md:mb-8" variants={slideInUp}>
              Why GGAF <span className="text-[#ffa800]">Nutrition Works</span>
            </motion.h2>

            {/* Cards */}
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5  gap-4 md:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Card 1 */}
              <motion.div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg transition"
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
                <p className="text-gray-600 ">
                  Precise nutrient formulations based on species-specific
                  requirements.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg transition"
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
              </motion.div>

              {/* Card 3 */}
              <motion.div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg transition"
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
              </motion.div>

              {/* Card 4 */}
              <motion.div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg transition"
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
              </motion.div>

              {/* Card 5 */}
              <motion.div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition"
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
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Nutrition;