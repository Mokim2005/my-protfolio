import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  FaCode, FaLayerGroup, FaDatabase, 
  FaMobileAlt, FaRocket, FaTools 
} from "react-icons/fa";
import "./ServiceSection.css";

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
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.12, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="service-glass-card group"
      style={{
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* Gradient Glow on Hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-br ${service.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />

      <div className="relative h-full p-8 flex flex-col">
        {/* Icon with Floating Animation */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
          className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-500`}
        >
          {service.icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-500">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-base leading-relaxed mb-6 flex-grow">
          {service.desc}
        </p>

        {/* Features */}
        <ul className="space-y-3">
          {service.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 + i * 0.08 }}
              className="flex items-center gap-3 text-gray-300 text-sm"
            >
              <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Hover Indicator */}
        <motion.div
          className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ServiceSection = () => {
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);

  useEffect(() => {
    const animateBlob = (element, duration, delay, xRange, yRange) => {
      if (!element) return;
      
      let startTime = Date.now() + delay;
      
      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = (elapsed % duration) / duration;
        
        const x = Math.sin(progress * Math.PI * 2) * xRange;
        const y = Math.cos(progress * Math.PI * 2) * yRange;
        const scale = 1 + Math.sin(progress * Math.PI * 3) * 0.15;
        
        element.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
        
        requestAnimationFrame(animate);
      };
      
      animate();
    };

    animateBlob(blob1Ref.current, 25, 0, 80, 60);
    animateBlob(blob2Ref.current, 30, 5000, -70, 80);
    animateBlob(blob3Ref.current, 28, 10000, 60, -70);
  }, []);

  return (
    <section className="relative py-24 md:py-32 px-4 md:px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950" />

      {/* Floating Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={blob1Ref}
          className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 70%)",
            filter: "blur(80px)",
            willChange: "transform",
          }}
        />
        <div
          ref={blob2Ref}
          className="absolute top-[50%] right-[10%] w-[350px] h-[350px] rounded-full opacity-12"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, transparent 70%)",
            filter: "blur(90px)",
            willChange: "transform",
          }}
        />
        <div
          ref={blob3Ref}
          className="absolute bottom-[15%] left-[15%] w-[380px] h-[380px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)",
            filter: "blur(85px)",
            willChange: "transform",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-purple-400">
              What I Offer
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="gradient-heading">
              Specialized Services
            </span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full mx-auto mb-6"
          />

          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            I deliver high-quality, modern solutions tailored to bring your ideas to life with cutting-edge technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
    </section>
  );
};

export default ServiceSection;
