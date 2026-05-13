import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * ⚡ LIGHTWEIGHT SCROLL OPTIMIZATION
 * 
 * Optimized for a responsive, SaaS-like experience.
 * - Duration reduced to 0.6s for immediate feedback.
 * - Linear-out easing for natural momentum.
 * - Disabled smoothTouch to maintain native mobile responsiveness.
 */

gsap.registerPlugin(ScrollTrigger);

// Initialize High-Performance Lenis
const lenis = new Lenis({
  duration: 0.8, // Slightly more momentum for "buttery" feel but faster start
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 1.2, // Increased sensitivity for immediate reaction
  touchMultiplier: 1.5,
  infinite: false,
});

// Drive Lenis RAF with GSAP Ticker
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

// Refresh ScrollTrigger on every scroll
lenis.on('scroll', ScrollTrigger.update);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
