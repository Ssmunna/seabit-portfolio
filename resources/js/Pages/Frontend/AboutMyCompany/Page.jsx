import React from "react";
import Main from "@/Layouts/Frontend/Main.jsx";
import sectionShape from "../../../../../public/assets/images/section/sectionShape.png";
import section1 from "../../../../../public/assets/images/aboutMyCompany/section-1.png";
import section2 from "../../../../../public/assets/images/aboutMyCompany/section-2.png";
import section3 from "../../../../../public/assets/images/aboutMyCompany/section-3.png";
import section4 from "../../../../../public/assets/images/aboutMyCompany/section-4.png";

import sectionShape2 from "../../../../../public/assets/images/section/sectionShape2.png";
import {usePage} from "@inertiajs/react";

const aboutMyCompany = {
    banner_text: "banner-url",
    // banner_img: "assets/images/aboutMyCompany/aboutMyCompany.png",
    hero_mid_1:
        "Maison D’eau De Vie (House of Water of Life) represents an establishment related to the fountain of life, associated unique locations where life-changing events occur. Our company explores themes of rebirth, transformation, or self-discovery, weaving together elements of mystery, drama, and personal growth in an engaging cinematic experience. It is a setting for character-driven stories, where individuals undergo significant changes and confront their pasts or inner demons, captivating audiences with its depth and symbolism",
    hero_mid_2:
        "From producing compelling films to collaborating with renowned companies and taking on acting roles, my contributions span various aspects of the filmmaking process. With a notable track record of working with esteemed production companies and talented individuals, I continuously push the boundaries of creativity and deliver engaging content to audiences worldwide.",
    section1: {
        heading: "PRODUCER AND Collaborator",
        text: "I have had the privilege of collaborating with esteemed production companies and industry leaders, including DKZ Productions, Zero Gravity Management, and Film Can Productions. Through these collaborations, I have contributed my expertise and creative vision to the development and production of numerous projects. Notably, I served as an Executive Producer, which starred acclaimed actors Harry Hamlin and Kristen Kerr. This project showcased my proficiency in collaborating with skilled professionals to create a captivating cinematic experience that resonated profoundly with audiences.",
        image: "image url",
    },
    section2: {
        heading: "Development and Script Collaboration",
        text: "I have had the privilege of collaborating with esteemed production companies and industry leaders, including DKZ Productions, Zero Gravity Management, and Film Can Productions. Through these collaborations, I have contributed my expertise and creative vision to the development and production of numerous projects. Notably, I served as an Executive Producer, which starred acclaimed actors Harry Hamlin and Kristen Kerr. This project showcased my proficiency in collaborating with skilled professionals to create a captivating cinematic experience that resonated profoundly with audiences.",
        image: "image url",
    },
    section3: {
        heading: "ACTING Endeavours",
        text: "I have had the privilege of collaborating with esteemed production companies and industry leaders, including DKZ Productions, Zero Gravity Management, and Film Can Productions. Through these collaborations, I have contributed my expertise and creative vision to the development and production of numerous projects. Notably, I served as an Executive Producer, which starred acclaimed actors Harry Hamlin and Kristen Kerr. This project showcased my proficiency in collaborating with skilled professionals to create a captivating cinematic experience that resonated profoundly with audiences.",
        image: "image url",
    },
};

// console.log(aboutMyCompany);

const Page = ({ data }) => {
    const {fileBase} = usePage().props
    const {hero_section, blogs} = data;

    return (
        <Main>
            <div className="flex items-center text-white h-[728px] w-full bg-cover bg-[position:70%_center]"
                 style={{ backgroundImage: `url(${fileBase}/${hero_section.image})` }}
            >
                <div className="w-full px-5">
                    <div className="max-w-[1250px] m-auto text-[46px] ">
                        <h3 className="font-[700]">{hero_section.title}</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="container m-auto pb-[30px] md:py-[50px] text-[#7A7A7A] text-[16px]" dangerouslySetInnerHTML={{ __html: hero_section.description }}></div>
            </div>
            <div>
                <img src={sectionShape} alt="image" className="w-full" />
            </div>
            <div className="bg-[#ECECEC]">
                <div className="max-w-[1250px] m-auto py-[50px] text-[#7A7A7A] text-[16px] space-y-[70px]">
                    {
                        blogs.map((blog, i) => (
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="p-5">
                                    <img src={`${fileBase}/${blog.image}`} alt="section-image" className={`w-full h-full object-cover`} />
                                </div>
                                <div className="p-[50px]">
                                    <div className="uppercase text-[32px] font-[700] leading-[30px]">
                                        <h2 className="text-[#111111]" dangerouslySetInnerHTML={{__html: blog.title}}>
                                        </h2>
                                    </div>
                                    <p className="leading-[26px] mt-[20px]" dangerouslySetInnerHTML={{__html: blog.description}}></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <img src={sectionShape2} className="w-full" alt="" />
            </div>
        </Main>
    );
};

export default Page;
