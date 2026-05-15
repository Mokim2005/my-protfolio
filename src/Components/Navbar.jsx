"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hiddenNav, setHiddenNav] = useState(false);

  const lastScrollY = useRef(0);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    scrollHidden: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.2, ease: "easeOut" }, // faster hide
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // ✅ INSTANT SHOW/HIDE FIX (no delay feeling)
      const goingDown = currentY > lastScrollY.current;
      const goingUp = currentY < lastScrollY.current;

      if (goingDown && currentY > 100) {
        setHiddenNav(true);
      }

      if (goingUp) {
        setHiddenNav(false); // 🔥 instantly show on scroll up
      }

      if (currentY <= 50) {
        setHiddenNav(false);
      }

      setScrolled(currentY > 20);

      // Active section tracking (unchanged logic)
      const sections = [
        "hero",
        "about",
        "services",
        "skills",
        "projects",
        "contact",
      ];

      const scrollPosition = currentY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <motion.nav
      initial="hidden"
      animate={hiddenNav ? "scrollHidden" : "visible"}
      variants={navVariants}
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        scrolled
          ? "py-4 bg-[rgba(5,10,20,0.92)] backdrop-blur-2xl border-b border-[rgba(255,255,255,0.08)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        {/* Logo */}
        <motion.div variants={itemVariants}>
          <Link
            to="/"
            className="text-2xl font-black tracking-tighter text-white"
          >
            MOKIM<span className="text-[#00F5FF]">.</span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);

              return (
                <motion.li key={link.name} variants={itemVariants}>
                  <a
                    href={link.href}
                    className={`relative text-[11px] font-bold uppercase tracking-[0.25em] py-2 transition-colors ${
                      isActive
                        ? "text-[#00F5FF]"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.name}

                    {/* 🔥 ACTIVE UNDERLINE FIX */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-[#00F5FF] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </motion.li>
              );
            })}
          </ul>

          {/* CTA */}
          {/* CTA */}
          <motion.div variants={itemVariants}>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="px-6 py-3 rounded-xl border border-[#00F5FF]/30 text-white hover:text-black hover:bg-[#00F5FF] transition-all duration-300 group relative overflow-hidden inline-flex items-center justify-center"
            >
              <span className="relative overflow-hidden">
                {/* top text */}
                <span
                  className="block transition-transform duration-500 group-hover:-translate-y-full"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.76,0,0.24,1)",
                  }}
                >
                  HIRE ME
                </span>

                {/* bottom text */}
                <span
                  className="absolute inset-0 flex items-center justify-center transition-transform duration-500 translate-y-full group-hover:translate-y-0"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.76,0,0.24,1)",
                  }}
                >
                  HIRE ME
                </span>
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Mobile */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-[#050A14] border-t border-white/10 p-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-white border-b border-white/10"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
