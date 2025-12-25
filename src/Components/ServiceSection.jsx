import React from "react";
import { motion } from "framer-motion";
import { 
  FaCode, FaLayerGroup, FaDatabase, 
  FaMobileAlt, FaRocket, FaTools 
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    desc: "Building responsive and modern websites using React, Next.js, and Tailwind CSS.",
    features: ["Responsive Design", "Fast Loading Speed", "SEO Optimized", "Cross-Browser Compatible"],
    icon: <FaCode className="text-3xl" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Mobile-First Design",
    desc: "Creating beautiful mobile-first experiences that work seamlessly across all devices.",
    features: ["Touch-Optimized UI", "Progressive Web Apps", "Smooth Animations", "Offline Support"],
    icon: <FaMobileAlt className="text-3xl" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Backend Development",
    desc: "Developing robust server-side applications with Node.js, Express, and MongoDB.",
    features: ["RESTful APIs", "Database Design", "Auth & Security", "Cloud Deployment"],
    icon: <FaDatabase className="text-3xl" />,
    color: "from-pink-500 to-red-500"
  },
  {
    title: "MERN Stack Solutions",
    desc: "End-to-end full stack development focusing on scalability and performance.",
    features: ["Full Stack Logic", "State Management", "API Integration", "Real-time Data"],
    icon: <FaLayerGroup className="text-3xl" />,
    color: "from-orange-500 to-yellow-500"
  },
  {
    title: "Performance Optimization",
    desc: "Optimizing your existing apps for maximum speed and efficient resource usage.",
    features: ["Code Splitting", "Lazy Loading", "Asset Compression", "Caching Strategy"],
    icon: <FaRocket className="text-3xl" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Maintenance & Support",
    desc: "Providing ongoing support and updates to keep your application running smoothly.",
    features: ["Bug Fixing", "Security Patches", "Server Monitoring", "Feature Updates"],
    icon: <FaTools className="text-3xl" />,
    color: "from-indigo-500 to-purple-600"
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -15, scale: 1.03 }}
      className="relative group"
    >
      {/* Glassmorphism Card with Gradient Border */}
      <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-white/10 to-transparent overflow-hidden">
        <div className="bg-gray-950/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full flex flex-col shadow-2xl transition-all duration-500 group-hover:border-white/30">
          
          {/* Floating Icon with Continuous Animation */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.8 }
            }}
            className={`w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white mb-8 shadow-2xl`}
          >
            {service.icon}
          </motion.div>

          <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
            {service.title}
          </h3>

          <p className="text-gray-400 text-base leading-relaxed mb-10 flex-grow">
            {service.desc}
          </p>

          {/* Features */}
          <ul className="space-y-4">
            {service.features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 + i * 0.1 }}
                className="flex items-center gap-4 text-gray-300"
              >
                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.color} p-[1px]`}>
                  <div className="w-full h-full bg-gray-950/70 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* Hover Glow Layer */}
          <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-gradient-to-br ${service.color} blur-3xl -z-10`}></div>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob-1"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-blob-2"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl animate-blob-3"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Specialized Services
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I deliver high-quality, modern solutions tailored to bring your ideas to life with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;