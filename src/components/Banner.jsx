function Banner(){
  return(
    <>
    <motion.section
            className="relative z-0"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="relative">
              <motion.img
                src={banner?.data?.[0]?.image_url}
                alt={banner?.data?.title}
                className="w-full md:h-auto h-[500px] hidden md:block object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
              />
              <img
                src={banner?.data?.[0]?.image_url}
                alt={banner?.data?.title}
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
                  {bannerItem?.title_white}{" "} <span className="text-[#ffa800]">{bannerItem?.title_gold}</span>
                </motion.h1>
                <motion.p
                  className="text-white text-[16px] md:text-xl text-center"
                  variants={slideInUp}
                  transition={{ delay: 0.1 }}
                >
                  {banner?.data[0].subtitle}
                  {/* For over 25 years, we've been at the forefront of animal
                  nutrition, blending scientific expertise with agricultural
                  wisdom to empower farmers and enhance livestock productivity
                  across India */}
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
                                     <FontAwesomeIcon icon={faMagnifyingGlass} /> {bannerItem?.cta_primary_label || "Find Distributor"}
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
    </>
  );
}


export default Banner();