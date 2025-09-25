import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CountUp from "react-countup";
import HeroSectionWithVideo from "@/Components/Frontend/Common/HeroSectionWithVideo.jsx";
import {Head} from "@inertiajs/react";
import Main from "@/Layouts/Frontend/Main.jsx";

const slides = [
    "/assets/images/about/photo-3.png",
    "/assets/images/about/photo-3.png",
    "/assets/images/about/photo-3.png",
    "/assets/images/about/photo-3.png",
];

const stats = [
    { value: 10, label: "Markets Served" },
    { value: 450, label: "End-to-end Projects" },
    { value: 120, label: "Active Client" },
    { value: 180, label: "Tech Specialists" },
];

const title = `Human centered <span class="text-[#F25C30]">future</span> focused`;
const subtitle =
    "TSS is a full-cycle app & software development company which covers specific client business needs and manages them with the help of the best possible technology solutions.";

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <Main>
                <HeroSectionWithVideo title={title} subtitle={subtitle} />

                <section className="p-4">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <div className="relative rounded-3xl overflow-hidden h-[636px]" data-aos="fade-right">
                            <img
                                src="/assets/images/about/photo-1.png"
                                alt="Team working"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-gray-600 dark:via-gray-600/80"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-[36px] font-bold text-[#2A2A2A] dark-text">
                                    We Design, Develop and <br /> Launch Digital Products
                                </h3>
                                <p className="mt-3 text-[16px] text-[#2B3C50]/70 font-[400] dark-text">
                                    TSS is a top-rated IT outsourcing and software development company specializing
                                    in custom software, UI/UX design, and dedicated teams for companies across world.
                                </p>
                                <div className="w-full flex justify-center">
                                    <button className="mt-5 w-[240px] lg:w-[268px] h-[48px] mx-auto rounded-[12px] flex items-center justify-center gap-8 cursor-pointer border border-[#F25C30] bg-[#F25C30] text-white font-sans font-bold">
                                        Explore details
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative rounded-3xl overflow-hidden h-[636px]" data-aos="fade-left">
                            <img
                                src="/assets/images/about/photo-2.png"
                                alt="Team collaboration"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-gray-600 dark:via-gray-600/80"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-[36px] font-bold text-[#2A2A2A] dark-text">
                                    Our expertise extends across industries
                                </h3>
                                <p className="mt-3 text-[16px] text-[#2B3C50]/70 font-[400] dark-text">
                                    Our IT solutions company has extensive experience across a wide range of
                                    industries. No matter your niche, partnering with us ensures you receive
                                    high-quality, innovative solutions that set you apart from the competition.
                                </p>
                                <div className="w-full flex justify-center">
                                    <button className="mt-5 w-[240px] lg:w-[268px] h-[48px] mx-auto rounded-[12px] flex items-center justify-center gap-8 cursor-pointer border border-[#F25C30] bg-[#F25C30] text-white font-sans font-bold">
                                        Explore details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="pt-16 px-4">
                    <div className="container mx-auto" data-aos="fade-right">
                        <h2 className="text-[36px] font-bold text-[#2B3C50] dark-text">
                            Our <span className="text-[#F25C30]">Mission</span>
                        </h2>
                        <p className="mt-4 text-gray-500 text-[16px] font-roboto max-w-2xl mx-auto dark-text">
                            Innovating with the best, designing with purpose, and engineering for a sustainable future.
                        </p>
                    </div>

                    <div className="w-full text-center mt-6">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            slidesPerView={1}
                            spaceBetween={20}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            className="pb-10"
                        >
                            {slides.map((slide, i) => (
                                <SwiperSlide key={i} className="transition-transform duration-500">
                                    <div className="rounded-3xl overflow-hidden shadow-md w-full h-48 sm:h-60 md:h-72 lg:h-[372px]">
                                        <img src={slide} alt="Mission image" className="w-full h-full object-cover object-center" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>

                {/* Achievements Section */}
                <section className="pt-12 px-4">
                    <div className="container mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#2B3C50] dark-text" data-aos="fade-right">
                            Our Proud <span className="text-[#F25C30]">Achievements</span>
                        </h2>
                        <p className="mt-2 text-gray-600 max-w-2xl mx-auto dark-text" data-aos="fade-right">
                            We’ve come a long way from a small team of software developers in 2023,
                            to an all-around expert team as of today!
                        </p>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">
                            {stats.map((stat, i) => (
                                <div key={i} className="bg-[#FFF7EB] rounded-2xl py-10 px-6 flex flex-col items-center">
                                    <h3 className="text-[#F25C30] text-[48px] font-bold flex items-center">
                                        <CountUp end={stat.value} duration={2} />
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="ml-2"
                                        >
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </h3>
                                    <p className="mt-2 text-gray-700 font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Main>
        </>
    );
}
