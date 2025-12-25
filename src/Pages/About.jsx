import React from "react";
import { motion } from "framer-motion";
import img from "../assets/my-img.JPG";

const AboutSection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-blob-1"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-600/30 rounded-full blur-3xl animate-blob-2"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Card - My Journey */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>

            <div className="relative bg-gray-950/70 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
              {/* Title with Icon */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white">My Journey</h3>
              </div>

              <p className="text-gray-300 leading-relaxed space-y-4 text-lg">
                <span className="block">
                  Hello! I'm{" "}
                  <span className="text-purple-400 font-semibold">
                    Abdul Mokim
                  </span>
                  , a passionate MERN Stack Developer based in Dinajpur,
                  Bangladesh.
                </span>

                <span className="block">
                  My journey into web development combines technical expertise
                  with a unique background in Marketing from programing hero platform, giving me a holistic perspective on building
                  products that users love.
                </span>

                <span className="block">
                  I specialize in building full-stack web applications with a
                  focus on clean, maintainable code. From implementing secure
                  authentication systems and payment integrations to
                  architecting RESTful APIs, I bring ideas to life with modern
                  technologies like React, Next.js, Node.js, and MongoDB.
                </span>

                <span className="block">
                  My recent projects include:{" "}
                  <span className="text-purple-400 font-medium">City Fix</span>{" "}
                  (a comprehensive cleaning service platform connecting users
                  with professional cleaners),{" "}
                  <span className="text-purple-400 font-medium">Zap Shift</span>{" "}
                  (a fast and efficient delivery management system),{" "}
                </span>

                <span className="block">
                  Each project has taught me valuable lessons about scalability,
                  real-time features, user experience, and the importance of
                  writing code that's both performant and maintainable.
                </span>

                <span className="block">
                  When I'm not coding, I'm exploring new technologies,
                  contributing to open-source projects, or enhancing my skills
                  through continuous learning. I'm fluent in Bengali, English,
                  and Hindi, which helps me collaborate effectively with diverse
                  teams and clients globally.
                </span>
              </p>
            </div>
          </motion.div>

          {/* Right Card - Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>

            <div className="relative bg-gradient-to-br from-purple-900/50 via-gray-950/80 to-cyan-900/30 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl text-center">
              {/* Profile Image */}
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-70"></div>
                <img
                  src={img} 
                  alt="Tumpa Das"
                  className="relative w-48 h-48 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                />
              </div>

              <h3 className="text-4xl font-bold text-white mb-2">Tumpa Das</h3>
              <p className="text-xl text-purple-300 mb-2">
                MERN Stack Developer
              </p>
              <p className="text-gray-400 mb-8">
                BBA (Marketing) - Southern University
              </p>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-4 justify-center">
                <span className="px-6 py-3 bg-purple-900/50 backdrop-blur-sm border border-purple-500/50 rounded-full text-purple-300 font-medium hover:bg-purple-800/50 transition-all">
                  Full Stack
                </span>
                <span className="px-6 py-3 bg-pink-900/50 backdrop-blur-sm border border-pink-500/50 rounded-full text-pink-300 font-medium hover:bg-pink-800/50 transition-all">
                  RESTful APIs
                </span>
                <span className="px-6 py-3 bg-cyan-900/50 backdrop-blur-sm border border-cyan-500/50 rounded-full text-cyan-300 font-medium hover:bg-cyan-800/50 transition-all">
                  UI/UX
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
