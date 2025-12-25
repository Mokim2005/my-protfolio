import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import img from "../assets/my-img.JPG";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="navbar bg-gray-950/70 backdrop-blur-lg border-b border-gray-800 shadow-xl">
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

            {/* Mobile Dropdown Menu - Fixed positioning & z-index */}
            {isOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-900/95 backdrop-blur-md rounded-box w-52 z-[60] border border-gray-800"
                onClick={() => setIsOpen(false)} // যেকোনো আইটেমে ক্লিক করলে মেনু বন্ধ
              >
                <li>
                  <HashLink
                    to="/"
                    smooth
                    className="text-gray-200 hover:bg-purple-600/30"
                  >
                    Home
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    to="/about"
                    smooth
                    className="text-gray-200 hover:bg-purple-600/30"
                  >
                    About
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    to="/my-project"
                    smooth
                    className="text-gray-200 hover:bg-purple-600/30"
                  >
                    Projects
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    to="/skilled"
                    smooth
                    className="text-gray-200 hover:bg-purple-600/30"
                  >
                    Skills
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    to="/contact"
                    smooth
                    className="text-gray-200 hover:bg-purple-600/30"
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
            )}
          </div>

          {/* Logo Section */}
          <a
            href="#top"
            onClick={handleScroll}
            className="group flex items-center gap-4 transition-all duration-300 no-underline cursor-pointer"
          >
            <div className="relative flex items-center justify-center">
              {/* Hover Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/40 via-pink-500/30 to-indigo-600/40 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition duration-700 pointer-events-none"></div>

              {/* Border Glow */}
              <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                <div className="h-full w-full rounded-full border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-origin-border"></div>
              </div>

              {/* Image */}
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-gray-950/80 backdrop-blur-sm border-2 border-gray-700 shadow-xl transition-all duration-500 group-hover:border-purple-500/50">
                <img
                  src={img}
                  alt="M.A. Mokim"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-400/5 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-1000 pointer-events-none"></div>
              </div>
            </div>

            {/* Name + Tagline - Hidden on Mobile */}
            <div className="hidden md:flex flex-col">
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-500 group-hover:tracking-wider group-hover:drop-shadow-lg">
                M.A. Mokim
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500 group-hover:text-purple-400/80 transition-colors duration-500 mt-1">
                Web Developer
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <HashLink
                to="/"
                smooth
                className="text-gray-200 hover:text-white hover:bg-purple-600/30 rounded-lg px-4 py-2 transition-all duration-300"
              >
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/about"
                smooth
                className="text-gray-200 hover:text-white hover:bg-purple-600/30 rounded-lg px-4 py-2 transition-all duration-300"
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/my-project"
                smooth
                className="text-gray-200 hover:text-white hover:bg-purple-600/30 rounded-lg px-4 py-2 transition-all duration-300"
              >
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/skilled"
                smooth
                className="text-gray-200 hover:text-white hover:bg-purple-600/30 rounded-lg px-4 py-2 transition-all duration-300"
              >
                Skills
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/contact"
                smooth
                className="text-gray-200 hover:text-white hover:bg-purple-600/30 rounded-lg px-4 py-2 transition-all duration-300"
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>

        {/* Hire Me Button */}
        <div className="navbar-end">
          <HashLink
            to="/#contact"
            smooth
            className="btn bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg px-6"
          >
            Hire Me
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Navber;
