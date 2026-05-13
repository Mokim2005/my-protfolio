import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaCode, FaGithub 
} from "react-icons/fa";
import { 
  SiExpress, SiTailwindcss, SiJavascript, SiMongodb, SiPostman, SiFigma, SiFirebase, SiNextdotjs 
} from "react-icons/si";

const SkillBadge = ({ name, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ 
      scale: 1.08, 
      backgroundColor: "rgba(0,245,255,0.12)", 
      borderColor: "#00F5FF",
      boxShadow: "0 0 20px rgba(0,245,255,0.25)"
    }}
    className="group flex flex-col items-center gap-4 p-6 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] transition-all duration-300"
  >
    <div className="text-4xl text-[rgba(240,244,255,0.4)] group-hover:text-[#00F5FF] group-hover:scale-110 transition-all duration-300">
      {icon}
    </div>
    <span className="text-[#F0F4FF] text-sm font-semibold tracking-wide uppercase">{name}</span>
  </motion.div>
);

const SkillCategory = ({ title, skills }) => (
  <div className="mb-16 last:mb-0">
    <div className="flex items-center gap-4 mb-10">
      <h3 className="text-[#7B2FBE] text-sm uppercase tracking-[0.3em] font-black">{title}</h3>
      <div className="flex-grow h-px bg-gradient-to-r from-[rgba(123,47,190,0.3)] to-transparent" />
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {skills.map((skill, i) => (
        <SkillBadge key={skill.name} {...skill} index={i} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillData = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ]
    },
    {
      title: "Tools & Design",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Github", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Figma", icon: <SiFigma /> },
        { name: "VS Code", icon: <FaCode /> },
      ]
    }
  ];

  return (
    <section id="skills" className="relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[rgba(0,245,255,0.05)] blur-[120px] rounded-full pointer-events-none" />

      <div className="container">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#00F5FF] rounded-full mb-6" />
          <p className="text-[rgba(240,244,255,0.6)] text-lg leading-relaxed">
            A comprehensive set of modern technologies I use to bring complex digital visions to life, from pixel-perfect frontends to robust backends.
          </p>
        </div>

        <div className="relative z-10">
          {skillData.map((category) => (
            <SkillCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
