import React from "react";
import Main from "@/Layouts/Frontend/Main.jsx";
import sectionShape4 from "../../../../../public/assets/images/section/sectionShape4.png";

import {Link, usePage} from "@inertiajs/react";


const Page = ({ data }) => {
    const {fileBase} = usePage().props
    const {hero_section, blogs} = data;

    return (
        <Main>
            <div className="flex items-center text-white h-[728px] w-full bg-cover bg-[position:70%_center]"
                 style={{ backgroundImage: `url(${fileBase}/${hero_section.image})` }}
            >
                <div className="container mx-auto">
                    <div className="container mx-auto bg-[#ECECEC]/10 rounded-lg py-[43px] px-[30px] space-y-8">
                        <div className="text-[20px] md:text-[45px] leading-[30px] md:leading-[60px]">
                            <h3 className="font-[700]" dangerouslySetInnerHTML={{ __html: hero_section.title}}></h3>
                        </div>
                        <div className="text-[10px] md:text-[16px]" dangerouslySetInnerHTML={{ __html: hero_section.description }}></div>
                        <div className="flex justify-center items-center">
                            <Link href={route('contact_details')} className="bg-[#E80606] text-white px-[24px] py-[12px] rounded cursor-pointer text-[15px]">
                                Please enquire here
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="max-w-[1250px] m-auto py-[50px] text-[#7A7A7A] text-[16px] space-y-[70px]">
                    {
                        blogs.map((blog, i) => (
                            <div
                                key={i}
                                className={`flex flex-col md:flex-row ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                            >
                                <div className="p-5 md:w-1/2 max-h-[400px] overflow-hidden">
                                    <img
                                        src={`${fileBase}/${blog.image}`}
                                        alt="section-image"
                                        className={`w-full h-full rounded-lg object-cover ${i % 2 !== 0 ? "border-l-[6px]" : "border-r-[6px]"} border-[#E60000]`}
                                    />
                                </div>
                                <div className="p-[20px] md:px-[50px] md:py-[40px] md:w-1/2">
                                    <div className="uppercase text-[20px] md:text-[45px] leading-[30px] md:leading-[60px]">
                                        <h2
                                            className="text-[#111111]"
                                            dangerouslySetInnerHTML={{ __html: blog.title }}
                                        ></h2>
                                    </div>
                                    <p
                                        className="text-[10px] md:text-[16px] mt-[20px]"
                                        dangerouslySetInnerHTML={{ __html: blog.description }}
                                    ></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <img src={sectionShape4} className="w-full" alt="" />
            </div>
        </Main>
    );
};

export default Page;
