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

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, y: -20, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    opened: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['hero', 'about', 'services', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;
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

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ease-in-out ${
        scrolled
          ? 'py-4 bg-[rgba(5,10,20,0.92)] backdrop-blur-2xl border-b border-[rgba(255,255,255,0.08)] shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">

        {/* ── Logo ── */}
        <motion.div variants={itemVariants}>
          <Link to="/" className="text-2xl font-black tracking-tighter group flex items-center gap-1">
            <span className="text-white group-hover:text-[#00F5FF] transition-colors duration-300">MOKIM</span>
            <span className="text-[#00F5FF] animate-pulse">.</span>
          </Link>
        </motion.div>

        {/* ── Desktop Nav ── */}
        <div className="hidden lg:flex items-center gap-10 xl:gap-14">
          <ul className="flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <motion.li key={link.name} variants={itemVariants}>
                <a
                  href={link.href}
                  className={`group relative text-[11px] font-bold uppercase tracking-[0.25em] py-2 transition-colors duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-[#00F5FF]'
                      : 'text-[rgba(240,244,255,0.65)] hover:text-white'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#00F5FF] transition-all duration-300 ease-out ${
                      activeSection === link.href.slice(1)
                        ? 'w-full shadow-[0_0_8px_#00F5FF]'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* HIRE ME button — fixed hover */}
          <motion.div variants={itemVariants}>
            <a
              href="#contact"
              className="hire-btn relative px-7 py-3 rounded-xl border border-[rgba(0,245,255,0.3)] text-[11px] font-black tracking-[0.15em] overflow-hidden transition-all duration-300 hover:border-[#00F5FF] hover:shadow-[0_0_24px_rgba(0,245,255,0.25)] flex items-center gap-2"
              style={{ color: '#ffffff', background: 'rgba(0,245,255,0.05)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#050A14';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              {/* Fill layer */}
              <span
                className="absolute inset-0 bg-[#00F5FF] transition-transform duration-300 ease-out"
                style={{ transform: 'translateY(100%)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(0%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(100%)';
                }}
              />
              {/* We handle the fill via the parent's group instead */}
              <span className="relative z-10 flex items-center gap-2 pointer-events-none">
                HIRE ME <ArrowRight size={14} />
              </span>
            </a>
          </motion.div>
        </div>

        {/* ── Mobile Toggle ── */}
        <motion.button
          variants={itemVariants}
          className="lg:hidden relative w-11 h-11 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white transition-all active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[rgba(5,10,20,0.7)] backdrop-blur-sm lg:hidden z-[-1]"
            />

            {/* Panel */}
            <motion.div
              initial="closed"
              animate="opened"
              exit="closed"
              variants={mobileMenuVariants}
              className="absolute top-full left-0 w-full bg-[#050A14] border-b border-[rgba(255,255,255,0.08)] shadow-2xl lg:hidden"
            >
              <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    variants={{
                      closed: { x: -20, opacity: 0 },
                      opened: { x: 0, opacity: 1 },
                    }}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between group py-1 border-b border-[rgba(255,255,255,0.05)]"
                  >
                    <span
                      className={`text-2xl font-black tracking-tight transition-colors duration-300 ${
                        activeSection === link.href.slice(1)
                          ? 'text-[#00F5FF]'
                          : 'text-white group-hover:text-[#00F5FF]'
                      }`}
                    >
                      {link.name}
                    </span>
                    <ArrowRight
                      size={20}
                      className={`transition-all duration-300 ${
                        activeSection === link.href.slice(1)
                          ? 'text-[#00F5FF] opacity-100'
                          : 'text-[rgba(255,255,255,0.3)] -translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-[#00F5FF]'
                      }`}
                    />
                  </motion.a>
                ))}

                <motion.a
                  variants={{ closed: { y: 20, opacity: 0 }, opened: { y: 0, opacity: 1 } }}
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 w-full py-4 rounded-2xl bg-[#00F5FF] text-[#050A14] font-black text-center tracking-widest uppercase shadow-[0_8px_30px_rgba(0,245,255,0.25)] transition-transform active:scale-95 text-sm"
                >
                  START A PROJECT
                </motion.a>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00F5FF] to-transparent opacity-20" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Global style for hire-btn hover fill — avoids dangerouslySetInnerHTML */}
      <style>{`
        .hire-btn:hover > span:first-child {
          transform: translateY(0%) !important;
        }
        .hire-btn:hover {
          color: #050A14 !important;
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;