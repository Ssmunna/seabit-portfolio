import { Link } from "@inertiajs/react";
import { useState } from "react";
import ServiceMenu from "@/Components/Frontend/Header/ServiceMenu.jsx";
import {FaBars} from "react-icons/fa";
import {RxCross2} from "react-icons/rx";

export default function SmallScreenNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Header */}
            <div className="flex justify-between items-center p-4 lg:hidden">
                {/* Logo */}
                <div className="w-[55px] h-[60px]">
                    <img
                        className="w-full h-full object-cover"
                        src="/assets/images/logo.png"
                        alt="Logo"
                    />
                </div>

                {/* Menu Button */}
                <button
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded={isOpen}
                    aria-controls="nav-drawer"
                    onClick={() => setIsOpen(true)}
                >
                    <FaBars className="size-6 text-[#F25C30]" />
                </button>
            </div>

            {/* Drawer */}
            <div
                id="nav-drawer"
                className={`fixed top-0 left-0 h-full w-full max-w-full z-80 bg-white border-r border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 transform transition-all duration-300 ${
                    isOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                }`}
                role="dialog"
                tabIndex={-1}
                aria-labelledby="nav-drawer-label"
            >
                <div className="w-full relative">
                    {/* Close Button */}
                    <button
                        type="button"
                        className="size-8 absolute top-0 right-0 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-300 text-gray-700 hover:bg-gray-200 focus:outline-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400"
                        aria-label="Close"
                        onClick={() => setIsOpen(false)}
                    >
                        <RxCross2 className="size-3" />
                    </button>

                    {/* Navigation */}
                    <div className="px-4 py-8">
                        <div className="w-auto flex flex-col items-center gap-[25px]">
                            <Link href={route("marketplace")} className="nav_link">
                                Market Place
                            </Link>
                            <ServiceMenu />
                            <Link href={route("about")} className="nav_link">
                                About
                            </Link>
                            <Link href={route("career")} className="nav_link">
                                Career
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
