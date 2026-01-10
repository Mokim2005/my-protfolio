import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Zap,
  Bell,
  ExternalLink,
  Github,
  ArrowRight,
  Package,
  Truck,
  Wallet,
  Shield,
  MapPinned,
  ThumbsUp,
  Crown,
  CreditCard,
  History,
  Users,
  Lock,
  Camera,
  Layers,
  CheckCircle,
} from "lucide-react";
import { useParams, useNavigate } from "react-router";
import zapImage from "../assets/zap-shift.png";
import cityImage from "../assets/city-fix.png";
import cleanCityLogo from "../assets/clean-city.png"; // CleanCity লোগো

const projectsDetails = {
  // --- CleanCity Project Details ---
  "clean-city": {
    title: "CleanCity",
    tagline: "Community-Driven Urban Cleanliness Platform",
    description:
      "A specialized reporting tool designed to keep our environment clean. Citizens can quickly snap a photo of garbage or waste-related issues, pin the location, and report it to the community. Includes real-time tracking of cleanup progress.",
    tech: [
      "React.js",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Firebase",
      "Tailwind CSS",
      "DaisyUI",
      "Framer Motion",
    ],
    features: [
      {
        icon: Camera,
        text: "Instant Photo Reporting – Capture cleanliness issues directly from the scene.",
      },
      {
        icon: MapPinned,
        text: "Geo-location Integration – Pin precise locations for garbage collection.",
      },
      {
        icon: History,
        text: "Live Status Tracking – See when a report moves from 'Reported' to 'Cleaned'.",
      },
      {
        icon: Users,
        text: "Public Community Feed – View all issues reported in your neighborhood.",
      },
      {
        icon: Layers,
        text: "Responsive Dashboard – Clean UI for managing personal reports and contributions.",
      },
      {
        icon: CheckCircle,
        text: "Resolved Issue Verification – Confirmation after a site has been cleaned.",
      },
    ],
    mockImage: cleanCityLogo,
    gradient: "from-emerald-600 to-teal-700",
    liveLink: "https://clean-city-10.netlify.app",
    clientLink: "https://github.com/Mokim2005/Community-Cleanliness-Issue-Reporting-Portal-repo",
    serverLink: "https://github.com/Mokim2005/community-cleanliness-issue-reporting-portal-server",
  },

  // --- City Fix Project Details ---
  "amar-city-fix": {
    title: "City Fix",
    tagline: "Public Infrastructure Issue Reporting System",
    description:
      "A modern, responsive full-stack platform that empowers citizens to report public infrastructure issues and enables efficient management by municipal staff.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "SSLCommerz",
      "React-PDF",
      "TanStack Query",
      "Firebase",
    ],
    features: [
      {
        icon: MapPin,
        text: "Citizen issue reporting with multiple photo uploads",
      },
      {
        icon: ThumbsUp,
        text: "Community upvote system to highlight urgent issues",
      },
      { icon: Crown, text: "Priority boost for ৳100 via SSLCommerz payment" },
      {
        icon: History,
        text: "Detailed issue timeline tracking with actor info",
      },
      { icon: Lock, text: "JWT protection & Role-based Access Control (RBAC)" },
    ],
    mockImage: cityImage,
    gradient: "from-orange-600 to-red-600",
    liveLink: "https://city-fix-b6595.web.app",
    clientLink: "https://github.com/Mokim2005/city-fix",
    serverLink: "https://github.com/Mokim2005/city-fix-server",
  },

  // --- Zap Shift Project Details ---
  "r-zap": {
    title: "Zap Shift",
    tagline: "Nationwide Parcel Management System",
    description:
      "A complete delivery solution for Bangladesh with role-based access for Users, Admins, and Riders. Handles parcel lifecycle from booking to delivery.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    features: [
      { icon: Package, text: "Automated weight-based pricing calculation" },
      {
        icon: Truck,
        text: "Real-time tracking for parcels and delivery status",
      },
      { icon: Wallet, text: "Automated rider commission management (80%/60%)" },
      { icon: Shield, text: "Secure OTP-based delivery confirmation system" },
    ],
    mockImage: zapImage,
    gradient: "from-blue-600 to-indigo-600",
    liveLink: "https://zap-shift-14bf4.web.app",
    clientLink: "https://github.com/Mokim2005/zap-shift-client",
    serverLink: "https://github.com/Mokim2005/zap-shift-server",
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsDetails[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate(-1)}
            className="text-emerald-500 hover:underline"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  text-slate-300 transition-colors duration-500">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-slate-500 hover:text-emerald-500 transition-all font-black uppercase tracking-widest text-xs"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Projects
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className={`inline-block px-4 py-1 rounded-full bg-white/5 border border-white/5 text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} text-[10px] font-black uppercase tracking-[0.3em] mb-8`}
            >
              Project Detail Case
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
              {project.title}
            </h1>
            <p
              className={`text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}
            >
              {project.tagline}
            </p>
            <p className="text-lg text-slate-500 leading-relaxed mb-10 font-medium">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Screenshot Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl bg-[#0a0a0a]">
              <img
                src={project.mockImage}
                alt={project.title}
                className="w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className=" py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-black text-white mb-16 tracking-tighter">
            TECHNICAL FEATURES
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 bg-black border border-white/5 rounded-3xl hover:border-emerald-500/20 transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}
                >
                  <feature.icon size={24} />
                </div>
                <p className="text-slate-400 font-medium leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-8 py-32 text-center">
        <h2 className="text-4xl font-black text-white mb-12 tracking-tighter">
          READY TO EXPLORE?
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-emerald-500 hover:text-white transition-all text-xs uppercase tracking-widest"
          >
            <ExternalLink size={18} /> Live Demo
          </a>
          <a
            href={project.clientLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-10 py-5 bg-white/5 text-white font-black rounded-2xl border border-white/10 hover:bg-white/10 transition-all text-xs uppercase tracking-widest"
          >
            <Github size={18} /> Frontend Repo
          </a>
          <a
            href={project.serverLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-10 py-5 bg-white/5 text-white font-black rounded-2xl border border-white/10 hover:bg-white/10 transition-all text-xs uppercase tracking-widest"
          >
            <Github size={18} /> Backend Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
