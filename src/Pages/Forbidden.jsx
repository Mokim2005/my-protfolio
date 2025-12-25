import React from "react";
import { motion } from "framer-motion";

/**
 * Professional 403 Forbidden Page
 * Purple/Indigo theme to match your portfolio
 */

const Forbidden = () => {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center px-6 overflow-hidden relative font-sans">
      {/* Decorative Purple/Indigo Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-[150px] animate-pulse delay-1000"></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 text-center max-w-2xl">
        {/* Animated Lock Icon with Purple Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500 rounded-full blur-2xl opacity-30 animate-ping"></div>
            <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-900/90 border border-purple-500/40 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-sm">
              <svg
                className="w-12 h-12 md:w-16 md:h-16 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M12 15v2m0 0v2m0-2h2m-2 0H10m11-3.5a9 9 0 11-18 0 9 9 0 0118 0zM15 9l-6 6m0-6l6 6"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Main Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-4 opacity-20">
            403
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Access <span className="text-purple-400">Forbidden</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 leading-relaxed max-w-md mx-auto">
            Oops! You don't have permission to access this page. Please contact
            the administrator or return to the homepage.
          </p>
        </motion.div>

        {/* Action Buttons - Purple Theme */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={handleGoHome}
            className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all active:scale-95 flex items-center gap-2 group shadow-xl shadow-purple-600/20"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </button>

          <button className="px-8 py-3.5 bg-slate-900/70 text-slate-300 font-semibold border border-slate-700 rounded-xl hover:bg-slate-800 hover:text-white hover:border-purple-500/50 transition-all backdrop-blur-sm">
            Report Issue
          </button>
        </motion.div>

        {/* Footer Security Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-slate-600 text-sm font-medium tracking-widest uppercase"
        >
          Security Protocol Active • Session ID:{" "}
          {Math.random().toString(36).substr(2, 9).toUpperCase()}
        </motion.p>
      </div>
    </div>
  );
};

export default Forbidden;
