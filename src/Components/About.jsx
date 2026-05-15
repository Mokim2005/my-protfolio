import React from 'react';
import { motion } from 'framer-motion';
import profileImg from "../assets/my-img.JPG";

const About = () => {
  const journeySteps = [
    {
      title: "Introduction",
      description: "Hello! I'm Abdul Mokim, a passionate MERN Stack Developer based in Dinajpur, Bangladesh. I specialize in building full-stack applications with a focus on clean, maintainable code.",
      icon: "👋"
    },
    {
      title: "My Background",
      description: "My journey into web development combines technical expertise with a unique background in Marketing from Programming Hero platform, giving me a holistic perspective on building user-centric products.",
      icon: "🎯"
    },
    {
      title: "Current Focus",
      description: "Currently specializing in secure authentication systems, payment integrations, and architecting RESTful APIs with modern technologies like React, Next.js, and Node.js.",
      icon: "⚡"
    }
  ];

  return (
    <section id="about" className="overflow-hidden py-24 md:py-32 relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-32 items-center">
          {/* Left: Image & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative z-10 glass-card p-4 md:p-6 inline-block rotate-2 hover:rotate-0 transition-transform duration-700">
              <div className="relative w-64 h-80 sm:w-80 sm:h-[450px] rounded-2xl overflow-hidden">
                <img 
                  src={profileImg} 
                  alt="Abdul Mokim" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Abdul Mokim</h3>
                  <p className="text-[#00F5FF] text-[10px] font-black uppercase tracking-[0.2em]">MERN Stack Developer</p>
                </div>
              </div>
            </div>

            {/* Background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#7B2FBE] opacity-15 blur-[80px] rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#00F5FF] opacity-10 blur-[100px] rounded-full" />
            
            {/* Experience Card */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute right-0 top-16 md:-right-8 md:top-24 glass-card p-6 md:p-8 bg-[rgba(5,10,20,0.8)] border-[rgba(0,245,255,0.2)] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20"
            >
              <div className="text-3xl md:text-4xl font-black gradient-text mb-2 tracking-tighter">100%</div>
              <div className="text-[rgba(240,244,255,0.4)] text-[9px] md:text-[10px] font-black uppercase tracking-widest leading-none">Project<br />Success</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div className="text-center lg:text-left mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.span
                className="text-[10px] font-black uppercase tracking-[0.4em] text-[#7B2FBE] mb-6 block"
              >
                In Depth
              </motion.span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-10 leading-tight">
                Building Digital <br /><span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-[rgba(240,244,255,0.6)] text-lg md:text-xl mb-16 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                Transforming ideas into scalable, user-centric applications. With a Diploma in Computer Science and rigorous training, I bring technical depth to every project.
              </p>

              <div className="space-y-10">
                {journeySteps.map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-6 group items-center sm:items-start"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-3xl group-hover:scale-110 group-hover:border-[rgba(0,245,255,0.3)] transition-all">
                      {step.icon}
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#00F5FF] transition-colors uppercase tracking-tight">{step.title}</h4>
                      <p className="text-[rgba(240,244,255,0.5)] text-sm leading-relaxed max-w-md">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 flex flex-wrap justify-center lg:justify-start gap-4">
                 <div className="px-6 py-4 glass-card bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.05)]">
                    <div className="text-[10px] text-[rgba(240,244,255,0.3)] uppercase font-black tracking-widest mb-2">Education</div>
                    <div className="text-white font-bold text-sm">Diploma in CS</div>
                 </div>
                 <div className="px-6 py-4 glass-card bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.05)]">
                    <div className="text-[10px] text-[rgba(240,244,255,0.3)] uppercase font-black tracking-widest mb-2">Based In</div>
                    <div className="text-white font-bold text-sm">Dinajpur, BD</div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
