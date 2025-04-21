import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';


const Footer = () => {
    return (
        <footer className="bg-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src="/src/assets/logo.png" alt="Phudu Logo" className="w-8 h-8" />
                        <span className="text-2xl font-bold">Phudu</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex gap-8 text-gray-600">
                        <a href="/" className="hover:text-blue-600">Home</a>
                        <a href="/my-bookings" className="hover:text-blue-600">My-Bookings</a>
                        <a href="/blogs" className="hover:text-blue-600">Blogs</a>
                        <a href="/contact" className="hover:text-blue-600">Contact Us</a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-6 text-gray-600">
                        <a href="#" className="hover:text-blue-600"><Facebook size={24}/></a>
                        <a href="#" className="hover:text-blue-600"><Twitter size={24} /></a>
                        <a href="#" className="hover:text-blue-600"><Linkedin size={24} /></a>
                        <a href="#" className="hover:text-blue-600"><Youtube size={24} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;