import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaCode,
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
} from "react-icons/si";

const SkillBadge = ({ name, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05, duration: 0.2 }}
    viewport={{ once: true }}
    whileHover={{
      scale: 1.05,
      backgroundColor: "rgba(0,245,255,0.08)",
      borderColor: "rgba(0,245,255,0.3)",
      boxShadow: "0 0 25px rgba(0,245,255,0.15)",
      transition: { duration: 0.15, ease: "easeOut" },
    }}
    className="group flex flex-col items-center gap-4 p-8 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] transition-transform duration-150"
  >
    <div className="text-4xl text-[rgba(240,244,255,0.7)] group-hover:text-[#00F5FF] group-hover:scale-110 transition-[color,transform] duration-200">
      {icon}
    </div>
    <span className="text-[rgba(240,244,255,0.85)] text-[10px] font-black uppercase tracking-widest group-hover:text-[#00F5FF] transition-colors">
      {name}
    </span>
  </motion.div>
);

const SkillCategory = ({ title, skills }) => (
  <div className="mb-20 last:mb-0">
    <div className="flex items-center gap-6 mb-12">
      <h3 className="text-[#00F5FF] text-xs uppercase tracking-[0.4em] font-black whitespace-nowrap">
        {title}
      </h3>
      <div className="flex-grow h-px bg-gradient-to-r from-[rgba(123,47,190,0.2)] to-transparent" />
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
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
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },
    {
      title: "Tools & Design",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Github", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Figma", icon: <SiFigma /> },
        { name: "VS Code", icon: <FaCode /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 md:py-32 relative overflow-hidden section-bg"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[rgba(0,245,255,0.03)] blur-[120px] rounded-full pointer-events-none" />

      <div className="container">
        <div className="max-w-3xl mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00F5FF] mb-4 block"
          >
            Capabilities
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
            <span className="gradient-text">Technical Arsenal</span>
          </h2>
          <p className="text-[rgba(240,244,255,0.75)] text-lg md:text-xl leading-relaxed">
            A comprehensive set of modern technologies I use to bring complex
            digital visions to life, from pixel-perfect frontends to robust
            backends.
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
