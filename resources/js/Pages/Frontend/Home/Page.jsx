import React from "react";
import Main from "@/Layouts/Frontend/Main.jsx";
import sectionShape4 from "../../../../../public/assets/images/section/sectionShape4.png";

const Page = ({ data }) => {
    return (
        <Main>
            <div
                className={`bg-[#111111] flex items-center text-white h-[300px] md:h-[826px] bg-[url('/assets/images/home/banner.png')] w-full bg-cover`}
            >
                <div className="w-full px-5 md:mt-[-280px]">
                    <div className="max-w-[1250px] m-auto text-[46px] flex justify-center items-start">
                        <h3 className="font-[700] max-w-[750px] text-center leading-[50px]">
                            Rich story telling, infused with societal clashes,
                            history, and mythology, drawing from diverse Asian,
                            Middle Eastern and Western cultures.
                        </h3>
                    </div>
                </div>
            </div>
        </Main>
    );
};

export default Page;
