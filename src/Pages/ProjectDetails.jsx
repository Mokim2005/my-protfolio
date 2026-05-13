import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ExternalLink, Github, ChevronRight, 
  Sparkles, Layers, Camera, Rocket, Code2, 
  Package, Truck, Wallet, Shield, MapPinned, 
  ThumbsUp, Crown, Lock, Star, History
} from 'lucide-react';

import zapImage from "../assets/zap-shift.png";
import cityImage from "../assets/city-fix.png";
import movieMatrixImage from "../assets/moviematrix.png";

const projectsDetails = {
  "movie-matrix": {
    title: "MovieMatrix",
    tagline: "Cinematic Animated Movie Discovery UI",
    description: "A modern animated movie discovery frontend built with smooth transitions, cinematic hero sections, and interactive UI elements for an immersive browsing experience.",
    tech: ["React.js", "Framer Motion", "GSAP", "Tailwind CSS"],
    features: [
      { icon: Sparkles, text: "Cinematic Hero Animations" },
      { icon: Layers, text: "Smooth Page Transitions" },
      { icon: Camera, text: "Movie Preview UI Cards" },
      { icon: Rocket, text: "Highly Interactive Micro Animations" },
      { icon: Code2, text: "Modern Component Architecture" },
    ],
    mockImage: movieMatrixImage,
    gradient: "from-[#00F5FF] to-[#7B2FBE]",
    liveLink: "https://movie-matrix-gilt.vercel.app",      
    clientLink: "https://github.com/juhaer009/eg-movie_matrix-collaboration",    
    serverLink: "https://github.com/juhaer009/movie-matrix-server",   
  },
  "city-fix": {
    title: "City Fix",
    tagline: "Public Infrastructure Issue Reporting",
    description: "A full-stack system enabling citizens to report infrastructure problems and municipalities to resolve them efficiently. Featuring role-based access and real-time tracking.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    features: [
      { icon: MapPinned, text: "Citizen Issue Reporting" },
      { icon: ThumbsUp, text: "Community Upvote System" },
      { icon: Crown, text: "Priority Boost via Payment" },
      { icon: History, text: "Issue Timeline Tracking" },
      { icon: Lock, text: "JWT Role-based Security" },
    ],
    mockImage: cityImage,
    gradient: "from-[#7B2FBE] to-[#00F5FF]",
    liveLink: "https://city-fix-b6595.web.app",
    clientLink: "https://github.com/Mokim2005/city-fix",
    serverLink: "https://github.com/Mokim2005/city-fix-server",
  },
  "zap-shift": {
    title: "Zap Shift",
    tagline: "Nationwide Parcel Delivery System",
    description: "A complete logistics platform for parcel booking and delivery tracking across Bangladesh. Built for performance and reliability in the logistics sector.",
    tech: ["React", "Node", "Express", "MongoDB", "Tailwind"],
    features: [
      { icon: Package, text: "Automated Pricing System" },
      { icon: Truck, text: "Real-time Parcel Tracking" },
      { icon: Wallet, text: "Rider Commission System" },
      { icon: Shield, text: "OTP Delivery Confirmation" },
    ],
    mockImage: zapImage,
    gradient: "from-[#00F5FF] to-[#7B2FBE]",
    liveLink: "https://zap-shift-14bf4.web.app",
    clientLink: "https://github.com/Mokim2005/zap-shift-client",
    serverLink: "https://github.com/Mokim2005/zap-shift-server",
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsDetails[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050A14] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-3xl font-bold mb-6">Project Not Found</h2>
          <button onClick={() => navigate('/')} className="btn-primary">BACK TO HOME</button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#050A14] pt-32 pb-20 overflow-hidden"
    >
      <div className="container relative z-10">
        {/* Back Button */}
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#00F5FF] font-bold mb-12 hover:translate-x-[-8px] transition-transform group"
        >
          <ArrowLeft size={20} className="group-hover:scale-125 transition-transform" /> 
          <span className="text-xs tracking-[0.2em]">BACK TO PORTFOLIO</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-[10px] font-black uppercase tracking-widest mb-6 shadow-lg`}>
                <Sparkles size={14} /> Featured Case Study
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">{project.title}</h1>
              <p className={`text-xl md:text-2xl font-medium mb-8 bg-gradient-to-r ${project.gradient} text-transparent bg-clip-text`}>
                {project.tagline}
              </p>
              <p className="text-[rgba(240,244,255,0.6)] text-lg leading-relaxed mb-10 max-w-xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {project.tech.map((t) => (
                  <span key={t} className="px-4 py-2 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-[rgba(240,244,255,0.8)] text-xs font-bold transition-all hover:border-[#00F5FF] hover:bg-[rgba(0,245,255,0.05)]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-2 min-w-[180px]">
                  <ExternalLink size={18} /> LIVE DEMO
                </a>
                <a href={project.clientLink} target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2 min-w-[180px]">
                  <Github size={18} /> SOURCE CODE
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className={`absolute -inset-10 bg-gradient-to-r ${project.gradient} opacity-20 blur-[100px] rounded-full animate-pulse`} />
            <div className="relative glass-card border-none overflow-hidden rounded-3xl shadow-2xl">
              <img src={project.mockImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <Rocket className="text-[#00F5FF]" /> Key Features & Innovations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 group hover:border-[#00F5FF]/30 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon size={22} />
                </div>
                <h4 className="text-white font-bold mb-2">{feature.text}</h4>
                <p className="text-[rgba(240,244,255,0.4)] text-sm">Advanced system integration ensuring seamless user interaction and robust performance.</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-40 text-center py-20 glass-card bg-gradient-to-br from-[rgba(0,245,255,0.03)] to-[rgba(123,47,190,0.03)] border-none">
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to see the results?</h3>
          <p className="text-[rgba(240,244,255,0.5)] mb-10 text-lg">Check out the live deployment or browse the repository.</p>
          <div className="flex justify-center gap-6">
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn-primary min-w-[200px]">EXPERIENCE LIVE</a>
            <a href={project.clientLink} target="_blank" rel="noreferrer" className="btn-outline min-w-[200px]">VIEW ON GITHUB</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
