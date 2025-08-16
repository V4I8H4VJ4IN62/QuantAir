"use client";

import { motion } from "framer-motion";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import Link from "next/link";
import QuantumCoreModel from "@/components/ui/QuantumCoreModel";

export default function Hero() {
  return (
    <section className="relative w-full px-6 py-20 mx-auto flex flex-col items-center justify-center text-center gap-16 min-h-screen">
      
      {/* Floating quantum data points */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/6 left-1/5 w-8 h-8 border border-emerald-400/30 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-sm" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/4 right-1/6 w-6 h-6 border border-cyan-400/40 rounded-full"
          animate={{
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-sm" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-4 h-4 border border-blue-400/35 rounded-full"
          animate={{
            rotate: 360,
            x: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-400/25 to-emerald-400/25 rounded-full blur-sm" />
        </motion.div>
      </div>

      {/* Enhanced Headline with quantum typewriter effect */}
      <motion.div className="relative z-10 max-w-5xl">
        <motion.div
          className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight relative leading-tight"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-slate-100">Quantum Forecasting for a</span>
          <br />
          <motion.span 
            className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent relative"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundSize: "200% 100%" }}
          >
            Cleaner Tomorrow
          </motion.span>
        </motion.h1>
        
        {/* Quantum underline effect */}
        <motion.div 
          className="h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mt-4 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "60%" }}
          transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
        />
      </motion.div>

      {/* Enhanced Subtext with floating effect */}
      <motion.div
        className="relative z-10 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        <motion.p
          className="text-xl sm:text-2xl text-slate-300 leading-relaxed"
          whileInView={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Unlock the future of air quality prediction with{" "}
          <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text font-semibold">
            cutting-edge quantum
          </span>{" "}
          and{" "}
          <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-semibold">
            AI-driven models
          </span>
          , tailored for cities across India.
        </motion.p>
      </motion.div>

      {/* Enhanced CTA Buttons with quantum glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="z-10 relative"
      >
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300" />
            <RainbowButton
              variant={"outline"}
              className="relative rounded-full text-black px-8 py-4 font-semibold border-2 border-emerald-400/50 bg-slate-100/90 hover:bg-white transition-all duration-300"
            >
              <a href="#features" className="flex items-center gap-2">
                View Features
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </RainbowButton>
          </motion.div>
          
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-300" />
            <RainbowButton className="relative text-white rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300">
              <Link href="../dashboard" className="flex items-center gap-2">
                Explore Dashboard
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  ⚡
                </motion.span>
              </Link>
            </RainbowButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced 3D Model Container */}
      <motion.div
        className="relative mt-12 w-full max-w-4xl z-10"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 1, ease: "easeOut" }}
      >
        <div className="relative">
          {/* Quantum field around 3D model */}
          {/* <motion.div
            className="absolute -inset-8 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl"
            animate={{
              rotate: [0, 360],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          /> */}
          
          {/* Data visualization rings */}
          <motion.div
            className="absolute -inset-12 border border-emerald-400/20 rounded-full"
            animate={{
              rotate: 360,
              scale: [0.8, 1.05, 0.8],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div
            className="absolute -inset-16 border border-cyan-400/15 rounded-full"
            animate={{
              rotate: -360,
              scale: [1, 0.95, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Main model container with glass morphism */}
          {/* <div className="relative bg-gradient-to-br from-slate-900/40 via-emerald-950/30 to-cyan-950/40 backdrop-blur-xl border border-emerald-400/30 rounded-3xl p-8 sm:p-12 shadow-2xl"> */}
            
            {/* Model title with quantum effect */}
            <motion.h2
              className="text-2xl sm:text-4xl font-bold text-center mb-8 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Quantum Simulated Intelligence
              </span>
              <br />
              <span className="text-slate-300 text-lg sm:text-2xl font-medium">
                for a Cleaner India
              </span>
              
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ delay: 1.8, duration: 1.2, ease: "easeOut" }}
              />
            </motion.h2>
            
            {/* 3D Model with enhanced container */}
            {/* <motion.div
              className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-emerald-900/30 border border-emerald-400/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 50px rgba(16, 185, 129, 0.3)"
              }}
            > */}
              {/* Interactive hint */}
              {/* <motion.div
                className="absolute top-4 right-4 z-20 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-4 py-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
              >
                <span className="text-emerald-300 text-sm font-medium">Interactive 3D Model</span>
              </motion.div> */}
              
              {/* Model component */}
              <QuantumCoreModel />
              
              {/* Corner accents */}
              {/* <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-emerald-400/40 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cyan-400/40 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-blue-400/40 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-emerald-400/40 rounded-br-2xl" /> */}
            {/* </motion.div> */}
          {/* </div> */}
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator with quantum pulse */}
      <motion.div
        className="absolute flex flex-col items-center align-center bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="relative w-8 h-12 border-2 border-emerald-400/40 rounded-full flex justify-center backdrop-blur-sm bg-slate-900/30"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1.5 h-4 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full mt-2"
            animate={{ 
              scaleY: [1, 0.3, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Quantum ripple effect */}
          <motion.div
            className="absolute -inset-2 border border-emerald-400/20 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </motion.div>
        
        <motion.p
          className="text-emerald-300/70 text-xs mt-2 font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </section>
  );
}