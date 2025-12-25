import React from 'react';
import HomeBanner from '../Components/HomeBanner';
import ServiceSection from '../Components/ServiceSection';
import SkillSection from '../Components/SkilledSection';
import AboutSection from './About';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <ServiceSection></ServiceSection>
            <SkillSection></SkillSection>
            <AboutSection></AboutSection>
        
        </div>
    );
};

export default Home;