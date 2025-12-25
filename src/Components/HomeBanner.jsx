import React from "react";
import { motion } from "framer-motion";

const HomeBanner = () => {
  // ভাসমান অ্যানিমেশন কনফিগারেশন
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

  // আইকন ডেটা (এখানে পজিশনগুলো স্ক্রিনের চারপাশে ছড়িয়ে দেওয়া হয়েছে)
  const techIcons = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      pos: "top-[15%] left-[10%]",
      size: "w-16 md:w-20",
      glow: "shadow-cyan-500/50",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      pos: "top-[20%] right-[10%]",
      size: "w-14 md:w-16",
      glow: "shadow-yellow-500/50",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      pos: "bottom-[20%] left-[12%]",
      size: "w-16 md:w-20",
      glow: "shadow-green-500/50",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      pos: "bottom-[25%] right-[12%]",
      size: "w-14 md:w-18",
      glow: "shadow-emerald-500/50",
    },
    // { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", pos: "top-[45%] left-[5%]", size: "w-10 md:w-12", glow: "shadow-blue-500/50" },
    // {
    //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    //   pos: "top-[40%] right-[5%]",
    //   size: "w-12 md:w-14",
    //   glow: "shadow-sky-400/50",
    // },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
     pos: "top-[45%] left-[5%]",
      size: "w-16 md:w-20",
    },
    // {
    //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    //   pos: "top-[20%] right-[10%]",
    //   size: "w-14 md:w-16",
    // },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Glow Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Tech Icons - Updated with Original Colors & Glow */}
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map((icon, index) => (
          <motion.div
            key={index}
            variants={floatingAnim(4 + index, index * 0.5)}
            initial={{ opacity: 0 }}
            animate="animate"
            whileInView={{ opacity: 1 }}
            className={`absolute ${icon.pos} z-0`}
          >
            <img
              src={icon.src}
              alt="tech"
              className={`${icon.size} drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-110 transition-transform duration-300`}
            />
          </motion.div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 px-4 py-2 rounded-full mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-green-400 text-xs font-semibold uppercase tracking-widest">
            Available for Hire
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-8xl font-extrabold text-white mb-6 tracking-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Mokim
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Building high-performance{" "}
          <span className="text-white font-medium">
            Full Stack Applications
          </span>{" "}
          with the modern MERN ecosystem.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            View Projects
          </a>
          <a
            href="/cv.pdf"
            className="px-8 py-4 bg-white/5 text-white border border-white/10 font-bold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
    </section>
  );
};

export default HomeBanner;
