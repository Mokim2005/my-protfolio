import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, FaLayerGroup, FaDatabase, 
  FaMobileAlt, FaRocket, FaTools 
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    desc: "Building responsive and modern websites using React, Next.js, and Tailwind CSS.",
    features: ["Responsive Design", "Fast Loading Speed", "SEO Optimized", "Cross-Browser Compatible"],
    icon: <FaCode />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Mobile-First Design",
    desc: "Creating beautiful mobile-first experiences that work seamlessly across all devices.",
    features: ["Touch-Optimized UI", "Progressive Web Apps", "Smooth Animations", "Offline Support"],
    icon: <FaMobileAlt />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Backend Development",
    desc: "Developing robust server-side applications with Node.js, Express, and MongoDB.",
    features: ["RESTful APIs", "Database Design", "Auth & Security", "Cloud Deployment"],
    icon: <FaDatabase />,
    color: "from-pink-500 to-red-500"
  },
  {
    title: "MERN Stack Solutions",
    desc: "End-to-end full stack development focusing on scalability and performance.",
    features: ["Full Stack Logic", "State Management", "API Integration", "Real-time Data"],
    icon: <FaLayerGroup />,
    color: "from-orange-500 to-yellow-500"
  },
  {
    title: "Performance Optimization",
    desc: "Optimizing your existing apps for maximum speed and efficient resource usage.",
    features: ["Code Splitting", "Lazy Loading", "Asset Compression", "Caching Strategy"],
    icon: <FaRocket />,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Maintenance & Support",
    desc: "Providing ongoing support and updates to keep your application running smoothly.",
    features: ["Bug Fixing", "Security Patches", "Server Monitoring", "Feature Updates"],
    icon: <FaTools />,
    color: "from-indigo-500 to-purple-600"
  }
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="glass-card p-8 group hover:border-[rgba(0,245,255,0.3)] transition-all duration-500"
  >
    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
      {service.icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00F5FF] transition-colors">{service.title}</h3>
    <p className="text-[rgba(240,244,255,0.5)] text-sm leading-relaxed mb-8">
      {service.desc}
    </p>
    <ul className="space-y-3">
      {service.features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3 text-[rgba(240,244,255,0.7)] text-xs font-medium">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00F5FF]" />
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);

const ServiceSection = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-[#7B2FBE] mb-4 block"
          >
            My Expertise
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Specialized <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00F5FF] to-[#7B2FBE] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
