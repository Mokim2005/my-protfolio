import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const ContactSection = () => {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrors([]);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/xdabrywd", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        if (formRef.current) formRef.current.reset();

        if (window.Swal) {
          window.Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "I'll get back to you shortly.",
            background: "#0f172a",
            color: "#f8fafc",
            confirmButtonColor: "#6366f1",
            customClass: {
              popup: "rounded-[28px]",
            },
          });
        }
      } else {
        const result = await response.json();

        setErrors(
          result.errors
            ? result.errors.map((err) => err.message)
            : ["Submission failed"]
        );
      }
    } catch (err) {
      setErrors(["Network error. Please try again."]);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-indigo-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-fuchsia-600/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs tracking-[0.2em] uppercase font-semibold mb-5">
            Contact Me
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Let’s Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Amazing
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-slate-400 text-base sm:text-lg leading-relaxed">
            Have a project idea, collaboration opportunity, or just want to say
            hello? Feel free to reach out anytime.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="h-full rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-10 relative overflow-hidden">
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                  Ready to start your next project?
                </h3>

                <p className="text-slate-400 leading-relaxed mb-10">
                  I’m always interested in exciting ideas, freelance
                  opportunities, and creative collaborations.
                </p>

                {/* Contact Info */}
                <div className="space-y-5">
                  {/* Email */}
                  <div className="group flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-all">
                      <HiOutlineMail className="text-indigo-400 text-2xl" />
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                        Email
                      </p>

                      <p className="text-slate-200 text-sm sm:text-base break-all">
                        mamokim2005@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="group flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-all">
                      <HiOutlinePhone className="text-emerald-400 text-2xl" />
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                        Phone
                      </p>

                      <p className="text-slate-200 text-sm sm:text-base">
                        +880 1729434323
                      </p>
                    </div>
                  </div>
                </div>

                {/* Socials */}
                <div className="mt-10">
                  <p className="text-slate-500 text-xs uppercase tracking-[0.2em] font-semibold mb-4">
                    Follow Me
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://x.com/AbdulMokim40428"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 hover:bg-indigo-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
                    >
                      <FaXTwitter />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/abdul-mokim-810380352"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 hover:bg-indigo-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
                    >
                      <FaLinkedinIn />
                    </a>

                    <a
                      href="https://github.com/Mokim2005"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 hover:bg-indigo-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative h-full rounded-[32px] border border-white/10 bg-slate-900/70 backdrop-blur-2xl p-6 sm:p-8 md:p-10 overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.15)]">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-fuchsia-500/5 pointer-events-none" />

              {/* Floating Badge */}
              <div className="hidden md:flex absolute top-6 right-6 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-widest uppercase items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                Available
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="relative z-10 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-slate-400 text-xs uppercase tracking-[0.2em] font-semibold">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full h-14 rounded-2xl border border-slate-800 bg-slate-950/50 px-5 text-slate-200 placeholder:text-slate-500 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-slate-400 text-xs uppercase tracking-[0.2em] font-semibold">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@email.com"
                      className="w-full h-14 rounded-2xl border border-slate-800 bg-slate-950/50 px-5 text-slate-200 placeholder:text-slate-500 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-slate-400 text-xs uppercase tracking-[0.2em] font-semibold">
                    Your Message
                  </label>

                  <textarea
                    name="message"
                    required
                    rows="7"
                    placeholder="Tell me about your project..."
                    className="w-full rounded-2xl border border-slate-800 bg-slate-950/50 px-5 py-4 text-slate-200 placeholder:text-slate-500 outline-none resize-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all"
                  />
                </div>

                {/* Error */}
                {errors.length > 0 && (
                  <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
                    {errors[0]}
                  </div>
                )}

                {/* Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:scale-[1.01] disabled:opacity-60"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {submitting ? "Sending..." : "Send Message"}

                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10"></div>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;