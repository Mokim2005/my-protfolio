import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Package,
  Truck,
  Wallet,
  Shield,
  MapPinned,
  Camera,
  Layers,
  CheckCircle,
  History,
  Users,
  ThumbsUp,
  Crown,
  Lock,
  Sparkles,
  Rocket,
  Code2,
  Star,
} from "lucide-react";
import { useParams, useNavigate } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import zapImage from "../assets/zap-shift.png";
import cityImage from "../assets/city-fix.png";
// import cleanCityLogo from "../assets/clean-city.png";
import movieMatrixImage from "../assets/moviematrix.png";

gsap.registerPlugin(ScrollTrigger);

const projectsDetails = {
"movie-matrix": {
  title: "MovieMatrix",
  tagline: "Cinematic Animated Movie Discovery UI",
  description:
    "A modern animated movie discovery frontend built with smooth transitions, cinematic hero sections, and interactive UI elements for an immersive browsing experience.",
  tech: ["React.js", "Framer Motion", "GSAP", "Tailwind CSS"],

  features: [
    { icon: Sparkles, text: "Cinematic Hero Animations" },
    { icon: Layers, text: "Smooth Page Transitions" },
    { icon: Camera, text: "Movie Preview UI Cards" },
    { icon: Rocket, text: "Highly Interactive Micro Animations" },
    { icon: Code2, text: "Modern Component Architecture" },
  ],

  mockImage: movieMatrixImage, // 👉 use your imported image
  gradient: "from-purple-500 to-pink-600",

  liveLink: "https://movie-matrix-gilt.vercel.app",      
  clientLink: "https://github.com/juhaer009/eg-movie_matrix-collaboration",    
  serverLink: "https://github.com/juhaer009/movie-matrix-server",   
},

  "amar-city-fix": {
    title: "City Fix",
    tagline: "Public Infrastructure Issue Reporting",
    description:
      "A full-stack system enabling citizens to report infrastructure problems and municipalities to resolve them efficiently.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    features: [
      { icon: MapPinned, text: "Citizen Issue Reporting" },
      { icon: ThumbsUp, text: "Community Upvote System" },
      { icon: Crown, text: "Priority Boost via Payment" },
      { icon: History, text: "Issue Timeline Tracking" },
      { icon: Lock, text: "JWT Role-based Security" },
    ],
    mockImage: cityImage,
    gradient: "from-orange-500 to-red-600",
    liveLink: "https://city-fix-b6595.web.app",
    clientLink: "https://github.com/Mokim2005/city-fix",
    serverLink: "https://github.com/Mokim2005/city-fix-server",
  },

  "r-zap": {
    title: "Zap Shift",
    tagline: "Nationwide Parcel Delivery System",
    description:
      "A complete logistics platform for parcel booking and delivery tracking.",
    tech: ["React", "Node", "Express", "MongoDB", "Tailwind"],
    features: [
      { icon: Package, text: "Automated Pricing System" },
      { icon: Truck, text: "Real-time Parcel Tracking" },
      { icon: Wallet, text: "Rider Commission System" },
      { icon: Shield, text: "OTP Delivery Confirmation" },
    ],
    mockImage: zapImage,
    gradient: "from-blue-500 to-indigo-600",
    liveLink: "https://zap-shift-14bf4.web.app",
    clientLink: "https://github.com/Mokim2005/zap-shift-client",
    serverLink: "https://github.com/Mokim2005/zap-shift-server",
  },
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const featuresRef = useRef();
  const heroRef = useRef();

  const project = projectsDetails[id];

  useEffect(() => {
    if (featuresRef.current) {
      gsap.from(featuresRef.current.children, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 85%",
        },
      });
    }
  }, []);

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center text-white"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl text-white font-semibold hover:scale-105 transition-all group relative overflow-hidden"
          >
            <span className="relative overflow-hidden">
              <span className="block transition-transform duration-500 group-hover:-translate-y-full" style={{ transitionTimingFunction: 'cubic-bezier(0.76,0,0.24,1)' }}>
                Return Home
              </span>
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 translate-y-full group-hover:translate-y-0" style={{ transitionTimingFunction: 'cubic-bezier(0.76,0,0.24,1)' }}>
                Return Home
              </span>
            </span>
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen text-slate-300 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      {/* Back Button with Animation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 pt-6 relative z-10"
      >
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-all duration-300 hover:gap-3"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="relative overflow-hidden">
            <span className="block transition-transform duration-500 group-hover:-translate-y-full" style={{ transitionTimingFunction: 'cubic-bezier(0.76,0,0.24,1)' }}>
              Back to Projects
            </span>
            <span className="absolute inset-0 flex items-center transition-transform duration-500 translate-y-full group-hover:translate-y-0" style={{ transitionTimingFunction: 'cubic-bezier(0.76,0,0.24,1)' }}>
              Back to Projects
            </span>
          </span>
        </button>
      </motion.div>

      {/* Hero Section with Enhanced Design */}
      <div
        ref={heroRef}
        className="max-w-6xl mx-auto px-4 py-10 md:py-14 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold shadow-lg`}
              >
                <Sparkles size={16} />
                Featured Project
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            >
              {project.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`text-xl md:text-2xl font-medium mb-5 bg-gradient-to-r ${project.gradient} text-transparent bg-clip-text`}
            >
              {project.tagline}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-slate-400 mb-8 text-lg leading-relaxed"
            >
              {project.description}
            </motion.p>

            {/* Tech Stack with Hover Effects */}
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-sm uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                <Code2 size={16} />
                Technology Stack
              </p>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px -10px rgba(16, 185, 129, 0.3)",
                    }}
                    className="px-4 py-2 text-sm rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image with Enhanced Hover */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group-hover:shadow-emerald-500/20 group-hover:border-emerald-500/30 transition-all duration-500">
              <img
                src={project.mockImage}
                alt={project.title}
                className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section with Enhanced Cards */}
      <div className="max-w-6xl mx-auto px-4 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 flex items-center gap-3">
            <Rocket className="text-emerald-400" size={32} />
            Key Features
          </h2>
          <p className="text-slate-400 text-lg">
            What makes this project stand out
          </p>
        </motion.div>

        <div
          ref={featuresRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {project.features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px -20px rgba(16, 185, 129, 0.3)",
              }}
              className="group p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-blue-500/0 group-hover:from-emerald-500/5 group-hover:via-transparent group-hover:to-blue-500/5 transition-all duration-500" />

              <div
                className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
              >
                <feature.icon size={22} />
              </div>

              <p className="text-base font-medium text-white mb-2">
                {feature.text}
              </p>
              <p className="text-sm text-slate-500">
                Advanced feature with seamless integration
              </p>

              {/* Decorative Element */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-tl-full group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section with Enhanced Buttons */}
      <div className="text-center pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore?
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Check out the live demo or dive into the code
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 30px -10px rgba(16, 185, 129, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              <span className="relative overflow-hidden inline-flex items-center gap-2">
                <span className="inline-flex items-center gap-2 transition-transform duration-500 group-hover:-translate-y-full" style={{ transitionTimingFunction: 'cubic-bezier(0.76,0,0.24,1)' }}>
                  <ExternalLink
                    size={18}
                    className="group-hover:rotate-12 transition-transform"
                  />
                  Live Demo
                  <Star
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </span>
                <span className="absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-500 translate-y-full group-hover:translate-y-0" style={{ transitionTimingFunction: 'cubic-bezier(0.76,0,0.24,1)' }}>
                  <ExternalLink
                    size={18}
                    className="group-hover:rotate-12 transition-transform"
                  />
                  Live Demo
                  <Star
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </span>
              </span>
            </motion.a>

            <motion.a
              href={project.clientLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 30px -10px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden"
            >
              <span className="relative overflow-hidden inline-flex items-center gap-2">
                <span className="inline-flex items-center gap-2 transition-transform duration-500 group-hover:-translate-y-full" style={{ transitionTimingFunction: 'cubic-bezier(0.76,0,0.24,1)' }}>
                  <Github
                    size={18}
                    className="group-hover:rotate-12 transition-transform"
                  />
                  Frontend Code
                </span>
                <span className="absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-500 translate-y-full group-hover:translate-y-0" style={{ transitionTimingFunction: 'cubic-bezier(0.76,0,0.24,1)' }}>
                  <Github
                    size={18}
                    className="group-hover:rotate-12 transition-transform"
                  />
                  Frontend Code
                </span>
              </span>
            </motion.a>

            <motion.a
              href={project.serverLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 30px -10px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden"
            >
              <span className="relative overflow-hidden inline-flex items-center gap-2">
                <span className="inline-flex items-center gap-2 transition-transform duration-500 group-hover:-translate-y-full" style={{ transitionTimingFunction: 'cubic-bezier(0.76,0,0.24,1)' }}>
                  <Github
                    size={18}
                    className="group-hover:rotate-12 transition-transform"
                  />
                  Backend Code
                </span>
                <span className="absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-500 translate-y-full group-hover:translate-y-0" style={{ transitionTimingFunction: 'cubic-bezier(0.76,0,0.24,1)' }}>
                  <Github
                    size={18}
                    className="group-hover:rotate-12 transition-transform"
                  />
                  Backend Code
                </span>
              </span>
            </motion.a>
          </div>

          {/* Stats or Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex justify-center gap-8 text-slate-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Full Stack Application</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Production Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span>Open Source</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
