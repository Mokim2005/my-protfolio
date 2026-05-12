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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = (e) => {
    e.preventDefault();
    const element = document.getElementById("top");
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
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-3 md:px-6 pt-2"
    >
      <div
        className={`premium-glass-nav max-w-7xl mx-auto rounded-2xl transition-all duration-500 ${
          scrolled ? "glass-scrolled" : ""
        }`}
      >
        {/* 🔹 NAVBAR CONTENT */}
        <div className="flex items-center justify-between px-4 md:px-6 py-2.5">

          {/* ===== LOGO ===== */}
          <div className="flex items-center gap-3">
            <a
              href="#top"
              onClick={handleScrollToTop}
              className="flex items-center gap-3"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden">
                <img
                  src={img}
                  alt="M.A. Mokim"
                  className="w-full h-full object-cover"
                />
              </div>

           <div className="hidden md:flex flex-col">
                 <span className="text-base font-bold text-green">
                   M.A. Mokim
                 </span>
                 <span className="text-[9px] tracking-widest text-gray-300">
                   Web Developer
                 </span>
               </div>
            </a>
          </div>

          {/* ===== DESKTOP MENU ===== */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <HashLink
                key={link.to}
                to={link.to}
                smooth
                onClick={() => setActiveLink(link.to)}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white transition "
              >
                {link.label}
              </HashLink>
            ))}
          </div>

          {/* ===== HIRE BUTTON (FIXED) ===== */}
          <div className="hidden sm:block">
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-4 md:px-5 py-2 text-sm font-semibold text-white rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600" />
              <span className="relative z-10">Hire Me</span>
            </a>
          </div>

          {/* ===== MOBILE MENU BUTTON ===== */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white"
          >
            ☰
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-4 pb-4 space-y-2">

                {navLinks.map((link) => (
                  <HashLink
                    key={link.to}
                    to={link.to}
                    smooth
                    onClick={() => {
                      setActiveLink(link.to);
                      setIsOpen(false);
                    }}
                    className="block px-4 py-2 text-gray-300 hover:text-white"
                  >
                    {link.label}
                  </HashLink>
                ))}

                {/* Mobile Hire Button */}
                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold"
                >
                  Hire Me
                </a>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navber;