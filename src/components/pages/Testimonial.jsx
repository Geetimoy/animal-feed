import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const FALLBACK_IMAGE =
    "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='420' viewBox='0 0 500 420'%3E%3Crect width='500' height='420' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='20' fill='%239ca3af' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";

export default function Testimonial() {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch(
                    "https://neonatestaging.com/animal_feed/public/api/testimonials"
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

    return (
        <section className="py-20 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-5xl font-semibold text-gray-900">
                        What <span className="text-yellow-400">Farmers Say</span>
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
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="relative h-[420px] overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 group cursor-pointer">
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
    );
}