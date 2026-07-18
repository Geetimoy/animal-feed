import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, X, Play, Pause } from "lucide-react";

import { API_URL } from "../../config/api";

import "swiper/css";
import "swiper/css/navigation";

const FALLBACK_IMAGE =
    "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='420' viewBox='0 0 500 420'%3E%3Crect width='500' height='420' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='20' fill='%239ca3af' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";

// Demo video URL (can be replaced with actual API video URL)
const DEMO_VIDEO_URL = "https://www.w3schools.com/html/mov_bbb.mp4";
// Alternative demo video (if the above doesn't work)
// const DEMO_VIDEO_URL = "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4";

export default function Testimonial() {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    //const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    //const videoRef = useRef(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch(
                    `${API_URL}/testimonials`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                if (result.success) {
                    setTestimonials(result.data);
                } else {
                    throw new Error("API returned unsuccessful response");
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch testimonials");
                console.error("Error fetching testimonials:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    const openModal = (testimonial) => {
        setSelectedTestimonial(testimonial);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
        setIsVideoPlaying(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setIsVideoPlaying(false);
        setTimeout(() => setSelectedTestimonial(null), 300);
    };

    const toggleVideoPlay = () => {
        if (videoRef.current) {
            if (isVideoPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsVideoPlaying(!isVideoPlaying);
        }
    };

    // Loading state
    if (loading) {
        return (
            <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="animate-pulse">
                        <div className="h-12 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
                        <div className="h-6 bg-gray-200 rounded w-96 mx-auto"></div>
                    </div>
                </div>
            </section>
        );
    }

    // Error state
    if (error) {
        return (
            <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-red-500">Failed to load testimonials. Please try again later.</p>
                </div>
            </section>
        );
    }

    // No data state
    if (testimonials.length === 0) {
        return (
            <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gray-500">No testimonials available.</p>
                </div>
            </section>
        );
    }

    // Youtube Link
    const getYouTubeEmbedUrl = (url) => {
  if (!url) return "";

  const regExp =
    /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;

  const match = url.match(regExp);

  return match && match[1]
    ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`
    : "";
};

    // const youtubeEmbedUrl = getYoutubeEmbedUrl(
    //     selectedTestimonial?.video_url
    // );

    return (
        <>
            <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-5xl font-semibold text-gray-900">
                            What <span className="">Farmers Say</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto mt-4">
                            Hear directly from our valued customers about their experience
                            using Green Gold animal nutrition products.
                        </p>
                    </div>

                    <div className="relative">
                        <button className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 cursor-pointer">
                            <ChevronLeft size={20} />
                        </button>

                        <button className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 cursor-pointer">
                            <ChevronRight size={20} />
                        </button>

                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation={{
                                prevEl: ".testimonial-prev",
                                nextEl: ".testimonial-next",
                            }}
                            autoplay={{
                                delay: 3500,
                            }}
                            loop
                            spaceBetween={24}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                640: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {testimonials.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div
                                        className="relative h-[420px] overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                                        onClick={() => openModal(item)}
                                    >
                                        <img
                                            src={item.image_url || FALLBACK_IMAGE}
                                            alt={item.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            onError={(e) => {
                                                e.target.src = FALLBACK_IMAGE;
                                            }}
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#032b38]/95 via-[#032b38]/45 to-transparent transition-opacity duration-500 group-hover:from-[#032b38]/98" />

                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                                            <div className="mb-5 max-h-[120px] overflow-hidden">
                                                <h4 className="relative font-bold text-xl leading-8 transition-all duration-500 group-hover:text-yellow-300 line-clamp-3 px-6">
                                                    <span className="absolute -left-1 -top-3 text-5xl text-yellow-400 opacity-70">
                                                        “
                                                    </span>

                                                    {item.testimonial}

                                                    <span className="absolute -right-1 -bottom-6 text-5xl text-yellow-400 opacity-70">
                                                        ”
                                                    </span>
                                                </h4>
                                            </div>
                                            <div className="transform transition-all duration-500 group-hover:translate-x-2">
                                                <h4 className="font-semibold text-base group-hover:text-yellow-200 transition-colors duration-300">
                                                    {item.name}
                                                </h4>
                                                <p className="text-sm text-white/80 mt-1 group-hover:text-white/100 transition-colors duration-300">
                                                    {item.city}, {item.state}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/50 rounded-lg transition-all duration-500 pointer-events-none" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && selectedTestimonial && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
                    onClick={closeModal}
                >
                    <div
                        className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] shadow-2xl animate-slideUp"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 flex items-center justify-center hover:scale-110 cursor-pointer"
                        >
                            <X size={24} />
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                            {/* Left side - Video */}
                            <div className="relative h-[300px] lg:h-[520px] bg-gradient-to-br from-[#032b38] to-[#0a4b5e] rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none overflow-hidden">
                                <div className="relative w-full h-full group">
                                    {/* <video
                                        ref={videoRef}
                                        src={selectedTestimonial.video_url || DEMO_VIDEO_URL}
                                        className="w-full h-full object-cover"
                                        poster={selectedTestimonial.image_url || FALLBACK_IMAGE}
                                        onPlay={() => setIsVideoPlaying(true)}
                                        onPause={() => setIsVideoPlaying(false)}
                                        onEnded={() => setIsVideoPlaying(false)}
                                        playsInline
                                    >
                                        Your browser does not support the video tag.
                                    </video> */}

                                    {/* {youtubeEmbedUrl ? (
                                        <iframe
                                            className="w-full h-full"
                                            src={youtubeEmbedUrl}
                                            title={selectedTestimonial.name}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    ) : (
                                        <img
                                            src={selectedTestimonial.image_url || FALLBACK_IMAGE}
                                            alt={selectedTestimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    )} */}

                                    {selectedTestimonial?.video_url ? (
    <iframe
      className="w-full h-full"
      src={getYouTubeEmbedUrl(selectedTestimonial.video_url)}
      title={selectedTestimonial.name}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ) : (
    <img
      src={selectedTestimonial.image_url || FALLBACK_IMAGE}
      alt={selectedTestimonial.name}
      className="w-full h-full object-cover"
    />
  )}

                                    {/* Custom Play/Pause Overlay */}
                                    {/* <div
                                        className="absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity duration-300"
                                        onClick={toggleVideoPlay}
                                    >
                                        <div className={`w-20 h-20 rounded-full bg-yellow-400/90 flex items-center justify-center shadow-2xl transform transition-all duration-300 hover:scale-110 hover:bg-yellow-400 ${!isVideoPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                            {!isVideoPlaying ? (
                                                <Play size={32} className="text-[#032b38] ml-1" />
                                            ) : (
                                                <Pause size={32} className="text-[#032b38]" />
                                            )}
                                        </div>
                                    </div> */}

                                    {/* Video Controls Hint */}
                                    {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Click to {isVideoPlaying ? 'pause' : 'play'}
                                    </div> */}

                                    {/* Video Duration Badge */}
                                    {/* <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {selectedTestimonial.video_duration || '1:30'}
                                    </div> */}
                                </div>
                            </div>

                            {/* Right side - Content */}
                            <div className="p-6 lg:p-8 flex flex-col justify-center bg-white rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none">
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-12 h-0.5 bg-yellow-400"></div>
                                        <span className="text-sm font-medium text-yellow-600 uppercase tracking-wider">
                                            Farmer Testimonial
                                        </span>
                                    </div>

                                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                                        {selectedTestimonial.name}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-2 flex items-center gap-2">
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {selectedTestimonial.city}, {selectedTestimonial.state}
                                    </p>

                                    {selectedTestimonial.farm_type && (
                                        <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                            Farm Type: {selectedTestimonial.farm_type}
                                        </p>
                                    )}
                                </div>

                                <div className="relative flex-1">
                                    <span className="absolute -top-2 -left-2 text-6xl text-yellow-400 opacity-30">
                                        “
                                    </span>
                                    <div className="max-h-[200px] lg:max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                                        <p className="text-gray-700 text-base lg:text-lg leading-relaxed pl-6">
                                            {selectedTestimonial.full_testimonial || selectedTestimonial.testimonial}
                                        </p>
                                    </div>
                                    <span className="absolute -bottom-6 right-0 text-6xl text-yellow-400 opacity-30">
                                        ”
                                    </span>
                                </div>

                                {selectedTestimonial.rating && (
                                    <div className="mt-6 flex items-center gap-1">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                className={`w-5 h-5 ${index < selectedTestimonial.rating
                                                    ? 'text-yellow-400'
                                                    : 'text-gray-300'
                                                    }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                        <span className="ml-2 text-sm text-gray-500">
                                            ({selectedTestimonial.rating}/5)
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Add custom CSS for animations and scrollbar */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                
                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }

                /* Custom Scrollbar */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 10px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #94a3b8;
                }
            `}</style>
        </>
    );
}
