import React from 'react';

const Banner = () => {
    return (
        <div className="pb-4">
            <div className="w-11/12 mx-auto border-2 border-white rounded-4xl p-16 bg-gradient-to-b from-[#EFEFEF] to-[#FFFFFF]">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Dependable Care, Backed by Trusted Professionals.</h1>
                    <p className="text-gray-600 text-lg mb-8">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                    <div className="flex items-center justify-center gap-2 max-w-2xl mx-auto">
                        <input type="text" placeholder="Search any doctor..." className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500" />
                        <button className="px-8 py-3 bg-blue-600 text-white rounded-full cursor-pointer font-semibold hover:bg-blue-700 transition-colors">Search Now</button>
                    </div>
                </div>
                <div className="flex justify-center gap-6">
                    <img src="/src/assets/banner-img-1.png" alt="Doctor" className="w-[400px] rounded-2xl shadow-lg object-cover" />
                    <img src="/src/assets/banner-img-1.png" alt="Doctor" className="w-[400px] rounded-2xl shadow-lg object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Banner;