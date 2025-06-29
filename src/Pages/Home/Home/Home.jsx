import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import AboutMe from '../Aboutme/Aboutme';
import Skill from '../Skill/Skill';
import Eduction from '../Education/Education';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <>
            
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skill></Skill>
            <Eduction></Eduction>
            <Project></Project>
            <Contact></Contact>
        </>
    );
};

export default Home;