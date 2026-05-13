import React from 'react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ exp, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-between mb-12 md:mb-24 w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#00F5FF] z-10 hidden md:block">
        <motion.div 
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-[#00F5FF] opacity-50 shadow-[0_0_15px_#00F5FF]"
        />
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full md:w-[45%] glass-card p-6 md:p-8"
      >
        <span className="text-sm font-bold text-[rgba(240,244,255,0.5)] uppercase tracking-widest block mb-2">
          {exp.duration}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.company}</h3>
        <h4 className="text-lg font-medium gradient-text mb-6 uppercase tracking-wide">{exp.role}</h4>
        
        <ul className="space-y-3">
          {exp.points.map((point, i) => (
            <li key={i} className="flex gap-3 text-[rgba(240,244,255,0.7)] text-sm leading-relaxed">
              <span className="text-[#00F5FF] mt-1.5">•</span>
              {point}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Spacing for mobile */}
      <div className="w-full md:w-[45%] hidden md:block" />
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "Stark Industries",
      role: "Senior UI Engineer",
      duration: "2022 - PRESENT",
      points: [
        "Leading the development of mission-critical dashboards using React and GSAP.",
        "Architecting a custom design system with glassmorphism and real-time data sync.",
        "Optimizing application performance by 40% through advanced memoization techniques."
      ]
    },
    {
      company: "Wayne Enterprises",
      role: "Frontend Developer",
      duration: "2020 - 2022",
      points: [
        "Built responsive web interfaces for smart city infrastructure monitoring.",
        "Implemented complex data visualizations using D3.js and SVG animations.",
        "Collaborated with cross-functional teams to deliver pixel-perfect designs."
      ]
    },
    {
      company: "Oscorp Technologies",
      role: "Junior Web Developer",
      duration: "2018 - 2020",
      points: [
        "Developed and maintained corporate websites using modern JavaScript frameworks.",
        "Integrated REST APIs and handled global state management using Redux.",
        "Assisted in UI/UX research and prototyping for internal tools."
      ]
    }
  ];

  return (
    <section id="experience">
      <div className="container relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Journey <span className="gradient-text">& Experience</span></h2>
          <div className="w-20 h-1 bg-[#7B2FBE] mx-auto rounded-full" />
        </div>

        {/* Timeline Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-40 bottom-20 w-[2px] bg-gradient-to-b from-[#00F5FF] via-[#7B2FBE] to-[#00F5FF] hidden md:block" />

        <div className="relative">
          {experiences.map((exp, i) => (
            <ExperienceItem key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
