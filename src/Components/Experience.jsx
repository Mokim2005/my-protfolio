import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap, MapPin } from 'lucide-react';

const ExperienceItem = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`relative flex flex-col md:flex-row gap-8 mb-20 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
  >
    {/* Center Line Dot */}
    <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#00F5FF] shadow-[0_0_15px_#00F5FF] z-10 hidden md:block" />

    {/* Content */}
    <div className={`w-full md:w-[45%] glass-card p-8 group hover:border-[#00F5FF]/30 transition-all ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
        <span className="text-[#00F5FF] p-2 rounded-lg bg-[rgba(0,245,255,0.05)]">
          {item.type === 'education' ? <GraduationCap size={20} /> : <Briefcase size={20} />}
        </span>
        <h3 className="text-xl font-bold text-white uppercase tracking-tight">{item.title}</h3>
      </div>
      
      <div className={`flex flex-wrap items-center gap-4 text-xs font-bold text-[rgba(240,244,255,0.4)] uppercase tracking-widest mb-6 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
        <span className="flex items-center gap-1.5"><Calendar size={14} /> {item.date}</span>
        <span className="flex items-center gap-1.5"><MapPin size={14} /> {item.location}</span>
      </div>

      <p className="text-[rgba(240,244,255,0.6)] text-sm leading-relaxed mb-6">
        {item.description}
      </p>

      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
        {item.tags.map(tag => (
          <span key={tag} className="px-3 py-1 rounded-md bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-[rgba(240,244,255,0.5)] text-[10px] font-bold uppercase">
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Spacer for other side */}
    <div className="hidden md:block md:w-[45%]" />
  </motion.div>
);

const Experience = () => {
  const data = [
    {
      title: "Diploma in Computer Science",
      type: "education",
      date: "2023 - Present",
      location: "Dinajpur, Bangladesh",
      description: "Pursuing advanced technical education in computer science, focusing on algorithms, database management, and software engineering principles.",
      tags: ["CS Foundations", "Data Structures", "Algorithms"]
    },
    {
      title: "MERN Stack Development",
      type: "experience",
      date: "2024",
      location: "Programming Hero",
      description: "Intensive training and project-based learning in the MERN ecosystem. Mastered React, Node.js, Express, and MongoDB through complex full-stack builds.",
      tags: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
      title: "Marketing Expert",
      type: "experience",
      date: "2022 - 2023",
      location: "Programming Hero Platform",
      description: "Leveraged technical knowledge to assist in marketing digital products, providing a unique bridge between product development and user acquisition.",
      tags: ["Growth", "Digital Strategy", "User Experience"]
    }
  ];

  return (
    <section id="experience" className="relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[radial-gradient(circle,rgba(123,47,190,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container relative">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-[#7B2FBE] mb-4 block"
          >
            My Journey
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00F5FF] to-[#7B2FBE] mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00F5FF] via-[#7B2FBE] to-[#00F5FF] opacity-20 hidden md:block" />

          <div className="relative z-10">
            {data.map((item, i) => (
              <ExperienceItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
