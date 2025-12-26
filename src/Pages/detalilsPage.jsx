// components/ProjectDetails.jsx (আপডেটেড ভার্সন)
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  MessageCircle,
  Calendar,
  CheckCircle,
  Zap,
  Bell,
  ExternalLink,
  Github,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

const projectsDetails = {
  "amar-city-fix": {
    title: "Amar City Fix",
    tagline: "Report & Track City Issues in Real-Time",
    description:
      "A citizen-centric platform that allows users to report urban problems like potholes, broken street lights, waste accumulation, and more. Authorities can track, assign, and resolve issues efficiently with location-based mapping.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mapbox GL JS",
      "Cloudinary",
    ],
    features: [
      {
        icon: MapPin,
        text: "GPS-based issue reporting with photos & location",
      },
      {
        icon: CheckCircle,
        text: "Real-time status updates and push notifications",
      },
      {
        icon: Zap,
        text: "Admin dashboard for quick assignment & resolution tracking",
      },
    ],
    mockImage:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5955?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
    gradient: "from-orange-600 to-red-600",
    liveLink: "https://amar-city-fix.vercel.app", // তোমার actual live link দিবে
    clientLink: "https://github.com/yourusername/amar-city-fix-client",
    serverLink: "https://github.com/yourusername/amar-city-fix-server",
  },
  "r-zap": {
    title: "R Zap",
    tagline: "Fast & Modern Real-Time Chat Application",
    description:
      "A sleek, responsive real-time messaging app with one-on-one chats, group conversations, file sharing, typing indicators, read receipts, and message reactions.",
    tech: ["Next.js", "Socket.io", "Tailwind CSS", "Prisma", "PostgreSQL"],
    features: [
      { icon: MessageCircle, text: "Real-time messaging powered by Socket.io" },
      { icon: Zap, text: "Typing indicators, online status & read receipts" },
      { icon: Bell, text: "File sharing, emojis & message reactions" },
    ],
    mockImage:
      "https://cdn.dribbble.com/users/143672/screenshots/18253947/media/8e8a1e2d8c8e9d1f3e8f2b8e9f1e2d3f.png?resize=1200x900",
    gradient: "from-green-600 to-teal-600",
    liveLink: "https://r-zap-chat-app.netlify.app",
    clientLink: "https://github.com/yourusername/r-zap",
    serverLink: "https://github.com/yourusername/r-zap-server",
  },
  "shif-project": {
    title: "Shif Project",
    tagline: "Smart Employee Shift Management System",
    description:
      "An intuitive shift scheduling tool for businesses. Managers can create schedules, employees can view, request, or swap shifts, and get automated reminders.",
    tech: [
      "React",
      "Express",
      "PostgreSQL",
      "Node.js",
      "Calendar API",
      "Nodemailer",
    ],
    features: [
      { icon: Calendar, text: "Drag & drop shift scheduling calendar" },
      { icon: Bell, text: "Automated email/SMS reminders for shifts" },
      {
        icon: CheckCircle,
        text: "Shift swap requests & real-time attendance tracking",
      },
    ],
    mockImage:
      "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
    gradient: "from-blue-600 to-indigo-600",
    liveLink: "https://shif-project.vercel.app",
    clientLink: "https://github.com/yourusername/shif-project-client",
    serverLink: "https://github.com/yourusername/shif-project-server",
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
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
