import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import movieImg from "../assets/moviematrix.png";
import cityImg from "../assets/city-fix.png";
import zapImg from "../assets/zap-shift.png";

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    className="glass-card group flex flex-col h-full overflow-hidden"
  >
    {/* Thumbnail */}
    <div className="relative aspect-[16/10] overflow-hidden">
      <img 
        src={project.image} 
        alt={project.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
        <Link 
          to={`/project/${project.id}`}
          className="w-full py-3 rounded-xl bg-white text-[#050A14] font-bold text-sm flex items-center justify-center gap-2 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500"
        >
          EXPLORE CASE STUDY <ArrowUpRight size={18} />
        </Link>
      </div>
      
      {/* Category Tag */}
      <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-[rgba(5,10,20,0.6)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] text-[#F0F4FF] text-[10px] font-bold uppercase tracking-widest">
        {project.category}
      </div>
    </div>

    {/* Body */}
    <div className="p-8 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-[#00F5FF] transition-colors">{project.name}</h3>
        <div className="flex gap-3">
          <a href={project.github} className="text-[rgba(240,244,255,0.4)] hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href={project.live} className="text-[rgba(240,244,255,0.4)] hover:text-[#00F5FF] transition-colors">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <p className="text-[rgba(240,244,255,0.5)] text-sm mb-8 leading-relaxed line-clamp-3">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t) => (
          <span key={t} className="text-[10px] px-2.5 py-1 rounded-md bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-[rgba(240,244,255,0.7)] font-medium">
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projectData = [
    {
      id: "movie-matrix",
      name: "MovieMatrix",
      description: "A modern animated movie discovery frontend built with smooth transitions, cinematic hero sections, and interactive UI elements for an immersive browsing experience.",
      image: movieImg,
      tech: ["React.js", "Framer Motion", "GSAP", "Tailwind CSS"],
      category: "React",
      live: "#",
      github: "https://github.com/Mokim2005"
    },
    {
      id: "city-fix",
      name: "City Fix",
      description: "Public infrastructure issue reporting platform for reporting potholes, broken streetlights, and garbage overflow. Connecting citizens with authorities.",
      image: cityImg,
      tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
      category: "Full Stack",
      live: "#",
      github: "https://github.com/Mokim2005"
    },
    {
      id: "zap-shift",
      name: "Zap Shift",
      description: "A complete Parcel Management System for nationwide delivery tracking and management across Bangladesh, focusing on speed and reliability.",
      image: zapImg,
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      category: "Full Stack",
      live: "#",
      github: "https://github.com/Mokim2005"
    }
  ];

  return (
    <section id="projects" className="bg-[rgba(255,255,255,0.01)]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Selected <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-[rgba(240,244,255,0.55)] text-lg leading-relaxed">
              A collection of digital products I've built, ranging from cinematic frontends to complex full-stack ecosystem solutions.
            </p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 px-6 py-3 rounded-xl border border-[rgba(255,255,255,0.1)] text-white font-bold text-sm cursor-pointer hover:bg-[rgba(255,255,255,0.02)] transition-all"
          >
            VIEW ALL REPOS <Github size={18} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projectData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
