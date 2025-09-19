import {Link} from "@inertiajs/react";

export default function LargeScreenNav() {
    return (
        <div className={`w-full hidden md:block border-b border-gray-200 fixed left-0 right-0 top-0 bg-gray-50 shadow z-999`}>
            <div className="container flex items-center justify-between">
                <div className={`flex gap-x-10 items-center py-3`}>
                    <img src="/assets/images/logo2.png" alt="" className="h-13" />
                    <ul className={`flex items-center gap-x-6 `}>
                        <li className={`text-gray-700 font-semibold cursor-pointer`}><Link href={route('home')}>Home</Link></li>
                        <li className={`text-gray-500 font-semibold cursor-pointer`}>Ticket</li>
                        <li className={`text-gray-500 font-semibold cursor-pointer`}><Link href={route('home', {search: 'tour'})}>Tour</Link></li>
                        <li className={`text-gray-500 font-semibold cursor-pointer`}><Link href={route('home', {search: 'hotel'})}>Hotel</Link></li>
                        <li className={`text-gray-500 font-semibold cursor-pointer`}>Visa</li>
                        <li className={`text-gray-500 font-semibold cursor-pointer`}>About</li>
                        <li className={`text-gray-500 font-semibold cursor-pointer`}>Contact</li>
                    </ul>
                </div>
                <div>
                    <button className=" bg-blue-900 text-white px-6 py-2 flex justify-center items-center rounded-md text-lg font-semibold hover:bg-blue-800">
                        Log in
                    </button>
                </div>
            </div>
        </div>
    )
}
