import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
    {
        id: 1,
        name: "Rakesh Kumar",
        country: "Punjab, India",
        image:
            "https://images.unsplash.com/photo-1688001247541-43bbd88f77b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
        title: "Healthier cows and higher milk production.",
    },
    {
        id: 2,
        name: "Suresh Patil",
        country: "Maharashtra, India",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80",
        title: "Better poultry growth with less feed waste.",
    },
    {
        id: 3,
        name: "Anita Devi",
        country: "Haryana, India",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80",
        title: "Healthier livestock with lower veterinary costs.",
    },
    {
        id: 4,
        name: "Rajesh Yadav",
        country: "Uttar Pradesh, India",
        image:
            "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800&auto=format&fit=crop&q=80",
        title: "Improved cattle growth and performance.",
    },
    {
        id: 5,
        name: "Bikash Mondal",
        country: "West Bengal, India",
        image:
            "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800&auto=format&fit=crop&q=80",
        title: "Excellent feed quality with higher milk yield.",
    },
    {
        id: 6,
        name: "Prakash Gowda",
        country: "Karnataka, India",
        image:
            "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=800&auto=format&fit=crop&q=80",
        title: "Better feed efficiency and farm profitability.",
    },
];

export default function Testimonial() {
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
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay with hover animation */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#032b38]/95 via-[#032b38]/45 to-transparent transition-opacity duration-500 group-hover:from-[#032b38]/98" />

                                    {/* Content with hover animations */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                                        <h4 className="font-bold text-xl leading-8 mb-5 transition-all duration-500 group-hover:text-yellow-300">
                                            {item.title}
                                        </h4>

                                        <div className="transform transition-all duration-500 group-hover:translate-x-2">
                                            <h4 className="font-semibold text-base group-hover:text-yellow-200 transition-colors duration-300">
                                                {item.name}
                                            </h4>
                                            <p className="text-sm text-white/80 mt-1 group-hover:text-white/100 transition-colors duration-300">
                                                {item.country}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Subtle border glow on hover */}
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