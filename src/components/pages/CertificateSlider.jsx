import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";
import "./custom.css";
import certificate1  from "../../assets/images/certificate1.png";
import certificate2 from "../../assets/images/certificate2.png";
import certificate3 from "../../assets/images/certificate3.png";
import certificate4 from "../../assets/images/certificate4.png";
import certificate5 from "../../assets/images/certificate5.png"
import certificate6 from "../../assets/images/certificate6.png";
import certificate7 from "../../assets/images/certificate7.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,

} from "@fortawesome/free-solid-svg-icons";



const certificates = [
  {
    src: certificate1,
    title: "HACCP ",
  },
  {
    src: certificate2,
    title: "Good Manufacturing Practice (GMP)",
  },
  {
    src: certificate3,
    title: "Environmental Management System ",
  },
  {
    src: certificate4,
    title: "Occupational Health and Safety Management System ",
  },
  {
    src: certificate5,
    title: "Food Safety Management Systems ",
  },
  {
    src: certificate6,
    title: "Energy Management Systems ",
  },
  {
    src: certificate7,
    title: "Quality Management System",
  },
];

export default function CertificateSlider() {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='certificate-gallery']", {
      Image: {
        zoom: true,
        click: "zoom",
        wheel: "slide",
      },
      Carousel: {
        infinite: true,
      },
    //   caption: (fancybox, slide) => `
    //     <div>
    //       <h3>${slide.title}</h3>
        
    //     </div>
    //   `,
    });

    return () => Fancybox.destroy();
  }, []);

  return (
    <section className="py-10 md:py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 text-center mb-10">
          Our <span className="text-yellow-500"> Certifications</span>
        </h2>

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
            <SwiperSlide key={index}>
              <a
                href={item.src}
                data-fancybox="certificate-gallery"
                data-caption-title={item.title}
                data-caption-desc={item.desc}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-[240px] object-contain shadow-md"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-3">
          {/* <!-- Prev --> */}
          <button
            class="certificate-prev w-10 h-10 rounded-full border border-gray-300
              flex items-center justify-center
              text-gray-600
              hover:border-green-500 hover:text-green-500
              transition-colors duration-300 cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-x-1"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          {/* <!-- Next --> */}
          <button
            class="certificate-next w-10 h-10 rounded-full border border-gray-300
              flex items-center justify-center
              text-gray-600
              hover:border-green-500 hover:text-green-500
              transition-colors duration-300 cursor-pointer transition-transform duration-300 ease-in-out hover:translate-x-1"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
}
