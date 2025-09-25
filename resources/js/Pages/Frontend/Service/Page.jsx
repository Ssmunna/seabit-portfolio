import React, { useRef } from "react";
import { Head, Link } from "@inertiajs/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Main from "@/Layouts/Frontend/Main.jsx";
import ServiceOfferSlider from "@/Components/Frontend/Service/ServiceOfferSlider.jsx";

const slides = [
    "/assets/images/about/photo-3.png",
    "/assets/images/about/photo-3.png",
    "/assets/images/about/photo-3.png",
    "/assets/images/about/photo-3.png",
];

const services = [
    {
        icon: "/assets/images/service-icon/strategic.png",
        title: "Strategic Marketing Planning",
        description: "Aligning your business goals with market opportunities.",
    },
    {
        icon: "/assets/images/service-icon/creative.png",
        title: "Creative Branding",
        description: "Building a distinct brand identity that speaks volumes.",
    },
    {
        icon: "/assets/images/service-icon/digital.png",
        title: "Digital Marketing",
        description: "From SEO to social media, we ensure your brand stands out online.",
    },
    {
        icon: "/assets/images/service-icon/content.png",
        title: "Content Creation",
        description: "Engaging stories that connect with your audience across all platforms.",
    },
];

export default function Service() {
    return (
        <>
            <Head title="Service" />
            <Main>
                <section>
                    <div className="w-full text-center">
                        {/* Slider */}
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            slidesPerView={1}
                            spaceBetween={20}
                            breakpoints={{
                                640: { slidesPerView: 1.5 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 2.5 },
                            }}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            className="pb-10"
                        >
                            {slides.map((slide, i) => (
                                <SwiperSlide key={i} className="transition-transform duration-500">
                                    <div className="rounded-3xl overflow-hidden shadow-md w-full h-48 sm:h-60 md:h-72 lg:h-[450px]">
                                        <img
                                            src={slide}
                                            alt="Mission image"
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="container mx-auto text-center mt-[50px]">
                        <h2 className="text-[48px] font-bold text-[#2B3C50] leading-tight dark-text">
                            Marketing & <span className="text-[#FFA629]">Branding</span>
                        </h2>
                        <div className="w-10/12 mx-auto">
                            <p className="mt-[35px] text-[#2B3C50] text-[16px] font-roboto max-w-2xl mx-auto leading-relaxed dark-text">
                                At Second Source, we don't just market brands—we craft experiences. Our
                                marketing & branding strategies are designed to resonate with your audience, build
                                loyalty, and drive measurable growth.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="w-full mt-[60px]">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-[24px]">
                        {/* Left Content */}
                        <div className="bg-gray-50 flex items-center justify-center px-4 md:px-[30px] pt-[10px] dark-bg">
                            <div className="max-w-6xl w-full">
                                <div className="text-left mb-10">
                                    <h1 className="text-[36px] font-bold text-[#2B3C50] dark:text-[#FFFFFF]">We Offer</h1>
                                    <p className="mt-4 text-[#2B3C50]/70 dark:text-[#FAFAFA]/70 font-roboto">
                                        Comprehensive Marketing & Branding Solutions Tailored to Your Business.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {services.map((service) => (
                                        <div
                                            key={service.title}
                                            className="flex flex-col items-center text-center p-8 bg-white dark:bg-[#2B3C50] rounded-xl shadow-lg transition-transform transform hover:scale-105"
                                        >
                                            <img src={service.icon} alt="icon" />
                                            <h3 className="text-[#F25C30] font-bold text-[15px]">{service.title}</h3>
                                            <p className="mt-2 text-[#2B3C50] dark:text-[#FAFAFA] font-roboto text-[12px]">
                                                {service.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Slider */}
                        <div className="flex-1 w-full px-4 md:px-0">
                            <ServiceOfferSlider />
                        </div>
                    </div>
                </section>

                {/* Branding Section */}
                <section className="w-full mt-[60px]">
                    <div className="container mx-auto flex flex-col md:flex-row items-center gap-4 px-3">
                        <div className="w-full bg-[#FFF9F2] md:w-[60%] rounded-2xl dark-bg">
                            <div className="w-full py-12 px-4 md:px-8">
                                <h2 className="text-[36px] font-bold text-[#2B3C50] dark:text-[#FFFFFF] mb-4">
                                    Branding Services
                                </h2>
                                <p className="md:w-10/12 text-[16px] text-[#2B3C50]/70 font-roboto mb-6 dark:text-[#FAFAFA]">
                                    Branding services help businesses create a unique and memorable identity
                                    that resonates with their target audience.
                                </p>
                                <div className="mt-10 space-y-6">
                                    <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-6">
                                        <button className="bubble">Marketing Strategy & Consultation</button>
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-6">
                                        <button className="bubble flex gap-2 items-center !bg-[#F25C30] !text-white !border-0">
                                            <img src="/assets/icons/computer.png" alt="icon" />
                                            Digital Marketing
                                        </button>
                                        <button className="bubble">Logo Design & Visual Identity</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Images */}
                        <div className="w-full md:w-[40%]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="grid grid-rows-2 gap-6 h-[368px]">
                                    <div className="relative rounded-2xl overflow-hidden">
                                        <img
                                            src="/assets/images/what_we_build/photo-3.png"
                                            alt="Top Image"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="relative rounded-2xl overflow-hidden">
                                        <img
                                            src="/assets/images/what_we_build/photo-1.png"
                                            alt="Bottom Image"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="relative rounded-2xl overflow-hidden h-[368px]">
                                    <img
                                        src="/assets/images/what_we_build/photo-2.png"
                                        alt="Right Image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Previous Work */}
                <section className="w-full mt-[60px]">
                    <div className="container mx-auto">
                        <div className="w-full space-y-[20px] mb-[30px]">
                            <h1 className="text-[32px] font-bold text-[#2B3C50] dark:text-[#FFFFFF]">
                                Explore Our Previous Work
                            </h1>
                            <p className="text-[16px] font-roboto text-[#2B3C50]/70 dark:text-[#FAFAFA]/70">
                                Defining clear brand standards and compelling messaging to ensure consistency
                                and impact across all design touch points.
                            </p>
                        </div>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link className="w-full h-[461px]">
                                <img
                                    src="/assets/images/service/prev-behance.png"
                                    alt="image"
                                    className="w-full h-full"
                                />
                            </Link>
                            <Link className="w-full h-[461px]">
                                <img
                                    src="/assets/images/service/prev-dribbble.png"
                                    alt="image"
                                    className="w-full h-full"
                                />
                            </Link>
                        </div>
                    </div>
                </section>
            </Main>
        </>
    );
}
