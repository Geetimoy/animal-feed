import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";
import "./custom.css";
import { motion } from "framer-motion";
import axios from "axios";
import { API_URL } from "../../config/api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const slideInUp = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function CertificateSlider() {
  const [certificates, setCertificates] = useState([]);
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCertifications();
  }, []);

  const fetchCertifications = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/certifications`);

      if (res.data?.data) {
        const data = res.data.data;

        // Set section data
        if (data.section) {
          setSectionData(data.section);
        }

        // Set certificates
        if (data.certificates && data.certificates.length > 0) {
          setCertificates(data.certificates);
        }
      }
    } catch (err) {
      console.log("Certifications API error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Initialize Fancybox
  useEffect(() => {
    if (certificates.length > 0) {
      Fancybox.bind("[data-fancybox='certificate-gallery']", {
        Image: {
          zoom: true,
          click: "zoom",
          wheel: "slide",
        },
        Carousel: {
          infinite: true,
        },
      });

      return () => Fancybox.destroy();
    }
  }, [certificates]);

  // Loading state
  if (loading) {
    return (
      <section className="py-10 md:py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#00a34a] border-t-transparent"></div>
          <p className="mt-4 text-gray-600">Loading certifications...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 md:py-12 bg-gray-100">
      <motion.div
        className="max-w-7xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideInUp}
      >
        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-6 md:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInUp}
        >
          <h2 className="text-3xl sm:text-5xl font-semibold text-gray-900">
            {sectionData?.heading || "Our"}{" "}
            <span className="">
              {sectionData?.heading_highlight || "Certifications"}
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-[16px] sm:text-[18px]">
            {sectionData?.description ||
              "Our animal feed products are developed with certified quality standards to ensure safe, nutritious, and reliable feed for healthier livestock and improved farm performance."}
          </p>
        </motion.div>

        {certificates.length > 0 ? (
          <>
            <Swiper
              className="certificate-swiper"
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                prevEl: ".certificate-prev",
                nextEl: ".certificate-next",
              }}
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
            >
              {certificates.map((item, index) => (
                <SwiperSlide key={item.id || index}>
                  <a
                    href={item.image_url}
                    data-fancybox="certificate-gallery"
                    data-caption-title={`Certificate ${index + 1}`}
                  >
                    <img
                      src={item.image_url}
                      alt={`Certificate ${index + 1}`}
                      className="w-full h-[240px] object-contain shadow-md hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex items-center justify-center gap-3 mt-6">
              {/* Prev Button */}
              <button
                className="certificate-prev w-10 h-10 rounded-full border border-gray-300
                  flex items-center justify-center
                  text-gray-600
                  hover:border-green-500 hover:text-green-500
                  transition-colors duration-300 cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-x-1"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>

              {/* Next Button */}
              <button
                className="certificate-next w-10 h-10 rounded-full border border-gray-300
                  flex items-center justify-center
                  text-gray-600
                  hover:border-green-500 hover:text-green-500
                  transition-colors duration-300 cursor-pointer transition-transform duration-300 ease-in-out hover:translate-x-1"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">No certificates available</p>
        )}
      </motion.div>
    </section>
  );
}