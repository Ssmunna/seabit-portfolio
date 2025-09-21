import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaLinkedinIn,
    FaPinterestP,
} from 'react-icons/fa6'
import {FiMail, FiPhone} from "react-icons/fi";
import {FaSkype} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#111111] text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            {["About My Company", "About Me", "Sample Scripts", "Contact Details"].map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center md:justify-start gap-2 hover:text-red-500 transition"
                                    >
                                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connects */}
                    <div>
                        <h3 className="font-semibold mb-4 text-white">Connects</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center justify-center md:justify-start gap-2">
                                <FiMail className="w-5 h-5 text-red-600" />
                                <a href="mailto:Georges.Salo@me.com" className="hover:text-red-500 transition">
                                    Georges.Salo@me.com
                                </a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2">
                                <FiPhone className="w-5 h-5 text-red-600" />
                                <a href="tel:+6597382418" className="hover:text-red-500 transition">
                                    +65 9738 2418
                                </a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2">
                                <FaSkype className="w-5 h-5 text-red-600" />
                                <span>Georges.888</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="font-semibold mb-4 text-white">Follow Us On</h3>
                        <div className="flex justify-center md:justify-start gap-4">
                            <a href="#" className="bg-white rounded-full p-2 shadow hover:scale-110 transition">
                                <FaLinkedinIn className="w-5 h-5 text-blue-600" />
                            </a>
                            <a href="#" className="bg-white rounded-full p-2 shadow hover:scale-110 transition">
                                <FaFacebookF className="w-5 h-5 text-blue-500" />
                            </a>
                            <a href="#" className="bg-white rounded-full p-2 shadow hover:scale-110 transition">
                                <FaInstagram className="w-5 h-5 text-pink-600" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
                    Copyright © Maison D’Eau De Vie Productions. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
