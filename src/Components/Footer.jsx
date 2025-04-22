import React from 'react';
import { NavLink } from 'react-router';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-white py-10">
            <div className="w-11/12 mx-auto">
                <div className="flex flex-col items-center gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src="/src/assets/logo.png" alt="Phudu Logo" className="w-8 h-8" />
                        <span className="text-2xl font-bold">Phudu</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex gap-8 text-gray-600">
                        <NavLink to="/" className={({ isActive }) => `hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`}>Home</NavLink>
                        <NavLink to="/my-bookings" className={({ isActive }) => `hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`}>My-Bookings</NavLink>
                        <NavLink to="/blogs" className={({ isActive }) => `hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`}>Blogs</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => `hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`}>Contact Us</NavLink>
                    </div>
                    <div className='border border-gray-200 w-full'></div>
                    {/* Social Media Icons */}
                    <div className="flex gap-6 text-gray-600">
                        <a href="#" className="hover:text-blue-600"><FaFacebookF size={24}/></a>
                        <a href="#" className="hover:text-blue-600"><FaTwitter size={24} /></a>
                        <a href="#" className="hover:text-blue-600"><FaLinkedinIn size={24} /></a>
                        <a href="#" className="hover:text-blue-600"><FaYoutube size={24} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;