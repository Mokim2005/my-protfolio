import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaHtml5, 
  FaCss3Alt, FaDatabase 
} from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiJavascript } from "react-icons/si";

const skills = [
  { name: "React", level: 92, icon: <FaReact />, color: "#61DAFB" },
  { name: "JavaScript", level: 90, icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "Node.js", level: 85, icon: <FaNodeJs />, color: "#339933" },
  { name: "Express.js", level: 84, icon: <SiExpress />, color: "#ffffff" },
  { name: "MongoDB", level: 82, icon: <FaDatabase />, color: "#47A248" },
  { name: "Tailwind CSS", level: 95, icon: <SiTailwindcss />, color: "#06B6D4" },
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-[#0f0f13] border border-white/10 p-6 rounded-2xl shadow-xl relative overflow-hidden group"
    >
      {/* Top Section: Icon & Name */}
      <div className="flex items-center gap-4 mb-6">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg"
          style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
        >
          {skill.icon}
        </div>
        <h3 className="text-xl font-bold text-white tracking-wide">{skill.name}</h3>
      </div>

      {/* Middle Section: Proficiency Label */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-400 text-xs uppercase tracking-widest font-medium">Proficiency</span>
        <span className="text-white text-sm font-bold">{skill.level}%</span>
      </div>

      {/* Progress Bar Container */}
      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
        {/* Animated Progress Fill */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="h-full rounded-full"
          style={{ 
            backgroundColor: skill.color,
            boxShadow: `0 0 10px ${skill.color}80` 
          }}
        ></motion.div>
      </div>

      {/* Background Subtle Glow on Hover */}
      <div 
        className="absolute -right-8 -bottom-8 w-24 h-24 blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{ backgroundColor: skill.color }}
      ></div>
    </motion.div>
  );
};

const SkillSection = () => {
  return (
    <section className="bg-[#050505] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-white mb-4"
          >
            Technical <span className="text-purple-500">Skills</span>
          </motion.h2>
          <div className="h-1 w-20 bg-purple-500 rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;