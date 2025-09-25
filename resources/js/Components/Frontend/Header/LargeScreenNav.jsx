import { Link, usePage } from "@inertiajs/react";
import ServiceMenu from "@/Components/Frontend/Header/ServiceMenu.jsx";

export default function LargeScreenNav({ isDark, toggleTheme }) {
    const { url } = usePage();

    // helper to check active route
    const isActive = (routeName) => url.startsWith(route(routeName));

    return (
        <div className="hidden lg:flex justify-between items-center p-4">
            {/* Logo */}
            <Link href={route("home")} className="w-[55px] h-[60px]">
                <img
                    className="w-full h-full object-cover"
                    src="/assets/images/logo.png"
                    alt="Logo"
                />
            </Link>

            {/* Navigation */}
            <div className="w-auto flex items-center gap-[45px]">
                <Link
                    href={route("marketplace")}
                    className={`nav_link ${isActive("marketplace") ? "active" : ""}`}
                >
                    Market Place
                </Link>

                <ServiceMenu />

                <Link
                    href={route("about")}
                    className={`nav_link ${isActive("about") ? "active" : ""}`}
                >
                    About
                </Link>
                <Link
                    href={route("career")}
                    className={`nav_link ${isActive("career") ? "active" : ""}`}
                >
                    Career
                </Link>
            </div>

            {/* Actions */}
            <div className="w-auto flex items-center gap-4">
                {!isDark ? (
                    <button onClick={toggleTheme}>
                        <svg
                            width="23"
                            height="22"
                            viewBox="0 0 23 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <mask
                                id="mask0_338_36"
                                style={{ maskType: "luminance" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="23"
                                height="22"
                            >
                                <path
                                    d="M11.3614 1L13.9964 3.635H18.7249V8.363L21.3599 10.998L18.7249 13.637V18.365H13.9969L11.3619 21L8.72286 18.365H3.99486V13.637L1.35986 10.9985L3.99486 8.3635V3.635H8.72286L11.3614 1Z"
                                    fill="white"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12.8599 7.5C12.8599 11.5 10.3599 12 7.85986 12C7.85986 14 11.1099 16 13.8599 14C16.6099 12 14.8599 7.5 12.8599 7.5Z"
                                    fill="black"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </mask>
                            <g mask="url(#mask0_338_36)">
                                <path
                                    d="M-0.640137 -1H23.3599V23H-0.640137V-1Z"
                                    fill="#F25C30"
                                />
                            </g>
                        </svg>
                    </button>
                ) : (
                    <button
                        className="text-[#F25C30]"
                        onClick={toggleTheme}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M12 21q-3.775 0-6.387-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.325-.05.575.088t.4.362t.163.525t-.188.575q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.275-.175.563-.162t.512.137q.25.125.388.375t.087.6q-.35 3.45-2.937 5.725T12 21"
                            />
                        </svg>
                    </button>
                )}

                <Link
                    href={route("contact")}
                    className="w-[120px] h-[36px] flex items-center justify-center bg-[#FFFFFF] text-[16px] text-[#2A2A2A] font-[400] rounded-[20px] border-[1px] border-[#2A2A2A] hover:bg-[#F25C30] hover:border-[#F25C30] hover:text-[#FFFFFF] duration-150"
                >
                    Contact
                </Link>

                <a
                    target="_blank"
                    href="https://wa.me/+8801929988183"
                    className="group w-[143px] h-[36px] flex items-center justify-center gap-2 bg-[#F25C30] text-[16px] text-[#FFFFFF] font-[400] rounded-[20px] border-[1px] border-[#F25C30] hover:bg-[#FFFFFF] hover:text-[#F25C30] duration-150"
                >
                    Let's Talk
                    <svg
                        className="duration-150"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.1237 4.81222L5.45487 1.14342L6.5155 0.082756L11.9956 5.56283L6.5155 11.0429L5.45487 9.98225L9.1249 6.31222L-3.81238 6.31226V4.81226L9.1237 4.81222Z"
                            fill="currentColor"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}
