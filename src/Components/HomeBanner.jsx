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
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const glowRef = useRef(null);
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  const greetings = ["Hello!", "Hi There!", "Welcome!", "Hey!"];
  const roles = ["Full Stack Developer", "MERN Stack Expert", "UI/UX Enthusiast", "Problem Solver"];

  // Typewriter effect
  useEffect(() => {
    const name = "Mokim";
    let timeout;
    if (!isDeleting && displayedText.length < name.length) {
      timeout = setTimeout(() => setDisplayedText(name.slice(0, displayedText.length + 1)), 150);
    } else if (!isDeleting && displayedText.length === name.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => setDisplayedText(displayedText.slice(0, -1)), 100);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
    }
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting]);

  // Rotate greetings
  useEffect(() => {
    const interval = setInterval(() => setGreetingIndex((prev) => (prev + 1) % greetings.length), 3000);
    return () => clearInterval(interval);
  }, []);

  // Rotate roles
  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((prev) => (prev + 1) % roles.length), 4000);
    return () => clearInterval(interval);
  }, []);

  // Glow pulse animation only (no image float — keeps image straight)
  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    let animationFrame;
    let startTime = Date.now();
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const glowScale = 1 + Math.sin(elapsed * 0.6) * 0.08;
      const glowOpacity = 0.55 + Math.sin(elapsed * 0.8) * 0.15;
      glow.style.transform = `scale(${glowScale})`;
      glow.style.opacity = glowOpacity;
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Card tilt on mouse move (subtle 3D tilt — not full parallax)
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;   // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 }); // max ±5deg
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.12, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.85, x: 40 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] } },
  };

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/Mokim2005",
      color: "#ffffff",
      path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abdul-mokim-810380352",
      color: "#0A66C2",
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
    {
      label: "Twitter / X",
      href: "https://x.com/AbdulMokim40428",
      color: "#1DA1F2",
      path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.222 17.75h1.92L5.493 5.25H3.446l13.576 14.75z",
    },
  ];

  return (
    <section
      ref={containerRef}
      /* pt-24 → navbar height offset; reduced from py-20 to pt-20 pb-16 */
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-4 md:px-6 lg:px-8"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950" />

      {/* Floating blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.6) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.6) 0%, transparent 70%)", filter: "blur(70px)" }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Text ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-5">
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

            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-3">
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

            {/* Heading + typewriter */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-5 tracking-tight"
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

            {/* Role changer */}
            <motion.div variants={itemVariants} className="h-12 md:h-14 mb-5 flex items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl lg:text-3xl font-bold"
                >
                  <span className="gradient-text-secondary">{roles[roleIndex]}</span>
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-7 leading-relaxed"
            >
              Building high-performance{" "}
              <span className="text-white font-semibold">Full Stack Applications</span>{" "}
              with the modern MERN ecosystem.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-7"
            >
              <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
                <NavLink
                  to="/my-project"
                  className="hero-button-primary px-8 py-4 rounded-xl font-bold text-white text-center block group"
                >
                  <span className="relative z-10 overflow-hidden">
                    <span className="flex items-center justify-center gap-2 transition-transform duration-500 group-hover:-translate-y-full" style={{ transitionTimingFunction: 'cubic-bezier(0.76,0,0.24,1)' }}>
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
                    <span className="absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-500 translate-y-full group-hover:translate-y-0" style={{ transitionTimingFunction: 'cubic-bezier(0.76,0,0.24,1)' }}>
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
                  </span>
                </NavLink>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://drive.google.com/file/d/10-Ygyjmht2I9pCCvmAqF00taZn93-9w8/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-button-secondary px-8 py-4 rounded-xl font-bold text-white text-center block group"
                >
                  <span className="relative overflow-hidden">
                    <span className="block transition-transform duration-500 group-hover:-translate-y-full" style={{ transitionTimingFunction: 'cubic-bezier(0.76,0,0.24,1)' }}>
                      View Resume
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 translate-y-full group-hover:translate-y-0" style={{ transitionTimingFunction: 'cubic-bezier(0.76,0,0.24,1)' }}>
                      View Resume
                    </span>
                  </span>
                </a>
              </motion.div>
            </motion.div>

            {/* Social Icons — with branded hover colors */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -6, scale: 1.18 }}
                  whileTap={{ scale: 0.88 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="group relative p-3 rounded-xl transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${social.color}18`;
                    e.currentTarget.style.borderColor = `${social.color}55`;
                    e.currentTarget.style.boxShadow = `0 8px 24px ${social.color}33`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <svg
                    className="w-5 h-5 transition-colors duration-300"
                    style={{ color: "rgba(209,213,219,0.8)" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    onMouseEnter={(e) => { e.currentTarget.style.color = social.color; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(209,213,219,0.8)"; }}
                  >
                    <path d={social.path} />
                  </svg>

                  {/* Tooltip */}
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-[10px] font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                    style={{ background: "rgba(0,0,0,0.7)" }}>
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Image with tilt on hover ── */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow */}
              <div
                ref={glowRef}
                className="absolute -inset-8 rounded-full blur-3xl"
                style={{
                  background: "linear-gradient(135deg, rgba(168,85,247,0.5), rgba(236,72,153,0.5), rgba(6,182,212,0.4))",
                  willChange: "transform, opacity",
                }}
              />

              {/* Card — tilt on hover */}
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{
                  rotateX: tilt.x,
                  rotateY: tilt.y,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ transformStyle: "preserve-3d", willChange: "transform" }}
                className="relative profile-glass-container cursor-pointer"
              >
                {/* Image — straight, no float */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden">
                  <img
                    src={img}
                    alt="M.A. Mokim"
                    className="w-full h-full object-cover object-top"
                    draggable={false}
                  />

                  {/* Shine sweep */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-28 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
    </section>
  );
};

export default HomeBanner;