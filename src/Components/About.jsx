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
    <section id="about" className="overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Image & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 glass-card p-6 inline-block">
              <div className="relative w-72 h-96 md:w-80 md:h-[450px] rounded-2xl overflow-hidden">
                <img 
                  src={profileImg} 
                  alt="Abdul Mokim" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-1">Abdul Mokim</h3>
                  <p className="text-[#00F5FF] text-sm font-semibold uppercase tracking-widest">MERN Stack Developer</p>
                </div>
              </div>
            </div>

            {/* Background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#7B2FBE] opacity-20 blur-[60px] rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#00F5FF] opacity-10 blur-[80px] rounded-full" />
            
            {/* Experience Card */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -right-6 top-20 glass-card p-6 bg-[rgba(5,10,20,0.8)] border-[rgba(0,245,255,0.2)] backdrop-blur-2xl"
            >
              <div className="text-3xl font-bold gradient-text mb-1">100%</div>
              <div className="text-[rgba(240,244,255,0.6)] text-xs font-bold uppercase tracking-widest">Success Rate</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Building Digital <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-[rgba(240,244,255,0.6)] text-lg mb-12 leading-relaxed">
                Transforming ideas into scalable, user-centric applications. With a Diploma in Computer Science and rigorous training, I bring technical depth to every project.
              </p>

              <div className="space-y-8">
                {journeySteps.map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="flex gap-6 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-2xl group-hover:scale-110 group-hover:border-[rgba(0,245,255,0.3)] transition-all">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#00F5FF] transition-colors">{step.title}</h4>
                      <p className="text-[rgba(240,244,255,0.5)] text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 flex gap-4">
                 <div className="px-5 py-3 glass-card bg-[rgba(255,255,255,0.02)]">
                    <div className="text-xs text-[rgba(240,244,255,0.4)] uppercase font-bold tracking-widest mb-1">Education</div>
                    <div className="text-white font-medium">Diploma in CS</div>
                 </div>
                 <div className="px-5 py-3 glass-card bg-[rgba(255,255,255,0.02)]">
                    <div className="text-xs text-[rgba(240,244,255,0.4)] uppercase font-bold tracking-widest mb-1">Based In</div>
                    <div className="text-white font-medium">Dinajpur, BD</div>
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
