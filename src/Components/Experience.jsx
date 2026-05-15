import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap, MapPin } from "lucide-react";

const ExperienceItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex items-center justify-between w-full mb-12 md:mb-24 last:mb-0">
      {/* Timeline Dot */}
      <div className="absolute left-[17px] md:left-1/2 top-0 md:top-10 -translate-x-1/2 z-20">
        <div className="relative flex items-center justify-center">
          {/* Main Dot */}
          <div className="w-5 h-5 rounded-full bg-cyan-400 border-4 border-[#0a0a0a] shadow-[0_0_15px_rgba(34,211,238,0.5)] z-10" />
          {/* Pulsing Outer Ring */}
          <div className="absolute w-8 h-8 rounded-full bg-cyan-400/20 animate-ping" />
          {/* Subtle Glow */}
          <div className="absolute w-12 h-12 rounded-full bg-cyan-400/10 blur-xl" />
        </div>
      </div>

      {/* Card Container — FIX 1: pl-10 → pl-14 mobile padding increased */}
      <div className={`w-full flex ${isEven ? "md:justify-start" : "md:justify-end"} pl-14 md:pl-0`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          /* FIX 2: overflow-hidden → overflow-visible so content is never clipped */
          className="group relative w-full md:w-[45%] rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl p-6 md:p-10 overflow-visible transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/[0.04] hover:shadow-[0_30px_100px_rgba(0,245,255,0.08)]"
        >
          {/* FIX 3: Glow effects wrapped in their own overflow-hidden container
              so they stay clipped to the card but don't clip card content */}
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-400/10 blur-[80px] group-hover:bg-cyan-400/20 transition-colors duration-500" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 blur-[80px] group-hover:bg-purple-500/20 transition-colors duration-500" />
          </div>

          {/* Header Section */}
          <div className="flex flex-col gap-8 relative  z-10">
            <div className="flex items-center justify-between gap-4">
              {/* Type Icon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 flex items-center justify-center text-cyan-400 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400/40 group-hover:shadow-cyan-400/10">
                {item.type === "education" ? (
                  <GraduationCap size={28} strokeWidth={1.5} />
                ) : (
                  <Briefcase size={28} strokeWidth={1.5} />
                )}
              </div>

              {/* Date Badge */}
              <div className="px-4 py-1.5 rounded-full bg-cyan-400/5 border border-cyan-400/10 flex items-center gap-2">
                <Calendar size={14} className="text-cyan-400" />
                <span className="text-[11px] font-bold text-cyan-400/90 uppercase tracking-widest">{item.date}</span>
              </div>
            </div>

            {/* Title & Location */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 tracking-tight leading-tight">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-white/40">
                <MapPin size={14} className="text-purple-400" />
                <span className="text-xs font-medium tracking-wide uppercase">{item.location}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/60 leading-relaxed text-base md:text-lg font-light">
              {item.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5 mt-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-[10px] font-bold text-white/40 uppercase tracking-[0.15em] transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-400 hover:bg-cyan-400/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
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
      description:
        "Pursuing advanced technical education in computer science, focusing on algorithms, database management, and software engineering principles.",
      tags: ["CS Foundations", "Data Structures", "Algorithms"],
    },
    {
      title: "MERN Stack Development",
      type: "experience",
      date: "2024",
      location: "Programming Hero",
      description:
        "Intensive training and project-based learning in the MERN ecosystem. Mastered React, Node.js, Express, and MongoDB through complex full-stack builds.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Marketing Expert",
      type: "experience",
      date: "2022 - 2023",
      location: "Programming Hero Platform",
      description:
        "Leveraged technical knowledge to assist in marketing digital products, providing a unique bridge between product development and user acquisition.",
      tags: ["Growth", "Digital Strategy", "User Experience"],
    },
  ];

  return (
    <section id="experience" className="relative py-24 md:py-40 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-400/5 border border-cyan-400/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-black text-cyan-400 uppercase tracking-[0.3em]">
              My Progression
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]"
          >
            A Journey of <br />
            <span className="bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
              Growth & Experience
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/50 leading-relaxed font-light px-4"
          >
            Building high-performance applications and mastering the digital craft through academic excellence and professional dedication.
          </motion.p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute  left-[17px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/50 via-purple-500/50 to-cyan-400/50 opacity-30" />
          </div>

          <div className="flex m-4 flex-col">
            {data.map((item, index) => (
              <ExperienceItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;