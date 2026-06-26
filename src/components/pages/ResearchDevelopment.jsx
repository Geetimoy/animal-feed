import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import researchBanner from '../../assets/images/research-banner.jpg';
import aboutBanerMob from '../../assets/images/about-banner-mob.jpg';
import commitment from '../../assets/images/our-commitment.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMagnifyingGlass, faArrowRight, faLightbulb, faMedal, faLeaf, faCheck, faCalculator, faEnvelope, faSeedling, faShield, faChartSimple, faRecycle } from "@fortawesome/free-solid-svg-icons";
import { faResearchgate } from "@fortawesome/free-brands-svg-icons";
import { faFedora } from "@fortawesome/free-brands-svg-icons";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { API_URL } from "../../config/api";
import axios from "axios";
import { useBanner } from './../../hooks/useBanner';
import HeroBanner from './../HeroBanner';

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

  const pageSlug = "research-development";
  const { bannerItem, isLoading, error } = useBanner(pageSlug);


  const [researchData, setResearchData] = useState(null);

  useEffect(() => {
    fetchResearchData();
  }, []);

  const fetchResearchData = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/research-page-settings`
      );

      setResearchData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const laboratoryExcellence = researchData?.laboratory_excellence;
  const scienceFormulation = researchData?.science_formulation;
  const innovationSustainable = researchData?.innovation_sustainable;
  const commitmentData = researchData?.commitment;


  const iconMap = {
    faRecycle,
    faChartSimple,
    faShield,
    faMedal,
    faResearchgate,
    faCalculator,
    faLeaf,
    faSeedling,
    faFedora,
  };


  return (
    <>
      <Helmet>
        <title>Research & Development -  Animal Feed</title>
      </Helmet>
      <Header></Header>
      <main className="pt-16 overflow-hidden">

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
              {laboratoryExcellence?.heading}{" "}
              <span className="text-[#ffa800]">{laboratoryExcellence?.heading_highlight}</span>
            </motion.h2>
            <motion.p
              className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center"
              variants={slideInUp}
              transition={{ delay: 0.1 }}
            >
              {laboratoryExcellence?.description}
            </motion.p>
            <motion.p
              className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center"
              variants={slideInUp}
              transition={{ delay: 0.2 }}
            >
              {laboratoryExcellence?.subtitle}

            </motion.p>


            <motion.div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
              {laboratoryExcellence?.cards?.map((card, index) => {
                const icon = iconMap[card.icon_key];

                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow text-center"
                  >
                    {icon && (
                      <FontAwesomeIcon
                        icon={icon}
                        className="text-4xl text-[#009a62] mb-4 mx-auto"
                      />
                    )}

                    <h3 className="text-xl font-semibold mb-2">
                      {card.title}
                    </h3>

                    <p className="text-gray-600">
                      {card.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.p
              className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center"
              variants={slideInUp}
              transition={{ delay: 0.3 }}
            >
              {/* This allows us to maintain complete control over feed quality from
              raw material selection to final dispatch. */}
              {laboratoryExcellence?.footer_text}
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
              {scienceFormulation?.heading}{" "}
              <span className="text-[#ffa800]">{scienceFormulation?.heading_highlight}</span>
            </motion.h2>
            <motion.p
              className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center"
              variants={slideInUp}
              transition={{ delay: 0.1 }}
            >
              {scienceFormulation?.description}
            </motion.p>
            <motion.div
              className="mt-4 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {scienceFormulation?.left_cards?.map((card, index) => {
                const icon = iconMap[card.icon_key];

                return (
                  <motion.div
                    key={`left-${index}`}
                    className="bg-white p-6 rounded-lg shadow"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -10 }}
                  >
                    {icon && (
                      <FontAwesomeIcon
                        icon={icon}
                        className="text-4xl text-[#009a62] mb-4"
                      />
                    )}

                    <h5 className="text-lg font-semibold mb-2">
                      {card.title}
                    </h5>

                    <ul className="text-gray-600">
                      {card.bullets?.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="relative pl-7 text-gray-700 leading-relaxed mb-2"
                        >
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
                  </motion.div>
                );
              })}

              {scienceFormulation?.right_cards?.map((card, index) => {
                const icon = iconMap[card.icon_key];

                return (
                  <motion.div
                    key={`right-${index}`}
                    className="bg-white p-6 rounded-lg shadow"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -10 }}
                  >
                    {icon && (
                      <FontAwesomeIcon
                        icon={icon}
                        className="text-4xl text-[#009a62] mb-4"
                      />
                    )}

                    <h5 className="text-lg font-semibold mb-2">
                      {card.title}
                    </h5>

                    <ul className="text-gray-600">
                      {card.bullets?.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="relative pl-7 text-gray-700 leading-relaxed mb-2"
                        >
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
                  </motion.div>
                );
              })}
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
              {innovationSustainable?.heading}{" "}
              <span className="text-[#ffa800]">{innovationSustainable?.heading_highlight}</span>
            </motion.h2>
            <motion.p
              className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center"
              variants={slideInUp}
              transition={{ delay: 0.1 }}
            >
              {innovationSustainable?.subtitle}
            </motion.p>
            <motion.div
              className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {innovationSustainable?.cards?.map((card, index) => {
                const icon = iconMap[card.icon_key];

                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotate: 1,
                    }}
                  >
                    {icon && (
                      <FontAwesomeIcon
                        icon={icon}
                        className="text-4xl text-[#009a62] mb-4 mx-auto"
                      />
                    )}

                    <h3 className="text-xl font-semibold mb-2">
                      {card.title}
                    </h3>
                  </motion.div>
                );
              })}

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
            src={commitmentData?.image_url}
            alt={commitmentData?.heading}
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
              {commitmentData?.heading}{" "}<span className="text-yellow-400">{commitmentData?.heading_highlight}</span>
            </motion.h2>
            <motion.p
              className="mt-4 md:mt-6 text-white leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center"
              variants={slideInUp}
              transition={{ delay: 0.2 }}
            >
              {commitmentData?.description}
            </motion.p>
          </div>
        </motion.section>
      </main>
      <Footer></Footer>
    </>
  );
}
export default ResearchDevelopment;