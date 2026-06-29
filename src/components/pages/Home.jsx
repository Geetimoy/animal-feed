import Footer from "../Footer";
import Header from "../Header";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
import commitments from '../../assets/images/commitment-bg.jpg';
import research from '../../assets/images/Layer25.png';
import bgNationwideImage from '../../assets/images/Laye28.png';

import { Link, useLocation } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './custom.css';
import CertificateSlider from "./CertificateSlider";

import axios from "axios";
import { API_URL } from "../../config/api";

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

// ─── Loading Screen Variants ──────────────────────────────────────────────
const loadingContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3
    }
  }
};

const loadingLogoVariants = {
  hidden: { scale: 0.5, opacity: 0, rotate: -10 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      duration: 0.8
    }
  }
};

const loadingTextVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const loadingDotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
      duration: 0.5
    }
  }
};

const loadingProgressVariants = {
  hidden: { width: "0%" },
  visible: {
    width: "100%",
    transition: {
      duration: 2.5,
      ease: "easeInOut"
    }
  }
};

const loadingScreenVariants = {
  exit: {
    y: "-100%",
    transition: {
      duration: 0.8,
      ease: [0.65, 0, 0.35, 1],
      delay: 0.2
    }
  }
};

const mainContentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2
    }
  }
};

// ─── Skeleton component ───────────────────────────────────────────────────────
const Skeleton = ({ className = "" }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
);

import { Helmet } from "react-helmet-async";
import { useSettings } from "../../context/SettingsContext";

