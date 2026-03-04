import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaCode,
  FaSkiingNordic,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiPostman,
  SiFigma,
  SiFirebase,
  SiNextdotjs,
  SiPhoenixframework,
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
      { name: "VS Code", icon: <FaCode />, level: 95 }, // ✅ Stable Icon
      { name: "Kiro", icon: <FaSkiingNordic />, level: 90 }, // ✅ Stable Icon
      { name: "Figma", icon: <SiFigma />, level: 90 },
      { name: "Pixo", icon: <SiPhoenixframework />, level: 80 },
    ],
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          My{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["frontend", "backend", "tools"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-xl capitalize font-medium transition-all duration-300
              ${
                activeTab === tab
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills[activeTab].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10
              rounded-2xl p-6 hover:border-indigo-400/40
              hover:shadow-xl hover:shadow-indigo-500/10
              transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-indigo-400 flex justify-center">
                {skill.icon}
              </div>

              <h3 className="text-lg font-semibold mb-3 text-white">
                {skill.name}
              </h3>

              <div className="w-full bg-gray-700 h-2 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                />
              </div>

              <p className="text-sm text-gray-400 mt-2">
                {skill.level}% Proficiency
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkilledSection;