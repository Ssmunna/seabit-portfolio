import React from "react";
import Main from "@/Layouts/Frontend/Main.jsx";
import sectionShape4 from "../../../../../public/assets/images/section/sectionShape4.png";
import envelop from "../../../../../public/assets/images/contact/envelop.png";
import phone from "../../../../../public/assets/images/contact/phone.png";
import skype from "../../../../../public/assets/images/contact/skype.png";
import {usePage} from "@inertiajs/react";

const Page = ({ data }) => {
    const {fileBase} = usePage().props
    const {hero_section, blogs} = data;
    return (
        <Main>
            <div
                className={`flex items-center text-white h-[300px] md:h-[667px] mb-[50px] w-full bg-cover bg-[position:20%_center]`}
                style={{ backgroundImage: `url(${fileBase}/${hero_section.image})` }}
            >
                <div className="w-full px-5 md:mt-[-280px]">
                    <div className="max-w-[1250px] m-auto text-[46px] flex justify-end items-start">
                        <h3 className="font-[700]">{hero_section.title}</h3>
                    </div>
                </div>
            </div>
            {/* <div className="container m-auto pb-[30px] md:py-[50px] text-center text-[#7A7A7A] text-[16px]"></div> */}

            <div className="max-w-[1250px] m-auto py-[50px]">
                <div className="px-[20px] grid grid-cols-1 md:grid-cols-[65%_35%] md:p-[50px] md:gap-10">
                    <div className="text-[#7A7A7A] text-[16px]">
                        <div>
                            <h2 className="text-[32px] font-[700] text-[#111111]">
                                Request for more information.
                            </h2>
                            <p className="my-[20px]">
                                Please fill the form and we’ll contact you
                                shortly.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="flex flex-col">
                                    <label
                                        htmlFor=""
                                        className="text-[#111111] text-[19px]"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="border border-[#D1CFCF] rounded-md"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor=""
                                        className="text-[#111111] text-[19px]"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        className="border border-[#D1CFCF] rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="flex flex-col">
                                    <label
                                        htmlFor=""
                                        className="text-[#111111] text-[19px]"
                                    >
                                        Mobile Number
                                    </label>
                                    <input
                                        type="text"
                                        className="border border-[#D1CFCF] rounded-md"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor=""
                                        className="text-[#111111] text-[19px]"
                                    >
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        className="border border-[#D1CFCF] rounded-md"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor=""
                                        className="text-[#111111] text-[19px]"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        name=""
                                        id=""
                                        rows={6}
                                        className="border border-[#D1CFCF] rounded-md"
                                    ></textarea>
                                </div>
                            </div>
                            <div>
                                <p className="text-[16px] color-[#7A7A7A] my-3">
                                    This form is protected by reCAPTCHA and the
                                    <span className="text-[#12b6e9]">
                                        Google Privacy Policy
                                    </span>{" "}
                                    and <br />
                                    <span className="text-[#12b6e9]">
                                        Terms of Service apply.
                                    </span>
                                </p>
                                <p>
                                    <button className="btn bg-[#2172E6] text-white uppercase text-[16px] py-[5px] px-[16px] rounded cursor-pointer">
                                        Submit
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-[20px] mt-[30px] md:mt-[0]">
                        <div>
                            <div className="flex items-center space-x-[15px]">
                                <div className="h-[104px] w-[104px] flex items-center justify-center border border-[#2172E6] rounded-full">
                                    <img src={envelop} alt="envelop" />
                                </div>
                                <div className="text-[28px] color-[#111111] font-[700]">
                                    Email
                                </div>
                            </div>
                            <p className="mt-[20px] text-[#7A7A7A] font-[700]">
                                Georges.Salo@maisonproductions.com
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center space-x-[15px]">
                                <div className="h-[104px] w-[104px] flex items-center justify-center border border-[#2172E6] rounded-full">
                                    <img src={phone} alt="phone" />
                                </div>
                                <div className="text-[28px] color-[#111111] font-[700]">
                                    Phone
                                </div>
                            </div>
                            <p className="mt-[20px] text-[#7A7A7A] font-[700]">
                                +65 9738 2418
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center space-x-[15px]">
                                <div className="h-[104px] w-[104px] flex items-center justify-center border border-[#2172E6] rounded-full">
                                    <img src={skype} alt="skype" />
                                </div>
                                <div className="text-[28px] color-[#111111] font-[700]">
                                    Skype
                                </div>
                            </div>
                            <p className="mt-[20px] text-[#7A7A7A] font-[700]">
                                Georges.888
                            </p>
                        </div>
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
