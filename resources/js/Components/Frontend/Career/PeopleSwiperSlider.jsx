import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

export default function PeopleSwiperSlider({ peoples }) {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1.5}
            spaceBetween={16}
            breakpoints={{
                320: { slidesPerView: 1.5, spaceBetween: 12 },
                480: { slidesPerView: 2.5, spaceBetween: 16 },
                1024: { slidesPerView: 3.5, spaceBetween: 16 },
                1280: { slidesPerView: 4.5, spaceBetween: 16 },
            }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full h-full"
        >
            {peoples.map((people, index) => (
                <SwiperSlide
                    key={index}
                    className="flex items-center justify-center h-full"
                >
                    <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[267px] md:h-[267px] rounded-2xl overflow-hidden shadow-md">
                        <img
                            src={people.image}
                            alt={people.name}
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#F25C30] from-10% via-80% to-transparent">
                            <h3 className="text-[#FFFFFF] text-[24px] font-semibold">
                                {people.name}
                            </h3>
                            <p className="text-white text-[14px] font-roboto opacity-95">
                                {people.role}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
