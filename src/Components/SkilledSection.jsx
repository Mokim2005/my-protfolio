import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaCode, FaGithub,
} from "react-icons/fa";

import {
  SiExpress, SiTailwindcss, SiJavascript, SiMongodb, SiPostman, SiFigma, SiFirebase, SiNextdotjs,
} from "react-icons/si";

const SkilledSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const skills = {
    frontend: [
      { name: "React", icon: <FaReact />, level: 90 },
      { name: "JavaScript", icon: <SiJavascript />, level: 85 },
      { name: "HTML5", icon: <FaHtml5 />, level: 95 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
      { name: "Tailwind", icon: <SiTailwindcss />, level: 88 },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs />, level: 85 },
      { name: "Express.js", icon: <SiExpress />, level: 80 },
      { name: "MongoDB", icon: <SiMongodb />, level: 82 },
      { name: "Firebase", icon: <SiFirebase />, level: 75 },
    ],
    tools: [
      { name: "Git", icon: <FaGitAlt />, level: 90 },
      { name: "Github", icon: <FaGithub />, level: 95 },
      { name: "Postman", icon: <SiPostman />, level: 85 },
      { name: "VS Code", icon: <FaCode />, level: 95 },
      { name: "Figma", icon: <SiFigma />, level: 90 },
    ],
  };

  return (
    <section className="py-20 px-4 text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My <span className="text-blue-400">Skills</span></h2>
        </div>

        {/* Tab Buttons - Fixed Z-index and Click */}
        <div className="flex justify-center gap-4 mb-12 relative z-10">
          {Object.keys(skills).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-xl capitalize transition-all duration-300 border ${
                activeTab === tab 
                ? "bg-blue-600 border-transparent shadow-lg shadow-blue-500/50 scale-105" 
                : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {skills[activeTab].map((skill) => (
              <motion.div
                key={`${activeTab}-${skill.name}`} // Unique key for each tab change
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300"
              >
                <div className="text-4xl text-blue-400 mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <h3 className="text-center text-xl font-semibold mb-4">{skill.name}</h3>
                
                {/* Progress Bar */}
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-blue-500"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default SkilledSection;