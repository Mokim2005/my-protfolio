import React from "react";
import HomeBanner from "../Components/HomeBanner";
import ServiceSection from "../Components/ServiceSection";
import SkillSection from "../Components/SkilledSection";
import AboutSection from "./About";
import Send from "./Send";
import MyProjects from "./MyProjects";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <ServiceSection></ServiceSection>
      <SkillSection></SkillSection>
      <AboutSection></AboutSection>
      <MyProjects></MyProjects>
      <Send></Send>

    </div>
  );
};

export default Home;
