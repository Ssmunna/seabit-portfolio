import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

export default function TrustedSwiperSlider({ logos }) {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={2}
            spaceBetween={0}
            breakpoints={{
                320: { slidesPerView: 2 },
                480: { slidesPerView: 3 },
                640: { slidesPerView: 4 },
                768: { slidesPerView: 5 },
                1024: { slidesPerView: 6 },
                1280: { slidesPerView: 7 },
                1536: { slidesPerView: 8 },
            }}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full h-full"
        >
            {logos.map((logo, index) => (
                <SwiperSlide
                    key={index}
                    className="flex items-center justify-center px-6 h-full border-r border-orange-400 last:border-r-0"
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="max-h-[63px] min-h-[63px] w-auto object-contain mx-auto"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
