// components/ProjectDetails.jsx (ফিক্সড ভার্সন)
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
} from "lucide-react"; 
import { useParams, useNavigate } from "react-router";



const projectsDetails = {
  "amar-city-fix": {
    title: "City Fix",
    tagline: "Public Infrastructure Issue Reporting System",
    description:
      "A modern, responsive full-stack platform that empowers citizens to report public infrastructure issues (potholes, broken streetlights, garbage overflow, water leakage, damaged footpaths, etc.) and enables efficient management by municipal staff and admins.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase Auth",
      "TanStack Query",
      "SSLCommerz",
      "React-PDF",
    ],
    features: [
      {
        icon: MapPin,
        text: "Citizen issue reporting with title, category, location & multiple photo uploads",
      },
      {
        icon: ThumbsUp,
        text: "Community upvote system – highlight urgent issues (one upvote per user)",
      },
      {
        icon: Crown,
        text: "Priority boost for ৳100 via SSLCommerz – boosted issues appear at the top",
      },
      {
        icon: CreditCard,
        text: "Premium subscription (৳1000) – unlimited reports, priority support & badge",
      },
      {
        icon: Users,
        text: "Role-based dashboards: Citizen, Staff (assigned issues only), Full Admin control",
      },
      {
        icon: History,
        text: "Detailed issue timeline tracking with status changes, timestamps & actor info",
      }, // <-- এখানে History
      {
        icon: Lock,
        text: "Secure authentication (Email/Google), JWT protection, blocked user restrictions",
      },
      {
        icon: Bell,
        text: "SweetAlert2 toasts for all actions, fully responsive mobile-first design",
      },
      {
        icon: Wallet,
        text: "SSLCommerz payments with downloadable PDF invoices (React-PDF)",
      },
      {
        icon: Zap,
        text: "Advanced filters, search, pagination, charts & stats in dashboards",
      },
    ],
    mockImage:
      "https://images.unsplash.com/photo-1516846279185-0305f8b1cb2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", // Professional city reporting dashboard theme
    gradient: "from-orange-600 to-red-600",
    liveLink: "https://city-fix-b6595.web.app",
    clientLink: "https://github.com/Mokim2005/city-fix",
    serverLink: "https://github.com/Mokim2005/city-fix-server",
  },
  "r-zap": {
    title: "Zap Shift",
    tagline: "Fast & Modern Parcel Management Systems",
    description:
      "Welcome to Zap Shift Resources! 🚀 A curated collection of tools, guides, and assets for developing robust Parcel Management Systems integrated with Zapier automation. Nationwide parcel delivery service covering all 64 districts of Bangladesh with role-based access for Users, Admins, and Riders.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    features: [
      {
        icon: Package,
        text: "Automated pricing calculation based on weight, type & destination",
      },
      {
        icon: Truck,
        text: "Real-time parcel tracking with status updates & notifications",
      },
      { icon: Shield, text: "OTP-based secure delivery confirmation" },
      {
        icon: Wallet,
        text: "Transparent commission: 80% (same city) / 60% (outside city) for riders",
      },
      {
        icon: MapPinned,
        text: "Nationwide coverage across all 64 districts of Bangladesh",
      },
      {
        icon: Zap,
        text: "Role-based workflow: User booking → Admin assignment → Rider delivery",
      },
    ],
    mockImage:
      "https://s3-alpha.figma.com/hub/file/2232691010264742689/7947e2bd-6e44-4d80-89d0-3fb518e6109a-cover.png",
    gradient: "from-green-600 to-teal-600",
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
            className="text-indigo-400 hover:underline"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="px-8 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition"
        >
          <ArrowLeft size={24} />
          Back to Projects
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span
              className={`inline-block px-4 py-2 bg-gradient-to-r ${project.gradient} bg-opacity-20 rounded-full text-sm font-medium mb-6`}
            >
              Featured Project
            </span>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-3xl text-gray-300 mb-10">{project.tagline}</p>
            <p className="text-xl text-gray-400 max-w-4xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>

        {/* Mock Screenshot */}
        <motion.div
          className="max-w-6xl mx-auto px-8 -mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
            <img
              src={project.mockImage}
              alt={project.title}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>

      {/* Features & Tech */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-10">Key Features</h2>
            <div className="space-y-8">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-6">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} bg-opacity-10`}
                  >
                    <feature.icon
                      className={`text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}
                      size={28}
                    />
                  </div>
                  <p className="text-xl text-gray-300 pt-3">{feature.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-10">Tech Stack</h2>
            <div className="flex flex-wrap gap-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-6 py-3 bg-gray-900 border border-gray-800 rounded-full text-lg font-medium hover:border-gray-600 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Live & Source Links Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12">Explore the Project</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Live Demo */}
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-xl"
            >
              <ExternalLink size={28} />
              <div className="text-left">
                <p className="text-sm text-gray-300">Live Demo</p>
                <p className="font-semibold">Visit Website</p>
              </div>
              <ArrowRight
                className="ml-4 group-hover:translate-x-2 transition"
                size={24}
              />
            </a>

            {/* Client Repository */}
            <a
              href={project.clientLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-8 py-5 bg-gray-900 border border-gray-700 rounded-2xl hover:border-gray-500 transition-all shadow-xl"
            >
              <Github size={28} />
              <div className="text-left">
                <p className="text-sm text-gray-400">Frontend Code</p>
                <p className="font-semibold">Client Repository</p>
              </div>
              <ArrowRight
                className="ml-4 group-hover:translate-x-2 transition"
                size={24}
              />
            </a>

            {/* Server Repository */}
            <a
              href={project.serverLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-8 py-5 bg-gray-900 border border-gray-700 rounded-2xl hover:border-gray-500 transition-all shadow-xl"
            >
              <Github size={28} />
              <div className="text-left">
                <p className="text-sm text-gray-400">Backend Code</p>
                <p className="font-semibold">Server Repository</p>
              </div>
              <ArrowRight
                className="ml-4 group-hover:translate-x-2 transition"
                size={24}
              />
            </a>
          </div>

          {/* Admin Demo Credentials (Only for City Fix) */}
          {id === "amar-city-fix" && (
            <div className="mt-12 max-w-2xl mx-auto bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Admin Demo Access
              </h3>
              <div className="space-y-3 text-left">
                <p className="text-gray-300">
                  <span className="font-medium">Email:</span> asifs@gmail.com
                </p>
                <p className="text-gray-300">
                  <span className="font-medium">Password:</span> 000000
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Use these credentials to explore the full admin dashboard,
                  staff panel, and payment features.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
