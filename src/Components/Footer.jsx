import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/Mokim2005", label: "Github", color: "hover:text-[#F0F4FF] hover:bg-[rgba(255,255,255,0.1)]" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/abdul-mokim-810380352", label: "LinkedIn", color: "hover:text-[#00F5FF] hover:bg-[rgba(0,245,255,0.1)]" },
    { icon: <Twitter size={20} />, href: "https://x.com/AbdulMokim40428", label: "Twitter", color: "hover:text-[#1DA1F2] hover:bg-[rgba(29,161,242,0.1)]" },
    { icon: <Mail size={20} />, href: "mailto:mamokim2005@gmail.com", label: "Email", color: "hover:text-[#7B2FBE] hover:bg-[rgba(123,47,190,0.1)]" }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative pt-32 pb-16 overflow-hidden border-t border-[rgba(255,255,255,0.05)]" style={{backgroundColor: '#050A14'}}>
      {/* Premium Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[rgba(0,245,255,0.03)] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[rgba(123,47,190,0.03)] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Identity */}
          <div className="lg:col-span-1">
            <motion.a 
              href="#hero" 
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-black tracking-tighter group flex items-center gap-1 mb-8"
            >
              <span className="text-white group-hover:text-[#00F5FF] transition-colors">MOKIM</span>
              <span className="text-[#00F5FF] animate-pulse">.</span>
            </motion.a>
            <p className="text-[rgba(240,244,255,0.75)] text-base leading-relaxed mb-10 max-w-xs font-medium">
              Architecting high-performance digital solutions with the modern MERN stack. Focused on scalability, clean code, and exceptional user experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -8 }}
                  className={`w-12 h-12 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[rgba(240,244,255,0.4)] transition-all duration-300 ${link.color}`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:pl-10">
            <h4 className="text-white font-bold uppercase tracking-[0.3em] text-[10px] mb-10 opacity-40">Navigation</h4>
            <ul className="space-y-5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                <a 
                    href={link.href} 
                    className="text-[rgba(240,244,255,0.75)] hover:text-[#00F5FF] text-sm font-bold transition-all flex items-center gap-4 group"
                  >
                    <div className="w-0 h-[2px] bg-[#00F5FF] group-hover:w-6 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities Section */}
          <div className="lg:pl-5">
            <h4 className="text-white font-bold uppercase tracking-[0.3em] text-[10px] mb-10 opacity-40">Core Expertise</h4>
            <ul className="space-y-5">
              {["Full Stack Systems", "MERN Ecosystem", "UI/UX Engineering", "API Architecture", "Performance Tuning"].map((item) => (
                <li key={item}               className="text-[rgba(240,244,255,0.75)] text-sm font-bold flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7B2FBE] opacity-40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Global CTA */}
          <div className="lg:pl-5">
            <h4 className="text-white font-bold uppercase tracking-[0.3em] text-[10px] mb-10 opacity-40">Collaborate</h4>
            <p className="text-[rgba(240,244,255,0.75)] text-sm mb-8 font-medium leading-relaxed">
              Available for freelance opportunities and full-time engineering roles.
            </p>
            <motion.a 
              href="mailto:mamokim2005@gmail.com" 
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-3 text-white font-black text-xs tracking-widest border-b-2 border-[#00F5FF] pb-2 hover:text-[#00F5FF] transition-all group"
            >
              HIRE ABDUL MOKIM <ArrowUp className="rotate-45 group-hover:rotate-90 transition-transform" size={16} />
            </motion.a>
          </div>
        </div>

        {/* Global Footer Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent mb-16" />

        {/* Bottom Metadata */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-[rgba(240,244,255,0.3)] text-[10px] font-black uppercase tracking-[0.4em]">
              © {currentYear} Abdul Mokim. All Rights Reserved.
            </p>
            <p className="text-[rgba(240,244,255,0.2)] text-[9px] font-bold uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
              Built with Passion <Heart size={10} className="text-[#00F5FF]" /> in Dinajpur, BD
            </p>
          </div>
          
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="group flex flex-col items-center gap-3 text-[rgba(240,244,255,0.3)] hover:text-white transition-all"
          >
            <div className="w-14 h-14 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center group-hover:border-[#00F5FF] group-hover:bg-[rgba(0,245,255,0.05)] group-hover:text-[#00F5FF] transition-all relative">
               <ArrowUp size={22} className="relative z-10" />
               <div className="absolute inset-0 rounded-full bg-[#00F5FF] opacity-0 group-hover:opacity-10 blur-md transition-opacity" />
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.4em]">To Top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
