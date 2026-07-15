import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar, faRocket } from "@fortawesome/free-solid-svg-icons";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const VisionMissionSection = ({ data }) => {
    const visionData = data?.vision || {};
    const missionData = data?.mission || {};
    const heading = data?.heading || "Vision";
    const headingHighlight = data?.heading_highlight || "& Mission";

    return (
        <section
            id="missionvision"
            className="py-16 md:py-24 bg-gray-50 scroll-mt-[100px]"
        >
            <div className="max-w-7xl mx-auto px-5 lg:px-8">
                {/* Heading */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        {heading}{" "}
                        <span className="">{headingHighlight}</span>
                    </h2>

                    <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
                        Our commitment is to provide superior nutrition solutions that
                        empower farmers, improve livestock health, and build a sustainable
                        future.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Vision Card */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 h-full transition-all duration-300 hover:shadow-2xl"
                    >
                        {/* <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center mb-6">
                            <FontAwesomeIcon
                                icon={faStar}
                                className="text-3xl text-yellow-500"
                            />
                        </div> */}

                        <h3 className="text-3xl font-bold text-gray-900 mb-5">
                            {visionData?.title || "Our Vision"}
                        </h3>

                        {visionData?.description && (
                            <p className="text-gray-600 leading-8 mb-8">
                                {visionData.description}
                            </p>
                        )}

                        <ul className="space-y-4">
                            {visionData?.bullets?.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.08 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            className="text-white text-xs"
                                        />
                                    </div>

                                    <span className="text-gray-700 leading-7">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 h-full transition-all duration-300 hover:shadow-2xl"
                    >
                        {/* <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                            <FontAwesomeIcon
                                icon={faRocket}
                                className="text-3xl text-green-600"
                            />
                        </div> */}

                        <h3 className="text-3xl font-bold text-gray-900 mb-5">
                            {missionData?.title || "Our Mission"}
                        </h3>

                        {missionData?.description && (
                            <p className="text-gray-600 leading-8 mb-8">
                                {missionData.description}
                            </p>
                        )}

                        <ul className="space-y-4">
                            {missionData?.bullets?.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.08 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            className="text-white text-xs"
                                        />
                                    </div>

                                    <span className="text-gray-700 leading-7">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default VisionMissionSection;