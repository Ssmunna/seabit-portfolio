import {Link, usePage} from "@inertiajs/react";
import {FaArrowLeft, FaBars} from "react-icons/fa";
import {useEffect, useRef} from "react";
import {HSOverlay} from "preline";

export default function MobileScreenNav() {

    const handleSidebarDrawer = () => {
        HSOverlay.close('#sidebar')
    }

    return (
        <div className={`w-full px-5 border-b border-gray-200 fixed left-0 right-0 top-0 bg-gray-50 shadow z-999`}>
            <div className="flex lg:hidden items-center justify-between px-3 py-3">
                <div className={`flex gap-x-10 items-center`}>
                    <img src="/assets/images/logo.png" alt="" className="h-13" />
                </div>
                <div>
                    <button type="button"
                            className=""
                            aria-haspopup="dialog" aria-expanded="false" aria-controls="sidebar"
                            data-hs-overlay="#sidebar">
                        <FaBars className={`size-6 text-gray-500`} />
                    </button>
                </div>
            </div>

            <div id="sidebar"
                 className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-[250px] w-full z-80 bg-white border-e border-gray-200 dark:bg-neutral-800 dark:border-neutral-700"
                 role="dialog" tabIndex="-1" aria-labelledby="sidebar-label">
                <div className="relative">
                    <button type="button" className="size-8 inline-flex justify-center absolute top-1 right-[-15px] items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                            aria-label="Close" data-hs-overlay="#sidebar">
                        <FaArrowLeft className={`size-4 text-gray-500`} />
                    </button>
                    <div className={`p-4`}>
                        <ul className={`flex flex-col gap-y-4 `}>
                            <li className={`text-gray-700 font-semibold cursor-pointer`}><Link href={route('home')}>Home</Link></li>
                            <li className={`text-gray-500 font-semibold cursor-pointer`}>Ticket</li>
                            <li onClick={handleSidebarDrawer} className={`text-gray-500 font-semibold cursor-pointer`}><Link href={route('home', {search: 'tour'})}>Tour</Link></li>
                            <li onClick={handleSidebarDrawer} className={`text-gray-500 font-semibold cursor-pointer`}><Link href={route('home', {search: 'hotel'})}>Hotel</Link></li>
                            <li className={`text-gray-500 font-semibold cursor-pointer`}>Visa</li>
                            <li className={`text-gray-500 font-semibold cursor-pointer`}>About</li>
                            <li className={`text-gray-500 font-semibold cursor-pointer`}>Contact</li>
                        </ul>

                        <button className="w-full bg-blue-900 text-white mt-5 px-6 py-2 rounded-lg text-lg font-semibold hover:bg-blue-600">
                            Log in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
