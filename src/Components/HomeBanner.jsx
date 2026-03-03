import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router";

const HomeBanner = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const greetings = ["Hello!", "Hi There!", "Welcome!", "Hey!"];
  const roles = ["Full Stack Developer", "MERN Stack Expert", "UI/UX Enthusiast", "Problem Solver"];

  // Typewriter effect for name
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

  // Floating animation configuration
  const floatingAnim = (duration = 4, delay = 0) => ({
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      },
    },
  });

  // Particle animation
  const particleVariants = {
    animate: (i) => ({
      y: [0, -30, 0],
      x: [0, Math.random() * 20 - 10, 0],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.2,
      },
    }),
  };

  // Tech icons data
  const techIcons = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      pos: "top-[15%] left-[10%]",
      size: "w-16 md:w-20",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      pos: "top-[20%] right-[10%]",
      size: "w-14 md:w-16",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      pos: "bottom-[20%] left-[12%]",
      size: "w-16 md:w-20",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      pos: "bottom-[25%] right-[12%]",
      size: "w-14 md:w-18",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      pos: "top-[45%] left-[5%]",
      size: "w-16 md:w-20",
    },
  ];

  // Social media icons
  const socialIcons = [
    { icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", link: "https://github.com/Mokim2005", color: "hover:text-purple-400" },
    { icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", link: "https://www.linkedin.com/in/abdul-mokim-810380352", color: "hover:text-blue-400" },
    { icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.222 17.75h1.92L5.493 5.25H3.446l13.576 14.75z", link: "https://x.com/AbdulMokim40428", color: "hover:text-cyan-400" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(120, 40, 200, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(200, 40, 120, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(40, 120, 200, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(120, 40, 200, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Background Glow Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={particleVariants}
            animate="animate"
            className="absolute w-2 h-2 bg-purple-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Tech Icons with 3D-like Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map((icon, index) => (
          <motion.div
            key={index}
            variants={floatingAnim(4 + index, index * 0.5)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ ...floatingAnim(4 + index, index * 0.5).animate, opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}
            className={`absolute ${icon.pos} z-0 cursor-pointer`}
          >
            <motion.img
              src={icon.src}
              alt="tech"
              className={`${icon.size} drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
              whileHover={{ filter: "brightness(1.5)" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Animated Greeting */}
        <AnimatePresence mode="wait">
          <motion.div
            key={greetingIndex}
            initial={{ opacity: 0, y: -20, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: 20, rotateX: 90 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-2xl md:text-3xl font-bold text-purple-400">
              {greetings[greetingIndex]}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Status Badge with Pulse */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 px-4 py-2 rounded-full mb-8"
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex h-2 w-2 rounded-full bg-green-500"
          />
          <span className="text-green-400 text-xs font-semibold uppercase tracking-widest">
            Available for Hire
          </span>
        </motion.div>

        {/* Headline with Typewriter Effect */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-8xl font-extrabold text-white mb-6 tracking-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-1 h-16 md:h-24 bg-purple-400 ml-2"
            />
          </span>
        </motion.h1>

        {/* Dynamic Role Changer */}
        <div className="h-16 md:h-20 mb-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="text-gray-300 text-xl md:text-3xl font-bold"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {roles[roleIndex]}
              </span>
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Building high-performance{" "}
          <span className="text-white font-medium">Full Stack Applications</span>{" "}
          with the modern MERN ecosystem.
        </motion.p>

        {/* Call to Actions with Scale and Glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
            <NavLink
              to="/my-project"
              className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                animate={{ boxShadow: ["0 0 0px rgba(147,51,234,0)", "0 0 30px rgba(147,51,234,0.5)", "0 0 0px rgba(147,51,234,0)"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </NavLink>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
            <a
              href="https://docs.google.com/document/d/1PMXf1jmYjMe_i7s6sIcHoSKJ52TPp6saFqrVioPseac/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 text-white border border-white/10 font-bold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-md inline-block"
            >
              View Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Social Media Icons with Bounce */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6"
        >
          {socialIcons.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -10, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm transition-colors ${social.color}`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.icon} />
              </svg>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
};

export default HomeBanner;
