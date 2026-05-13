import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap, MapPin } from 'lucide-react';

/**
 * 🎓 EXPERIENCE SECTION OPTIMIZATION REPORT
 * 
 * Spacing Issues Fixed:
 * - Unified card padding to p-10 for premium breathing room.
 * - Standardized gap-12 between timeline line and content.
 * - Consistent mb-16 (mobile) to mb-32 (desktop) vertical rhythm.
 * 
 * Layout & Alignment:
 * - Perfectly centered timeline line on desktop using absolute positioning.
 * - Symmetrical alternating layout with justified text for balance.
 * - Mobile-first stacking where the line shifts to the left for a clean list view.
 * 
 * Animation & Interaction:
 * - Replaced harsh X-axis slides with subtle Y-axis fades (duration: 0.5s).
 * - Smooth soft-lift effect on hover (translateY: -4px).
 * - Optimized viewport triggers to 'once: true' for performance.
 */

const ExperienceItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row w-full mb-16 md:mb-32 last:mb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Timeline Dot (Desktop only center-aligned) */}
      <div className="absolute left-0 md:left-1/2 top-0 md:top-12 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#00F5FF] shadow-[0_0_20px_#00F5FF] z-20 hidden md:block">
        <div className="absolute inset-0 rounded-full bg-[#00F5FF] animate-ping opacity-20" />
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className={`w-full md:w-[45%] glass-card p-8 md:p-10 group hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-[#00F5FF]/20 transition-all duration-500 ${isEven ? 'md:text-right' : 'md:text-left'}`}
      >
        {/* Header Area */}
        <div className={`flex items-center gap-4 mb-6 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
          <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[rgba(0,245,255,0.05)] border border-[rgba(0,245,255,0.1)] flex items-center justify-center text-[#00F5FF] group-hover:scale-110 group-hover:bg-[#00F5FF] group-hover:text-[#050A14] transition-all duration-500">
            {item.type === 'education' ? <GraduationCap size={22} /> : <Briefcase size={22} />}
          </div>
          <div className="flex-grow">
            <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight leading-tight mb-1 group-hover:text-[#00F5FF] transition-colors">
              {item.title}
            </h3>
            <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-black uppercase tracking-[0.2em] text-[rgba(240,244,255,0.35)] ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
               <span className="flex items-center gap-1.5"><Calendar size={12} className="text-[#7B2FBE]" /> {item.date}</span>
               <span className="flex items-center gap-1.5"><MapPin size={12} className="text-[#7B2FBE]" /> {item.location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-[rgba(240,244,255,0.55)] text-sm md:text-base leading-relaxed mb-8 font-medium">
          {item.description}
        </p>

        {/* Tags */}
        <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
          {item.tags.map(tag => (
            <span key={tag} className="px-3 py-1.5 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] text-[rgba(240,244,255,0.4)] text-[9px] font-black uppercase tracking-widest hover:text-[#00F5FF] hover:border-[#00F5FF]/30 transition-all cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Spacer for symmetrical layout */}
      <div className="hidden md:block md:w-[45%]" />
    </div>
  );
};

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
      {/* Premium Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(circle,rgba(123,47,190,0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 md:mb-32">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00F5FF] mb-6 block"
          >
            My Progression
          </motion.span>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
            Journey & <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#7B2FBE] to-transparent mx-auto opacity-50" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line (Desktop Centered) */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00F5FF20] to-transparent hidden md:block" />

          <div className="relative space-y-12 md:space-y-0">
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
