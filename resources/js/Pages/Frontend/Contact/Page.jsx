import {Head} from "@inertiajs/react";
import Main from "@/Layouts/Frontend/Main.jsx";
import HeroSectionWithVideo from "@/Components/Frontend/Common/HeroSectionWithVideo.jsx";
import ContactFormSlider from "@/Components/Frontend/Contact/ContactFormSlider.jsx";

const title = `Have Questions? <span class="text-[#F25C30]">Get in Touch!</span>`;
const subtitle =
    "Have a question or need assistance? Simply fill out the form, and our team will get back to you promptly.";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>

            <Main>
                <HeroSectionWithVideo title={title} subtitle={subtitle} />

                {/* Contact Info */}
                <section className="w-full mt-[60px]">
                    <div className="container px-3 mx-auto flex flex-col lg:flex-row items-center gap-10 sm:gap-2 overflow-hidden">
                        <div className="w-full lg:w-[450px]" data-aos="fade-right">
                            <h2 className="text-[36px] font-bold text-[#F25C30] mb-4">Where to Find Us</h2>
                            <p className="text-[14px] text-[#2B3C50] font-roboto">Digitally global, locally present.</p>
                        </div>

                        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "+880 1929-986183", subtitle: "Have any question?" },
                                { title: "contact@2ndsource.xyz", subtitle: "Send us an email" },
                                {
                                    title: "House - 2, Road - 27, Housing\nEstate, Uposhohor, Bogura",
                                    subtitle: "Visit us",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-[#FCA728] flex justify-center items-center rounded-2xl p-6 text-center dark:bg-[#2b3c50]"
                                >
                                    <div className="w-full">
                                        <p className="font-bold text-[16px] text-[#FFFFFF]">{item.title}</p>
                                        <p className="text-[12px] font-roboto text-[#FAFAFA] mt-1 whitespace-pre-line">{item.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Form & Slider */}
                <section className="w-full mt-[60px]">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 dark-bg rounded-[24px]">
                        {/* Left Form */}
                        <div className="flex-1 text-left px-4 md:px-10" data-aos="fade-right">
                            <h2 className="text-[36px] font-bold mb-6 mt-3">
                                <span className="text-[#F25C30]">Share</span>{" "}
                                <span className="text-[#0B2C55] dark:text-[#FFFFFF]"> your thoughts with us</span>
                            </h2>

                            <form className="space-y-4">
                                {[
                                    { id: "name", label: "Name", type: "text", placeholder: "Enter your name" },
                                    { id: "email", label: "Email", type: "email", placeholder: "Enter your email address" },
                                    { id: "phone", label: "Phone number", type: "text", placeholder: "Enter your phone number" },
                                ].map((field) => (
                                    <div key={field.id}>
                                        <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 dark:text-[#FFFFFF]">
                                            {field.label}
                                        </label>
                                        <input
                                            type={field.type}
                                            id={field.id}
                                            placeholder={field.placeholder}
                                            className="mt-1 w-full rounded-xl border border-gray-300 dark:placeholder:text-[#FFFFFF]/60 dark:border-0 px-3 py-2 text-sm focus:border-[#F25C30] focus:ring-[#F25C30] outline-none dark:bg-[#2b3c50]"
                                        />
                                    </div>
                                ))}

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-[#FFFFFF]">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder="Write message here"
                                        className="mt-1 w-full rounded-xl border border-gray-300 dark:placeholder:text-[#FFFFFF]/60 dark:border-0 px-3 py-2 text-sm focus:border-[#F25C30] focus:ring-[#F25C30] outline-none dark:bg-[#2b3c50]"
                                    ></textarea>
                                </div>

                                <button
                                    type="button"
                                    className="w-[270px] lg:w-[300px] h-[48px] mx-auto mt-[24px] rounded-[20px] flex items-center justify-center gap-8 cursor-pointer border border-[#F25C30] bg-[#F25C30] text-white font-sans font-bold"
                                >
                                    Send quick message
                                    <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.1855 7.21834L14.6823 1.71514L16.2732 0.124146L24.4934 8.34425L16.2732 16.5644L14.6823 14.9734L20.1873 9.46834L0.781433 9.4684V7.2184L20.1855 7.21834Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </form>
                        </div>

                        {/* Right Slider */}
                        <div className="flex-1 w-full px-4 md:px-0" data-aos="fade-left">
                            <ContactFormSlider />
                        </div>
                    </div>
                </section>

                {/* Google Map */}
                <section className="w-full mt-[60px]">
                    <div className="container mx-auto h-[300px] rounded-[24px] overflow-hidden px-4 md:px-0">
                        <iframe
                            className="w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57919.41519391231!2d89.36832160000003!3d24.865097899999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc55542bafb51b%3A0xc5e0b7c47a5911f0!2sSecond%20Source!5e0!3m2!1sen!2sbd!4v1757646760135!5m2!1sen!2sbd"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </section>
            </Main>
        </>
    );
}
