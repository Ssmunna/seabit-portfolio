import { Link } from "@inertiajs/react";

export default function About() {
    return (
        <section className="container mx-auto py-10">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Column */}
                <div className="flex-1 bg-[#FAFAFA] rounded-2xl p-6 flex flex-col justify-between gap-6 dark-bg">
                    {/* Logo + Info */}
                    <div className="flex items-center gap-4">
                        <img src="/assets/images/logo.png" alt="Logo" className="w-16 h-16 object-contain" />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 dark-text">The Second Source LLC</h2>
                            <p className="text-gray-500 text-sm dark-text">
                                House - 2, Road - 27, Housing Estate, Uposhohor, Bogura
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <h3 className="font-semibold text-gray-800 dark-text">At Second Source LLC</h3>
                        <p className="text-gray-600 mt-2 text-sm leading-relaxed dark-text">
                            We specialize in empowering businesses with innovative solutions, advanced technology,
                            and unmatched expertise.
                        </p>
                    </div>
                </div>

                {/* Center Column (Social Links) */}
                <div className="flex-1 flex flex-col gap-4">
                    <Link className="flex items-center justify-between bg-gray-50 text-gray-700 hover:bg-gray-100 p-7 rounded-xl dark-bg dark-text">
                        <span className="font-medium">Dribbble</span>
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3334 10.1251C18.3347 11.2227 18.1186 12.3097 17.6974 13.3233C17.2763 14.3369 16.6584 15.257 15.8796 16.0305C15.1071 16.8016 14.1902 17.4129 13.1814 17.8294C12.1725 18.246 11.0915 18.4598 10 18.4584C5.39753 18.4584 1.6667 14.7276 1.6667 10.1251C1.6637 7.98831 2.48448 5.93261 3.95836 4.38551C4.73596 3.56486 5.67286 2.91155 6.71171 2.46556C7.75055 2.01957 8.86949 1.79029 10 1.79175C11.0915 1.79041 12.1725 2.00414 13.1814 2.42073C14.1902 2.83732 15.1071 3.44861 15.8796 4.21967C16.6584 4.99313 17.2763 5.91324 17.6974 6.92684C18.1186 7.94045 18.3347 9.02747 18.3334 10.1251Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            {/* Other paths omitted for brevity */}
                        </svg>
                    </Link>

                    <Link className="flex items-center justify-between bg-gray-50 text-gray-700 hover:bg-gray-100 p-7 rounded-xl dark-bg dark-text">
                        <span className="font-medium">Behance</span>
                        {/* SVG code */}
                    </Link>

                    <Link className="flex items-center justify-between bg-gray-50 text-gray-700 hover:bg-gray-100 p-7 rounded-xl dark-bg dark-text">
                        <span className="font-medium">Facebook</span>
                        {/* SVG code */}
                    </Link>

                    <Link className="flex items-center justify-between bg-gray-50 text-gray-700 hover:bg-gray-100 p-7 rounded-xl dark-bg dark-text">
                        <span className="font-medium">Instagram</span>
                        {/* SVG code */}
                    </Link>
                </div>

                {/* Right Column (Video) */}
                <div className="flex-1 rounded-2xl overflow-hidden" data-aos="fade-left">
                    <video autoPlay loop playsInline className="w-full h-full object-cover rounded-2xl">
                        <source src="/assets/video/Promo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
}
