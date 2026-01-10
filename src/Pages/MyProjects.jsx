import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import zapImage from "../assets/zap-shift.png";
import cityImage from "../assets/city-fix.png";
import logo from "../assets/clean-city.png";

const projects = [
  {
    id: "clean-city",
    title: "CleanCity",
    description:
      "A community-driven platform for reporting urban cleanliness issues. Features real-time tracking and contribution reporting.",
    tech: ["React", "MongoDB", "Firebase", "Tailwind", "DaisyUI"],
    image: logo,
    accent: "from-emerald-500 to-teal-600",
  },
  {
    id: "amar-city-fix",
    title: "City Fix",
    description:
      "Public infrastructure issue reporting platform for reporting potholes, broken streetlights, and garbage overflow.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    image: cityImage,
    accent: "from-blue-600 to-indigo-600",
  },
  {
    id: "r-zap",
    title: "Zap Shift",
    description:
      "A complete Parcel Management System for nationwide delivery tracking and management across Bangladesh.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    image: zapImage,
    accent: "from-purple-600 to-pink-600",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="group relative bg-[#111827] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl hover:border-white/20 transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* ইমেজ সেকশন */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${project.accent} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
        />
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-black tracking-tight text-white">
            {project.title}
          </h3>
          <div
            className={`p-2 rounded-lg bg-gradient-to-br ${project.accent} text-white shadow-lg`}
          >
            <ExternalLink size={16} />
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-6 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* টেকনোলজি ব্যাজ */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/5 text-gray-300 text-[10px] font-black uppercase tracking-widest rounded-lg border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* বাটন */}
        <Link to={`/details-page/${project.id}`} className="block">
          <motion.button
            className={`w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r ${project.accent} text-white font-black rounded-2xl shadow-xl transition-all active:scale-95 text-xs uppercase tracking-[0.2em]`}
            whileHover={{ y: -4 }}
          >
            Explore Project
            <ArrowRight size={18} />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

const MyProjects = () => {
  return (
    <div className="min-h-screen  py-24 px-6 md:px-12 relative overflow-hidden">
      {/* ডেকোরেটিভ গ্লো - ডার্ক ব্যাকগ্রাউন্ডে খুব সুন্দর লাগে */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <motion.h2
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Featured <span className="text-emerald-500">Projects</span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-emerald-500 rounded-full mx-auto" />
          <p className="text-gray-500 font-medium max-w-xl mx-auto">
            A collection of full-stack applications built with passion and
            precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
