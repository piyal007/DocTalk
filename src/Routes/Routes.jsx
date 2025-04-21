import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import MainSection from '../Components/Layout/Main/MainSection';

const Routes = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <MainSection></MainSection>
            <Footer></Footer>
            
        </>
    );
};

export default Routes;