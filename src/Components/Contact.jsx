import React from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
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
    { icon: <Github size={20} />, href: "https://github.com/Mokim2005" },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/abdul-mokim-810380352",
    },
    { icon: <Twitter size={20} />, href: "https://x.com/AbdulMokim40428" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    try {
      const response = await fetch("https://formspree.io/f/xvzleaba", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(form),
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thanks for reaching out 👍",
          confirmButtonColor: "#00F5FF",
        });

        form.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: result?.error || "Form submission failed",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Check your internet connection",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-32 section-bg"
    >
      <div className="absolute top-0 left-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[rgba(0,245,255,0.04)] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] bg-[rgba(123,47,190,0.05)] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full max-w-[620px]"
          >
            <span className="inline-block text-[10px] sm:text-xs font-black uppercase tracking-[0.35em] text-[#00F5FF] mb-4">
              Get In Touch
            </span>

            <h2 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[0.95] text-white mb-6">
              Let's Build <br />
              <span className="gradient-text">Greatness</span>
            </h2>

            <p className="text-[rgba(240,244,255,0.8)] text-lg leading-relaxed max-w-xl font-medium mb-10">
              I'm currently available for freelance projects and full-time
              opportunities. If you have an idea you'd like to bring to life,
              let's chat.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  className="group flex items-center gap-5 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] px-5 py-4 hover:border-[rgba(0,245,255,0.25)] transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[rgba(240,244,255,0.35)] group-hover:text-[#00F5FF]">
                    {info.icon}
                  </div>
                  <div>
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
            <div className="flex gap-4 mt-10">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 rounded-2xl 
                 bg-white/5 
                 border border-white/10 
                 backdrop-blur-xl
                 flex items-center justify-center
                 text-white/70
                 hover:text-[#00F5FF]
                 hover:border-[#00F5FF]/40
                 hover:bg-white/10
                 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
                 hover:shadow-[0_0_20px_rgba(0,245,255,0.15)]
                 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="w-full rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] backdrop-blur-3xl p-7 sm:p-10 lg:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-[2px] bg-[#00F5FF]" />
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
                  <MessageSquare className="text-[#00F5FF]" />
                  Send Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full h-14 sm:h-16 rounded-2xl bg-[#00F5FF] text-black font-black text-sm sm:text-base tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="relative inline-flex items-center gap-3 overflow-hidden">
                    {/* TOP TEXT (slide up on hover) */}
                    <span
                      className="inline-flex items-center gap-3 transition-transform duration-500 group-hover:-translate-y-full"
                      style={{
                        transitionTimingFunction: "cubic-bezier(0.76,0,0.24,1)",
                      }}
                    >
                      <Send size={18} />
                      SEND SECURELY
                    </span>

                    {/* BOTTOM TEXT (slide in on hover) */}
                    <span
                      className="absolute inset-0 flex items-center justify-center gap-3 translate-y-full transition-transform duration-500 group-hover:translate-y-0"
                      style={{
                        transitionTimingFunction: "cubic-bezier(0.76,0,0.24,1)",
                      }}
                    >
                      <Send size={18} />
                      SEND SECURELY
                    </span>
                  </span>
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
