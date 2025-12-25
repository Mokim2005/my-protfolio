import React from 'react';
import HomeBanner from '../Components/HomeBanner';
import ServiceSection from '../Components/ServiceSection';
import SkillSection from '../Components/SkilledSection';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <ServiceSection></ServiceSection>
            <SkillSection></SkillSection>
        </div>
    );
};

export default Home;