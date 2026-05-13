import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import ServiceSection from './Components/ServiceSection';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
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
            <ServiceSection />
            <Skills />
            <Projects />
            <Contact />
          </main>
        } />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      
      {/* Global Footer Placeholder */}
      <footer className="py-10 text-center border-t border-[rgba(255,255,255,0.05)] bg-[rgba(5,10,20,0.8)]">
        <p className="text-[rgba(240,244,255,0.4)] text-xs font-bold uppercase tracking-widest">
          © 2026 Abdul Mokim. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
