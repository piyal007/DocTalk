import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import MainSection from '../Components/Layout/Main/MainSection';
import Success from '../Components/Layout/Success/Success';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <MainSection></MainSection>
            <Success></Success>
            <Footer></Footer>
        </>
    );
};

export default Home;