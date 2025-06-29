import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import AboutMe from '../Aboutme/Aboutme';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skill></Skill>
        </>
    );
};

export default Home;