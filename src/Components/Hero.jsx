import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ChevronDown, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import profileImg from "../assets/my-img.JPG";

// Component for staggered text reveal
const SplitText = ({ text, delay = 0, className = "" }) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.2em] pb-[0.1em]">
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Full Stack Developer", "MERN Stack Expert", "UI/UX Enthusiast", "Problem Solver"];

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    const ctx = gsap.context(() => {
      const particles = 40;
      for (let i = 0; i < particles; i++) {
        const p = document.createElement('div');
        p.className = 'absolute rounded-full bg-[#00F5FF] pointer-events-none opacity-0';
        const size = Math.random() * 3 + 2;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        containerRef.current.appendChild(p);

        gsap.set(p, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        });

        gsap.to(p, {
          opacity: Math.random() * 0.2 + 0.1,
          duration: 2,
          delay: Math.random() * 2
        });

        gsap.to(p, {
          x: `+=${Math.random() * 300 - 150}`,
          y: `+=${Math.random() * 300 - 150}`,
          duration: Math.random() * 10 + 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
      clearInterval(roleInterval);
    };
  }, []);

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/Mokim2005" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/abdul-mokim-810380352" },
    { icon: <Twitter size={20} />, href: "https://x.com/AbdulMokim40428" },
  ];

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-20 md:pt-32"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(0,245,255,0.05) 0%, #050A14 100%)'
      }}
    >
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          {/* Left: Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(0,245,255,0.08)] border border-[rgba(0,245,255,0.2)] text-[#00F5FF] text-[10px] font-black uppercase tracking-[0.2em] mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F5FF]"></span>
              </span>
              Available for new projects
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black mb-8 leading-[1.05] tracking-tight text-white">
              <SplitText text="Hi, I'm" delay={0.4} /> <br />
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="gradient-text uppercase inline-block"
              >
                Abdul Mokim
              </motion.span>
            </h1>

            <div className="h-14 mb-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-2xl md:text-3xl xl:text-4xl text-[rgba(240,244,255,0.8)] font-bold flex items-center justify-center lg:justify-start gap-4"
                >
                  <span className="w-8 h-1 bg-[#7B2FBE] hidden md:block" />
                  {roles[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-[rgba(240,244,255,0.55)] text-lg md:text-xl mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Building high-performance Full Stack Applications with the modern MERN ecosystem, focusing on clean code and exceptional user experiences.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-12"
            >
              <a href="#projects" className="btn-primary min-w-[220px] group">
                VIEW PROJECTS <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="https://docs.google.com/document/d/1PMXf1jmYjMe_i7s6sIcHoSKJ52TPp6saFqrVioPseac/edit?tab=t.0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline min-w-[220px]"
              >
                VIEW RESUME
              </a>
            </motion.div>

            {/* Social Links Stagger */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.6 + i * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: "rgba(0,245,255,0.1)", borderColor: "rgba(0,245,255,0.4)", color: "#00F5FF" }}
                  className="w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[rgba(240,244,255,0.6)] transition-all"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-12 lg:mb-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px]">
              {/* Complex Animated Backgrounds */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border border-dashed border-[rgba(0,245,255,0.2)] rounded-full" 
              />
              <div className="absolute -inset-10 bg-gradient-to-tr from-[#00F5FF] via-[#7B2FBE] to-transparent opacity-10 blur-[100px] rounded-full animate-pulse" />
              
              <div className="relative w-full h-full glass-card p-4 md:p-6 rotate-3 hover:rotate-0 transition-transform duration-700">
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <motion.img 
                    initial={{ scale: 1.2, filter: "blur(10px)" }}
                    animate={{ scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    src={profileImg} 
                    alt="Abdul Mokim" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-transparent to-transparent opacity-40" />
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 glass-card px-6 py-4 border-[rgba(0,245,255,0.3)] bg-[rgba(5,10,20,0.8)]"
              >
                <div className="text-[#00F5FF] font-black text-2xl">1+</div>
                <div className="text-[rgba(240,244,255,0.5)] text-[10px] font-bold uppercase tracking-widest">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] font-black text-[rgba(240,244,255,0.3)] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#00F5FF]"
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
