import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router";
import img from "../assets/my-img.JPG";
import "./HeroBanner.css";

const HomeBanner = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const imageRef = useRef(null);
  const glowRef = useRef(null);
  const containerRef = useRef(null);

  const greetings = ["Hello!", "Hi There!", "Welcome!", "Hey!"];
  const roles = ["Full Stack Developer", "MERN Stack Expert", "UI/UX Enthusiast", "Problem Solver"];

  // Typewriter effect
  useEffect(() => {
    const name = "Mokim";
    let timeout;
    
    if (!isDeleting && displayedText.length < name.length) {
      timeout = setTimeout(() => {
        setDisplayedText(name.slice(0, displayedText.length + 1));
      }, 150);
    } else if (!isDeleting && displayedText.length === name.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, 100);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting]);

  // Rotate greetings
  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Rotate roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // GSAP floating animation for image
  useEffect(() => {
    const image = imageRef.current;
    const glow = glowRef.current;
    if (!image || !glow) return;

    let animationFrame;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const y = Math.sin(elapsed * 0.8) * 15;
      const rotate = Math.sin(elapsed * 0.5) * 2;
      const scale = 1 + Math.sin(elapsed * 1.2) * 0.02;

      image.style.transform = `translateY(${y}px) rotate(${rotate}deg) scale(${scale})`;
      
      // Glow animation
      const glowScale = 1 + Math.sin(elapsed * 0.6) * 0.1;
      const glowOpacity = 0.6 + Math.sin(elapsed * 0.8) * 0.2;
      glow.style.transform = `scale(${glowScale})`;
      glow.style.opacity = glowOpacity;

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x: x * 20, y: y * 20 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const socialIcons = [
    { icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", link: "https://github.com/Mokim2005" },
    { icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", link: "https://www.linkedin.com/in/abdul-mokim-810380352" },
    { icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.222 17.75h1.92L5.493 5.25H3.446l13.576 14.75z", link: "https://x.com/AbdulMokim40428" },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 md:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950" />

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      {/* Main Content - Split Layout */}
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-6">
              <div className="inline-flex items-center gap-2 glass-badge px-5 py-2.5 rounded-full">
                <motion.span
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex h-2.5 w-2.5 rounded-full bg-green-500"
                />
                <span className="text-green-400 text-xs md:text-sm font-semibold uppercase tracking-widest">
                  Available for Hire
                </span>
              </div>
            </motion.div>

            {/* Animated Greeting */}
            <motion.div variants={itemVariants} className="mb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={greetingIndex}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  <span className="text-2xl md:text-3xl font-bold text-purple-400">
                    {greetings[greetingIndex]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Main Heading with Typewriter */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 tracking-tight"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text inline-block">
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1 h-10 md:h-14 lg:h-16 bg-purple-400 ml-1 align-middle"
                />
              </span>
            </motion.h1>

            {/* Dynamic Role Changer */}
            <motion.div variants={itemVariants} className="h-14 md:h-16 mb-6 flex items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl lg:text-3xl font-bold"
                >
                  <span className="gradient-text-secondary">
                    {roles[roleIndex]}
                  </span>
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Building high-performance{" "}
              <span className="text-white font-semibold">Full Stack Applications</span>{" "}
              with the modern MERN ecosystem.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <NavLink
                  to="/my-project"
                  className="hero-button-primary px-8 py-4 rounded-xl font-bold text-white text-center block"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View Projects
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </span>
                </NavLink>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="https://docs.google.com/document/d/1PMXf1jmYjMe_i7s6sIcHoSKJ52TPp6saFqrVioPseac/edit?tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-button-secondary px-8 py-4 rounded-xl font-bold text-white text-center block"
                >
                  View Resume
                </a>
              </motion.div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-4"
            >
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="social-icon-glass p-3 rounded-xl"
                >
                  <svg className="w-6 h-6 text-gray-300 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Profile Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated Glow */}
              <div
                ref={glowRef}
                className="absolute -inset-8 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full opacity-60 blur-3xl"
                style={{ willChange: 'transform, opacity' }}
              />

              {/* Glass Container */}
              <motion.div
                className="relative profile-glass-container"
                style={{
                  x: mousePosition.x,
                  y: mousePosition.y,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
              >
                <div
                  ref={imageRef}
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden"
                  style={{ willChange: 'transform' }}
                >
                  <img
                    src={img}
                    alt="M.A. Mokim"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Shine Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
    </section>
  );
};

export default HomeBanner;
