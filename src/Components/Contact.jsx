import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Send } from 'lucide-react';

const ButtonText = ({ text, trigger }) => (
  <span className="flex">
    {text.split("").map((char, i) => (
      <motion.span
        key={`${trigger}-${i}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.03, duration: 0.3 }}
        style={{ display: "inline-block" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

const ContactField = ({ label, name, type = "text", placeholder, required = true }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mb-8">
      <motion.label
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isFocused ? 1 : 0, y: isFocused ? -22 : 10 }}
        className="absolute left-4 text-[10px] font-black text-[#00F5FF] uppercase tracking-[0.2em] pointer-events-none"
      >
        {label}
      </motion.label>
      {type === "textarea" ? (
        <textarea
          name={name}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => setIsFocused(e.target.value !== "")}
          placeholder={isFocused ? "" : placeholder}
          rows="4"
          className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 text-[#F0F4FF] text-sm outline-none focus:border-[#00F5FF] focus:ring-4 focus:ring-[rgba(0,245,255,0.1)] transition-all duration-300 resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => setIsFocused(e.target.value !== "")}
          placeholder={isFocused ? "" : placeholder}
          className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 text-[#F0F4FF] text-sm outline-none focus:border-[#00F5FF] focus:ring-4 focus:ring-[rgba(0,245,255,0.1)] transition-all duration-300"
        />
      )}
    </div>
  );
};

const Contact = () => {
  const [btnHover, setBtnHover] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mojaoopp", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        formRef.current?.reset();
        alert("Message sent successfully!");
      }
    } catch (err) {
      alert("Failed to send message.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[rgba(255,255,255,0.01)]">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[rgba(123,47,190,0.05)] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[rgba(0,245,255,0.03)] blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                Let's Build <br />
                <span className="gradient-text">Something Great</span>
              </h2>
              <p className="text-[rgba(240,244,255,0.6)] text-lg mb-12 max-w-md leading-relaxed">
                Have a vision? Let’s turn it into reality. Reach out via the form or my social channels. I'm always open to new opportunities.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#00F5FF] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] group-hover:border-[rgba(0,245,255,0.3)] transition-all">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[rgba(240,244,255,0.4)] uppercase font-black tracking-[0.2em] mb-1">Email</div>
                    <div className="text-[#F0F4FF] font-medium">mamokim2005@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#00F5FF] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] group-hover:border-[rgba(0,245,255,0.3)] transition-all">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[rgba(240,244,255,0.4)] uppercase font-black tracking-[0.2em] mb-1">Phone</div>
                    <div className="text-[#F0F4FF] font-medium">+880 1729434323</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {[
                  { icon: <Twitter size={20} />, href: "https://x.com/AbdulMokim40428" },
                  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/abdul-mokim-810380352" },
                  { icon: <Github size={20} />, href: "https://github.com/Mokim2005" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -8, scale: 1.15, color: "#00F5FF" }}
                    className="w-14 h-14 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[rgba(240,244,255,0.6)] transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-12"
          >
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ContactField label="Name" name="name" placeholder="Your Name" />
                <ContactField label="Email" name="email" type="email" placeholder="Your Email" />
              </div>
              <ContactField label="Subject" name="subject" placeholder="What are you looking for?" />
              <ContactField label="Message" name="message" type="textarea" placeholder="Tell me about your project..." />
              
              <button 
                onMouseEnter={() => setBtnHover(prev => prev + 1)}
                disabled={submitting}
                className="btn-primary w-full py-5 mt-4 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                <ButtonText text={submitting ? "SENDING..." : "SEND MESSAGE"} trigger={btnHover} />
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
