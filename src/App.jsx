import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import ServiceSection from './Components/ServiceSection';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ProjectDetails from './Pages/ProjectDetails';

function App() {
  return (
    <div id="root-app">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <Experience />
            <ServiceSection />
            <Skills />
            <Projects />
            <Contact />
          </main>
        } />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
