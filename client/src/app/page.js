"use client";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import Navbar from "@/sections/Navbar";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* Quantum Environmental Background */}
      <div className="fixed inset-0 z-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/80 to-slate-900" />
        
        {/* Animated quantum field layers */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-transparent to-cyan-500/20 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/15 via-transparent to-emerald-500/15 animate-pulse animation-delay-1000" />
        </div>
        
        {/* Floating quantum particles */}
        <div className="absolute inset-0 opacity-40">
          {/* Large floating particles */}
          <motion.div 
            className="absolute top-1/4 left-1/6 w-2 h-2 bg-emerald-400/60 rounded-full blur-sm"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-cyan-400/70 rounded-full blur-sm"
            animate={{
              y: [20, -30, 20],
              x: [15, -5, 15],
              opacity: [0.4, 0.9, 0.4]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          <motion.div 
            className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-400/50 rounded-full blur-sm"
            animate={{
              y: [15, -25, 15],
              x: [-12, 8, -12],
              opacity: [0.2, 0.7, 0.2]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
          
          <motion.div 
            className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-emerald-300/60 rounded-full blur-sm"
            animate={{
              y: [-18, 22, -18],
              x: [8, -15, 8],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* Small ambient particles */}
          <motion.div 
            className="absolute top-1/5 right-1/6 w-0.5 h-0.5 bg-cyan-300/40 rounded-full"
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
          
          <motion.div 
            className="absolute bottom-1/4 left-1/5 w-0.5 h-0.5 bg-emerald-200/50 rounded-full"
            animate={{
              y: [0, 35, 0],
              x: [0, 20, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
          />
        </div>
        
        {/* Quantum wave interference patterns */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent animate-pulse" />
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-pulse animation-delay-2000" />
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse animation-delay-4000" />
        </div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(6, 182, 212, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.25) 0%, transparent 50%)
              `
            }}
          />
        </div>
        
        {/* Environmental data visualization effect */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-emerald-400/20 rounded-full animate-ping animation-duration-4000" />
          <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-cyan-400/20 rounded-full animate-ping animation-duration-6000 animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border border-blue-400/20 rounded-full animate-ping animation-duration-8000 animation-delay-4000" />
        </div>
      </div>
      
      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
        {/* Hero section with enhanced background */}
        <div className="py-24 px-4 flex items-center justify-center overflow-x-clip relative">
          {/* Additional hero section effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent" />
          
          <Navbar />
          <Hero />
        </div>
        
        {/* Other sections */}
        <Introduction />
        <Features />
        <Footer />
      </div>
    </div>
  );
};

export default Home;