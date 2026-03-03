import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { 
  FaReact, FaNodeJs, FaHtml5, 
  FaCss3Alt, FaGitAlt 
} from "react-icons/fa";
import { 
  SiExpress, SiTailwindcss, SiJavascript, 
  SiMongodb, SiPostman,
  SiFigma, SiFirebase
} from "react-icons/si";

const skillCategories = {
  Frontend: [
    { name: "React", level: 92, icon: <FaReact />, color: "#61DAFB" },
    { name: "JavaScript", level: 90, icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "HTML5", level: 95, icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", level: 90, icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "Tailwind CSS", level: 95, icon: <SiTailwindcss />, color: "#06B6D4" },
  ],
  Backend: [
    { name: "Node.js", level: 85, icon: <FaNodeJs />, color: "#339933" },
    { name: "Express.js", level: 84, icon: <SiExpress />, color: "#ffffff" },
    { name: "MongoDB", level: 82, icon: <SiMongodb />, color: "#47A248" },
    { name: "Firebase", level: 78, icon: <SiFirebase />, color: "#FFCA28" },
  ],
  Tools: [
    { name: "Git", level: 88, icon: <FaGitAlt />, color: "#F05032" },
    { name: "VS Code", level: 95, icon: <FaCode />, color: "#007ACC" },
    { name: "Postman", level: 85, icon: <SiPostman />, color: "#FF6C37" },
    { name: "Figma", level: 75, icon: <SiFigma />, color: "#F24E1E" },
  ],
};

const SkillCard = ({ skill, index }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 10;
    const tiltY = (centerX - x) / 10;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.1s ease-out",
      }}
      className="relative bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl group overflow-hidden"
    >
      {/* Animated Gradient Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, ${skill.color}40, transparent, ${skill.color}40)`,
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Card Content */}
      <div className="relative z-10">
        {/* Top Section: Icon & Name */}
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            whileHover={{ scale: 1.2, rotate: 0, transition: { duration: 0.3 } }}
            className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shadow-lg relative"
            style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
          >
            {skill.icon}
            <motion.div
              className="absolute inset-0 rounded-xl"
              animate={{
                boxShadow: [
                  `0 0 0px ${skill.color}00`,
                  `0 0 20px ${skill.color}80`,
                  `0 0 0px ${skill.color}00`,
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <h3 className="text-xl font-bold text-white tracking-wide">{skill.name}</h3>
        </div>

        {/* Middle Section: Proficiency Label */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400 text-xs uppercase tracking-widest font-medium">
            Proficiency
          </span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white text-sm font-bold"
          >
            {skill.level}%
          </motion.span>
        </div>

        {/* Progress Bar Container */}
        <div className="h-2.5 w-full bg-gray-800/50 rounded-full overflow-hidden relative">
          {/* Animated Progress Fill with Counting Effect */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="h-full rounded-full relative"
            style={{
              backgroundColor: skill.color,
              boxShadow: `0 0 10px ${skill.color}80`,
            }}
          >
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Background Glow on Hover */}
      <motion.div
        className="absolute -right-8 -bottom-8 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: skill.color }}
      />

      {/* Particle Effect on Hover */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
            style={{ backgroundColor: skill.color }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

const SkillSection = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header with Underline Animation */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black text-white mb-4"
          >
            Technical <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-4"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg max-w-2xl"
          >
            Expertise across modern web technologies and development tools
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {Object.keys(skillCategories).map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveTab(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeTab === category
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {/* Active Background */}
              {activeTab === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              
              {/* Inactive Background */}
              {activeTab !== category && (
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl" />
              )}
              
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories[activeTab].map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillSection;
