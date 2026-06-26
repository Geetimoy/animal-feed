import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const slideInUp = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
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

// Skeleton Loader Component
const BannerSkeleton = ({ height = "h-[500px]" }) => {
  return (
    <div className={`relative w-full ${height} bg-gray-200 animate-pulse overflow-hidden`}>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
      {/* Skeleton content placeholders */}
      <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6 w-full">
        <div className="h-10 md:h-16 bg-gray-300 rounded-lg w-3/4 mx-auto mb-4 md:mb-6"></div>
        <div className="h-6 md:h-8 bg-gray-300 rounded-lg w-1/2 mx-auto mb-6 md:mb-8"></div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full justify-center">
          <div className="h-[48px] w-full md:w-[215px] bg-gray-300 rounded-[12px]"></div>
          <div className="h-[48px] w-full md:w-[198px] bg-gray-300 rounded-[12px]"></div>
        </div>
      </div>
    </div>
  );
};

const HeroBanner = ({
  imageUrl,
  titleWhite,
  titleGold,
  subtitle,
  ctaPrimaryLabel = "Find Distributor",
  ctaPrimaryUrl = "/distributor",
  ctaSecondaryLabel = "Contact Us",
  ctaSecondaryUrl = "/contact-us",
  height = "h-[500px]",
  className = "",
  isLoading = false,
}) => {
  // Show skeleton while loading
  if (isLoading) {
    return <BannerSkeleton height={height} />;
  }

  if (!imageUrl) {
    return null;
  }

  return (
    <motion.section
      className={`relative z-0 ${className}`}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="relative">
        {/* <motion.img
          src={imageUrl}
          alt={titleWhite || "Banner"}
          className={`w-full md:h-[500px] ${height} hidden md:block object-cover object-center`}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <img
          src={imageUrl}
          alt={titleWhite || "Banner"}
          className={`w-full md:h-[400px] ${height} block md:hidden object-cover object-top`}
        />
        <div className="absolute inset-0 bg-black/[0.40]"></div> */}

        <motion.img
          src={imageUrl}
          alt={titleWhite || "Banner"}
          className={`w-full md:h-[500px] ${height} hidden md:block object-cover object-center`}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <motion.img
          src={imageUrl}
          alt={titleWhite || "Banner"}
          className={`w-full md:h-[400px] ${height} block md:hidden object-cover object-top`}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <motion.div
          className="absolute inset-0 bg-black/40"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
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
            {titleWhite}{" "}
            {titleGold && <span className="text-[#ffa800]">{titleGold}</span>}
          </motion.h1>
          {subtitle && (
            <motion.p
              className="text-white text-[16px] md:text-xl text-center"
              variants={slideInUp}
              transition={{ delay: 0.1 }}
            >
              {subtitle}
            </motion.p>
          )}
          <motion.div
            className="flex flex-col md:flex-row gap-2 md:gap-4 w-full justify-center max-w-6xl px-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {ctaPrimaryLabel && (
              <motion.div variants={itemVariant} className="w-full md:w-auto">
                <Link
                  to={ctaPrimaryUrl}
                  className="mt-4 md:mt-6 w-full md:w-[215px] h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2"
                >
                  <span className="text-[20px] font-bold font-inter">
                    <FontAwesomeIcon icon={faMagnifyingGlass} /> {ctaPrimaryLabel}
                  </span>
                </Link>
              </motion.div>
            )}
            {ctaSecondaryLabel && (
              <motion.div variants={itemVariant}>
                <Link
                  to={ctaSecondaryUrl}
                  className="mt-2 md:mt-6 w-full md:w-[198px] h-[48px] border text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2"
                >
                  <span className="text-[20px] font-bold font-inter">
                    <FontAwesomeIcon icon={faLocationDot} /> {ctaSecondaryLabel}
                  </span>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroBanner;