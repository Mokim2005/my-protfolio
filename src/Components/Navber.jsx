import React, { useState } from "react";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Glassmorphism Navbar with subtle blur */}
      <div className="navbar bg-gray-950/70 backdrop-blur-lg border-b border-gray-800 shadow-xl">
        <div className="navbar-start">
          {/* Mobile menu toggle */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-gray-200 hover:bg-gray-800"
              onClick={() => setIsOpen(!isOpen)}
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

            {/* Mobile Dropdown */}
            {isOpen && (
              <ul className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-gray-900/95 backdrop-blur-md shadow-2xl border border-gray-800">
                <li>
                  <a className="text-gray-200 hover:bg-purple-600/30">Home</a>
                </li>
                <li>
                  <a className="text-gray-200 hover:bg-purple-600/30">About</a>
                </li>
                <li>
                  <a className="text-gray-200 hover:bg-purple-600/30">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-gray-200 hover:bg-purple-600/30">Skills</a>
                </li>
                <li>
                  <a className="text-gray-200 hover:bg-purple-600/30">
                    Contact
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Logo / Name - Professional style */}
          <a
            href="/"
            className="btn btn-ghost text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            M.A. Mokim
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <a className="text-gray-200 hover:text-white hover:bg-purple-600/30 rounded-lg px-4 py-2 transition-all duration-300">
                Home
              </a>
            </li>
            <li>
              <a className="text-gray-200 hover:text-white hover:bg-purple-600/30 rounded-lg px-4 py-2 transition-all duration-300">
                About
              </a>
            </li>
            <li>
              <a className="text-gray-200 hover:text-white hover:bg-purple-600/30 rounded-lg px-4 py-2 transition-all duration-300">
                Projects
              </a>
            </li>
            <li>
              <a className="text-gray-200 hover:text-white hover:bg-purple-600/30 rounded-lg px-4 py-2 transition-all duration-300">
                Skills
              </a>
            </li>
            <li>
              <a className="text-gray-200 hover:text-white hover:bg-purple-600/30 rounded-lg px-4 py-2 transition-all duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* CTA Button - Right side */}
        <div className="navbar-end">
          <a
            href="#contact"
            className="btn bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg px-6"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
