import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Animation variants
const slideInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// Fallback image
const FALLBACK_IMAGE = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='16' fill='%239ca3af' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";

export default function NewsEventsSection() {
    const [news, setNews] = useState([]);
    const [newsLoading, setNewsLoading] = useState(true);
    const [newsError, setNewsError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                // Replace with your actual API endpoint
                const response = await fetch(
                    "https://neonatestaging.com/animal_feed/public/api/news"
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                if (result.success) {
                    setNews(result.data);
                } else {
                    throw new Error("API returned unsuccessful response");
                }
            } catch (err) {
                setNewsError(err instanceof Error ? err.message : "Failed to fetch news");
                console.error("Error fetching news:", err);
            } finally {
                setNewsLoading(false);
            }
        };

        fetchNews();
    }, []);

    // Format date
    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    // Calculate read time (approx 200 words per minute)
    const calculateReadTime = (content) => {
        if (!content) return "1 min read";
        const words = content.split(/\s+/).length;
        const minutes = Math.ceil(words / 200);
        return `${minutes} min read`;
    };

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideInUp}
            >
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 lg:mb-12 gap-4">
                    <div className="text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                            <div className="w-12 h-1 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                                Latest Updates
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                            News & <span className="text-green-600">Events</span>
                        </h2>
                        <p className="mt-3 text-gray-500 max-w-2xl text-base lg:text-lg">
                            Stay updated with the latest happenings, product launches, and events at Green Gold.
                        </p>
                    </div>

                    <div className="flex items-center justify-center lg:justify-end gap-3">
                        <button className="news-prev w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-green-500 hover:text-green-500 hover:bg-green-50 transition-all duration-300 cursor-pointer hover:-translate-x-1 active:scale-95">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button className="news-next w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-green-500 hover:text-green-500 hover:bg-green-50 transition-all duration-300 cursor-pointer hover:translate-x-1 active:scale-95">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>

                {/* News Cards */}
                <div className="newsSwiper">
                    {newsLoading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                    <Skeleton className="h-52 w-full rounded-none" />
                                    <div className="p-5 space-y-3">
                                        <Skeleton className="h-3 w-24" />
                                        <Skeleton className="h-5 w-full" />
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-3/4" />
                                        <Skeleton className="h-4 w-28 mt-3" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : newsError || news.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-5xl mb-4">📰</div>
                            <p className="text-gray-400 text-lg">
                                {newsError ? "Unable to load news at the moment. Please try again later." : "No news available at the moment."}
                            </p>
                            {newsError && (
                                <button
                                    onClick={() => window.location.reload()}
                                    className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    Retry
                                </button>
                            )}
                        </div>
                    ) : (
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation={{
                                prevEl: ".news-prev",
                                nextEl: ".news-next"
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 24
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 30
                                }
                            }}
                            className="pb-12"
                        >
                            {news.map((item) => (
                                <SwiperSlide key={item.id} className="h-auto">
                                    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-1">
                                        {/* Image Container */}
                                        <div className="relative h-52 overflow-hidden">
                                            <img
                                                src={item.image_url || FALLBACK_IMAGE}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                onError={(e) => {
                                                    e.target.src = FALLBACK_IMAGE;
                                                }}
                                            />
                                            {/* Category Badge */}
                                            {item.category && (
                                                <span className="absolute top-4 left-4 bg-green-600/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                                                    {item.category}
                                                </span>
                                            )}
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 flex flex-col flex-grow">
                                            {/* Meta Info */}
                                            <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                                                <span className="flex items-center gap-1.5">
                                                    <FontAwesomeIcon icon={faCalendarAlt} className="text-green-500" />
                                                    {formatDate(item.published_at)}
                                                </span>
                                                <span className="w-px h-3 bg-gray-300"></span>
                                                <span className="flex items-center gap-1.5">
                                                    <FontAwesomeIcon icon={faClock} className="text-green-500" />
                                                    {item.read_time || calculateReadTime(item.content)}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors duration-300">
                                                {item.title}
                                            </h3>

                                            {/* Excerpt */}
                                            <p className="text-sm text-gray-500 flex-grow line-clamp-3 mb-4">
                                                {item.excerpt || item.content?.substring(0, 120) + "..."}
                                            </p>

                                            {/* Read More Link */}
                                            <Link
                                                to={`/news/${item.slug || item.id}`}
                                                className="group/link inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700 transition-colors duration-300"
                                            >
                                                Read Article
                                                <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center group-hover/link:bg-green-200 transition-all duration-300 group-hover/link:translate-x-1">
                                                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>

                {/* View All Button */}
                {!newsLoading && news.length > 0 && (
                    <div className="text-center mt-8">
                        <Link
                            to="/news"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 hover:shadow-lg hover:shadow-green-200 group"
                        >
                            View All News
                            <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                )}
            </motion.div>
        </section>
    );
}