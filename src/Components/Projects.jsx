import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import movieImg from "../assets/moviematrix.png";
import cityImg from "../assets/city-fix.png";
import zapImg from "../assets/zap-shift.png";

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    className="glass-card group flex flex-col h-full overflow-hidden hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
  >
    {/* Thumbnail Container */}
    <div className="relative aspect-[16/10] overflow-hidden">
      <img 
        src={project.image} 
        alt={project.name}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
        loading="lazy"
      />
      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-[#050A14CC] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center">
        <p className="text-[#00F5FF] text-[10px] font-black uppercase tracking-[0.3em] mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          Full Case Study
        </p>
        <Link 
          to={`/project/${project.id}`}
          className="px-8 py-4 rounded-xl bg-[#00F5FF] text-[#050A14] font-black text-xs tracking-widest flex items-center justify-center gap-2 transform scale-90 group-hover:scale-100 transition-all duration-500 shadow-[0_0_30px_rgba(0,245,255,0.4)]"
        >
          EXPLORE WORK <ArrowUpRight size={18} />
        </Link>
      </div>
      
      {/* Tech Chips on Image */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 group-hover:opacity-0 transition-opacity duration-300">
        {project.tech.slice(0, 3).map((t) => (
          <span key={t} className="px-3 py-1 rounded-full bg-[rgba(5,10,20,0.6)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] text-white text-[9px] font-bold uppercase tracking-wider">
            {t}
          </span>
        ))}
      </div>
    </div>

    {/* Content Body */}
    <div className="p-8 md:p-10 flex flex-col flex-grow bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.01)]">
      <div className="flex justify-between items-center mb-6">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7B2FBE]">{project.category}</span>
        <div className="flex gap-4">
          <a href={project.github} target="_blank" rel="noreferrer" className="text-[rgba(240,244,255,0.4)] hover:text-white transition-all transform hover:scale-125">
            <Github size={20} />
          </a>
          <a href={project.live} target="_blank" rel="noreferrer" className="text-[rgba(240,244,255,0.4)] hover:text-[#00F5FF] transition-all transform hover:scale-125">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-[#00F5FF] transition-colors leading-tight">
        {project.name}
      </h3>

      <p       className="text-[rgba(240,244,255,0.8)] text-base mb-8 leading-relaxed line-clamp-3 font-medium flex-grow">
        {project.description}
      </p>

      {/* Action Footer */}
      <div className="pt-8 border-t border-[rgba(255,255,255,0.05)] flex items-center justify-between">
        <Link to={`/project/${project.id}`} className="text-[#00F5FF] text-[10px] font-black uppercase tracking-[0.2em] hover:tracking-[0.3em] transition-all">
          View Details →
        </Link>
        <span className="text-[rgba(240,244,255,0.2)] text-[10px] font-black uppercase tracking-widest">
          © 2024
        </span>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projectData = [
    {
      id: "movie-matrix",
      name: "MovieMatrix",
      description: "A cinematic film discovery platform featuring advanced GSAP animations, dynamic API integration, and a premium glassmorphism UI for movie enthusiasts.",
      image: movieImg,
      tech: ["React.js", "Framer Motion", "GSAP", "Tailwind CSS"],
      category: "Creative Frontend",
      live: "https://movie-matrix-gilt.vercel.app",
      github: "https://github.com/juhaer009/eg-movie_matrix-collaboration"
    },
    {
      id: "city-fix",
      name: "City Fix",
      description: "A full-stack municipal issue reporting system enabling citizens to report infrastructure problems with real-time status tracking and admin dashboard.",
      image: cityImg,
      tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
      category: "Full Stack System",
      live: "https://city-fix-b6595.web.app",
      github: "https://github.com/Mokim2005/city-fix"
    },
    {
      id: "zap-shift",
      name: "Zap Shift",
      description: "Comprehensive nationwide parcel delivery and logistics management platform featuring automated pricing, rider tracking, and secure delivery confirmation.",
      image: zapImg,
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      category: "Logistics SaaS",
      live: "https://zap-shift-14bf4.web.app",
      github: "https://github.com/Mokim2005/zap-shift-client"
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 section-bg">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-3xl text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00F5FF] mb-4 block"
            >
              Featured Works
            </motion.span>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-[1.05] tracking-tight gradient-text">
              Selected <br />Masterpieces
            </h2>
          </div>
          <motion.a 
            href="https://github.com/Mokim2005"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 px-10 py-5 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] text-white font-black text-xs tracking-widest hover:border-[#00F5FF]/40 hover:bg-[#00F5FF]/5 transition-all"
          >
            ALL PROJECTS <ArrowUpRight size={20} className="text-[#00F5FF]" />
          </motion.a>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projectData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
