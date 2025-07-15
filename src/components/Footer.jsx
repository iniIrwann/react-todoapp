import React from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from "@assets/logo.png";

function Footer() {
return (
    <footer className="bg-[#16161d] text-white rounded-t-3xl py-12 px-4 md:px-20">
        <div>
            <div className="flex flex-col md:flex-row justify-between gap-12 mb-12 items-center">
                <img src={logo} alt="Positivus Logo" className="invert w-32 md:w-40" />
                <nav className="flex flex-col md:flex-row gap-8 items-center">
                    <ul className="flex flex-col md:flex-row gap-6 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-lime-300 transition">About us</a></li>
                        <li><a href="#" className="hover:text-lime-300 transition">Services</a></li>
                        <li><a href="#" className="hover:text-lime-300 transition">Use Cases</a></li>
                        <li><a href="#" className="hover:text-lime-300 transition">Pricing</a></li>
                        <li><a href="#" className="hover:text-lime-300 transition">Blog</a></li>
                    </ul>
                    <div className="flex gap-4">
                        <a href="#" aria-label="LinkedIn" className="bg-white rounded-full p-2 hover:bg-lime-300 transition">
                            <FaLinkedinIn className="text-black" />
                        </a>
                        <a href="#" aria-label="Facebook" className="bg-white rounded-full p-2 hover:bg-lime-300 transition">
                            <FaFacebookF className="text-black" />
                        </a>
                        <a href="#" aria-label="Twitter" className="bg-white rounded-full p-2 hover:bg-lime-300 transition">
                            <FaTwitter className="text-black" />
                        </a>
                    </div>
                </nav>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="space-y-6">
                <div className="flex flex-col gap-2">
                    <span className="bg-lime-300 text-black font-semibold px-3 py-1 rounded-md w-fit">
                        Contact us:
                    </span>
                    <address className="not-italic text-gray-300">
                        <p>Email: <a href="mailto:info@positivus.com" className="hover:underline">info@positivus.com</a></p>
                        <p>Phone: <a href="tel:5555678901" className="hover:underline">555-567-8901</a></p>
                        <p>Address: 1234 Main St, Moonstone City, Stardust State 12345</p>
                    </address>
                </div>
            </div>
            <div className="flex flex-col gap-8 w-full md:w-auto">
                <form className="bg-[#1f1f27] p-4 rounded-lg flex flex-col sm:flex-row gap-4 w-full">
                    <label htmlFor="newsletter" className="sr-only">Email</label>
                    <input
                        id="newsletter"
                        type="email"
                        placeholder="Email"
                        className="flex-1 p-3 rounded-md border border-gray-600 bg-transparent text-white focus:outline-none"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-lime-300 text-black font-semibold px-6 py-3 rounded-md hover:bg-lime-400 transition"
                    >
                        Subscribe to news
                    </button>
                </form>
            </div>
        </div>
        <hr className="my-6 border-gray-600" />
        <div className="flex flex-col md:flex-row justify-between text-sm text-gray-400 items-center gap-2">
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <a href="#" className="underline hover:text-lime-300 transition">
                Privacy Policy
            </a>
        </div>
    </footer>
);
}

export default Footer;
