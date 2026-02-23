import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";

import researchBanner from '../../assets/images/research-banner.jpg';
import aboutBanerMob from '../../assets/images/about-banner-mob.jpg';
import commitment from '../../assets/images/our-commitment.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMagnifyingGlass, faArrowRight, faLightbulb, faMedal, faLeaf, faCheck, faCalculator, faEnvelope, faSeedling, faShield, faChartSimple, faRecycle } from "@fortawesome/free-solid-svg-icons";
import { faResearchgate } from "@fortawesome/free-brands-svg-icons";
import { faFedora } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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

function ResearchDevelopment() {
  return (
    <>
      <Helmet>
        <title>Research & Development -  Animal Feed</title>
      </Helmet>
      <Header></Header>
      <main className="pt-16 overflow-hidden">

        {/* Hero Section */}
        <motion.section className="relative z-0"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="relative">
            <motion.img
              src={researchBanner}
              alt="Research & Development Banner"
              className="w-full md:h-auto h-[450px] hidden md:block object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            />
            <img
              src={researchBanner}
              alt="Research & Development Banner Mobile"
              className="w-full md:h-auto h-[500px] block md:hidden object-cover"
            />
            <motion.div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6  w-full"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6" variants={slideInUp}>
                Research & <span className="text-[#ffa800]">Development</span>
              </motion.h1>
              <motion.p className="text-white text-[16px] md:text-xl text-center"
                variants={slideInUp}
                transition={{ delay: 0.1 }}
              >
                At Green Gold Animal Feed, innovation begins in our in-house
                Research & Development laboratory, where science meets practical
                farming needs to deliver superior animal nutrition.
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
        {/* In-House Laboratory Excellence Section */}
        <motion.section
          className="py-10 md:py-12 bg-gray-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.h2
              className="text-3xl md:text-5xl font-semibold text-gray-800 text-center"
              variants={slideInUp}
            >
              In-House Laboratory{" "}
              <span className="text-[#ffa800]">Excellence</span>
            </motion.h2>
            <motion.p
              className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center"
              variants={slideInUp}
              transition={{ delay: 0.1 }}
            >
              At Green Gold Animal Feed (GGAF), innovation begins in our
              in-house Research & Development laboratory, where science meets
              practical farming needs. Our R&D team continuously works to
              improve feed quality, efficiency, and animal performance through
              research, testing, and data-driven formulation.
            </motion.p>
            <motion.p
              className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center"
              variants={slideInUp}
              transition={{ delay: 0.2 }}
            >
              Our fully equipped in-house lab enables us to:
            </motion.p>
            <motion.div
              className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white p-6 rounded-lg shadow text-center"
                variants={scaleIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <FontAwesomeIcon
                  icon={faRecycle}
                  className="text-4xl text-[#009a62] mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">Raw Materials</h3>
                <p className="text-gray-600">
                  Test raw materials for protein, moisture, fat, fiber, ash, and
                  energy values
                </p>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow text-center"
                variants={scaleIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <FontAwesomeIcon
                  icon={faChartSimple}
                  className="text-4xl text-[#009a62] mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">Analyze</h3>
                <p className="text-gray-600">
                  Analyze finished feed for nutrient accuracy and consistency
                </p>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow text-center"
                variants={scaleIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <FontAwesomeIcon
                  icon={faShield}
                  className="text-4xl text-[#009a62] mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">Monitor</h3>
                <p className="text-gray-600">
                  Monitor microbial safety and contamination
                </p>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow text-center"
                variants={scaleIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <FontAwesomeIcon
                  icon={faMedal}
                  className="text-4xl text-[#009a62] mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Ensure compliance
                </h3>
                <p className="text-gray-600">
                  Ensure compliance with quality and safety standards
                </p>
              </motion.div>
            </motion.div>
            <motion.p
              className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center"
              variants={slideInUp}
              transition={{ delay: 0.3 }}
            >
              This allows us to maintain complete control over feed quality from
              raw material selection to final dispatch.
            </motion.p>
          </div>
        </motion.section>

        {/* Science-Based Feed Formulation */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-12">
            <motion.h2
              className="text-3xl md:text-5xl font-semibold text-gray-800 text-center"
              variants={slideInUp}
            >
              Science-Based Feed{" "}
              <span className="text-[#ffa800]">Formulation</span>
            </motion.h2>
            <motion.p
              className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center"
              variants={slideInUp}
              transition={{ delay: 0.1 }}
            >
              Our science-based feed formulation is designed to meet the
              specific nutritional needs of different animals, ensuring optimal
              health and productivity.
            </motion.p>
            <motion.div
              className="mt-4 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white p-6 rounded-lg shadow"
                variants={slideInLeft}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <FontAwesomeIcon
                  icon={faResearchgate}
                  className="text-4xl text-[#009a62] mb-4"
                />
                <h5 className="text-lg font-semibold mb-2">
                  Using nutritional research and performance data, our R&D team:
                </h5>
                <ul className="text-gray-600">
                  <li className="relative pl-7 text-gray-700 leading-relaxed">
                    <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-white text-[10px]"
                      />
                    </span>
                    Designs species- and stage-specific feed formulations
                  </li>
                  <li className="relative pl-7 text-gray-700 leading-relaxed">
                    <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-white text-[10px]"
                      />
                    </span>
                    Optimizes Feed Conversion Ratio (FCR) and digestibility
                  </li>
                  <li className="relative pl-7 text-gray-700 leading-relaxed">
                    <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-white text-[10px]"
                      />
                    </span>
                    Balances nutrients to support growth, immunity,
                    reproduction, and productivity
                  </li>
                  <li className="relative pl-7 text-gray-700 leading-relaxed">
                    <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-white text-[10px]"
                      />
                    </span>
                    Continuously refines formulations based on field feedback
                  </li>
                  <li className="relative pl-7 text-gray-700 leading-relaxed">
                    <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-white text-[10px]"
                      />
                    </span>
                    Quality Testing & Continuous Improvement
                  </li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow"
                variants={slideInRight}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <FontAwesomeIcon
                  icon={faCalculator}
                  className="text-4xl text-[#009a62] mb-4"
                />
                <h5 className="text-lg font-semibold mb-2">
                  Every batch produced at GGAF undergoes:
                </h5>
                <ul className="text-gray-600">
                  <li className="relative pl-7 text-gray-700 leading-relaxed">
                    <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-white text-[10px]"
                      />
                    </span>
                    Routine laboratory testing
                  </li>
                  <li className="relative pl-7 text-gray-700 leading-relaxed">
                    <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-white text-[10px]"
                      />
                    </span>
                    Ingredient validation before use
                  </li>
                  <li className="relative pl-7 text-gray-700 leading-relaxed">
                    <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-white text-[10px]"
                      />
                    </span>
                    Performance evaluation under practical farm conditions
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Innovation for Sustainable Nutrition */}
        <motion.section
          className="bg-gray-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-12">
            <motion.h2
              className="text-3xl md:text-5xl font-semibold text-gray-800 text-center"
              variants={slideInUp}
            >
              Innovation for{" "}
              <span className="text-[#ffa800]">Sustainable Nutrition</span>
            </motion.h2>
            <motion.p
              className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center"
              variants={slideInUp}
              transition={{ delay: 0.1 }}
            >
              Our R&D focus goes beyond performance:
            </motion.p>
            <motion.div
              className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white p-6 rounded-lg shadow text-center"
                variants={scaleIn}
                whileHover={{ scale: 1.05, rotate: 1, transition: { duration: 0.3 } }}
              >
                <FontAwesomeIcon
                  icon={faLeaf}
                  className="text-4xl text-[#009a62] mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Use of locally sourced and alternative ingredients
                </h3>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow text-center"
                variants={scaleIn}
                whileHover={{ scale: 1.05, rotate: 1, transition: { duration: 0.3 } }}
              >
                <FontAwesomeIcon
                  icon={faSeedling}
                  className="text-4xl text-[#009a62] mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Reduction of environmental impact
                </h3>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow text-center"
                variants={scaleIn}
                whileHover={{ scale: 1.05, rotate: 1, transition: { duration: 0.3 } }}
              >
                <FontAwesomeIcon
                  icon={faFedora}
                  className="text-4xl text-[#009a62] mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Development of cost-effective and sustainable feed solutions
                </h3>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Our R&D Commitment */}
        <motion.section
          className="relative w-full overflow-hidden gsap-fade-in"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.img
            src={commitment}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
            <motion.h2
              className="text-3xl md:text-5xl font-semibold text-white text-center"
              variants={slideInUp}
            >
              Our R&D <span className="text-yellow-400">Commitment</span>
            </motion.h2>
            <motion.p
              className="mt-4 md:mt-6 text-white leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center"
              variants={slideInUp}
              transition={{ delay: 0.2 }}
            >
              Through continuous research, advanced laboratory testing, and
              collaboration with farmers, GGAF remains committed to delivering
              reliable, scientifically proven, and future-ready animal nutrition
              solutions.
            </motion.p>
          </div>
        </motion.section>
      </main>
      <Footer></Footer>
    </>
  );
}
export default ResearchDevelopment;