import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';

const ContactField = ({ label, type = "text", placeholder, name }) => (
  <div className="mb-8 last:mb-0 group">
    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[rgba(240,244,255,0.4)] mb-3 group-focus-within:text-[#00F5FF] transition-colors">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        name={name}
        required
        placeholder={placeholder}
        rows="5"
        className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-xl px-6 py-5 text-white placeholder-[rgba(240,244,255,0.2)] focus:outline-none focus:border-[#00F5FF] focus:ring-4 focus:ring-[rgba(0,245,255,0.05)] transition-all resize-none font-medium"
      />
    ) : (
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-xl px-6 py-5 text-white placeholder-[rgba(240,244,255,0.2)] focus:outline-none focus:border-[#00F5FF] focus:ring-4 focus:ring-[rgba(0,245,255,0.05)] transition-all font-medium"
      />
    )}
  </div>
);

const Contact = () => {
  const contactInfo = [
    { icon: <Mail size={22} />, label: "Email", value: "mamokim2005@gmail.com", href: "mailto:mamokim2005@gmail.com" },
    { icon: <Phone size={22} />, label: "WhatsApp", value: "+880 1313-176523", href: "tel:+8801313176523" },
    { icon: <MapPin size={22} />, label: "Location", value: "Dinajpur, Bangladesh", href: "#" }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/Mokim2005" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/abdul-mokim-810380352" },
    { icon: <Twitter size={20} />, href: "https://x.com/AbdulMokim40428" }
  ];

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[rgba(123,47,190,0.03)] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-32">
          
          {/* Left: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00F5FF] mb-6 block">
                Get In Touch
              </motion.span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-10 leading-tight">
                Let's Build <br /><span className="gradient-text">Greatness</span>
              </h2>
              <p className="text-[rgba(240,244,255,0.5)] text-lg md:text-xl mb-16 leading-relaxed max-w-xl font-medium">
                I'm currently available for freelance projects and full-time opportunities. If you have an idea you'd like to bring to life, let's chat.
              </p>

              <div className="space-y-8 mb-16">
                {contactInfo.map((info, i) => (
                  <motion.a
                    key={i}
                    href={info.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-8 group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[rgba(240,244,255,0.3)] group-hover:text-[#00F5FF] group-hover:border-[rgba(0,245,255,0.3)] group-hover:scale-110 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[rgba(240,244,255,0.2)] mb-1">{info.label}</div>
                      <div className="text-xl font-bold text-white group-hover:text-[#00F5FF] transition-colors">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -5, backgroundColor: "rgba(0,245,255,0.1)", color: "#00F5FF" }}
                    className="w-14 h-14 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[rgba(240,244,255,0.4)] transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-16 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.01)] backdrop-blur-3xl"
          >
            <div className="flex items-center gap-4 mb-12">
               <div className="w-12 h-[2px] bg-[#00F5FF]" />
               <h3 className="text-2xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
                  <MessageSquare className="text-[#00F5FF]" /> Send Message
               </h3>
            </div>

            <form action="https://formspree.io/f/xvgznoob" method="POST">
              <ContactField label="Full Name" name="name" placeholder="John Doe" />
              <ContactField label="Email Address" name="email" type="email" placeholder="john@example.com" />
              <ContactField label="Your Message" name="message" type="textarea" placeholder="How can I help you?" />
              
              <button type="submit" className="btn-primary w-full mt-10 group">
                <Send size={18} className="mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                SEND SECURELY
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
