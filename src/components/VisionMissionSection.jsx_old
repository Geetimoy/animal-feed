import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Animation variants
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
};

const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const VisionMissionSection = ({ data }) => {
    const [activeTab, setActiveTab] = useState("tab1");

    // Extract vision & mission data
    const visionData = data?.vision || {};
    const missionData = data?.mission || {};
    const sectionImage = data?.section_image_url || "";
    const heading = data?.heading || "Vision";
    const headingHighlight = data?.heading_highlight || "& Mission";

    return (
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
                    {/* Left Image */}
                    <motion.div className="w-full order-1 md:order-2" variants={scaleIn}>
                        {sectionImage && (
                            <motion.img
                                src={sectionImage}
                                alt="Vision and Mission"
                                className="w-full rounded-2xl"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            />
                        )}
                    </motion.div>

                    {/* Right Content */}
                    <motion.div variants={slideInRight} className="order-2 md:order-1">
                        <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center md:text-left">
                            {heading}{" "}
                            <span className="text-[#ffa800]">
                                {headingHighlight}
                            </span>
                        </h2>

                        <div className="w-full max-w-xl mt-6 md:mt-10">
                            {/* Tab Buttons */}
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
                                    {visionData?.title || "Our Vision"}
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
                                    {missionData?.title || "Our Mission"}
                                </motion.button>
                            </div>

                            {/* Tab Content */}
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
                                            {visionData?.title || "Our Vision"}
                                        </h4>
                                        {visionData?.description && (
                                            <p className="text-md text-gray-700 mb-4">
                                                {visionData.description}
                                            </p>
                                        )}
                                        {visionData?.bullets && visionData.bullets.length > 0 && (
                                            <ul className="space-y-2 md:space-y-4 text-sm text-gray-700">
                                                {visionData.bullets.map((text, index) => (
                                                    <motion.li
                                                        key={index}
                                                        className="flex items-center gap-3"
                                                        initial={{ x: -20, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        transition={{ delay: index * 0.1 }}
                                                    >
                                                        <span className="flex items-center justify-center w-[18px] h-[18px] bg-green-600 rounded-full flex-shrink-0">
                                                            <FontAwesomeIcon
                                                                icon={faArrowRight}
                                                                className="text-white text-[10px]"
                                                            />
                                                        </span>
                                                        {text}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        )}
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
                                            {missionData?.title || "Our Mission"}
                                        </h4>
                                        {missionData?.bullets && missionData.bullets.length > 0 ? (
                                            <ul className="space-y-2 md:space-y-4 text-sm text-gray-700">
                                                {missionData.bullets.map((text, index) => (
                                                    <motion.li
                                                        key={index}
                                                        className="relative pl-7 text-gray-700 leading-relaxed"
                                                        initial={{ x: -20, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        transition={{ delay: index * 0.1 }}
                                                    >
                                                        <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600 flex-shrink-0">
                                                            <FontAwesomeIcon
                                                                icon={faArrowRight}
                                                                className="text-white text-[10px]"
                                                            />
                                                        </span>
                                                        {text}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-gray-700">
                                                {missionData?.description || "No mission data available"}
                                            </p>
                                        )}
                                    </motion.div>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default VisionMissionSection;