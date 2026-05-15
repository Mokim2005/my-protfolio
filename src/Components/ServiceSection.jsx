import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLayerGroup,
  FaDatabase,
  FaMobileAlt,
  FaRocket,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    desc: "Building responsive and modern websites using React, Next.js, and Tailwind CSS. We ensure every pixel is perfect and every line of code is optimized.",
    features: [
      "Responsive Design",
      "Fast Loading Speed",
      "SEO Optimized",
      "Cross-Browser Compatible",
    ],
    icon: <FaCode />,
    color: "from-[#00F5FF]/20 to-[#7B2FBE]/20",
  },
  {
    title: "Mobile-First Design",
    desc: "Creating beautiful mobile-first experiences that work seamlessly across all devices, focusing on user experience and touch interactivity.",
    features: [
      "Touch-Optimized UI",
      "Progressive Web Apps",
      "Smooth Animations",
      "Offline Support",
    ],
    icon: <FaMobileAlt />,
    color: "from-[#7B2FBE]/20 to-[#00F5FF]/20",
  },
  {
    title: "Backend Development",
    desc: "Developing robust server-side applications with Node.js, Express, and MongoDB to handle complex data and high traffic with ease.",
    features: [
      "RESTful APIs",
      "Database Design",
      "Auth & Security",
      "Cloud Deployment",
    ],
    icon: <FaDatabase />,
    color: "from-[#00F5FF]/10 to-[#7B2FBE]/10",
  },
  {
    title: "MERN Stack Solutions",
    desc: "End-to-end full stack development focusing on scalability, clean architecture, and high-performance real-time data handling.",
    features: [
      "Full Stack Logic",
      "State Management",
      "API Integration",
      "Real-time Data",
    ],
    icon: <FaLayerGroup />,
    color: "from-[#7B2FBE]/10 to-[#00F5FF]/10",
  },
  {
    title: "Performance Optimization",
    desc: "Optimizing your existing apps for maximum speed. We reduce load times and improve Lighthouse scores significantly.",
    features: [
      "Code Splitting",
      "Lazy Loading",
      "Asset Compression",
      "Caching Strategy",
    ],
    icon: <FaRocket />,
    color: "from-[#00F5FF]/15 to-[#7B2FBE]/15",
  },
  {
    title: "Maintenance & Support",
    desc: "Providing ongoing support, security patches, and periodic updates to keep your application running smoothly in the long run.",
    features: [
      "Bug Fixing",
      "Security Patches",
      "Server Monitoring",
      "Feature Updates",
    ],
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
    whileHover={{ y: -10, scale: 1.02 }}
    className="
      group relative
      p-8 md:p-10
      min-h-[380px]
      w-full
      flex flex-col items-start
      rounded-[32px]
      overflow-hidden
      border border-white/10
      hover:border-[#00F5FF]/40
      transition-all duration-500
      shadow-[0_25px_50px_-12px_rgba(0,0,0,0.65)]
    "
    style={{
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
    }}
  >
    {/* Glow Effect */}
    <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#00F5FF]/5 via-transparent to-[#7B2FBE]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    {/* Icon */}
    <div
      className={`
        relative z-10
        w-16 h-16 md:w-20 md:h-20
        rounded-2xl md:rounded-3xl
        bg-gradient-to-br ${service.color}
        border border-white/10
        flex items-center justify-center
        text-[#00F5FF]
        text-3xl md:text-4xl
        mb-6 md:mb-8
        transition-all duration-500
        flex-shrink-0
        shadow-[0_0_30px_rgba(0,245,255,0.12)]
        group-hover:rotate-6
        group-hover:scale-110
      `}
    >
      {service.icon}
    </div>

    {/* Title */}
    <h3
      className="
        relative z-10
        text-2xl md:text-3xl
        font-extrabold
        text-white
        mb-4
        tracking-tight
        leading-tight
        transition-all duration-300
        drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)]
        group-hover:text-[#D9FBFF]
      "
    >
      {service.title}
    </h3>

    {/* Description */}
    <p
      className="
        relative z-10
        text-[rgba(240,244,255,0.78)]
        group-hover:text-[rgba(255,255,255,0.95)]
        text-base
        leading-relaxed
        mb-8
        transition-colors duration-300
      "
    >
      {service.desc}
    </p>

    {/* Features */}
    <ul className="relative z-10 space-y-3 mt-auto w-full pt-6 border-t border-white/10">
      {service.features.map((feature, i) => (
        <li
          key={i}
          className="
            flex items-center gap-3
            text-[rgba(240,244,255,0.72)]
            group-hover:text-white
            text-sm md:text-base
            transition-colors duration-300
          "
        >
          <span className="w-2 h-2 rounded-full bg-[#00F5FF] shadow-[0_0_10px_#00F5FF] flex-shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);

const ServiceSection = () => {
  return (
    <section
      id="services"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "none" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#00F5FF] uppercase tracking-[0.5em] text-xs md:text-sm font-black mb-6 block"
          >
            Capabilities
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-8 leading-tight"
          >
            <span
              style={{
                background:
                  "linear-gradient(to right, #ffffff, #00F5FF, #7B2FBE, #ffffff)",
                backgroundSize: "300% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "sectionShine 6s linear infinite",
              }}
              className="drop-shadow-[0_0_25px_rgba(0,245,255,0.25)]"
            >
              Specialized Solutions
            </span>
          </motion.h2>

          {/* Underline */}
          <div className="w-24 md:w-32 h-1.5 md:h-2 bg-gradient-to-r from-[#00F5FF] to-[#7B2FBE] mx-auto rounded-full shadow-[0_0_20px_rgba(0,245,255,0.4)]" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-stretch">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes sectionShine {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 300% center;
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceSection;
