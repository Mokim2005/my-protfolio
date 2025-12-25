import React from "react";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="relative min-h-screen bg-gray-950 text-gray-100 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-950 to-indigo-900 opacity-60"></div>
        
        {/* Moving Gradient Orbs - Real Animation */}
        <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute top-40 -right-40 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-5000"></div>
        <div className="absolute -bottom-40 left-40 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float animation-delay-3000"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float animation-delay-7000"></div>
      </div>

      {/* Subtle noise overlay for premium feel */}
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col min-h-screen">
        <Navber />
        
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-10">
          <Outlet />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;