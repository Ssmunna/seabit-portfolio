import React from "react";
import Main from "@/Layouts/Frontend/Main.jsx";
import sectionShape3 from "../../../../../public/assets/images/section/sectionShape3.png";
import sectionShape4 from "../../../../../public/assets/images/section/sectionShape4.png";
import about from "../../../../../public/assets/images/aboutMe/about.png";
import {usePage} from "@inertiajs/react";

const Page = ({ data }) => {
    const {fileBase} = usePage().props
    const {hero_section, blogs, bio_section} = data;

    return (
        <Main>
            <div
                className={`flex items-center text-white h-[450px] md:h-[667px] w-full bg-cover bg-[#ECECEC] bg-[position:70%_center]`}
                style={{ backgroundImage: `url(${fileBase}/${hero_section.image})` }}
            >
                <div className="container mx-auto">
                    <div className="container mx-auto bg-[#ECECEC]/10 rounded-lg py-[43px] px-[30px] space-y-5 md:space-y-8">
                        <div className="text-[20px] md:text-[45px] leading-[30px] md:leading-[60px]">
                            <h3 className="font-[700]" dangerouslySetInnerHTML={{ __html: hero_section.title.replace(/^(\S+)\s/, "$1<br />") }}></h3>
                        </div>
                        <div className="text-[10px] md:text-[16px]" dangerouslySetInnerHTML={{ __html: hero_section.description }}></div>
                    </div>
                </div>
            </div>
            <div className="bg-[#ECECEC]">
                <div className="max-w-[1250px] m-auto py-[50px] text-[#7A7A7A] text-[16px] space-y-[70px]">
                    {
                        blogs.map((blog, i) => (
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="p-5">
                                    <img src={`${fileBase}/${blog.image}`} alt="section-image" className={`w-full h-full object-cover`} />
                                </div>
                                <div className="p-[20px] md:p-[50px]">
                                    <div className="uppercase text-[20px] md:text-[45px] leading-[30px] md:leading-[60px]">
                                        <h2 className="text-[#111111]" dangerouslySetInnerHTML={{__html: blog.title}}>
                                        </h2>
                                    </div>
                                    <p className="text-[10px] md:text-[16px] mt-[20px]" dangerouslySetInnerHTML={{__html: blog.description}}></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <img src={sectionShape3} className="w-full" alt="" />
            </div>
            <div className="max-w-[1250px] m-auto py-[50px] px-[20px] md:px-0 text-[#7A7A7A] text-[16px]">
                <div className="grid grid-cols-1 md:grid-cols-2 md:p-[50px] md:gap-10">
                    <div>
                        <img
                            src={`${fileBase}/${bio_section?.image}`}
                            alt=""
                            className="max-h-[540px] m-auto"
                        />
                    </div>
                    <div className={`text-[10px] md:text-[16px] mt-[20px]`} dangerouslySetInnerHTML={{__html: bio_section?.description}}></div>
                </div>
            </div>
            <div className="">
                <img src={sectionShape4} className="w-full" alt="" />
            </div>
        </Main>
    );
};

export default Page;
