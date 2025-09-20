import { BiHomeAlt } from "react-icons/bi";
import {
    FaChartBar,
    FaClipboardList, FaCog,
    FaHotel, FaLifeRing,
    FaPassport,
    FaPlane, FaSignOutAlt,
    FaSuitcase,
    FaTachometerAlt,
    FaUsers
} from "react-icons/fa";
import {useEffect, useState} from "react";
import {Link, router, usePage} from "@inertiajs/react";
import {getQueries} from "@/helpers/helper.js";
import {IoHomeSharp} from "react-icons/io5";
import {GrContactInfo} from "react-icons/gr";
import {BsFillInfoSquareFill} from "react-icons/bs";
import {TbListDetails} from "react-icons/tb";
import {MdContactMail, MdVideoLibrary} from "react-icons/md";
import {FaGear} from "react-icons/fa6";


const menuItems = [
    {
        label: 'Dashboard',
        link: 'dashboard',
        icon: <BiHomeAlt />,
    },
    {
        label: 'Tour Packages',
        icon: <FaSuitcase />,
        activeLinks: ['admin.tour.destination.list'],
        children: [
            {
                label: 'Destination',
                link: 'admin.tour.destination.list',
                session_key: 'tour_destination_pagination'
            },
        ],
    },
    {
        label: 'Settings',
        icon: <FaCog />,
        children: [
        ],
    },
    {
        label: 'Logout',
        icon: <FaSignOutAlt />,
    },
];


