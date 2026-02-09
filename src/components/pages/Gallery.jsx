import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";

import galleryBanner from "../../assets/images/gallery-banner.jpg";
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery5.jpg";
import gallery6 from "../../assets/images/gallery6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const images = [
  "./src/assets/images/gallery1.jpg",
  "./src/assets/images/gallery2.jpg",
  "./src/assets/images/gallery3.jpg",
  "./src/assets/images/gallery4.jpg",
  "./src/assets/images/gallery5.jpg",
  "./src/assets/images/gallery6.jpg",
  "./src/assets/images/gallery7.jpg",
  "./src/assets/images/gallery8.jpg",
];

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Header></Header>
      <main className="pt-16 overflow-hidden">
        <section className="relative z-0">
          <div className="relative">
            <img
              src={galleryBanner}
              alt="Gallery Banner"
              className="w-full md:h-auto h-[450px]  object-cover"
            />

            <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6  w-full">
              <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6">
                Gallery
              </h1>
              <p className="text-white text-[16px] md:text-xl text-center">
                A glimpse into our journey, achievements, and moments that
                define us.
              </p>
              <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
                <Link
                  to="/distributor"
                  className="mt-4 md:mt-6 w-full  md:w-[198px] h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2 "
                >
                  <span className="text-[20px] font-bold font-inter">
                    <FontAwesomeIcon icon={faMagnifyingGlass} /> Find
                    Distributor
                  </span>
                </Link>
                <Link
                  to="/contact-us"
                  className="mt-3 md:mt-6  w-full  md:w-[198px] h-[48px] border text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2"
                >
                  <span className="text-[20px] font-bold font-inter">
                    <FontAwesomeIcon icon={faLocationDot} /> Contact Us
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-8 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-8 text-center text-gray-800">
              Image <span className="text-[#ffa800]">Gallery</span>
            </h2>
            <p className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center">
              Our Image Gallery offers a closer look at the quality, care, and
              consistency behind our animal feed products. From advanced
              manufacturing processes to healthy livestock results, these
              moments reflect our commitment to nutrition, safety, and
              excellence. Explore how our feed supports stronger growth and
              better productivity at every stage.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {/* Sample images - replace with actual images */}
              {images.map((img, index) => (
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    key={index}
                    src={img}
                    alt=""
                    onClick={() => setSelectedImg(img)}
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg object-cover h-40 w-full hover:opacity-80 transition"
                  />
                </div>
              ))}

              {/* Lightbox */}
              {selectedImg && (
                <div
                  className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                  onClick={() => setSelectedImg(null)}
                >
                  <div className="relative max-w-4xl w-full px-4">
                    {/* Close Button */}
                    <button
                      className="absolute -top-10 right-4 text-white text-3xl"
                      onClick={() => setSelectedImg(null)}
                    >
                      &times;
                    </button>

                    {/* Image */}
                    <img
                      src={selectedImg}
                      alt=""
                      className="mx-auto max-h-[80vh] rounded-lg"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </div>
              )}
              {/* <div className="overflow-hidden rounded-lg shadow-lg">
                <img src={gallery2} alt="Gallery Image 2" className="w-full h-auto transform hover:scale-105 transition-transform duration-300"/>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img src={gallery3} alt="Gallery Image 3" className="w-full h-auto transform hover:scale-105 transition-transform duration-300"/>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img src={gallery4} alt="Gallery Image 4" className="w-full h-auto transform hover:scale-105 transition-transform duration-300"/>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img src={gallery5} alt="Gallery Image 5" className="w-full h-auto transform hover:scale-105 transition-transform duration-300"/>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img src={gallery6} alt="Gallery Image 6" className="w-full h-auto transform hover:scale-105 transition-transform duration-300"/>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img src={gallery1} alt="Gallery Image 7" className="w-full h-auto transform hover:scale-105 transition-transform duration-300"/>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img src={gallery2} alt="Gallery Image 8" className="w-full h-auto transform hover:scale-105 transition-transform duration-300"/>
              </div> */}
            </div>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="pt-4 pb-8 md:py-20 bg-gray-100 md:pt-0 md:pb-0 ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-8 text-center text-gray-800">
              Video <span className="text-[#ffa800]">Gallery</span>
            </h2>
            <p className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center">
              Dive into our Video Gallery to witness the essence of our animal
              feed products in action. These videos showcase our
              state-of-the-art manufacturing processes, quality control
              measures, and the positive impact our feed has on livestock health
              and productivity. Experience firsthand how we prioritize
              nutrition, safety, and excellence at every step, ensuring optimal
              growth and performance for animals worldwide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
              {/* Sample videos - replace with actual videos */}
              <div className="overflow-hidden rounded-lg shadow-lg">
                <video controls className="w-full h-auto rounded-lg">
                  <source
                    src="https://placeholdervideo.dev/1920x1080"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <video controls className="w-full h-auto rounded-lg">
                  <source
                    src="https://placeholdervideo.dev/1920x1080"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <video controls className="w-full h-auto rounded-lg">
                  <source
                    src="https://placeholdervideo.dev/1920x1080"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Gallery;
