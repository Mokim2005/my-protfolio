import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
} from "lucide-react";

const ContactField = ({ label, type = "text", placeholder, name }) => (
  <div className="group space-y-3">
    <label className="block text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] text-[rgba(240,244,255,0.45)] group-focus-within:text-[#00F5FF] transition-colors">
      {label}
    </label>

    {type === "textarea" ? (
      <textarea
        name={name}
        required
        rows="6"
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] px-5 sm:px-6 py-4 sm:py-5 text-sm sm:text-base text-white placeholder-[rgba(240,244,255,0.25)] outline-none focus:border-[#00F5FF] focus:ring-4 focus:ring-[rgba(0,245,255,0.08)] transition-all resize-none font-medium"
      />
    ) : (
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full h-14 sm:h-16 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] px-5 sm:px-6 text-sm sm:text-base text-white placeholder-[rgba(240,244,255,0.25)] outline-none focus:border-[#00F5FF] focus:ring-4 focus:ring-[rgba(0,245,255,0.08)] transition-all font-medium"
      />
    )}
  </div>
);

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={22} />,
      label: "Email",
      value: "mamokim2005@gmail.com",
      href: "mailto:mamokim2005@gmail.com",
    },
    {
      icon: <Phone size={22} />,
      label: "WhatsApp",
      value: "+8801729434323",
      href: "tel:+8801729434323",
    },
    {
      icon: <MapPin size={22} />,
      label: "Location",
      value: "Dinajpur, Bangladesh",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/Mokim2005",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/abdul-mokim-810380352",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://x.com/AbdulMokim40428",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[rgba(0,245,255,0.04)] blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] bg-[rgba(123,47,190,0.05)] blur-[150px] rounded-full pointer-events-none" />

      {/* IMPORTANT FIX */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* GRID FIX */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full max-w-[620px]"
          >
            {/* HEADING */}
            <span className="inline-block text-[10px] sm:text-xs font-black uppercase tracking-[0.35em] text-[#00F5FF] mb-4">
              Get In Touch
            </span>

            <h2 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[0.95] text-white mb-6">
              Let's Build <br />
              <span className="gradient-text">Greatness</span>
            </h2>

            <p className="text-[rgba(240,244,255,0.55)] text-lg leading-relaxed max-w-xl font-medium mb-10">
              I'm currently available for freelance projects and full-time
              opportunities. If you have an idea you'd like to bring to life,
              let's chat.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-5 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] px-5 py-4 hover:border-[rgba(0,245,255,0.25)] transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[rgba(240,244,255,0.35)] group-hover:text-[#00F5FF] transition-all duration-300">
                    {info.icon}
                  </div>

                  <div className="min-w-0">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[rgba(240,244,255,0.25)] mb-1">
                      {info.label}
                    </div>

                    <div className="text-lg font-bold text-white break-all">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* SOCIAL */}
            <div className="flex flex-wrap gap-4 mt-10">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-14 h-14 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[rgba(240,244,255,0.45)] hover:text-[#00F5FF] hover:border-[rgba(0,245,255,0.3)] transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full"
          >
            {/* BIG FIX HERE */}
            <div className="w-full rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] backdrop-blur-3xl p-7 sm:p-10 lg:p-12">
              {/* Heading */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-[2px] bg-[#00F5FF]" />

                <h3 className="text-2xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
                  <MessageSquare className="text-[#00F5FF]" />
                  Send Message
                </h3>
              </div>

              {/* FORM */}
              <form
                action="https://formspree.io/f/xvgznoob"
                method="POST"
                className="space-y-6"
              >
                <ContactField
                  label="Full Name"
                  name="name"
                  placeholder="John Doe"
                />

                <ContactField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                />

                <ContactField
                  label="Your Message"
                  name="message"
                  type="textarea"
                  placeholder="How can I help you?"
                />

                <button
                  type="submit"
                  className="w-full h-14 rounded-2xl bg-[#00F5FF] text-black font-black text-sm tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-[1.01] transition-all duration-300 group"
                >
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                  SEND SECURELY
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
