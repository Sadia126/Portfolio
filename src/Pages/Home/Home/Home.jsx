import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import AboutMe from '../Aboutme/Aboutme';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutMe></AboutMe>
        </>
    );
};

export default Home;