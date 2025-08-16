"use client";

import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "" },
  { label: "Introduction", href: "#introduction" },
  { label: "Features", href: "#features" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="fixed top-0 z-50 w-full px-4 pt-4">
        {/* Quantum background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 blur-3xl animate-pulse" />
        
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="container max-w-6xl mx-auto rounded-2xl border border-emerald-400/30 bg-gradient-to-r from-slate-900/95 via-emerald-950/95 to-cyan-950/95 backdrop-blur-xl px-6 py-4 shadow-2xl relative overflow-hidden"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-cyan-600/10 to-blue-600/10 animate-gradient-x" />
          
          {/* Quantum particle effect */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-2 left-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-ping" />
            <div className="absolute top-4 right-1/3 w-0.5 h-0.5 bg-cyan-400 rounded-full animate-pulse" />
            <div className="absolute bottom-3 left-2/3 w-1 h-1 bg-blue-400 rounded-full animate-bounce" />
          </div>

          <div className="flex items-center justify-between relative z-10">
            {/* Logo with quantum glow */}
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-md opacity-50 animate-pulse" />
                <Image src={logo} alt="Logo Icon" className="h-10 w-10 relative z-10" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
                QuantAir
              </h2>
            </motion.div>

            {/* Desktop Nav with quantum effects */}
            <nav className="hidden lg:flex gap-8 text-sm font-medium relative">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="relative group transition-all duration-300"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="text-slate-200 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {link.label}
                  </span>
                  
                  {/* Quantum underline effect */}
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-500 group-hover:w-full rounded-full" />
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-700 group-hover:w-full rounded-full opacity-60" />
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </motion.a>
              ))}
            </nav>

            {/* Mobile Toggle with quantum animation */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 p-2 rounded-lg bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm border border-emerald-400/30"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  initial={false}
                  animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    {/* Hamburger lines with quantum effect */}
                    <motion.div
                      className="w-6 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mb-1"
                      animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    />
                    <motion.div
                      className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mb-1"
                      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    />
                    <motion.div
                      className="w-6 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"
                      animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    />
                  </div>
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Quantum wave effect at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-60">
            <div className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Enhanced Mobile Nav Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, scale: 0.95 }}
              animate={{ height: "auto", opacity: 1, scale: 1 }}
              exit={{ height: 0, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="lg:hidden mt-3 mx-4 rounded-2xl bg-gradient-to-br from-slate-900/95 via-emerald-950/95 to-cyan-950/95 backdrop-blur-xl overflow-hidden shadow-2xl border border-emerald-400/20 relative"
            >
              {/* Mobile panel background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10" />
              
              <div className="flex flex-col items-center gap-6 py-8 text-base font-medium relative z-10">
                {navLinks.map((link, index) => (
                  <motion.a
                    href={link.href}
                    key={link.label}
                    onClick={() => setIsOpen(false)}
                    className="relative group px-6 py-2 rounded-lg transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-slate-200 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {link.label}
                    </span>
                    
                    {/* Mobile hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Spacer below fixed navbar */}
      <div className="pb-[110px]" />

      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </>
  );
}