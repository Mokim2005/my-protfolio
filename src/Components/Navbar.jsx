import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Animation Variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0, 
      y: -20,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    },
    opened: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Optimized Active section detection
      const sections = ['hero', 'about', 'services', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120; // Offset for navbar height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'py-4 bg-[#050A14D9] backdrop-blur-2xl border-b border-[rgba(255,255,255,0.08)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="container flex justify-between items-center px-6 md:px-10">
        {/* Logo */}
        <motion.div variants={itemVariants}>
          <Link to="/" className="text-2xl font-black tracking-tighter group flex items-center gap-1">
            <span className="text-white group-hover:text-[#00F5FF] transition-colors duration-300">MOKIM</span>
            <span className="text-[#00F5FF] animate-pulse">.</span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          <ul className="flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <motion.li key={link.name} variants={itemVariants}>
                <a 
                  href={link.href}
                  className={`group relative text-[11px] font-bold uppercase tracking-[0.25em] py-2 transition-colors duration-300 ${
                    activeSection === link.href.slice(1) ? 'text-[#00F5FF]' : 'text-[rgba(240,244,255,0.5)] hover:text-white'
                  }`}
                >
                  {link.name}
                  {/* Underline Animation */}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-[#00F5FF] transition-all duration-300 ease-out ${
                    activeSection === link.href.slice(1) ? 'w-full shadow-[0_0_8px_#00F5FF]' : 'w-0 group-hover:w-full'
                  }`} />
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.div variants={itemVariants}>
            <a 
              href="#contact"
              className="group relative px-7 py-3 rounded-xl bg-[rgba(0,245,255,0.05)] border border-[rgba(0,245,255,0.2)] text-white text-[11px] font-black tracking-[0.15em] overflow-hidden transition-all duration-300 hover:border-[#00F5FF] hover:shadow-[0_0_20px_rgba(0,245,255,0.2)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                HIRE ME <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-[#00F5FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <style dangerouslySetInnerHTML={{ __html: '.group:hover span { color: #050A14; }' }} />
            </a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <motion.button 
          variants={itemVariants}
          className="lg:hidden relative w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-white transition-all active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#050A14B3] backdrop-blur-sm lg:hidden z-[-1]"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial="closed"
              animate="opened"
              exit="closed"
              variants={mobileMenuVariants}
              className="absolute top-full left-0 w-full bg-[#050A14] border-b border-[rgba(255,255,255,0.08)] shadow-2xl lg:hidden overflow-hidden"
            >
              <div className="container px-8 py-12 flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href}
                    variants={{
                      closed: { x: -20, opacity: 0 },
                      opened: { x: 0, opacity: 1 }
                    }}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between group"
                  >
                    <span className={`text-3xl font-black tracking-tight transition-colors duration-300 ${
                      activeSection === link.href.slice(1) ? 'text-[#00F5FF]' : 'text-white group-hover:text-[#00F5FF]'
                    }`}>
                      {link.name}
                    </span>
                    <ArrowRight size={24} className={`transition-all duration-300 ${
                      activeSection === link.href.slice(1) ? 'text-[#00F5FF] translate-x-0 opacity-100' : 'text-white -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                    }`} />
                  </motion.a>
                ))}
                
                <motion.a
                  variants={{
                    closed: { y: 20, opacity: 0 },
                    opened: { y: 0, opacity: 1 }
                  }}
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 w-full py-5 rounded-2xl bg-[#00F5FF] text-[#050A14] font-black text-center tracking-widest uppercase shadow-[0_10px_30px_rgba(0,245,255,0.3)] transition-transform active:scale-95"
                >
                  START A PROJECT
                </motion.a>
              </div>
              
              {/* Bottom Decoration */}
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#00F5FF] to-transparent opacity-20" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
