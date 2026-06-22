import { useState, useRef, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMagnifyingGlass, faInfo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import { API_URL } from "../../config/api";
import axios from "axios";

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  // State for API data
  const [banner, setBanner] = useState(null);
  const [galleryData, setGalleryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const pageSlug = "gallery";

  // State for video gallery
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);
  const [showInfo, setShowInfo] = useState(false);

  // Extract data from API response
  const featuredImages = galleryData?.featured_images || [];
  const galleryImages = galleryData?.gallery_images || [];
  const featuredVideo = galleryData?.featured_videos?.[0];
  const galleryVideos = galleryData?.gallery_videos || [];

  // Set initial selected video when galleryVideos loads
  useEffect(() => {
    if (galleryVideos.length > 0 && !selectedVideo) {
      setSelectedVideo(galleryVideos[0]);
    }
  }, [galleryVideos]);

  // Handle video change
  useEffect(() => {
    if (videoRef.current && selectedVideo) {
      videoRef.current.load();
      videoRef.current.play().catch((err) => {
        console.log("Autoplay prevented:", err);
      });
    }
    setShowInfo(false);
  }, [selectedVideo]);

  // Fetch banner
  useEffect(() => {
    if (pageSlug) {
      fetchBanner();
    }
  }, [pageSlug]);

  const fetchBanner = async () => {
    try {
      const res = await axios.get(`${API_URL}/banners/${pageSlug}`);
      setBanner(res.data);
    } catch (err) {
      console.log("Banner API error:", err);
    }
  };

  // Fetch gallery data
  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/gallery`);
      setGalleryData(res.data?.data || {});
    } catch (err) {
      console.log("Gallery API error:", err);
    } finally {
      setLoading(false);
    }
  };

  const bannerItem = banner?.data?.[0];

  // Loading state
  if (loading) {
    return (
      <>
        <Header />
        <main className="pt-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#00a34a] border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Loading gallery...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Gallery - Animal Feed</title>
      </Helmet>
      <Header />
      <main className="pt-16 overflow-hidden">
        {/* Banner Section */}
        {bannerItem?.image_url && (
          <section className="relative z-0">
            <div className="relative">
              <img
                src={bannerItem?.image_url}
                alt={bannerItem?.title}
                className="w-full md:h-auto h-[450px] object-cover"
              />
              <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-4 md:px-6 w-full">
                <h1 className="text-[#fff] text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6">
                  {bannerItem?.title_white}
                </h1>
                <p className="text-white text-[16px] md:text-xl text-center">
                  {bannerItem?.subtitle}
                </p>
                <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
                  <Link
                    to={bannerItem?.cta_primary_url || "/distributor"}
                    className="mt-4 md:mt-6 w-full md:w-[215px] h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2"
                  >
                    <span className="text-[20px] font-bold font-inter">
                      <FontAwesomeIcon icon={faMagnifyingGlass} /> {bannerItem?.cta_primary_label || "Find Distributor"}
                    </span>
                  </Link>
                  <Link
                    to={bannerItem?.cta_secondary_url || "/contact-us"}
                    className="mt-3 md:mt-6 w-full md:w-[198px] h-[48px] border text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2"
                  >
                    <span className="text-[20px] font-bold font-inter">
                      <FontAwesomeIcon icon={faLocationDot} /> {bannerItem?.cta_secondary_label || "Contact Us"}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Featured Image Gallery Section */}
        <section className="py-10 md:py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-8 text-center text-gray-800">
              Featured <span className="text-[#ffa800]">Gallery</span>
            </h2>
            <p className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center">
              Explore a curated selection of our production facilities, premium raw materials, advanced processing systems, and healthy livestock results. Every image reflects our dedication to uncompromising quality, nutritional excellence, and sustainable farming practices.
            </p>

            {featuredImages.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {/* First featured image (large) */}
                {featuredImages[0] && (
                  <div className="md:col-span-2 group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                    <img
                      src={featuredImages[0].file_url}
                      alt={featuredImages[0].title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                      <div className="translate-y-6 group-hover:translate-y-0 transition duration-500">
                        <h3 className="text-white text-xl font-semibold">
                          {featuredImages[0].title}
                        </h3>
                        <p className="text-gray-200 text-sm mt-2">
                          {featuredImages[0].description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Side images */}
                <div className="flex flex-col gap-6">
                  {featuredImages.slice(1, 3).map((image) => (
                    <div
                      key={image.id}
                      className="overflow-hidden rounded-2xl shadow-lg group relative cursor-pointer"
                    >
                      <img
                        src={image.file_url}
                        alt={image.title}
                        className="w-full h-[250px] object-cover transform group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                        <div className="translate-y-6 group-hover:translate-y-0 transition duration-500">
                          <h3 className="text-white text-xl font-semibold">
                            {image.title}
                          </h3>
                          <p className="text-gray-200 text-sm mt-2">
                            {image.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Image Gallery Section */}
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

            {galleryImages.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {galleryImages.map((item) => (
                  <div
                    key={item.id}
                    className="overflow-hidden rounded-lg shadow-lg group relative cursor-pointer"
                  >
                    <img
                      src={item.file_url}
                      alt={item.title}
                      onClick={() => setSelectedImg(item.file_url)}
                      className="w-full h-40 object-cover transform hover:scale-105 transition-transform duration-300 cursor-pointer hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                      <div className="translate-y-6 group-hover:translate-y-0 transition duration-500">
                        <h3 className="text-white text-xl font-semibold">
                          {item.title}
                        </h3>
                        <p className="text-gray-200 text-sm mt-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-8">No gallery images available</p>
            )}

            {/* Lightbox */}
            {selectedImg && (
              <div
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                onClick={() => setSelectedImg(null)}
              >
                <div className="relative max-w-4xl w-full px-4">
                  <button
                    className="absolute -top-10 right-4 text-white text-3xl"
                    onClick={() => setSelectedImg(null)}
                  >
                    &times;
                  </button>
                  <img
                    src={selectedImg}
                    alt=""
                    className="mx-auto max-h-[80vh] rounded-lg"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Featured Video Section */}
        {featuredVideo && (
          <section className="py-10 md:py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <video controls className="w-full rounded-2xl h-full">
                  <source src={featuredVideo.video_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-8 text-gray-800">
                  Featured <span className="text-[#ffa800]">Video</span>
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredVideo.featured_video_body || featuredVideo.description || "Our manufacturing process combines premium raw materials, scientific formulation, and strict quality control to deliver nutritionally balanced feed that supports healthier livestock growth and improved farm productivity."}
                </p>
                {featuredVideo.featured_video_bullets && featuredVideo.featured_video_bullets.length > 0 && (
                  <ul className="space-y-3 text-gray-700 mb-8">
                    {featuredVideo.featured_video_bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Video Gallery Section */}
        <section className="pt-4 py-10 md:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-8 text-center text-gray-800">
              Video <span className="text-[#ffa800]">Gallery</span>
            </h2>
            <p className="mt-4 md:mt-6 text-gray-600 leading-normal md:leading-relaxed text-[16px] md:text-[18px] text-center">
              These videos showcase our state-of-the-art manufacturing processes, quality control measures, and the positive impact our feed has on livestock health and productivity. Experience firsthand how we prioritize nutrition, safety, and excellence at every step, ensuring optimal growth and performance for animals worldwide.
            </p>

            {galleryVideos.length > 0 ? (
              <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto p-6">
                {/* Left Panel - Video Thumbnails */}
                <div className="md:w-1/4 w-full max-h-[400px] overflow-y-auto space-y-4">
                  {galleryVideos.map((video) => (
                    <div
                      key={video.id}
                      onClick={() => setSelectedVideo(video)}
                      className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 ${selectedVideo?.id === video.id
                        ? "border-blue-600"
                        : "border-gray-200 hover:border-blue-400"
                        }`}
                    >
                      {video.thumbnail_url ? (
                        <img
                          src={video.thumbnail_url}
                          alt={video.title}
                          className="w-full h-32 object-cover"
                        />
                      ) : (
                        <video
                          src={video.video_url}
                          muted
                          preload="auto"
                          playsInline
                          className="w-full h-32 object-cover"
                        />
                      )}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800">
                          ▶
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Panel - Main Video */}
                <div className="md:w-3/4 w-full">
                  {selectedVideo && (
                    <div className="rounded-xl overflow-hidden shadow-lg relative">
                      <video
                        ref={videoRef}
                        controls
                        className="w-full h-[400px] object-cover"
                      >
                        <source src={selectedVideo.video_url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <button
                        onClick={() => setShowInfo(!showInfo)}
                        className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faInfo} />
                      </button>
                      <div
                        className={`absolute bottom-0 left-0 w-full bg-black/70 text-white p-4 transition-all duration-300 ${showInfo ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                          }`}
                      >
                        <h3 className="text-lg font-semibold">
                          {selectedVideo.title}
                        </h3>
                        <p className="text-sm mt-2">
                          {selectedVideo.description || "Experience firsthand how we prioritize nutrition, safety, and excellence at every step, ensuring optimal growth and performance for animals worldwide."}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-8">No videos available</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Gallery;