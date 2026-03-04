import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import img from "../assets/my-img.JPG";

const AboutSection = () => {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const dot1Ref = useRef(null);
  const dot2Ref = useRef(null);
  const dot3Ref = useRef(null);
  const dot4Ref = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // GSAP ScrollTrigger for timeline line growth
  useEffect(() => {
    const line = lineRef.current;
    const timeline = timelineRef.current;
    if (!line || !timeline) return;

    const handleScroll = () => {
      const timelineRect = timeline.getBoundingClientRect();
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const windowHeight = window.innerHeight;

      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - timelineTop) / (timelineHeight + windowHeight)));
      
      line.style.height = `${scrollProgress * 100}%`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP ScrollTrigger for cards
  useEffect(() => {
    const animateCard = (card, direction, dot) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              card.style.opacity = '1';
              card.style.transform = 'translateX(0)';
              
              if (dot) {
                dot.style.transform = 'scale(1)';
                dot.style.opacity = '1';
              }
            }
          });
        },
        { threshold: 0.2 }
      );

      card.style.opacity = '0';
      card.style.transform = direction === 'left' ? 'translateX(-100px)' : 'translateX(100px)';
      card.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';

      if (dot) {
        dot.style.transform = 'scale(0)';
        dot.style.opacity = '0';
        dot.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
      }

      observer.observe(card);

      return () => observer.disconnect();
    };

    const cleanup1 = animateCard(card1Ref.current, 'left', dot1Ref.current);
    const cleanup2 = animateCard(card2Ref.current, 'right', dot2Ref.current);
    const cleanup3 = animateCard(card3Ref.current, 'left', dot3Ref.current);
    const cleanup4 = animateCard(card4Ref.current, 'right', dot4Ref.current);

    return () => {
      cleanup1?.();
      cleanup2?.();
      cleanup3?.();
      cleanup4?.();
    };
  }, []);

  // Floating image animation
  useEffect(() => {
    const image = imageRef.current;
    const glow = glowRef.current;
    if (!image || !glow) return;

    let animationFrame;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const y = Math.sin(elapsed * 0.5) * 15;
      const rotate = Math.sin(elapsed * 0.3) * 2;

      image.style.transform = `translateY(${y}px) rotate(${rotate}deg)`;
      
      const glowScale = 1 + Math.sin(elapsed * 0.4) * 0.1;
      glow.style.transform = `scale(${glowScale})`;

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  // Animated blobs
  useEffect(() => {
    const animateBlob = (element, duration, delay, xRange, yRange) => {
      if (!element) return;
      
      let startTime = Date.now() + delay;
      let animationFrame;
      
      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = (elapsed % duration) / duration;
        
        const x = Math.sin(progress * Math.PI * 2) * xRange;
        const y = Math.cos(progress * Math.PI * 2) * yRange;
        
        element.style.transform = `translate(${x}px, ${y}px)`;
        
        animationFrame = requestAnimationFrame(animate);
      };
      
      animate();

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    };

    const cleanup1 = animateBlob(blob1Ref.current, 30, 0, 60, 40);
    const cleanup2 = animateBlob(blob2Ref.current, 35, 5000, -50, 60);

    return () => {
      cleanup1?.();
      cleanup2?.();
    };
  }, []);

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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

  const skills = [
    { name: "Full Stack", color: "from-purple-500 to-pink-500" },
    { name: "RESTful APIs", color: "from-pink-500 to-rose-500" },
    { name: "UI/UX", color: "from-cyan-500 to-blue-500" },
  ];

  return (
    <section className="relative py-24 md:py-32 px-4 md:px-6 overflow-hidden ">
     
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />

      {/* Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={blob1Ref}
          className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
            willChange: "transform",
          }}
        />
        <div
          ref={blob2Ref}
          className="absolute bottom-[20%] right-[10%] w-[280px] h-[280px] rounded-full opacity-8"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)",
            filter: "blur(90px)",
            willChange: "transform",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-24 md:mb-32"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block text-sm md:text-base font-bold uppercase tracking-[0.3em] text-purple-400 mb-6"
          >
            About Me
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Building Digital Solutions
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-200 via-pink-200 to-white bg-clip-text text-transparent">
              That Make a Difference
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Transforming ideas into scalable, user-centric applications with modern technologies and clean architecture.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
          />
        </motion.div>

        {/* TIMELINE */}
        <div ref={timelineRef} className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gray-800 to-transparent hidden lg:block">
            <div
              ref={lineRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 origin-top"
              style={{
                height: '0%',
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
              }}
            />
          </div>

          {/* Mobile Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-800 to-transparent lg:hidden">
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 origin-top"
              style={{
                height: '100%',
                boxShadow: '0 0 15px rgba(168, 85, 247, 0.4)',
              }}
            />
          </div>

          <div className="space-y-24 md:space-y-32">
            {/* BLOCK 1 - LEFT - Introduction */}
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div ref={card1Ref} className="lg:pr-16 lg:text-right order-2 lg:order-1">
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl ml-16 lg:ml-0 group">
                  {/* Smooth hover effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700 ease-out" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6 justify-start lg:justify-end">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">Introduction</h3>
                      <div className="p-2.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed text-base">
                      <p>
                        Hello! I'm{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                          Abdul Mokim
                        </span>
                        , a passionate MERN Stack Developer based in Dinajpur, Bangladesh.
                      </p>
                      <p>
                        My journey into web development combines technical expertise with a unique background in Marketing from programing hero platform, giving me a holistic perspective on building products that users love.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block order-1 lg:order-2" />

              {/* Timeline Dot */}
              <div
                ref={dot1Ref}
                className="absolute left-8 lg:left-1/2 top-1/2 -translate-y-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
                style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)' }}
              />
            </div>

            {/* BLOCK 2 - RIGHT - My Journey */}
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div className="hidden lg:block" />

              <div ref={card2Ref} className="lg:pl-16 order-2">
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl ml-16 lg:ml-0 group">
                  {/* Smooth hover effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700 ease-out" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">My Journey</h3>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed text-base">
                      <p>
                        I specialize in building full-stack web applications with a focus on clean, maintainable code. From implementing secure authentication systems and payment integrations to architecting RESTful APIs, I bring ideas to life with modern technologies like React, Next.js, Node.js, and MongoDB.
                      </p>
                      <p>
                        My recent projects include:{" "}
                        <span className="text-purple-400 font-semibold">City Fix</span>{" "}
                        (a comprehensive cleaning service platform connecting users with professional cleaners),{" "}
                        <span className="text-purple-400 font-semibold">Zap Shift</span>{" "}
                        (a fast and efficient delivery management system),
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div
                ref={dot2Ref}
                className="absolute left-8 lg:left-1/2 top-1/2 -translate-y-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg"
                style={{ boxShadow: '0 0 20px rgba(236, 72, 153, 0.6)' }}
              />
            </div>

            {/* BLOCK 3 - LEFT - Profile Image */}
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div ref={card3Ref} className="lg:pr-16 flex justify-center lg:justify-end order-2 lg:order-1">
                <div className="relative ml-16 lg:ml-0 group">
                  <div
                    ref={glowRef}
                    className="absolute -inset-10 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full opacity-40 blur-3xl group-hover:opacity-60 transition-all duration-1000 ease-out"
                    style={{ willChange: 'transform' }}
                  />

                  <motion.div
                    className="relative"
                    style={{
                      x: mousePosition.x * 0.3,
                      y: mousePosition.y * 0.3,
                    }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  >
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-5 shadow-2xl">
                      <div
                        ref={imageRef}
                        className="relative w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden"
                        style={{ willChange: 'transform' }}
                      >
                        <img
                          src={img}
                          alt="Abdul Mokim"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                        />
                      </div>

                      <div className="mt-5 text-center">
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">Abdul Mokim</h3>
                        <p className="text-purple-300 font-semibold">MERN Stack Developer</p>
                        <p className="text-gray-400 text-sm mt-1">Diploma in Computer Science</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="hidden lg:block order-1 lg:order-2" />

              {/* Timeline Dot */}
              <div
                ref={dot3Ref}
                className="absolute left-8 lg:left-1/2 top-1/2 -translate-y-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg"
                style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)' }}
              />
            </div>

            {/* BLOCK 4 - RIGHT - Skills & Experience */}
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div className="hidden lg:block" />

              <div ref={card4Ref} className="lg:pl-16 order-2">
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl ml-16 lg:ml-0 group">
                  {/* Smooth hover effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700 ease-out" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">Skills & Experience</h3>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed text-base mb-6">
                      <p>
                        Each project has taught me valuable lessons about scalability, real-time features, user experience, and the importance of writing code that's both performant and maintainable.
                      </p>
                      <p>
                        When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or enhancing my skills through continuous learning. I'm fluent in Bengali, English, and Hindi, which helps me collaborate effectively with diverse teams and clients globally.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill, index) => (
                        <motion.span
                          key={index}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`relative px-5 py-2.5 bg-gradient-to-r ${skill.color} bg-opacity-10 backdrop-blur-sm rounded-full font-semibold text-white text-sm shadow-lg overflow-hidden group/btn cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-${skill.color.split(' ')[1]}/20`}
                        >
                          <span className="relative z-10">{skill.name}</span>
                          <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover/btn:opacity-30 transition-all duration-500 ease-out`} />
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div
                ref={dot4Ref}
                className="absolute left-8 lg:left-1/2 top-1/2 -translate-y-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg"
                style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.6)' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
    </section>
  );
};

export default AboutSection;