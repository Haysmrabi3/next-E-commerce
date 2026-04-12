import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="text-white text-center py-12 bg-black">

            {/* Top Section */}
            <div className="border-b border-gray-700 pb-10 px-4">
                <h4 className="text-2xl md:text-3xl font-semibold">
                    Join the Professional STRATUS Experience
                </h4>

                <p className="text-base md:text-2xl py-4 text-gray-300 max-w-2xl mx-auto">
                    Our products are carefully crafted to provide an exceptional experience for every user.
                </p>

                <button className="bg-white py-3 px-6 rounded-xl text-black font-semibold hover:bg-gray-200 transition">
                    Browse Our Products
                </button>
            </div>

            <div className=" w-full">

                <div className="max-w-7xl mx-auto flex flex-wrap justify-evenly gap-10 py-12 px-6  sm:text-left">

                    <div className="w-full sm:w-[45%] lg:w-[22%]">
                        <h5 className="font-bold mb-3">About Us</h5>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            We provide premium quality products with minimal design and maximum comfort.
                        </p>
                    </div>

                    <div className="w-full sm:w-[45%] lg:w-[22%]">
                        <h5 className="font-bold mb-3">Quick Links</h5>
                        <ul className="space-y-2">
                            <li className="text-sm text-gray-400 hover:text-white transition">
                                <Link href="/collections">Collections</Link>
                            </li>
                            <li className="text-sm text-gray-400 hover:text-white transition">
                                <Link href="/about">About</Link>
                            </li>
                            <li className="text-sm text-gray-400 hover:text-white transition">
                                <Link href="/login">Login</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-[45%] lg:w-[22%]">
                        <h5 className="font-bold mb-3">Support</h5>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="hover:text-white cursor-pointer transition">Email Us</li>
                            <li className="hover:text-white cursor-pointer transition">Call Us</li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-[45%] lg:w-[22%]">
                        <h5 className="font-bold mb-3">Follow Us</h5>

                        <div className="flex gap-4 justify-center sm:justify-start text-2xl">
                            <i className="fab fa-instagram hover:text-pink-500 cursor-pointer transition"></i>
                            <i className="fas fa-shopping-cart hover:text-gray-300 cursor-pointer transition"></i>
                        </div>
                    </div>  

                </div>
            </div>
        </footer>
    );
}