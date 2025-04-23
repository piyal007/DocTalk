import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Loader from '../Loader';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    );
};

export default MainLayout;