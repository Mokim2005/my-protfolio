import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import zapImage from "../assets/zap-shift.png";
import cityImage from "../assets/city-fix.png";
import logo from "../assets/clean-city.png";

const projects = [
  {
    id: "clean-city",
    title: "CleanCity",
    description:
      "A community-driven platform for reporting urban cleanliness issues. Features real-time tracking, contribution reporting, and dark-theme synchronization.",
    tech: ["React", "MongoDB", "Firebase", "Tailwind"],
    image: logo,
    accent: "from-emerald-900 to-teal-900", // Muted accent for dark look
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: "amar-city-fix",
    title: "City Fix",
    description:
      "Public infrastructure issue reporting platform for reporting potholes, broken streetlights, and garbage overflow with status updates.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: cityImage,
    accent: "from-blue-900 to-indigo-900",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: "r-zap",
    title: "Zap Shift",
    description:
      "A complete Parcel Management System for nationwide delivery tracking, courier assignment, and management across Bangladesh.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: zapImage,
    accent: "from-purple-900 to-pink-900",
    liveLink: "#",
    githubLink: "#",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2rem] overflow-hidden shadow-none transition-all duration-500 hover:border-emerald-500/30"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* ইমেজ সেকশন - Muted with dark overlay */}
      <div className="relative h-60 overflow-hidden bg-black">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Floating Github Icon */}
        <div className="absolute top-5 right-5 flex gap-2">
          <a
            href={project.githubLink}
            className="p-2 bg-white/5 backdrop-blur-md rounded-full text-slate-400 hover:text-emerald-500 transition-all border border-white/5"
          >
            <Github size={18} />
          </a>
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-black tracking-tight text-slate-200 uppercase">
            {project.title}
          </h3>
          <span
            className={`h-1 w-8 rounded-full bg-gradient-to-r ${project.accent}`}
          ></span>
        </div>

        <p className="text-sm text-slate-500 mb-6 leading-relaxed font-medium">
          {project.description}
        </p>

        {/* টেকনোলজি ব্যাজ - No white backgrounds */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-black text-slate-400 text-[9px] font-black uppercase tracking-[0.15em] rounded-md border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* অ্যাকশন বাটন */}
        <div className="flex gap-3">
          <Link to={`/details-page/${project.id}`} className="flex-1">
            <button className="w-full py-4 bg-white/5 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-500 font-black rounded-xl border border-white/5 hover:border-emerald-500/20 transition-all active:scale-95 text-[10px] uppercase tracking-widest">
              View Project
            </button>
          </Link>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-black border border-white/5 rounded-xl text-slate-400 hover:text-emerald-500 hover:border-emerald-500/20 transition-all flex items-center justify-center"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const MyProjects = () => {
  return (
    <div className="min-h-screen bg-[#000000] py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Very subtle glow - no bright spots */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/5 text-emerald-900 text-[9px] font-black uppercase tracking-[0.3em]"
          >
            Archive 2024-25
          </motion.div>
          <motion.h2
            className="text-5xl md:text-7xl font-black text-slate-200 tracking-tighter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            SELECTED <span className="text-slate-500">WORKS</span>
          </motion.h2>
          <p className="mt-6 text-slate-600 font-bold max-w-lg mx-auto leading-relaxed text-sm">
            A focused look at applications developed using the MERN stack and
            modern cloud infrastructures.
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
