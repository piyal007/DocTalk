import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar w-10/12 mx-auto py-4">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>My-Bookings</a></li>
                            <li><a>Blogs</a></li>
                            <li><a>Contact Us</a></li>
                        </ul>
                    </div>
                    <a className="flex items-center gap-2 text-xl font-bold cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-circle"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                        Phudu
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        <li><a className="text-base font-medium hover:text-blue-600">Home</a></li>
                        <li><a className="text-base font-medium hover:text-blue-600">My-Bookings</a></li>
                        <li><a className="text-base font-medium hover:text-blue-600">Blogs</a></li>
                        <li><a className="text-base font-medium hover:text-blue-600">Contact Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-blue-600 hover:bg-blue-700 text-white border-none px-6 rounded-full">Emergency</a>
                </div>
        </div>
    );
};

export default Navbar;