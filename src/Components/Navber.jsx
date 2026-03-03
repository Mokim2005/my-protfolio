import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import img from "../assets/my-img.JPG";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = "top";
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/my-project", label: "Projects" },
    { to: "/skilled", label: "Skills" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        animate={{
          backgroundColor: scrolled ? "rgba(9, 9, 11, 0.95)" : "rgba(9, 9, 11, 0.7)",
          borderColor: scrolled ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)",
        }}
        transition={{ duration: 0.3 }}
        className="navbar backdrop-blur-lg border-b shadow-xl"
      >
        <div className="navbar-start">
          {/* Mobile menu toggle - DaisyUI standard dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-gray-200 hover:bg-gray-800"
              onClick={() => setIsOpen(!isOpen)} // ক্লিকেও কাজ করবে
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </div>

            {/* Mobile Dropdown Menu with Framer Motion */}
            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-900/95 backdrop-blur-md rounded-box w-52 z-[60] border border-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.to}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <HashLink
                        to={link.to}
                        smooth
                        onClick={() => setActiveLink(link.to)}
                        className="text-gray-200 hover:bg-purple-600/30 transition-colors"
                      >
                        {link.label}
                      </HashLink>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Logo Section with Enhanced Animation */}
          <motion.a
            href="#top"
            onClick={handleScroll}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 transition-all duration-300 no-underline cursor-pointer"
          >
            <div className="relative flex items-center justify-center">
              {/* Animated Hover Glow Effect */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-purple-600/40 via-pink-500/30 to-indigo-600/40 rounded-full blur-xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.7 }}
                transition={{ duration: 0.7 }}
              />

              {/* Rotating Border Glow */}
              <motion.div
                className="absolute -inset-1 rounded-full pointer-events-none"
                initial={{ opacity: 0, rotate: 0 }}
                whileHover={{ opacity: 1, rotate: 360 }}
                transition={{ duration: 1, ease: "linear" }}
              >
                <div className="h-full w-full rounded-full border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-origin-border"></div>
              </motion.div>

              {/* Image with Pulse Animation */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-gray-950/80 backdrop-blur-sm border-2 border-gray-700 shadow-xl transition-all duration-500 group-hover:border-purple-500/50"
              >
                <img
                  src={img}
                  alt="M.A. Mokim"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-400/5 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-1000 pointer-events-none"></div>
              </motion.div>
            </div>

            {/* Name + Tagline with Stagger Animation */}
            <div className="hidden md:flex flex-col">
              <motion.span
                whileHover={{ letterSpacing: "0.1em" }}
                transition={{ duration: 0.3 }}
                className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                M.A. Mokim
              </motion.span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500 group-hover:text-purple-400/80 transition-colors duration-500 mt-1">
                Web Developer
              </span>
            </div>
          </motion.a>
        </div>

        {/* Desktop Menu with Active Link Indicator */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <HashLink
                  to={link.to}
                  smooth
                  onClick={() => setActiveLink(link.to)}
                  className="relative text-gray-200 hover:text-white rounded-lg px-4 py-2 transition-all duration-300 group"
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    {link.label}
                  </motion.span>
                  
                  {/* Hover Background */}
                  <motion.div
                    className="absolute inset-0 bg-purple-600/30 rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Active Underline */}
                  {activeLink === link.to && (
                    <motion.div
                      layoutId="activeLink"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Hire Me Button with Pulse Animation */}
        <div className="navbar-end">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            {/* Pulse Ring */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-md"
            />
            
            <HashLink
              to="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
              smooth
              className="relative btn bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg px-6"
            >
              <motion.span
                animate={{ x: [0, 2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Hire Me
              </motion.span>
            </HashLink>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navber;
