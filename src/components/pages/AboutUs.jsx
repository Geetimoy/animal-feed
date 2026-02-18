import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../Header";
import Footer from "../Footer";

import aboutBaner from '../../assets/images/about-banner.jpg';
import aboutBanerMob from '../../assets/images/about-banner-mob.jpg';
import visionMission from '../../assets/images/cattle1.png';
import officeMan from '../../assets/images/office-man.png';
import bgNationwideImage from '../../assets/images/Laye28.png';
import commitIcon1 from '../../assets/images/commitment.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faMagnifyingGlass,
    faHandshake,
    faLightbulb,
    faMedal,
    faLeaf,
    faCheck,
    faPhone,
    faEnvelope,
    faArrowRight,
    faHandHoldingHeart,
    faHexagonNodes,
    faTrademark,
} from "@fortawesome/free-solid-svg-icons";
import { faNutritionix } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "react-router-dom";
import AnimalFeedStory from "./AnimalFeedStory";

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

function AboutUs02() {
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
            <Header />
            <main className="pt-16 overflow-hidden">
                {/* Hero Section */}
                <motion.section
                    className="relative z-0"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <div className="relative">
                        <motion.img
                            src={aboutBaner}
                            alt="About Us Banner"
                            className="w-full md:h-auto h-[500px] hidden md:block object-cover"
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                        <img
                            src={aboutBanerMob}
                            alt="About Us Banner Mobile"
                            className="w-full md:h-auto h-[500px] block md:hidden object-cover"
                        />
                        <motion.div
                            className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6 w-full"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <motion.h1
                                className="text-[#fff] text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6"
                                variants={slideInUp}
                            >
                                About <span className="text-[#ffa800]">Us</span>
                            </motion.h1>
                            <motion.p
                                className="text-white text-[16px] md:text-xl text-center"
                                variants={slideInUp}
                                transition={{ delay: 0.1 }}
                            >
                                For over 25 years, we've been at the forefront of animal
                                nutrition, blending scientific expertise with agricultural
                                wisdom to empower farmers and enhance livestock productivity
                                across India
                            </motion.p>
                            <motion.div
                                className="flex flex-wrap gap-2 md:gap-4 justify-center"
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.div variants={itemVariant}>
                                    <Link
                                        to="/distributor"
                                        className="mt-4 md:mt-6 w-full md:w-[198px] h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2"
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
                                        className="mt-2 md:mt-6 w-full md:w-[198px] h-[48px] border text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2"
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

                {/* Vision and Mission Section */}
                <motion.section
                    id="missionvision"
                    className="py-10 md:py-12 bg-gray-100 scroll-mt-[100px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                >
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 place-items-center">
                            <motion.div
                                className="w-full"
                                variants={scaleIn}
                            >
                                <motion.img
                                    src={visionMission}
                                    alt=""
                                    className="w-full rounded-2xl"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                            <motion.div variants={slideInRight}>
                                <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center md:text-left">
                                    Vision <span className="text-[#ffa800]">& Mission</span>
                                </h2>
                                <div className="w-full max-w-xl mt-6 md:mt-10">
                                    <div className="flex">
                                        <motion.button
                                            onClick={() => setActiveTab("tab1")}
                                            className={`tab-btn px-6 md:px-12 py-4 text-lg font-semibold rounded-t-xl text-center md:text-left cursor-pointer ${activeTab === "tab1"
                                                ? "bg-white text-gray-900"
                                                : "bg-yellow-200 text-gray-700"
                                                }`}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Our Vision
                                        </motion.button>
                                        <motion.button
                                            onClick={() => setActiveTab("tab2")}
                                            className={`tab-btn px-6 md:px-12 py-4 text-lg font-semibold rounded-t-xl text-center md:text-left cursor-pointer ${activeTab === "tab2"
                                                ? "bg-white text-gray-900"
                                                : "bg-yellow-200 text-gray-700"
                                                }`}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Our Mission
                                        </motion.button>
                                    </div>

                                    <motion.div
                                        className="bg-white rounded-b-3xl rounded-tr-3xl p-4 md:p-8 shadow-2xl"
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {activeTab === "tab1" && (
                                            <motion.div
                                                id="vision"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <h4 className="text-green-600 font-semibold text-lg mb-4">
                                                    Our Vision
                                                </h4>
                                                <p className="text-md text-gray-700 mb-4">
                                                    To emerge as a leading animal nutrition enterprise
                                                    recognized for scientific excellence, uncompromising
                                                    quality, and meaningful contribution to sustainable
                                                    livestock development.
                                                </p>
                                                <ul className="space-y-2 md:space-y-4 text-sm text-gray-700">
                                                    {[
                                                        "Scientific Excellence",
                                                        "Uncompromising Quality",
                                                        "Sustainable Development"
                                                    ].map((text, index) => (
                                                        <motion.li
                                                            key={index}
                                                            className="flex items-center gap-3"
                                                            initial={{ x: -20, opacity: 0 }}
                                                            animate={{ x: 0, opacity: 1 }}
                                                            transition={{ delay: index * 0.1 }}
                                                        >
                                                            <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                                                                <FontAwesomeIcon icon={faArrowRight} className="text-white text-[10px]" />
                                                            </span>
                                                            {text}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                        {activeTab === "tab2" && (
                                            <motion.div
                                                id="mission"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <h4 className="text-green-600 font-semibold text-lg mb-4">
                                                    Our Mission
                                                </h4>
                                                <ul className="space-y-2 md:space-y-4 text-sm text-gray-700">
                                                    {[
                                                        "To deliver advanced, science-led animal nutrition solutions that enhance livestock health, productivity, and farm profitability.",
                                                        "To uphold world-class quality and safety standards through rigorous testing, in-house research, and process excellence.",
                                                        "To create long-term value for farmers by providing consistent, reliable, and cost-effective feed solutions.",
                                                        "To operate responsibly by promoting sustainable sourcing, environmental stewardship, and community development.",
                                                        "To drive continuous improvement through innovation, research, and professional leadership in animal nutrition."
                                                    ].map((text, index) => (
                                                        <motion.li
                                                            key={index}
                                                            className="relative pl-7 text-gray-700 leading-relaxed"
                                                            initial={{ x: -20, opacity: 0 }}
                                                            animate={{ x: 0, opacity: 1 }}
                                                            transition={{ delay: index * 0.1 }}
                                                        >
                                                            <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600">
                                                                <FontAwesomeIcon icon={faArrowRight} className="text-white text-[10px]" />
                                                            </span>
                                                            {text}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Animal Feed Story Section */}
                {/* <motion.section
                    className="scroll-mt-[100px]"
                    id="ourstory"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                >
                    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-12">
                        <motion.h2
                            className="text-3xl md:text-5xl font-semibold text-gray-800 text-center"
                            variants={slideInUp}
                        >
                            Our Animal <span className="text-[#ffa800]">Feed Story</span>
                        </motion.h2>
                        <div className="max-w-5xl mx-auto">
                            <motion.p
                                className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center"
                                variants={slideInUp}
                                transition={{ delay: 0.1 }}
                            >
                                Green Gold Animal Feed was founded on a simple yet powerful
                                belief — the well-being of animals is the cornerstone of a
                                successful and sustainable farming community.
                            </motion.p>
                            <motion.p
                                className="mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center"
                                variants={slideInUp}
                                transition={{ delay: 0.2 }}
                            >
                                Rooted in regions where hard work meets agriculture, Green Gold
                                began with a clear purpose: to deliver high-quality, dependable,
                                and cost-effective animal feed that farmers can rely on with
                                confidence. We recognize that livestock represents more than
                                income—it is a way of life, a commitment, and a heritage carried
                                forward through generations.
                            </motion.p>

                            <motion.div
                                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-10"
                                variants={staggerContainer}
                            >
                                {[
                                    { icon: faHandshake, title: "Farmer Partnership", desc: "Way of life commitment" },
                                    { icon: faLightbulb, title: "Scientific Innovation", desc: "Balanced nutrition" },
                                    { icon: faMedal, title: "Quality Assurance", desc: "Strict measures" },
                                    { icon: faLeaf, title: "Sustainability", desc: "Locally sourced" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white rounded-2xl p-2 md:p-6 border border-gray-100 shadow-sm"
                                        variants={itemVariant}
                                        whileHover={{ y: -10, boxShadow: "0 20px 30px rgba(0,0,0,0.1)" }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <motion.span
                                            className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center mx-auto leading-[40px] mb-4 md:mb-6"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <FontAwesomeIcon icon={item.icon} />
                                        </motion.span>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm text-center mb-0">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 mx-auto">
                            <motion.div variants={slideInLeft}>
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 text-center">
                                    Sustainability &{" "}
                                    <span className="text-[#ffa800]">Community</span>
                                </h3>
                                <p className="text-gray-600 mx-auto lg:mx-0 text-[16px] md:text-[18px] text-center">
                                    At Green Gold Animal Feed, sustainability goes beyond words.
                                    We emphasize locally sourced ingredients, actively support
                                    regional farmers, and follow responsible production practices
                                    that protect the environment while contributing to rural
                                    economic growth.
                                </p>
                                <motion.div
                                    className="flex justify-center mt-6"
                                    variants={staggerContainer}
                                >
                                    {[
                                        { title: "Local", desc: "Ingredients" },
                                        { title: "Rural", desc: "Economic Growth" }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mr-6 w-[160px]"
                                            variants={itemVariant}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <h4 className="text-xl font-bold text-[#009a62] mb-2 text-center">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-600 text-sm text-center mb-0">
                                                {item.desc}
                                            </p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>

                            <motion.div variants={slideInRight}>
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 text-center">
                                    Comprehensive{" "}
                                    <span className="text-[#ffa800]">Livestock Solutions</span>
                                </h3>
                                <p className="text-gray-600 mx-auto lg:mx-0 text-[16px] md:text-[18px] text-center">
                                    Serving a wide range of livestock—including cattle, goats,
                                    pigs, poultry, and yaks—Green Gold Animal Feed offers
                                    customized feed solutions designed to meet species-specific
                                    and growth-stage nutritional requirements.
                                </p>
                                <motion.div
                                    className="grid grid-cols-3 mt-6 place-items-center"
                                    variants={staggerContainer}
                                >
                                    {[
                                        { number: "25+", text: "Years Legacy" },
                                        { number: "100%", text: "Quality Focus" },
                                        { number: "Custom", text: "Solutions" }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-white flex flex-col items-center justify-center text-center rounded-full p-4 border border-yellow-400 shadow-md w-[130px] h-[130px] ring-2 ring-white"
                                            variants={scaleIn}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                        >
                                            <h4 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                                                {item.number}
                                            </h4>
                                            <p className="text-gray-600 text-sm text-center mb-0">
                                                {item.text}
                                            </p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section> */}

                <AnimalFeedStory />

                {/* Board of Directors */}
                <motion.section
                    id="ourteam"
                    className="py-10 md:py-12 bg-gray-100 scroll-mt-[100px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                >
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <motion.h2
                            className="text-[26px] md:text-5xl font-semibold text-gray-800 text-center"
                            variants={slideInUp}
                        >
                            Leadership & <span className="text-[#ffa800]">Governance</span>
                        </motion.h2>
                        <motion.p
                            className="mt-3 md:mt-6 text-gray-600 leading-relaxed text-[16px] md:text-[18px] text-center"
                            variants={slideInUp}
                            transition={{ delay: 0.1 }}
                        >
                            Guiding Green Gold with vision, expertise, and commitment to
                            excellence
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 md:mt-20"
                            variants={staggerContainer}
                        >
                            {[
                                { name: "Shri Likha Maaj", title: "Chairman" },
                                { name: "Dr. Hemant Kr. Gogoi", title: "Managing Director" },
                                { name: "Er. Tana Tullo", title: "General Manager" },
                                { name: "Shri. Vikramjit Das", title: "General Manager" }
                            ].map((member, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-[#efefef] rounded-2xl p-6 shadow-sm"
                                    variants={itemVariant}
                                    whileHover={{
                                        y: -10,
                                        boxShadow: "0 20px 30px rgba(0,0,0,0.15)",
                                        transition: { type: "spring", stiffness: 300 }
                                    }}
                                >
                                    <motion.span
                                        className="mx-auto w-24 bg-[#fff] block p-2 rounded-2xl shadow-xl mt-0 md:-mt-[60px] mb-4"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05, rotate: 5 }}
                                    >
                                        <motion.img
                                            src={officeMan}
                                            alt=""
                                            className="w-full"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.span>
                                    <motion.h4
                                        className="text-lg font-bold text-gray-900 mb-0 text-center"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                    >
                                        {member.name}
                                    </motion.h4>
                                    <motion.p
                                        className="text-gray-600 text-sm text-center mb-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                    >
                                        {member.title}
                                    </motion.p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="mt-6 md:mt-10 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/our-teams"
                                    className="bg-yellow-500 hover:bg-yellow-400 px-6 py-3 inline-block rounded-xl text-[16px] font-medium cursor-pointer w-full md:w-auto"
                                >
                                    Meet Our Complete Team
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Our Commitments */}
                <motion.section
                    id="ourcommitment"
                    className="py-10 md:py-12 scroll-mt-[100px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                >
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <motion.h2
                            className="text-3xl md:text-5xl font-semibold text-gray-800 text-center"
                            variants={slideInUp}
                        >
                            Our <span className="text-[#ffa800]">Commitments</span>
                        </motion.h2>
                        <motion.p
                            className="mt-3 md:mt-6 text-gray-600 leading-relaxed text-[16px] md:text-[18px] text-center"
                            variants={slideInUp}
                            transition={{ delay: 0.1 }}
                        >
                            At Green Gold Animal Feed (GGAF), our commitments are more than
                            promises—they are the values that shape our products, our
                            relationships, and our responsibility toward farmers and the
                            environment.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 md:mt-12"
                            variants={staggerContainer}
                        >
                            {[
                                { icon: faMedal, title: "Uncompromising Quality", desc: "We ensure consistent quality in every bag through strict quality control, premium ingredients, and advanced manufacturing practices you can rely on.", check: "50+ Quality Checks" },
                                { icon: faNutritionix, title: "Science-Driven Nutrition", desc: "Our feeds are carefully formulated using scientific research to deliver balanced nutrition that supports healthy growth, strong immunity, and higher productivity.", check: "Research-Backed" },
                                { icon: faHandHoldingHeart, title: "Farmers at the Heart", desc: "We exist to serve farmers. Our solutions are designed to be reliable, affordable, and effective—helping farmers achieve better results and long-term success.", check: "Farmer-Centric" },
                                { icon: faHexagonNodes, title: "Sustainability in Action", desc: "From responsible sourcing to eco-friendly production, we are committed to practices that protect nature and strengthen rural communities.", check: "Eco-Friendly" },
                                { icon: faTrademark, title: "Consistency You Can Trust", desc: "Every product reflects our dedication to transparency, safety, and performance—building trust with every customer, every time.", check: "100% Consistent" },
                                { icon: faLightbulb, title: "Continuous Innovation", desc: "We continuously improve through technology, research, and learning to meet evolving livestock nutrition needs.", check: "Always Improving" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gray-100 rounded-2xl p-4 md:p-6 shadow-sm text-center md:text-left"
                                    variants={itemVariant}
                                    whileHover={{
                                        y: -10,
                                        boxShadow: "0 20px 30px rgba(0,0,0,0.1)",
                                        backgroundColor: "#f0fdf4",
                                        transition: { type: "spring", stiffness: 300 }
                                    }}
                                >
                                    <motion.span
                                        className="w-[40px] h-[40px] bg-[#00a63e] rounded-full block text-white text-center leading-[40px] mb-4 mx-auto md:mx-0"
                                        whileHover={{
                                            rotate: 360,
                                            backgroundColor: "#ffa800",
                                            scale: 1.1
                                        }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <FontAwesomeIcon icon={item.icon} />
                                    </motion.span>
                                    <motion.h4
                                        className="text-lg font-bold text-gray-900 mb-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        {item.title}
                                    </motion.h4>
                                    <motion.p
                                        className="text-gray-600 text-md mb-3"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {item.desc}
                                    </motion.p>
                                    <motion.ul
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <motion.li
                                            className="text-gray-600"
                                            whileHover={{ x: 5, color: "#00a34a" }}
                                        >
                                            <span className="text-[#00a34a] mr-2">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                            {item.check}
                                        </motion.li>
                                    </motion.ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                {/* Our Units */}
                <section
                    id="ourunit"
                    className="py-10 md:py-12 bg-gray-100 scroll-mt-[100px]"
                >
                    <div className="max-w-7xl mx-auto  px-4 md:px-8">
                        <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center">
                            Our <span className="text-[#ffa800]">Units</span>
                        </h2>
                        <p className="mt-3 md:mt-6 text-gray-600 leading-normal md:leading-relaxed  text-[16px] md:text-[18px] text-center">
                            {" "}
                            Strategically located manufacturing unit ensuring quality and
                            efficiency{" "}
                        </p>
                        <div className="flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-12 mt-8 md:mt-12 items-center justify-center">
                            <div className="flex-1   order-2 md:order-1">
                                {/* <iframe
                          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28415.468456355145!2d93.80497037525176!3d27.095390854376515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDolikoto%2C%20Banderdewa%2C%20Arunachal%20Pradesh%20%E2%80%93%20791123!5e0!3m2!1sen!2sin!4v1769078245418!5m2!1sen!2sin"
                          width="100%"
                          height="350"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Dolikoto Location"
                        /> */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28412.610896202965!2d93.80259320641548!3d27.106650600337588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDolikoto%2C%20Banderdewa%2C%20Arunachal%20Pradesh!5e0!3m2!1sen!2sin!4v1770640178490!5m2!1sen!2sin"
                                    className="w-full border-0"
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="Dolikoto Location"
                                    height="350"
                                ></iframe>
                            </div>
                            <div className="flex-1   order-1 md:order-2">
                                <h4 className="text-[22px] md:text-2xl font-bold text-gray-900 text-center md:text-left mb-2">
                                    Rongoge Mega Food Park
                                </h4>
                                <h5 className="text-sm text-gray-900 mb-2 md:mb-4 text-center md:text-left ">
                                    Manufacturing & Processing Unit
                                </h5>
                                <p
                                    className="text-gray-900 text-md mb-3
                         text-center md:text-left "
                                >
                                    <span className="text-[#00a34a] mr-2">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                    </span>
                                    Dolikoto, Banderdewa, Arunachal Pradesh – 791123
                                </p>
                                <p className="text-gray-900 text-md mb-3 text-center md:text-left ">
                                    <span className="text-[#00a34a] mr-2">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </span>
                                    <a href="#"> +91 9999999999</a>
                                </p>
                                <p className="text-gray-900 text-md text-center md:text-left ">
                                    <span className="text-[#00a34a] mr-2">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                    <a href="mailto:info@greengold.com">info@greengold.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
}

export default AboutUs02;

