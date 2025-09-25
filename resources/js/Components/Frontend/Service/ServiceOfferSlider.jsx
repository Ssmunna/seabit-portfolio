import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default function ServiceOfferSlider() {
    const slides = [
        "/assets/images/work_with_us/photo-2.png",
        "/assets/images/work_with_us/photo-3.png",
        "/assets/images/work_with_us/photo-4.png",
    ];

    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            slidesPerView={1}
            className="w-full rounded-2xl overflow-hidden shadow-lg"
        >
            {slides.map((slide, index) => (
                <SwiperSlide
                    key={index}
                    className="flex items-center justify-center bg-black text-white"
                >
                    <img
                        src={slide}
                        alt="slide"
                        className="w-full h-[300px] md:h-[529px] object-cover"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
