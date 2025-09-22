import React from "react";
import Main from "@/Layouts/Frontend/Main.jsx";
import sectionShape from "../../../../../public/assets/images/section/sectionShape.png";
import section1 from "../../../../../public/assets/images/aboutMyCompany/section-1.png";
import section2 from "../../../../../public/assets/images/aboutMyCompany/section-2.png";
import section3 from "../../../../../public/assets/images/aboutMyCompany/section-3.png";
import section4 from "../../../../../public/assets/images/aboutMyCompany/section-4.png";
import sectionShape3 from "../../../../../public/assets/images/section/sectionShape3.png";
import sectionShape4 from "../../../../../public/assets/images/section/sectionShape4.png";
import about from "../../../../../public/assets/images/aboutMe/about.png";
import {usePage} from "@inertiajs/react";

const Page = ({ data }) => {
    const {fileBase} = usePage().props
    const {hero_section, blogs} = data;

    return (
        <Main>
            <div
                className={`flex items-center text-white h-[300px] md:h-[667px] mb-[50px] w-full bg-cover bg-[position:70%_center]`}
                style={{ backgroundImage: `url(${fileBase}/${hero_section.image})` }}
            >
                <div className="w-full px-5">
                    <div className="max-w-[1250px] m-auto text-[46px]">
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
                <img src={sectionShape3} className="w-full" alt="" />
            </div>
            <div className="max-w-[1250px] m-auto py-[50px] text-[#7A7A7A] text-[16px]">
                <div className="grid grid-cols-1 md:grid-cols-2 md:p-[50px] md:gap-10">
                    <div>
                        <img
                            src={about}
                            alt=""
                            className="max-h-[540px] m-auto"
                        />
                    </div>
                    <div>
                        <p>
                            I have a proven track record of successful
                            collaborations and an unwavering commitment to
                            delivering compelling content, whether through
                            producing, script development, or acting. I aim to
                            inspire and captivate audiences with narratives that
                            push boundaries and evoke powerful emotions. My
                            vision is to create engaging and meaningful content
                            that resonates with viewers while continuously
                            expanding my horizons and exploring new avenues of
                            creative expression. By infusing my scripts with the
                            global insights gained from my travels, linguistic
                            versatility, and a diverse range of personal
                            interests, I aim to deliver stories that are not
                            only thought-provoking but entertaining.
                        </p>
                        <p className="font-[700] mt-[30px]">
                            IMDB link is:{" "}
                            <a href="">http://www.imdb.com/name/nm5397763</a>{" "}
                        </p>
                    </div>
                </div>
            </div>
            <div className="">
                <img src={sectionShape4} className="w-full" alt="" />
            </div>
        </Main>
    );
};

export default Page;
