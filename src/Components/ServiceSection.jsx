import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLayerGroup, FaDatabase, FaMobileAlt, FaRocket, FaTools } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    desc: "Building responsive and modern websites using React, Next.js, and Tailwind CSS. We ensure every pixel is perfect and every line of code is optimized.",
    features: ["Responsive Design", "Fast Loading Speed", "SEO Optimized", "Cross-Browser Compatible"],
    icon: <FaCode />,
    color: "from-[#00F5FF]/20 to-[#7B2FBE]/20",
  },
  {
    title: "Mobile-First Design",
    desc: "Creating beautiful mobile-first experiences that work seamlessly across all devices, focusing on user experience and touch interactivity.",
    features: ["Touch-Optimized UI", "Progressive Web Apps", "Smooth Animations", "Offline Support"],
    icon: <FaMobileAlt />,
    color: "from-[#7B2FBE]/20 to-[#00F5FF]/20",
  },
  {
    title: "Backend Development",
    desc: "Developing robust server-side applications with Node.js, Express, and MongoDB to handle complex data and high traffic with ease.",
    features: ["RESTful APIs", "Database Design", "Auth & Security", "Cloud Deployment"],
    icon: <FaDatabase />,
    color: "from-[#00F5FF]/10 to-[#7B2FBE]/10",
  },
  {
    title: "MERN Stack Solutions",
    desc: "End-to-end full stack development focusing on scalability, clean architecture, and high-performance real-time data handling.",
    features: ["Full Stack Logic", "State Management", "API Integration", "Real-time Data"],
    icon: <FaLayerGroup />,
    color: "from-[#7B2FBE]/10 to-[#00F5FF]/10",
  },
  {
    title: "Performance Optimization",
    desc: "Optimizing your existing apps for maximum speed. We reduce load times and improve Lighthouse scores significantly.",
    features: ["Code Splitting", "Lazy Loading", "Asset Compression", "Caching Strategy"],
    icon: <FaRocket />,
    color: "from-[#00F5FF]/15 to-[#7B2FBE]/15",
  },
  {
    title: "Maintenance & Support",
    desc: "Providing ongoing support, security patches, and periodic updates to keep your application running smoothly in the long run.",
    features: ["Bug Fixing", "Security Patches", "Server Monitoring", "Feature Updates"],
    icon: <FaTools />,
    color: "from-[#7B2FBE]/15 to-[#00F5FF]/15",
  },
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -15, scale: 1.02 }}
    // p-10 (padding) and min-h-[500px] box-ke boro dekhabe
    className="service-glass-card group relative p-10 md:p-12 min-h-[400px] w-full flex flex-col items-start border border-white/10 hover:border-[#00F5FF]/40 transition-all duration-500 bg-[#0d0d0d] rounded-[40px] overflow-hidden shadow-2xl"
  >
    {/* Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    {/* Icon Container - Size increased */}
    <div className={`relative z-10 w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} border border-white/10 flex items-center justify-center text-[#00F5FF] text-4xl mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
      {service.icon}
    </div>

    {/* Title - Size increased */}
    <h3 className="relative z-10 text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight group-hover:text-[#00F5FF] transition-colors duration-300">
      {service.title}
    </h3>

    {/* Description - Better line height and spacing */}
    <p className="relative z-10 text-gray-400 group-hover:text-gray-200 text-lg leading-relaxed mb-10 transition-colors duration-300">
      {service.desc}
    </p>

    {/* Features List - Pushed to bottom with more spacing */}
    <ul className="relative z-10 space-y-5 mt-auto w-full pt-8 border-t border-white/10">
      {service.features.map((feature, i) => (
        <li key={i} className="flex items-center gap-4 text-gray-400 group-hover:text-white text-base transition-colors duration-300">
          <span className="w-2 h-2 rounded-full bg-[#00F5FF] shadow-[0_0_12px_#00F5FF]" />
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);

const ServiceSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl"> {/* max-w-7xl total layout-ke boro kore */}
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#00F5FF] uppercase tracking-[0.5em] text-sm font-black mb-6 block"
          >
            Capabilities
          </motion.span>
          <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-8">
            Specialized <span className="gradient-heading">Solutions</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-[#00F5FF] to-[#7B2FBE] mx-auto rounded-full" />
        </div>

        {/* Grid System - gap increased for more breathing room */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;