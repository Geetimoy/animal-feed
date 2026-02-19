import { useState, useRef, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";

import galleryBanner from "../../assets/images/gallery-banner.jpg";
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery5.jpg";
import gallery6 from "../../assets/images/gallery6.jpg";
import gallery7 from "../../assets/images/gallery7.jpg";
import gallery8 from "../../assets/images/gallery8.jpg";

import featuredImg1 from "../../assets/images/featured-img1.jpg";
import featuredImg2 from "../../assets/images/featured-img2.jpg";
import featuredImg3 from "../../assets/images/featured-img3.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const images = 
  // "./src/assets/images/gallery1.jpg",
  // "./src/assets/images/gallery2.jpg",
  // "./src/assets/images/gallery3.jpg",
  // "./src/assets/images/gallery4.jpg",
  // "./src/assets/images/gallery5.jpg",
  // "./src/assets/images/gallery6.jpg",
  // "./src/assets/images/gallery7.jpg",
  // "./src/assets/images/gallery8.jpg",
  [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];


function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Video 1",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 2,
      title: "Video 2",
      src: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      id: 3,
      title: "Video 3",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((err) => {
        console.log("Autoplay prevented:", err);
      });
    }
  }, [selectedVideo]);

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

        {/* Featured Image Gallery Section - Optional */}
        <section className="py-10 md:py-12 bg-gray-100">
          <div className="container mx-auto px-4">

            {/* Section Header */}
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-8 text-center text-gray-800">
              Featured <span className="text-[#ffa800]">Gallery</span>
            </h2>
            <p className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center">
                Explore a curated selection of our production facilities, premium raw materials, advanced processing systems, and healthy livestock results. Every image reflects our dedication to uncompromising quality, nutritional excellence, and sustainable farming practices.
            </p>
            

            {/* Gallery Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

              {/* Large Image */}
              <div className="md:col-span-2 group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                <img src={featuredImg1} alt="Featured Image 1" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/60 opacity-0 
                  group-hover:opacity-100 transition duration-500 
                  flex items-end p-6">

                  <div className="translate-y-6 group-hover:translate-y-0 
                                  transition duration-500">
                    <h3 className="text-white text-xl font-semibold">
                      Premium Feed Manufacturing
                    </h3>
                    <p className="text-gray-200 text-sm mt-2">
                      Advanced processing technology ensuring balanced nutrition and consistent quality.
                    </p>
                  </div>

                </div>
              </div>

              {/* Side Images */}
              <div className="flex flex-col gap-6">
                <div className="overflow-hidden rounded-2xl shadow-lg group relative cursor-pointer">
                  <img src={featuredImg2} alt="Featured Image 2" className="w-full h-[250px] object-cover transform group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 
                  group-hover:opacity-100 transition duration-500 
                  flex items-end p-6">

                  <div className="translate-y-6 group-hover:translate-y-0 
                                  transition duration-500">
                    <h3 className="text-white text-xl font-semibold">
                      Carefully Selected Ingredients
                    </h3>
                    <p className="text-gray-200 text-sm mt-2">
                      High-grade grains and protein sources sourced for optimal livestock performance.
                    </p>
                  </div>

                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg group relative cursor-pointer">
                  <img src={featuredImg3} alt="Featured Image 3" className="w-full h-[250px] object-cover transform group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 
                  group-hover:opacity-100 transition duration-500 
                  flex items-end p-6">

                    <div className="translate-y-6 group-hover:translate-y-0 
                                    transition duration-500">
                      <h3 className="text-white text-xl font-semibold">
                        Modern Production Facility
                      </h3>
                      <p className="text-gray-200 text-sm mt-2">
                        State-of-the-art infrastructure with strict quality control standards.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-10 md:py-12">
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
                <div className="overflow-hidden rounded-lg shadow-lg group relative cursor-pointer">
                  <img
                    key={index}
                    src={img}
                    alt=""
                    onClick={() => setSelectedImg(img)}
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg object-cover h-40 w-full hover:opacity-80 transition"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 
                  group-hover:opacity-100 transition duration-500 
                  flex items-end p-6">

                  <div className="translate-y-6 group-hover:translate-y-0 
                                  transition duration-500">
                    <h3 className="text-white text-xl font-semibold">
                      Quality Testing 
                    </h3>
                    <p className="text-gray-200 text-sm mt-2">
                      Every batch undergoes strict nutritional and safety analysis.
                    </p>
                  </div>

                  </div>
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

        {/* Featured Video Gallery Section - Optional */}
        <section className="py-10 md:py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <video controls className="w-full rounded-2xl h-full">
                <source src="https://placeholdervideo.dev/1920x1080" type="video/mp4" />
              </video>
            </div>
            {/* Content */}
            <div>
              {/* <h2 className="text-4xl font-bold mb-6">
                Advanced Animal Feed Production
              </h2> */}
              <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-8 text-gray-800">
                Featured <span className="text-[#ffa800]">Video</span>
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Our manufacturing process combines premium raw materials,
                scientific formulation, and strict quality control to deliver
                nutritionally balanced feed that supports healthier livestock
                growth and improved farm productivity.
              </p>

              <ul className="space-y-3 text-gray-700 mb-8">
                <li>• Carefully selected raw ingredients</li>
                <li>• Precision-based formulation</li>
                <li>• Modern processing technology</li>
                <li>• Quality tested for safety & performance</li>
              </ul>

              
            </div>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="pt-4 py-10 md:py-12">
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

        {/* New Video Gallery Section - Optional */}
        <section className="pt-4 py-10 md:py-12">
          <div className="container mx-auto px-4">
             <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-8 text-center text-gray-800">
              Video <span className="text-[#ffa800]">Gallery</span>
            </h2>
            <p className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center">
            These videos showcase our
              state-of-the-art manufacturing processes, quality control
              measures, and the positive impact our feed has on livestock health
              and productivity. Experience firsthand how we prioritize
              nutrition, safety, and excellence at every step, ensuring optimal
              growth and performance for animals worldwide.
            </p>

            <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto p-6">
      
      {/* Left Panel - Real Video Thumbnails */}
      <div className="md:w-1/4 w-full max-h-[400px] overflow-y-auto space-y-4">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 
              ${
                selectedVideo.id === video.id
                  ? "border-blue-600"
                  : "border-gray-200 hover:border-blue-400"
              }`}
          >
            {/* Video Thumbnail */}
            {/* <video
              src={video.src}
              muted
              className="w-full h-32 object-cover"
            /> */}
            <video
  src={video.src}
  muted
  preload="auto"
  playsInline
  className="w-full h-32 object-cover"
/>

            {/* Play Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                ▶
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Panel - Main Video */}
      <div className="md:w-3/4 w-full">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <video
            ref={videoRef}
            controls
            className="w-full h-[400px] object-cover"
          >
            <source src={selectedVideo.src} type="video/mp4" />
          </video>
        </div>

        {/* <h3 className="mt-4 text-xl font-semibold text-gray-800">
          {selectedVideo.title}
        </h3> */}
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
