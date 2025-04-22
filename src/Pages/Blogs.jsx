import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Blogs = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-[calc(100vh-400px)] flex items-center justify-center">
                <h2 className="text-3xl font-bold">Blogs Page</h2>
            </div>
            <Footer />
        </>
    );
};

export default Blogs;