export default function Sidebar() {
    const { url: currentUrl } = usePage()
    return (
        <div id="hs-pro-sidebar" className="hs-overlay [--body-scroll:true] [--overlay-backdrop:false] [--is-layout-affect:true] [--opened:lg] [--auto-close:lg]
    hs-overlay-open:translate-x-0 lg:hs-overlay-layout-open:translate-x-0
    -translate-x-full transition-all duration-300 transform
    w-60
    hidden
    fixed inset-y-0 z-5 start-0
    bg-zinc-100
    lg:block lg:-translate-x-full lg:end-auto lg:bottom-0
    dark:bg-neutral-900" role="dialog" tabIndex="-1" aria-label="Sidebar">
        <div className="lg:pt-13 relative flex flex-col h-full max-h-full">
                <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                    <ul className="flex flex-col space-y-1">
                        <li>
                            <Link href={route('dashboard')} className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-[15px] text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-white">
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                                Dashboard
                            </Link>
                        </li>

                        <li className={`hs-accordion ${route().current('admin.home.*') ? 'active' : ''}`} id="account-accordion">
                            <button type="button" className={`hs-accordion-toggle ${route().current('admin.home.*') ? 'bg-gray-200 ' : ''}w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-[15px] text-gray-800 rounded-lg hs-accordion-active:rounded-b-none hover:bg-gray-100 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200" aria-expanded="true" aria-controls="account-accordion-child`}>
                                <IoHomeSharp className={`size-4.5`} />
                                Home

                                <svg className="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>

                                <svg className="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                            </button>

                            <div id="account-accordion-child" className={`${route().current('admin.home.*') ? 'block' : 'hidden'} hs-accordion-content bg-gray-200 w-full overflow-hidden transition-[height] duration-300 hidden" role="region" aria-labelledby="account-accordion`}>
                                <ul className="p-1.5 space-y-1">
                                    <li>
                                        <Link href={route('admin.home.hero.page')} className={`flex items-center gap-x-2.5 pr-2.5 py-1 text-[15px] text-gray-800 rounded-lg ${route().current('admin.home.hero.page') ? 'bg-gray-50' : ''} hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/></svg>
                                            Hero Section
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className={`hs-accordion ${route().current('admin.about-company.*') ? 'active' : ''}`} id="account-accordion">
                            <button type="button" className="hs-accordion-toggle hs-accordion-active:bg-gray-200 w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-[15px] text-gray-800 rounded-lg hs-accordion-active:rounded-b-none hover:bg-gray-100 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200" aria-expanded="true" aria-controls="account-accordion-child">
                                <BsFillInfoSquareFill className={`size-4.5`} />
                                About Company

                                <svg className="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>

                                <svg className="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                            </button>

                            <div id="account-accordion-child" className={`${route().current('admin.about-company.*') ? 'block' : 'hidden'} hs-accordion-content bg-gray-200 w-full overflow-hidden transition-[height] duration-300 hidden" role="region" aria-labelledby="account-accordion`}>
                                <ul className="p-1.5 space-y-1">
                                    <li>
                                        <Link href={route('admin.about-company.hero.page')} className={`flex items-center gap-x-2.5 pr-2.5 py-1 text-[15px] text-gray-800 rounded-lg ${route().current('admin.about-company.hero.page') ? 'bg-gray-50' : ''} hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/></svg>
                                            Hero Section
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route('admin.about-company.blog.list')} className={`flex items-center gap-x-2.5 pr-2.5 py-1 text-[15px] text-gray-800 rounded-lg ${route().current('admin.about-company.blog.list') ? 'bg-gray-50' : ''} hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/></svg>
                                            Blog Section
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className={`hs-accordion ${route().current('admin.about-me.*') ? 'active' : ''}`} id="account-accordion">
                            <button type="button" className="hs-accordion-toggle hs-accordion-active:bg-gray-200 w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-[15px] text-gray-800 rounded-lg hs-accordion-active:rounded-b-none hover:bg-gray-100 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200" aria-expanded="true" aria-controls="account-accordion-child">
                                <TbListDetails className={`size-4.5`} />
                                About Me

                                <svg className="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>

                                <svg className="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                            </button>

                            <div id="account-accordion-child" className={`${route().current('admin.about-me.*') ? 'block' : 'hidden'} hs-accordion-content bg-gray-200 w-full overflow-hidden transition-[height] duration-300 hidden" role="region" aria-labelledby="account-accordion`}>
                                <ul className="p-1.5 space-y-1">
                                    <li>
                                        <Link href={route('admin.about-me.hero.page')} className={`flex items-center gap-x-2.5 pr-2.5 py-1 text-[15px] text-gray-800 rounded-lg ${route().current('admin.about-me.hero.page') ? 'bg-gray-50' : ''} hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/></svg>
                                            Hero Section
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route('admin.about-me.blog.list')} className={`flex items-center gap-x-2.5 pr-2.5 py-1 text-[15px] text-gray-800 rounded-lg ${route().current('admin.about-me.blog.list') ? 'bg-gray-50' : ''} hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/></svg>
                                            Blog Section
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className={`hs-accordion ${route().current('admin.sample-script.*') ? 'active' : ''}`} id="account-accordion">
                            <button type="button" className="hs-accordion-toggle hs-accordion-active:bg-gray-200 w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-[15px] text-gray-800 rounded-lg hs-accordion-active:rounded-b-none hover:bg-gray-100 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200" aria-expanded="true" aria-controls="account-accordion-child">
                                <MdVideoLibrary className={`size-4.5`} />
                                Sample Script

                                <svg className="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>

                                <svg className="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                            </button>

                            <div id="account-accordion-child" className={`${route().current('admin.sample-script.*') ? 'block' : 'hidden'} hs-accordion-content bg-gray-200 w-full overflow-hidden transition-[height] duration-300 hidden" role="region" aria-labelledby="account-accordion`}>
                                <ul className="p-1.5 space-y-1">
                                    <li>
                                        <Link href={route('admin.sample-script.hero.page')} className={`flex items-center gap-x-2.5 pr-2.5 py-1 text-[15px] text-gray-800 rounded-lg ${route().current('admin.sample-script.hero.page') ? 'bg-gray-50' : ''} hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/></svg>
                                            Hero Section
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route('admin.sample-script.blog.list')} className={`flex items-center gap-x-2.5 pr-2.5 py-1 text-[15px] text-gray-800 rounded-lg ${route().current('admin.sample-script.blog.list') ? 'bg-gray-50' : ''} hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/></svg>
                                            Blog Section
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className={`hs-accordion ${route().current('admin.contact-details.*') ? 'active' : ''}`} id="account-accordion">
                            <button type="button" className="hs-accordion-toggle hs-accordion-active:bg-gray-200 w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-[15px] text-gray-800 rounded-lg hs-accordion-active:rounded-b-none hover:bg-gray-100 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200" aria-expanded="true" aria-controls="account-accordion-child">
                                <MdContactMail className={`size-4.5`} />
                                Contact Details

                                <svg className="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>

                                <svg className="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                            </button>

                            <div id="account-accordion-child" className={`${route().current('admin.contact-details.*') ? 'block' : 'hidden'} hs-accordion-content bg-gray-200 w-full overflow-hidden transition-[height] duration-300 hidden" role="region" aria-labelledby="account-accordion`}>
                                <ul className="p-1.5 space-y-1">
                                    <li>
                                        <Link href={route('admin.contact-details.hero.page')} className={`flex items-center gap-x-2.5 pr-2.5 py-1 text-[15px] text-gray-800 rounded-lg ${route().current('admin.contact-details.hero.page') ? 'bg-gray-50' : ''} hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/></svg>
                                            Hero Section
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>

                <footer className="mt-auto p-3 flex flex-col">
                    <ul className="flex flex-col gap-y-1">
                        <li>
                            <Link href={route('admin.app-setting.page')} className="w-full flex items-center gap-x-2 py-2 px-2.5 text-[15px] text-gray-800 rounded-lg hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:text-neutral-200">
                                <FaGear className={`size-4`} />
                                App Setting
                            </Link>
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
    );
}
