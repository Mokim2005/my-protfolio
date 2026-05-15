import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import zapImage from "../assets/zap-shift.png";
import cityImage from "../assets/city-fix.png";
// import logo from "../assets/clean-city.png";
import movieImage from "../assets/moviematrix.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "movie-matrix",
    title: "MovieMatrix",
    description:
      "A modern animated movie discovery frontend built with smooth transitions, cinematic hero sections, and interactive UI elements for an immersive browsing experience.",
    tech: ["React.js", "Framer Motion", "GSAP", "Tailwind CSS"],
    image: movieImage, // 👉 make sure this is imported
    accent: "from-purple-500 to-pink-600",
    category: "React",
  },

  {
    id: "amar-city-fix",
    title: "City Fix",
    description:
      "Public infrastructure issue reporting platform for reporting potholes, broken streetlights, and garbage overflow.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    image: cityImage,
    accent: "from-blue-600 to-indigo-600",
    category: "Full Stack",
  },
  {
    id: "r-zap",
    title: "Zap Shift",
    description:
      "A complete Parcel Management System for nationwide delivery tracking and management across Bangladesh.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    image: zapImage,
    accent: "from-purple-600 to-pink-600",
    category: "Full Stack",
  },
];

const ThreeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrame;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(168, 85, 247, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      particles.forEach((particleA, indexA) => {
        particles.slice(indexA + 1).forEach((particleB) => {
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.stroke();
          }
        });
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 1 }}
    />
  );
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Glow Effect - Only visible on hover */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${project.accent} rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 ease-in-out`}
      />

      {/* Card Container - Transparent by default, glass on hover */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative rounded-3xl overflow-hidden transition-all duration-500 ease-in-out bg-transparent hover:bg-white/5 hover:backdrop-blur-xl hover:shadow-2xl"
      >
        {/* Image Section */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${project.accent} opacity-10 group-hover:opacity-30 transition-opacity duration-500 ease-in-out`}
          />

          {/* Icon Badge */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <div
              className={`p-2.5 rounded-xl bg-gradient-to-br ${project.accent} text-white shadow-lg backdrop-blur-sm`}
            >
              <ExternalLink size={18} />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300 ease-in-out">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300 ease-in-out">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="px-3 py-1.5 bg-transparent text-gray-400 text-xs font-semibold rounded-lg border border-white/10 group-hover:bg-white/5 group-hover:text-gray-300 group-hover:border-white/20 transition-all duration-300 ease-in-out"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Button */}
          <Link to={`/details-page/${project.id}`}>
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r ${project.accent} text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out text-sm group relative overflow-hidden`}
            >
              <span className="relative overflow-hidden inline-flex items-center gap-3">
                <span className="inline-flex items-center gap-3 transition-transform duration-500 group-hover:-translate-y-full" style={{ transitionTimingFunction: 'cubic-bezier(0.76,0,0.24,1)' }}>
                  Explore Project
                  <motion.div
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </span>
                <span className="absolute inset-0 flex items-center justify-center gap-3 transition-transform duration-500 translate-y-full group-hover:translate-y-0" style={{ transitionTimingFunction: 'cubic-bezier(0.76,0,0.24,1)' }}>
                  Explore Project
                  <motion.div
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </span>
              </span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SectionDivider = ({ index }) => {
  const lineRef = useRef(null);

  useEffect(() => {
    if (!lineRef.current) return;

    gsap.fromTo(
      lineRef.current,
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );
  }, []);

  return (
    <div className="flex items-center justify-center my-16">
      <div
        ref={lineRef}
        className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-purple-500 to-transparent origin-center"
      />
    </div>
  );
};

const MyProjects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const headerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const filters = ["All", "Full Stack", "React"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const sections = [
      section1Ref.current,
      section2Ref.current,
      section3Ref.current,
    ];

    sections.forEach((section, index) => {
      if (!section) return;

      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 3D Background */}
      <ThreeBackground />

      {/* Static Background */}
      <div
        className="fixed inset-0 bg-gradient-to-b from-gray-950 via-purple-950/5 to-gray-950"
        style={{ zIndex: 0 }}
      />

      {/* Content */}
      <div className="relative py-24 px-4 md:px-6" style={{ zIndex: 10 }}>
        <div className="max-w-6xl mx-auto space-y-16">
          {/* SECTION 1: Header */}
          <motion.section
            ref={headerRef}
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-4xl p-10 md:p-16 shadow-2xl">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 rounded-4xl opacity-0 hover:opacity-100 blur-xl transition-all duration-500" />

              <div className="relative text-center">
                <motion.span
                  variants={itemVariants}
                  className="inline-block text-sm font-bold uppercase tracking-[0.3em] text-purple-400 mb-4"
                >
                  Portfolio
                </motion.span>

                <motion.h1
                  variants={itemVariants}
                  className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
                >
                  <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                    Featured Projects
                  </span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
                >
                  A collection of full-stack applications built with passion and
                  precision, showcasing modern web technologies and best
                  practices.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
                />
              </div>
            </div>
          </motion.section>

          <SectionDivider index={0} />

          {/* SECTION 2: Filters */}
          <section ref={section1Ref} className="relative">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-4xl p-8 md:p-10 shadow-2xl">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-4xl opacity-0 hover:opacity-100 blur-xl transition-all duration-500" />

              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                  Filter Projects
                </h2>

                <div className="flex flex-wrap justify-center gap-3">
                  {filters.map((filter) => (
                    <motion.button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                        activeFilter === filter
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {activeFilter === filter && (
                        <motion.div
                          layoutId="activeFilter"
                          className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}

                      {activeFilter !== filter && (
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10" />
                      )}

                      <span className="relative z-10">{filter}</span>
                    </motion.button>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <span className="text-gray-400 text-sm">
                    Showing{" "}
                    <span className="text-emerald-400 font-bold">
                      {filteredProjects.length}
                    </span>{" "}
                    projects
                  </span>
                </div>
              </div>
            </div>
          </section>

          <SectionDivider index={1} />

          {/* SECTION 3: Projects Grid */}
          <section ref={section2Ref} className="relative">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-4xl p-8 md:p-12 shadow-2xl">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-4xl opacity-0 hover:opacity-100 blur-xl transition-all duration-500" />

              <div className="relative">
                <AnimatePresence mode="wait">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                      />
                    ))}
                  </div>
                </AnimatePresence>
              </div>
            </div>
          </section>

          <SectionDivider index={2} />

          {/* SECTION 4: Stats */}
          <section ref={section3Ref} className="relative">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-4xl p-10 md:p-12 shadow-2xl">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-4xl opacity-0 hover:opacity-100 blur-xl transition-all duration-500" />

              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                  Project Statistics
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-center"
                  >
                    <div className="text-5xl font-black text-emerald-400 mb-2">
                      {projects.length}
                    </div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">
                      Total Projects
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                  >
                    <div className="text-5xl font-black text-purple-400 mb-2">
                      100%
                    </div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">
                      Success Rate
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                  >
                    <div className="text-5xl font-black text-cyan-400 mb-2">
                      15+
                    </div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">
                      Technologies
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div
        className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none"
        style={{ zIndex: 5 }}
      />
    </div>
  );
};

export default MyProjects;
