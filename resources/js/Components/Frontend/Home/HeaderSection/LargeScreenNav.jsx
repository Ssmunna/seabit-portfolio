import {Link} from "@inertiajs/react";

export default function LargeScreenNav() {
    return (
        <div className={`w-full hidden lg:block border-b border-gray-200 bg-gray-50 shadow z-999`}>
            <div className="container flex items-center justify-between h-[80px]">
                <div className={`flex gap-x-10 items-center py-3`}>
                    <ul className={`flex items-center gap-x-10 `}>
                        <li className={`text-gray-700 font-semibold cursor-pointer uppercase`}><Link href={route('home')}>Home</Link></li>
                        <li className={`text-gray-700 font-semibold cursor-pointer uppercase`}><Link href={route('about_company')}>About My Company</Link></li>
                        <li className={`text-gray-700 font-semibold cursor-pointer uppercase`}><Link href={route('about_me')}>About Me</Link></li>
                        <li className={`text-gray-700 font-semibold cursor-pointer uppercase`}><Link href={route('home', {search: 'hotel'})}>Sample Scripts</Link></li>
                        <li className={`text-gray-700 font-semibold cursor-pointer uppercase`}>Contact Details</li>
                    </ul>
                </div>
                <div className={`p-5`}>
                    <img src="/assets/images/logo.png" alt="" className="h-13" />
                </div>
            </div>
        </div>
    )
}