function Home() {

  const [activeTab, setActiveTab] = useState("tab1");
  const [isLoading, setIsLoading] = useState(true);

  const { hash } = useLocation();
  const { settings } = useSettings();

  const [homeSettings, setHomeSettings] = useState(null);
  const [homeSettingsLoading, setHomeSettingsLoading] = useState(true);
  const [homeSettingsError, setHomeSettingsError] = useState(false);

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

  // ─── ✅ CLEAN SOLUTION: শুধু sessionStorage ব্যবহার করো ──────────────
  useEffect(() => {
    fetchHomeSettings();

    // Check if loader already shown in this session
    const hasVisited = sessionStorage.getItem('homeLoaderShown');

    if (hasVisited) {
      // Already visited - skip loading
      setIsLoading(false);
      document.body.style.overflow = 'auto';
      return;
    }

    // First time - show loading animation
    sessionStorage.setItem('homeLoaderShown', 'true');

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 3200);

    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []); // ← Empty dependency array - runs only once on mount

  const fetchHomeSettings = async () => {
    try {
      setHomeSettingsLoading(true);
      setHomeSettingsError(false);
      const res = await axios.get(`${API_URL}/home-settings`);
      setHomeSettings(res.data);
    } catch (err) {
      console.error("Home settings fetch failed:", err);
      setHomeSettingsError(true);
    } finally {
      setHomeSettingsLoading(false);
    }
  };

  // ─── Safe data with fallbacks ─────────────────────────────────────────────
  const heroCard = homeSettings?.data?.hero_card ?? {};
  const about = homeSettings?.data?.about ?? {};
  const whyChoose = homeSettings?.data?.why_choose_us ?? { cards: [] };
  const stats = homeSettings?.data?.stats ?? [];
  const animalNutrition = homeSettings?.data?.animal_nutrition ?? { cards: [] };
  const commitment = homeSettings?.data?.commitment ?? {
    quality_items: [],
    cert_items: [],
  };
  const researchDevelopment = homeSettings?.data?.research_development ?? {};
  const nationwideAvailability = homeSettings?.data?.nationwide ?? { states: [] };

  const iconMap = { cardIcon1, cardIcon2, cardIcon3 };

  const [news, setNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState(false);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setNewsLoading(true);
      setNewsError(false);
      const res = await axios.get(`${API_URL}/news-events`);
      setNews(res.data?.news?.data || []);
    } catch (err) {
      console.error("News API error:", err);
      setNewsError(true);
      setNews([]);
    } finally {
      setNewsLoading(false);
    }
  };

  // Loading dots for animation
  const loadingDots = [
    { delay: 0 },
    { delay: 0.1 },
    { delay: 0.2 },
    { delay: 0.3 },
    { delay: 0.4 },
    { delay: 0.5 },
    { delay: 0.6 },
    { delay: 0.7 }
  ];

  return (
    <>
      <Helmet>
        <title>{settings?.data?.seo?.meta_title}</title>
        <meta name="description" content={settings?.data?.seo?.meta_description} />
        <meta name="keywords" content={settings?.data?.seo?.meta_keywords} />
      </Helmet>

      {/* ── Loading Screen ── */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="loading-modern"
            variants={loadingScreenVariants}
            initial="visible"
            exit="exit"
          >

            <div className="loading-bg-circle loading-bg-circle-1"></div>
            <div className="loading-bg-circle loading-bg-circle-2"></div>
            <div className="loading-bg-circle loading-bg-circle-3"></div>
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white opacity-5"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-gold opacity-10"></div>

            <div className="loading-modern-content">
              <motion.div
                className="loading-logo-wrapper"
                variants={loadingLogoVariants}
                initial="hidden"
                animate="visible"
              >
                <img
                  src={logo}
                  alt="Green Gold"
                  className="loading-logo"
                />
              </motion.div>


              <motion.h1
                className="loading-brand"
                variants={loadingTextVariants}
                initial="hidden"
                animate="visible"
              >
                Green Gold
              </motion.h1>


              <motion.p
                className="loading-tagline"
                variants={loadingTextVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                Premium Animal Nutrition
              </motion.p>


              <div className="loading-progress-wrapper">
                <motion.div
                  className="loading-progress-bar"
                  variants={loadingProgressVariants}
                  initial="hidden"
                  animate="visible"
                />
              </div>

              <div className="loading-dots-wrapper">
                {loadingDots.map((dot, index) => (
                  <motion.span
                    key={index}
                    className="loading-dot"
                    variants={loadingDotVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 + dot.delay }}
                  />
                ))}
              </div>


              <motion.p
                className="loading-text"
                variants={loadingTextVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                Loading...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Header />

      <motion.main
        className="pt-16"
        variants={mainContentVariants}
        initial="hidden"
        animate={!isLoading ? "visible" : "hidden"}
      >

        {/* ── Hero Section ───────────────────────────────────────────────── */}
        <motion.section
          className="relative z-0"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="grid grid-cols-4 md:h-[700px] h-[350px] w-full">
            <motion.div className="relative" variants={slideInLeft} custom={1}>
              <img src={banner1} className="w-full h-full object-cover" alt="Cattle feed" />
              <div className="absolute inset-0 bg-black/[0.60]"></div>
              <div className="absolute bottom-[140px] md:bottom-[200px] left-[12px] md:left-[40px] z-10">
                <h3 className="text-white text-[20px] md:text-[43px] font-normal">CATTLE </h3>
                <p className="text-white text-[16px] md:text-[28px]">FEED</p>
              </div>
            </motion.div>

            <motion.div className="relative" variants={slideInLeft} custom={2}>
              <img src={banner2} className="w-full h-full object-cover" alt="Fish feed" />
              <div className="absolute inset-0 bg-black/[0.60]"></div>
              <div className="absolute bottom-[140px] md:bottom-[200px] left-[12px] md:left-[40px] z-10">
                <h3 className="text-white text-[20px] md:text-[43px] font-normal">FISH </h3>
                <p className="text-white text-[16px] md:text-[28px]">FEED</p>
              </div>
            </motion.div>

            <motion.div className="relative" variants={slideInLeft} custom={3}>
              <img src={banner3} className="w-full h-full object-cover" alt="Poultry feed" />
              <div className="absolute inset-0 bg-black/[0.60]"></div>
              <div className="absolute bottom-[140px] md:bottom-[200px] left-[6px] md:left-[40px] z-10">
                <h3 className="text-white text-[18px] md:text-[43px] font-normal">POULTRY</h3>
                <p className="text-white text-[16px] md:text-[28px]">FEED</p>
              </div>
            </motion.div>

            <motion.div className="relative" variants={slideInLeft} custom={4}>
              <img src={banner4} className="w-full h-full object-cover" alt="Pig feed" />
              <div className="absolute inset-0 bg-black/[0.81]"></div>
              <div className="absolute bottom-[140px] md:bottom-[200px] left-[12px] md:left-[40px] z-10">
                <h3 className="text-white text-[20px] md:text-[43px] font-normal">PIG </h3>
                <p className="text-white text-[16px] md:text-[28px]">FEED</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Card */}
          <motion.div
            className="relative lg:absolute lg:-bottom-[80px] left-0 lg:left-1/2 lg:-translate-x-1/2 z-[999]"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-12 md:rounded-2xl overflow-hidden max-w-4xl w-full">
                <div className="col-span-3 bg-gradient-to-r from-[#00a34a] to-[#009a62] md:bg-none md:bg-white flex items-center justify-center py-4 md:py-0">
                  <img src={logo} alt="Green Gold Logo" className="w-[100px] h-[100px] object-contain" />
                </div>
                <div className="col-span-9 bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white px-4 md:px-8 py-0 md:py-6 pb-6 flex items-center">
                  <div>
                    {homeSettingsLoading ? (
                      <>
                        <Skeleton className="h-8 w-64 mb-3" />
                        <Skeleton className="h-4 w-80" />
                      </>
                    ) : (
                      <>
                        <div className="text-2xl font-semibold leading-normal md:leading-snug text-center md:text-left">
                          {heroCard.heading} <br />
                          <span className="text-yellow-300">{heroCard.heading_highlight}</span>
                        </div>
                        <div className="mt-2 text-sm text-white/90 max-w-xl text-center md:text-left">
                          {heroCard.description}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* ── About Section ──────────────────────────────────────────────── */}
        <section className="w-full py-10 md:py-12 md:mt-12">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
              <motion.div
                className="space-y-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideInUp}
              >
                <div className="mb-[0px] md:mb-[0px]">
                  {homeSettingsLoading ? (
                    <>
                      <Skeleton className="h-10 w-72 mb-2" />
                      <Skeleton className="h-5 w-56" />
                    </>
                  ) : (
                    <>
                      <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center md:text-left">
                        {about.heading} <span className="text-[#ffa800]">{about.heading_highlight}</span>
                      </h2>
                      <p className="text-[16px] text-gray-600 mt-1 text-center md:text-left">
                        {about.subheading}
                      </p>
                    </>
                  )}
                </div>

                <div className="relative w-full h-[260px] sm:h-[420px] rounded-xl lg:overflow-visible">
                  <img src={about1} alt="Background" className="relative lg:absolute inset-0 w-full h-full object-cover z-10 rounded-xl" />
                  <img
                    src={about2}
                    alt="Animals"
                    className="absolute bottom-0 md:-bottom-4 lg:bottom-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] object-contain z-20 max-h-[420px]"
                  />

                  {/* Desktop card */}
                  <div className="hidden md:block relative md:absolute md:top-[0px] md:-right-[540px] w-full md:w-[420px] lg:w-[560px] bg-white rounded-2xl p-8 space-y-5 shadow-[0_15px_40px_rgba(0,0,0,0.15)] z-30">
                    {homeSettingsLoading ? (
                      <>
                        <Skeleton className="h-7 w-48 mb-4" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-5/6 mb-4" />
                        <Skeleton className="h-4 w-40 mb-2" />
                        <Skeleton className="h-4 w-40 mb-2" />
                        <Skeleton className="h-4 w-40 mb-6" />
                        <div className="flex gap-4 pt-2">
                          <Skeleton className="h-12 w-32 rounded-xl" />
                          <Skeleton className="h-12 w-32 rounded-xl" />
                        </div>
                      </>
                    ) : (
                      <>
                        <h3 className="text-[28px] font-bold text-gray-800">{about.card_heading}</h3>
                        <p className="text-[18px] text-gray-600">{about.card_description}</p>
                        <ul className="space-y-2 text-[16px] text-gray-700">
                          {(about.card_bullets ?? []).map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                                <FontAwesomeIcon icon={faArrowRight} className="text-white text-[10px]" />
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="flex gap-4 pt-4">
                          <Link to={about.btn_primary_link ?? "#"} className="bg-yellow-500 hover:bg-yellow-400 px-6 py-4 rounded-xl text-[16px] font-medium cursor-pointer">
                            {about.btn_primary_label}
                          </Link>
                          <Link to={about.btn_secondary_link ?? "#"} className="border px-6 py-4 rounded-xl text-sm border-gray-800 cursor-pointer hover:bg-[#f3f6f4]">
                            {about.btn_secondary_label}
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Mobile card */}
                <div className="lg:hidden relative w-full bg-white rounded-2xl p-4 space-y-4 shadow-[0_15px_40px_rgba(0,0,0,0.15)] z-30">
                  {homeSettingsLoading ? (
                    <>
                      <Skeleton className="h-7 w-48 mb-3" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-5/6 mb-4" />
                      <Skeleton className="h-4 w-40 mb-2" />
                      <Skeleton className="h-4 w-40 mb-6" />
                      <Skeleton className="h-12 w-full rounded-md mb-2" />
                      <Skeleton className="h-12 w-full rounded-md" />
                    </>
                  ) : (
                    <>
                      <h3 className="text-[22px] md:text-[28px] font-bold text-gray-800 leading-normal">{about.card_heading}</h3>
                      <p className="text-[15px] text-gray-600">{about.card_description}</p>
                      <ul className="space-y-2 text-[15px] text-gray-700">
                        {(about.card_bullets ?? []).map((item, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                              <FontAwesomeIcon icon={faArrowRight} className="text-white text-[10px]" />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col gap-2 pt-4">
                        <button className="bg-yellow-500 hover:bg-yellow-400 px-6 py-4 rounded-md text-[16px] font-medium cursor-pointer">
                          {about.btn_primary_label}
                        </button>
                        <button className="border px-6 py-4 rounded-md text-sm border-gray-800 cursor-pointer hover:bg-[#f3f6f4]">
                          {about.btn_secondary_label}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ──────────────────────────────────────────────── */}
        <motion.section
          id="whygreengold"
          className="relative py-8 md:py-20 overflow-visible scroll-mt-[100px]"
          style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="absolute inset-0 bg-black/60 pointer-events-none z-0"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 items-center">
              <motion.div
                className="lg:col-span-1 relative z-20 text-center md:text-left"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInUp}
              >
                {homeSettingsLoading ? (
                  <>
                    <Skeleton className="h-10 w-56 mb-4 bg-gray-500" />
                    <Skeleton className="h-4 w-64 mb-2 bg-gray-500" />
                    <Skeleton className="h-4 w-48 bg-gray-500" />
                  </>
                ) : (
                  <>
                    <h2 className="text-3xl md:text-5xl font-semibold text-white leading-normal md:leading-snug">
                      {whyChoose.heading} <br className="hidden md:block" />
                      <span className="text-yellow-400">{whyChoose.heading_highlight}</span>
                    </h2>
                    <p className="text-gray-200 mt-4 text-[16px] md:text-[18px] leading-normal md:leading-relaxed max-w-sm">
                      {whyChoose.description}
                    </p>
                  </>
                )}

                <div className="flex gap-4 mt-4 md:mt-6 relative z-30 items-center justify-center md:justify-end">
                  <button type="button" className="why-prev w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-400 text-gray-400 flex items-center justify-center shadow-xl transition-all duration-300 hover:border-green-600 hover:text-green-600 swiper-prev cursor-pointer hover:-translate-x-1">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                  <button type="button" className="why-next w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-400 text-gray-400 flex items-center justify-center shadow-xl transition-all duration-300 hover:border-green-600 hover:text-green-600 swiper-next cursor-pointer hover:translate-x-1">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </motion.div>

              <div className="lg:col-span-2">
                <div className="whySwiper">
                  {homeSettingsLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="bg-[#f3f6f4] rounded-2xl p-6 space-y-3">
                          <Skeleton className="h-[60px] w-[50px]" />
                          <Skeleton className="h-5 w-32" />
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-5/6" />
                          <Skeleton className="h-4 w-4/6" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Swiper
                      modules={[Navigation, Pagination]}
                      spaceBetween={30}
                      slidesPerView={1}
                      navigation={{ prevEl: ".swiper-prev", nextEl: ".swiper-next" }}
                      breakpoints={{ 320: { slidesPerView: 1 }, 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                    >
                      {(whyChoose.cards ?? []).map((card, index) => (
                        <SwiperSlide key={index}>
                          <div className="why-card bg-[#f3f6f4] rounded-2xl p-6">
                            <div>
                              <img src={iconMap[card.icon_key]} alt={card.title} className="w-[50px] h-[60px] mb-4" />
                              <h4 className="text-[#009a62] font-semibold text-lg leading-snug">{card.title}</h4>
                              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{card.description}</p>
                            </div>
                            <Link href="#" className="group read-more inline-flex items-center gap-3 text-sm text-gray-500 pt-6 hover:text-green-600">
                              Read More
                              <span className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center group-hover:border-green-600 group-hover:text-green-600 transition-transform duration-300 group-hover:translate-x-1">
                                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                              </span>
                            </Link>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop stats circles */}
          <motion.div
            className="hidden lg:block absolute lg:-bottom-[120px] md:left-1/2 lg:-translate-x-1/2 px-3 sm:px-0"
            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-full py-10">
              <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
                {homeSettingsLoading
                  ? [1, 2, 3, 4].map(i => <Skeleton key={i} className="w-36 h-36 2xl:w-40 2xl:h-40 rounded-full bg-gray-300" />)
                  : (stats ?? []).map((item, index) => (
                    <motion.div
                      key={index}
                      className={`w-36 h-36 2xl:w-40 2xl:h-40 rounded-full flex flex-col items-center justify-center text-center shadow-md ring-2 ring-white ${index % 2 === 0 ? "bg-emerald-300" : "bg-yellow-400"}`}
                      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-3xl font-bold text-black">{item.number}</span>
                      <span className="text-sm font-medium text-black leading-tight">{item.label}</span>
                    </motion.div>
                  ))
                }
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Mobile stats circles (hardcoded as in original) */}
        <div className="relative lg:hidden">
          <div className="w-full py-4">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 justify-items-center text-center">
              {homeSettingsLoading
                ? [1, 2, 3, 4].map(i => <Skeleton key={i} className="w-36 h-36 rounded-full bg-gray-200" />)
                : (stats.length > 0 ? stats : [
                  { number: "25+", label: "Years\nExperience" },
                  { number: "500+", label: "Our\nProducts" },
                  { number: "98%", label: "Farmer\nSatisfaction" },
                  { number: "50+", label: "Quality\nChecks" },
                ]).map((item, index) => (
                  <div key={index} className={`w-36 h-36 2xl:w-40 2xl:h-40 rounded-full flex flex-col items-center justify-center text-center shadow-md ring-2 ring-white ${index % 2 === 0 ? "bg-emerald-300" : "bg-yellow-400"}`}>
                    <span className="text-3xl font-bold text-black">{item.number}</span>
                    <span className="text-sm font-medium text-black leading-tight">{item.label}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        {/* ── Animal Nutrition ───────────────────────────────────────────── */}
        <section className="w-full bg-white py-6 md:py-12 pt-0 lg:pt-20 mt-0 md:mt-8">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center">
            <motion.div
              className="grid grid-cols-2 gap-2 md:gap-4"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
            >
              {homeSettingsLoading
                ? [1, 2, 3, 4].map(i => <Skeleton key={i} className="w-[280px] h-[280px] rounded-2xl" />)
                : (animalNutrition.cards ?? []).map((card, index) => (
                  <motion.div key={index} className="place-self-start" variants={itemVariant}>
                    <div className="relative inline-block overflow-hidden">
                      <motion.img
                        src={card.image_url} alt={card.title}
                        className="block w-[280px] h-[280px] rounded-2xl object-cover"
                        whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center"
                        initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}
                      >
                        <h3 className="text-white text-xl font-semibold">{card.title} <br /> {card.subtitle}</h3>
                        <div>
                          <Link to={card.link ?? "#"} className="read-more inline-flex items-center gap-3 text-sm text-white mt-3">
                            View Details <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))
              }
            </motion.div>

            <motion.div
              className="text-center max-w-md mx-auto lg:mx-0"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInUp}
            >
              {homeSettingsLoading ? (
                <>
                  <Skeleton className="h-10 w-64 mx-auto mb-4" />
                  <Skeleton className="h-4 w-80 mx-auto mb-2" />
                  <Skeleton className="h-4 w-64 mx-auto" />
                </>
              ) : (
                <>
                  <h2 className="text-3xl lg:text-5xl font-semibold text-gray-800">
                    {animalNutrition.heading} <br className="hidden md:block" />
                    <span className="text-[#ffa800]">{animalNutrition.heading_highlight}</span>
                  </h2>
                  <p className="mt-2 md:mt-4 text-gray-600 max-w-md mx-auto lg:mx-0 text-center text-[16px] md:text-[18px]">
                    {animalNutrition.description}
                  </p>
                </>
              )}
            </motion.div>
          </div>
        </section>

        {/* ── Our Unwavering Commitment ──────────────────────────────────── */}
        <section className="relative w-full overflow-hidden h-auto lg:h-[700px]">
          <img src={commitments} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-6 md:mb-14"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={slideInUp}
            >
              {homeSettingsLoading ? (
                <>
                  <Skeleton className="h-10 w-72 mx-auto mb-3 bg-gray-500" />
                  <Skeleton className="h-4 w-96 mx-auto bg-gray-500" />
                </>
              ) : (
                <>
                  <h2 className="text-3xl sm:text-5xl font-semibold text-white">
                    {commitment.heading} <span className="text-yellow-400">{commitment.heading_highlight}</span>
                  </h2>
                  <p className="mt-4 text-gray-200 text-[16px] sm:text-[18px]">{commitment.description}</p>
                </>
              )}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                className="text-white max-w-lg"
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={slideInUp}
              >
                {homeSettingsLoading ? (
                  <>
                    <Skeleton className="h-10 w-56 mb-4 bg-gray-500" />
                    <Skeleton className="h-4 w-full mb-2 bg-gray-500" />
                    <Skeleton className="h-4 w-5/6 mb-6 bg-gray-500" />
                    <Skeleton className="h-16 w-64 rounded-xl bg-gray-500" />
                  </>
                ) : (
                  <>
                    <h3 className="text-3xl md:text-5xl font-light mb-4 text-center md:text-left">
                      {commitment.promise_heading} <span className="text-[#ffa800] font-normal">{commitment.promise_highlight}</span>
                    </h3>
                    <p className="text-gray-200 text-[16px] sm:text-[18px] leading-normal md:leading-relaxed mb-4 md:mb-8 text-center md:text-left">
                      {commitment.promise_text}
                    </p>
                    <div className="inline-flex items-center bg-gradient-to-r from-[#00a34a] to-[#009a62] gap-3 px-6 py-4 rounded-xl shadow-lg">
                      <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-white">{commitment.badge_title}</p>
                        <p className="text-xs text-white/80">{commitment.badge_subtitle}</p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>

              <motion.div
                className="w-full max-w-xl"
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={slideInUp}
              >
                <div className="flex">
                  <button id="tab-quality" onClick={() => setActiveTab("tab1")} className="tab-btn bg-white px-4 mb:px-12 py-4 text-[16px] md:text-lg font-semibold text-gray-900 rounded-t-xl text-center cursor-pointer">
                    Rigorous Quality <br className="hidden md:block" /> Process
                  </button>
                  <button id="tab-cert" onClick={() => setActiveTab("tab2")} className="tab-btn bg-yellow-200 px-4 mb:px-12 py-4 text-[16px] md:text-lg font-semibold text-gray-700 rounded-t-xl text-center cursor-pointer">
                    Certifications & <br className="hidden md:block" /> Standards
                  </button>
                </div>

                <div className="bg-white rounded-b-3xl md:rounded-tr-3xl p-4 md:p-8 shadow-2xl">
                  {homeSettingsLoading ? (
                    <div className="space-y-3">
                      <Skeleton className="h-5 w-48 mb-4" />
                      {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-4 w-full" />)}
                    </div>
                  ) : activeTab === "tab1" ? (
                    <div>
                      <h4 className="text-green-600 font-semibold text-lg mb-4 md:mb-6">Rigorous Quality Process</h4>
                      <ul className="space-y-2 md:space-y-4 text-sm text-gray-700">
                        {(commitment.quality_items ?? []).map((item, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                              <FontAwesomeIcon icon={faArrowRight} className="text-white text-[10px]" />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div>
                      <h4 className="text-green-600 font-semibold text-lg mb-4 md:mb-6">Certifications & Standards</h4>
                      <ul className="space-y-2 md:space-y-4 text-sm text-gray-700">
                        {(commitment.cert_items ?? []).map((item, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full">
                              <FontAwesomeIcon icon={faArrowRight} className="text-white text-[10px]" />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Research & Development ─────────────────────────────────────── */}
        <section className="bg-white py-10 md:py-12">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              className="relative"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={slideInUp}
            >
              <img src={research} alt="Research and Development" className="rounded-2xl w-full h-[300px] md:h-[500px] object-cover" />
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={slideInUp}
            >
              {homeSettingsLoading ? (
                <>
                  <Skeleton className="h-10 w-64 mb-6" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-4/6 mb-8" />
                  <Skeleton className="h-12 w-40 rounded-xl" />
                </>
              ) : (
                <>
                  <h2 className="text-[26px] md:text-5xl font-semibold text-gray-900 text-center md:text-left">
                    {researchDevelopment.heading} <br className="hidden md:block" />
                    <span className="text-yellow-500">{researchDevelopment.heading_highlight}</span>
                  </h2>
                  <p className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center md:text-left">
                    {researchDevelopment.description_1}
                  </p>
                  <p className="mt-4 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center md:text-left">
                    {researchDevelopment.description_2}
                  </p>
                  <Link
                    to={researchDevelopment.btn_link ?? "#"}
                    className="mt-4 md:mt-8 inline-flex items-center justify-center md:justify-start gap-2 rounded-xl bg-yellow-500 px-6 py-3 text-[16px] font-medium text-black hover:bg-yellow-400 transition cursor-pointer w-full md:w-auto text-center"
                  >
                    {researchDevelopment.btn_label}
                  </Link>
                </>
              )}
            </motion.div>
          </div>
        </section>

        {/* ── Nationwide Availability ────────────────────────────────────── */}
        <section
          className="relative py-10 md:py-12 overflow-hidden bg-center bg-cover"
          style={{ backgroundImage: `url(${bgNationwideImage})` }}
        >
          <div className="absolute inset-0 bg-black/80"></div>
          <motion.div
            className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={slideInUp}
          >
            {homeSettingsLoading ? (
              <div className="space-y-4 flex flex-col items-center">
                <Skeleton className="h-10 w-72 bg-gray-500" />
                <Skeleton className="h-4 w-96 bg-gray-500" />
                <Skeleton className="h-4 w-80 bg-gray-500" />
                <div className="flex gap-4 mt-6">
                  <Skeleton className="h-14 w-40 rounded-xl bg-gray-500" />
                  <Skeleton className="h-14 w-40 rounded-xl bg-gray-500" />
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-wide text-white">
                  {nationwideAvailability.heading}
                  <span className="text-amber-400 font-medium"> {nationwideAvailability.heading_highlight}</span>
                </h2>
                <p className="mt-6 text-md md:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  {nationwideAvailability.description}
                </p>
                <div className="mt-6 md:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 text-lg">
                  <Link
                    to={`tel:${nationwideAvailability.phone ?? ""}`}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-amber-400 text-black font-medium shadow-md hover:bg-amber-500 transition w-full md:w-auto"
                  >
                    <FontAwesomeIcon icon={faPhone} />
                    {nationwideAvailability.btn_call_label}
                  </Link>
                  <Link
                    to={`https://wa.me/${nationwideAvailability.whatsapp ?? ""}`}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-green-500 text-white font-medium shadow-md hover:bg-green-600 transition w-full md:w-auto"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                    {nationwideAvailability.btn_whatsapp_label}
                  </Link>
                </div>
                <div className="mt-8 md:mt-14 flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-4 text-lg text-gray-300 tracking-wide">
                  {(nationwideAvailability.states ?? []).map((state, index) => (
                    <span key={index}>{state}</span>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </section>

        {/* ── News & Events ──────────────────────────────────────────────── */}
        <section className="py-10 md:py-12 bg-white">
          <motion.div
            className="max-w-7xl mx-auto px-4"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={slideInUp}
          >
            <div className="flex flex-col items-center md:flex-row md:items-end md:justify-between mb-6 md:mb-12">
              <div>
                <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 text-center md:text-left">
                  News & <span className="text-yellow-500">Event</span>
                </h2>
                <p className="mt-2 text-gray-500 max-w-md text-center md:text-left text-[16px] md:text-[18px]">
                  Stay updated with the latest happenings, product launches, and events at Green Gold.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-1 md:mt-0">
                <button className="news-prev w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-green-500 hover:text-green-500 transition-all duration-300 cursor-pointer hover:-translate-x-1 active:scale-95">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button className="news-next w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-green-500 hover:text-green-500 transition-all duration-300 cursor-pointer hover:translate-x-1 active:scale-95">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>

            <div className="newsSwiper">
              {newsLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden">
                      <Skeleton className="h-48 w-full rounded-none" />
                      <div className="p-6 space-y-3">
                        <Skeleton className="h-3 w-20" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                        <Skeleton className="h-4 w-24 mt-4" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : newsError || news.length === 0 ? (
                <p className="text-center text-gray-400 py-8">
                  {newsError ? "Unable to load news at the moment. Please try again later." : "No news available at the moment."}
                </p>
              ) : (
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation={{ prevEl: ".news-prev", nextEl: ".news-next" }}
                  breakpoints={{ 320: { slidesPerView: 1 }, 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
                >
                  {news.map((item) => (
                    <SwiperSlide key={item.id} className="h-auto mb-2">
                      <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md overflow-hidden h-full flex flex-col">
                        <img src={item.image_url} alt={item.title} className="h-48 w-full object-cover rounded-b-2xl" />
                        <div className="p-6 flex flex-col flex-grow">
                          <span className="text-xs text-green-600 font-medium">{item.published_at}</span>
                          <h3 className="mt-2 font-bold text-gray-900">{item.title}</h3>
                          <p className="mt-2 text-sm text-gray-500 flex-grow">{item.excerpt}</p>
                          <Link
                            to={`/news-events/${item.slug}`}
                            className="group mt-4 inline-flex items-center gap-2 hover:text-green-700 text-green-600 font-medium"
                          >
                            View Details
                            <span className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center group-hover:border-green-700 transition-colors transition-transform duration-300 group-hover:translate-x-1">
                              <FontAwesomeIcon icon={faArrowRight} className="text-[10px] group-hover:text-green-700 transition-colors duration-300" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </motion.div>
        </section>

        <CertificateSlider />
      </motion.main>

      <Footer />
    </>
  );
}

export default Home;