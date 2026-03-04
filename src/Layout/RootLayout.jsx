import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const orb4Ref = useRef(null);
  const orb5Ref = useRef(null);

  useEffect(() => {
    // Smooth floating animation for orbs using vanilla JS
    const animateOrb = (element, duration, delay, xRange, yRange) => {
      if (!element) return;
      
      let startTime = Date.now() + delay;
      
      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = (elapsed % duration) / duration;
        
        const x = Math.sin(progress * Math.PI * 2) * xRange;
        const y = Math.cos(progress * Math.PI * 2) * yRange;
        const scale = 1 + Math.sin(progress * Math.PI * 4) * 0.1;
        
        element.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
        
        requestAnimationFrame(animate);
      };
      
      animate();
    };

    animateOrb(orb1Ref.current, 20, 0, 100, 80);
    animateOrb(orb2Ref.current, 25, 2000, -120, 100);
    animateOrb(orb3Ref.current, 22, 4000, 80, -90);
    animateOrb(orb4Ref.current, 28, 6000, -100, -80);
    animateOrb(orb5Ref.current, 24, 8000, 90, 70);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-950 text-gray-100 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/30 to-gray-950">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Blurred Orbs with GSAP-like smooth motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orb 1 - Purple */}
        <div
          ref={orb1Ref}
          className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%)",
            filter: "blur(80px)",
            willChange: "transform",
          }}
        />

        {/* Orb 2 - Pink */}
        <div
          ref={orb2Ref}
          className="absolute top-[20%] right-[10%] w-[450px] h-[450px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.8) 0%, transparent 70%)",
            filter: "blur(90px)",
            willChange: "transform",
          }}
        />

        {/* Orb 3 - Blue */}
        <div
          ref={orb3Ref}
          className="absolute bottom-[15%] left-[15%] w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%)",
            filter: "blur(85px)",
            willChange: "transform",
          }}
        />

        {/* Orb 4 - Cyan */}
        <div
          ref={orb4Ref}
          className="absolute bottom-[25%] right-[20%] w-[380px] h-[380px] rounded-full opacity-18"
          style={{
            background: "radial-gradient(circle, rgba(34, 211, 238, 0.7) 0%, transparent 70%)",
            filter: "blur(75px)",
            willChange: "transform",
          }}
        />

        {/* Orb 5 - Indigo */}
        <div
          ref={orb5Ref}
          className="absolute top-[50%] left-[50%] w-[420px] h-[420px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.7) 0%, transparent 70%)",
            filter: "blur(95px)",
            willChange: "transform",
          }}
        />
      </div>

      {/* Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Glass Overlay for Premium Feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/5 to-gray-950/20 pointer-events-none" />

      {/* Main Content with Framer Motion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col min-h-screen"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Navber />
        </motion.div>

        <motion.main
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 px-4 sm:px-6 lg:px-8"
        >
          <Outlet />
        </motion.main>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Footer />
        </motion.div>
      </motion.div>

      {/* Radial Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-pink-600/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export default RootLayout;
