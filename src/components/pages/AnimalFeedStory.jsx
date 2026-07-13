import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useEffect, useState } from "react";

import {
  faPlay, faPause,
  faVideo, faDrumstickBite, faSeedling
} from "@fortawesome/free-solid-svg-icons";

import {
  faStar,
  faCircleCheck,
  faClock
} from "@fortawesome/free-regular-svg-icons";
import {
  faHandshake,
  faLightbulb,
  faMedal,
  faLeaf
} from "@fortawesome/free-solid-svg-icons";

import { useSettings } from "../../context/SettingsContext";

const AnimalFeedStory = ({ data }) => {
  console.log("AnimalFeedStory data:", data);

  const { settings } = useSettings();
  const stats = settings?.data?.stats;

  const dynamicStats = [
    {
      number: stats?.experience || "0",
      text: "Years\nExperience",
    },
    {
      number: stats?.products || "0",
      text: "Our\nProducts",
    },
    {
      number: stats?.satisfaction || "0%",
      text: "Farmer\nSatisfaction",
    },
    {
      number: stats?.quality_checks || "0",
      text: "Quality\nChecks",
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
          setIsPlaying(true);
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  const toggleVideo = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // const {
  //   heading,
  //   heading_highlight,
  //   intro_description,
  //   hero_video = {},
  //   rooted_in_tradition = {},
  //   feature_cards = [],
  //   sustainability = {},
  //   livestock = {},
  // } = data || {};

  const {
    heading,
    heading_highlight,
    intro_description,
    hero_video = {},
    rooted_in_tradition = {},
    feature_cards = [],
    sustainability = {},
    livestock = {},
  } = data || {};

  const {
    heading: sustainabilityHeading,
    highlight: sustainabilityHighlight,
    text: sustainabilityText,
    points = [],
    stat_boxes = [],
  } = sustainability || {};

  const {
    heading: traditionHeading,
    highlight: traditionHighlight,
    description: traditionDescription,
    trust_badges = [],
    featured_video_card = {},
  } = rooted_in_tradition || {};

  const {
    title: videoCardTitle,
    description: videoCardDescription,
    mini_stats = [],
  } = featured_video_card || {};

  const {
    heading: livestockHeading,
    highlight: livestockHighlight,
    text: livestockText,
    stat_circles = [],
  } = livestock || {};


  // Get video URL - using the hero_video.url or fallback
  const videoUrl = hero_video?.url || "https://videos.pexels.com/video-files/854315/854315-hd_1920_1080_25fps.mp4";
  const videoLabel = hero_video?.label || "Watch our journey from farm to feed";

  // Extract YouTube video ID if it's a YouTube URL
  const getYoutubeEmbedUrl = (url) => {
    if (!url) return null;
    // Check if it's a YouTube URL
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
    return null;
  };

  const youtubeEmbedUrl = getYoutubeEmbedUrl(videoUrl);
  const isYoutubeVideo = !!youtubeEmbedUrl;

  // Map icon keys to actual FontAwesome icons
  const iconMap = {
    faHandshake: faHandshake,
    faLightbulb: faLightbulb,
    faMedal: faMedal,
    faLeaf: faLeaf
  };

  return (
    <motion.section
      className="py-10 md:py-12 overflow-hidden bg-gray-50 antialiased"
      id="ourstory"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading with motion */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-800">
            {heading || "Our Animal"}{" "}
            <span className="text-[#ffa800]">
              {heading_highlight || "Feed Story"}
            </span>
          </h2>
          <motion.p
            className="mt-4 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px]"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            {intro_description || "Green Gold Animal Feed was founded on a simple yet powerful belief — the well-being of animals is the cornerstone of a successful and sustainable farming community."}
          </motion.p>
        </motion.div>

        {/* HERO VIDEO BLOCK */}
        <div className="mt-10 max-w-6xl mx-auto">
          <motion.div
            className="relative max-w-4xl m-auto rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            variants={scaleIn}
          >
            <div className="relative aspect-video w-full bg-gray-900">
              {isYoutubeVideo ? (
                <iframe
                  className="w-full h-full"
                  src={youtubeEmbedUrl}
                  title="Animal Feed Story"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    preload="metadata"
                    playsInline
                    muted
                    loop
                  >
                    <source
                      src={videoUrl}
                      type="video/mp4"
                    />
                  </video>

                  {/* Manual Play/Pause Button */}
                  <button
                    onClick={toggleVideo}
                    className="absolute inset-0 flex items-center justify-center bg-black/30"
                  >
                    <FontAwesomeIcon
                      icon={isPlaying ? faPause : faPlay}
                      className="bg-black/40 backdrop-blur-md rounded-full p-5 hover:scale-110 transition cursor-pointer"
                    />
                  </button>
                </>
              )}
            </div>

            <motion.div
              className="
                absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6
                bg-white/80 backdrop-blur-md rounded-full
                px-3 py-2 sm:px-4 md:px-6
                shadow-lg border border-white/50
                flex items-center gap-2 sm:gap-3
                text-gray-800
                max-w-[90%] sm:max-w-fit
              "
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FontAwesomeIcon
                icon={faPlay}
                className="text-[#ffa800] text-xs sm:text-sm flex-shrink-0"
              />
              <span className="font-medium text-xs sm:text-sm md:text-base leading-tight">
                {videoLabel}
              </span>
            </motion.div>
          </motion.div>

          {/* Circle Stats */}
          <motion.div
            className="sm:px-0"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-full py-10">
              <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
                {dynamicStats?.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`w-36 h-36 2xl:w-40 2xl:h-40 rounded-full flex flex-col items-center justify-center text-center shadow-md ring-2 ring-white ${index % 2 === 0 ? "bg-emerald-300" : "bg-yellow-400"
                      }`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: index * 0.1,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-3xl font-bold text-black">
                      {item.number}
                    </span>
                    <span className="text-sm font-medium text-black leading-tight whitespace-pre-line">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Narrative grid below video */}
          <div id="story" className="scroll-mt-28 grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 md:mt-12 md:items-start items-center justify-center">
            {/* Left: story section */}
            <motion.div
              className="space-y-4"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 flex items-center gap-2 text-center justify-center md:justify-start">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-[#ffa800] text-2xl md:text-4xl"
                />
                {traditionHeading || "Rooted in"}{" "}
                <span className="text-[#ffa800] ml-0 md:ml-2">
                  {traditionHighlight || "tradition"}
                </span>
              </h3>
              <p className="text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center md:text-left">
                {traditionDescription || "Rooted in regions where hard work meets agriculture, Green Gold began with a clear purpose: to deliver high-quality, dependable, and cost-effective animal feed that farmers can rely on with confidence."}
              </p>
              <div className="flex flex-wrap gap-3 pt-0 md:pt-3 items-center justify-center md:items-start md:justify-start">
                {trust_badges && trust_badges.length > 0 ? (
                  trust_badges.map((badge, index) => (
                    <span key={index} className="bg-[#f0f9f0] text-[#009a62] rounded-full px-4 py-2 text-sm font-medium flex items-center gap-1">
                      <FontAwesomeIcon icon={faCircleCheck} /> {badge}
                    </span>
                  ))
                ) : (
                  <>
                    <span className="bg-[#f0f9f0] text-[#009a62] rounded-full px-4 py-2 text-sm font-medium flex items-center gap-1">
                      <FontAwesomeIcon icon={faCircleCheck} /> 100% natural grains
                    </span>
                    <span className="bg-[#fff7e6] text-[#b57c00] rounded-full px-4 py-2 text-sm font-medium flex items-center gap-1">
                      <FontAwesomeIcon icon={faClock} /> since 1998
                    </span>
                  </>
                )}
              </div>
            </motion.div>

            {/* Right: stat block */}
            <motion.div
              className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              whileHover={{
                y: -5,
                boxShadow: "0 30px 40px -15px rgba(0,0,0,0.15)",
              }}
            >
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4 mb-4">
                <span className="w-12 h-12 bg-[#eaf7e6] rounded-2xl flex items-center justify-center text-[#009a62] text-2xl">
                  <FontAwesomeIcon icon={faVideo} />
                </span>
                <div>
                  <p className="text-sm text-gray-500">featured video</p>
                  <p className="font-semibold text-gray-800">
                    {videoCardTitle || "Sustainability in action"}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-base text-center md:text-left">
                {videoCardDescription || "Watch how we partner with local farmers, source ingredients responsibly, and produce feed that nourishes both livestock and the land."}
              </p>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {mini_stats && mini_stats.length > 0 ? (
                  mini_stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-50 p-3 rounded-xl text-center"
                      whileHover={{ scale: 1.05, backgroundColor: "#f0f9f0" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-xl font-bold text-[#009a62]">{stat.number}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </motion.div>
                  ))
                ) : (
                  <>
                    <motion.div
                      className="bg-gray-50 p-3 rounded-xl text-center"
                      whileHover={{ scale: 1.05, backgroundColor: "#f0f9f0" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-xl font-bold text-[#009a62]">25+</div>
                      <div className="text-xs text-gray-500">years legacy</div>
                    </motion.div>
                    <motion.div
                      className="bg-gray-50 p-3 rounded-xl text-center"
                      whileHover={{ scale: 1.05, backgroundColor: "#f0f9f0" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-xl font-bold text-[#009a62]">100%</div>
                      <div className="text-xs text-gray-500">quality focused</div>
                    </motion.div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Pillar cards (4 items) */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-14 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {feature_cards && feature_cards.length > 0 ? (
            feature_cards.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-gray-200 shadow-sm transition-all group"
                variants={itemVariant}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 35px -10px rgba(0,0,0,0.15)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  className="w-10 h-10 bg-[#00a63e]/10 rounded-full flex items-center justify-center text-[#00a63e] text-lg mb-3 group-hover:bg-[#00a63e] group-hover:text-white transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <FontAwesomeIcon icon={iconMap[item.icon_key] || faHandshake} />
                </motion.span>
                <h4 className="text-base font-bold text-gray-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))
          ) : (
            // Default cards if no data
            [
              { icon: faHandshake, title: "Farmer Partnership", desc: "Way of life commitment" },
              { icon: faLightbulb, title: "Scientific Innovation", desc: "Balanced nutrition" },
              { icon: faMedal, title: "Quality Assurance", desc: "Strict measures" },
              { icon: faLeaf, title: "Sustainability", desc: "Locally sourced" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-gray-200 shadow-sm transition-all group"
                variants={itemVariant}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 35px -10px rgba(0,0,0,0.15)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  className="w-10 h-10 bg-[#00a63e]/10 rounded-full flex items-center justify-center text-[#00a63e] text-lg mb-3 group-hover:bg-[#00a63e] group-hover:text-white transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </motion.span>
                <h4 className="text-base font-bold text-gray-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Lower section: sustainability & livestock solutions */}
        <div id="sustainability" className="scroll-mt-28 max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sustainability panel */}
          <motion.div
            className="bg-gradient-to-br from-[#fafaf5] to-[#f5f7ea] rounded-3xl p-6 md:p-8 border border-[#e7e9d5] shadow-lg"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faSeedling}
                  className="w-12 h-12 p-3 bg-[#ffa800]/20 rounded-2xl text-[#b57c00]"
                />
                <span>
                  {sustainabilityHeading}
                  {" "}
                  <span className="text-[#ffa800]">{sustainabilityHighlight}</span>
                </span>
              </h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed text-center md:text-left whitespace-pre-line">
              {sustainabilityText}
            </p>

            {points.length > 0 && (
              <div className="mt-5 space-y-1">
                {points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00a63e] flex-shrink-0"></div>
                    <p className="text-gray-700 text-xs md:text-base">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-4 mt-6">
              {stat_boxes && stat_boxes.length > 0 ? (
                stat_boxes.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/80 rounded-xl px-5 py-3 shadow-sm flex-1 text-center border border-white"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="font-bold text-[#009a62] text-lg">{stat.title}</div>
                    <div className="text-xs text-gray-500">{stat.subtitle || "Local ingredients"}</div>
                  </motion.div>
                ))
              ) : (
                <>
                  <motion.div
                    className="bg-white/80 rounded-xl px-5 py-3 shadow-sm flex-1 text-center border border-white"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="font-bold text-[#009a62] text-lg">
                      {livestock?.stat_circles?.[0]?.number || "25+"}
                    </div>
                    <div className="text-xs text-gray-500">Local ingredients</div>
                  </motion.div>
                  <motion.div
                    className="bg-white/80 rounded-xl px-5 py-3 shadow-sm flex-1 text-center border border-white"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="font-bold text-[#009a62] text-lg">
                      {livestock?.stat_circles?.[0]?.label || "100%"}
                    </div>
                    <div className="text-xs text-gray-500">Rural partners</div>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>

          {/* Livestock solutions panel */}
          <motion.div
            className="bg-gradient-to-br from-[#fefcf0] to-[#fffae7] rounded-3xl p-6 md:p-8 border border-[#ffeec2] shadow-lg"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <h3 className="text-[22px] md:text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faDrumstickBite}
                  className="w-12 h-12 p-3 bg-[#00a63e]/20 rounded-2xl text-[#00a63e] text-xl"
                />
                <span>
                  {livestockHeading}
                  {" "}
                  <span className="text-[#ffa800]">{livestockHighlight}</span>
                </span>
              </h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed text-center md:text-left">
              {livestockText || "Serving a wide range of livestock—including cattle, goats, pigs, poultry, and yaks—Green Gold Animal Feed offers customized feed solutions designed to meet species-specific and growth-stage nutritional requirements."}
            </p>

            <div className="flex justify-between mt-6 gap-2">
              {stat_circles && stat_circles.length > 0 ? (
                stat_circles.map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center flex-1 bg-white/70 py-3 px-1 rounded-2xl shadow-sm border border-dashed border-[#ffa800]/30"
                    whileHover={{ scale: 1.1, rotate: index === 1 ? 2 : -2 }}
                  >
                    <div className="text-2xl font-black text-gray-800">
                      {item.number}
                    </div>
                    <span className="text-[11px] font-medium text-gray-500">
                      {item.label}
                    </span>
                  </motion.div>
                ))
              ) : (
                <>
                  <motion.div
                    className="text-center flex-1 bg-white/70 py-3 px-1 rounded-2xl shadow-sm border border-dashed border-[#ffa800]/30"
                    whileHover={{ scale: 1.1, rotate: -2 }}
                  >
                    <div className="text-2xl font-black text-gray-800">25+</div>
                    <span className="text-[11px] font-medium text-gray-500">Years Legacy</span>
                  </motion.div>
                  <motion.div
                    className="text-center flex-1 bg-white/70 py-3 px-1 rounded-2xl shadow-sm border border-dashed border-[#ffa800]/30"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                  >
                    <div className="text-2xl font-black text-gray-800">100%</div>
                    <span className="text-[11px] font-medium text-gray-500">Quality Focus</span>
                  </motion.div>
                  <motion.div
                    className="text-center flex-1 bg-white/70 py-3 px-1 rounded-2xl shadow-sm border border-dashed border-[#ffa800]/30"
                    whileHover={{ scale: 1.1, rotate: -2 }}
                  >
                    <div className="text-2xl font-black text-gray-800">∞</div>
                    <span className="text-[11px] font-medium text-gray-500">Custom</span>
                  </motion.div>
                </>
              )}
            </div>

            <motion.div
              className="mt-5 text-xs text-gray-400 flex items-center justify-center gap-2 border-t border-[#ffe3a5] pt-4"
              whileHover={{ color: "#ffa800" }}
            >
              <i className="fa-solid fa-play text-[#ffa800]"></i>
              <span>see the full video above — our story in motion</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative element */}
      <div className="absolute left-0 right-0 -z-10 top-96 h-96 bg-[#fdf6e7] rounded-full blur-3xl opacity-40"></div>
    </motion.section>
  );
};

export default AnimalFeedStory;