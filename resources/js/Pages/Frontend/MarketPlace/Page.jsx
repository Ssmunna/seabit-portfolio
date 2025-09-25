import React from "react";
import { Head } from "@inertiajs/react";
import { FiSearch, FiBookmark } from "react-icons/fi";
import Main from "@/Layouts/Frontend/Main.jsx";

const TemplateHub = () => {
    const categories = [
        "Customized website",
        "Portfolio",
        "Web design",
        "UI UX",
        "Software",
        "App",
        "Digital Marketing",
        "Brand Strategy",
        "Template",
    ];

    const templates = [
        "/assets/images/template_hub/photo-1.png",
        "/assets/images/template_hub/photo-2.png",
        "/assets/images/template_hub/photo-3.png",
        "/assets/images/template_hub/photo-4.png",
    ];

    return (
        <>
            <Head title="Market Place" />
            <Main>
                <section>
                    <div className="container mx-auto bg-[#FFF7EB] pt-12 px-3 md:px-[75px] rounded-[24px] dark-bg">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold" data-aos="fade-right">
                                <span className="text-[#F25C30]">Templates</span>
                                <span className="text-[#2B3C50] dark-text">Hub</span>
                            </h2>

                            <div className="w-full md:w-10/12 mx-auto mt-4" data-aos="fade-right">
                                <p className="text-gray-600 dark-text text-sm sm:text-base leading-relaxed">
                                    Looking for a website or mobile app that’s ready to go? Explore our collection of premium templates, whether it’s an
                                    online store, a portfolio, or a business site, we’ve got you covered.
                                </p>
                            </div>

                            {/* Search Bar */}
                            <div className="mt-8 flex items-center bg-white rounded-full shadow-sm px-4 py-3 w-full sm:w-[80%] mx-auto">
                                <FiSearch className="h-5 w-5 text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Search for website, UI UX, template, & More"
                                    className="flex-1 border-none focus:outline-none text-sm sm:text-base text-gray-700 ml-2 bg-transparent"
                                />
                            </div>

                            {/* Category Buttons */}
                            <div className="mt-8 flex flex-wrap justify-center gap-3">
                                {categories.map((cat, idx) => (
                                    <button
                                        key={idx}
                                        className="px-4 py-2 text-sm rounded-full border border-[#F25C30] text-[#F25C30] hover:bg-[#F25C30] hover:text-white transition"
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Sort Dropdown */}
                        <div className="w-full mt-[50px] flex justify-end">
                            <div className="relative">
                                <select className="appearance-none bg-white px-5 py-2 pr-10 rounded-full text-[14px] font-[400] font-roboto text-[#F25C30] focus:outline-none focus:ring-2 focus:ring-[#F25C30] cursor-pointer">
                                    <option>Sort by</option>
                                    <option>Newest</option>
                                    <option>Oldest</option>
                                    <option>Popular</option>
                                    <option>A → Z</option>
                                    <option>Z → A</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#F25C30]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.292l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[41px]">
                            {Array(12).fill("").map((_, idx) => (
                                <div key={idx} className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition">
                                    <img src={templates[idx % templates.length]} alt="Template Preview" className="w-full h-64 object-cover" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#F25C30]/95 to-transparent p-4">
                                        <h3 className="text-white font-medium">Something Landing Page</h3>
                                        <div className="flex items-center mt-2 gap-2">
                                            <button className="text-white">
                                                <FiBookmark />
                                            </button>
                                            <span className="text-white font-semibold">$29</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Main>
        </>
    );
};

export default TemplateHub;
