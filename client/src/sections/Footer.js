"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import logo from "@/assets/images/logo.png";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative overflow-hidden"
    >
      {/* Enhanced Quantum Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main quantum field */}
        <motion.div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-emerald-400/15 via-cyan-400/20 to-blue-400/15 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-blue-400/10 via-purple-400/15 to-emerald-400/10 blur-3xl"
          animate={{
            scale: [0.9, 1.2, 0.9],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Quantum data streams */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-16 bg-gradient-to-b from-transparent via-emerald-400/60 to-transparent"
              style={{
                left: `${20 + (i * 12)}%`,
                top: `${30 + (i * 8)}%`,
              }}
              animate={{
                height: [16, 32, 16],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + (i * 0.5),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
            />
          ))}
        </div>

        {/* Floating quantum particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
              style={{
                left: `${15 + (i * 10)}%`,
                bottom: `${20 + (i * 5)}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 4 + (i * 0.3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <section className="py-16 px-4 border-t border-gradient-to-r border-emerald-400/20 bg-gradient-to-b from-slate-900/40 via-emerald-950/30 to-slate-900/60 backdrop-blur-xl relative z-10">
        <div className="container max-w-6xl mx-auto">
          
          {/* Top section with enhanced layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Logo and Brand Section */}
            <motion.div
              className="flex flex-col items-center md:items-start space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Quantum glow around logo */}
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/30 to-cyan-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-4 relative z-10">
                  <Image 
                    src={logo} 
                    alt="QuantAir Logo" 
                    className="h-auto w-16 drop-shadow-[0_0_15px_rgba(16,185,129,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(16,185,129,0.8)] transition-all duration-300" 
                  />
                  <h2 className="font-bold text-3xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    QuantAir
                  </h2>
                </div>
              </motion.div>
              
              <motion.p
                className="text-slate-400 text-center md:text-left leading-relaxed max-w-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Revolutionizing air quality forecasting through quantum computing and environmental intelligence.
              </motion.p>
            </motion.div>

            {/* Project Details */}
            <motion.div
              className="flex flex-col items-center md:items-start space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                Project Focus
              </h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full" />
                  <span className="text-sm">Quantum Machine Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
                  <span className="text-sm">Environmental Forecasting</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full" />
                  <span className="text-sm">Urban Air Quality Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full" />
                  <span className="text-sm">Hybrid AI Models</span>
                </div>
              </div>
            </motion.div>

            {/* Technology Stack */}
            <motion.div
              className="flex flex-col items-center md:items-start space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text">
                Built With
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {["Quantum Computing", "Next.js", "Python", "TensorFlow", "React"].map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-slate-800/60 to-emerald-950/40 border border-emerald-400/20 rounded-full text-sm text-emerald-300 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1), duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: "rgba(16, 185, 129, 0.5)"
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quantum separator line */}
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Bottom section with credits */}
          <motion.div
            className="flex flex-col md:flex-row md:justify-between items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Copyright */}
            <div className="text-slate-400 text-sm">
              <motion.span
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                © 2024 QuantAir. 
              </motion.span>
              <span className="ml-1">
                Quantum-powered environmental intelligence.
              </span>
            </div>

            {/* Credits with enhanced styling */}
            <div className="text-center md:text-right leading-relaxed">
              <p className="text-slate-300">
                Built by{" "}
                <motion.span 
                  className="font-semibold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  Debshata Choudhury, Vaibhav Jain
                </motion.span>
                . 
              </p>
              <p className="mt-2">
                <span className="text-slate-400">View source code on </span>
                <Link
                  href="https://github.com/V4I8H4VJ4IN62/QuantAir"
                  className="inline-flex items-center gap-1 text-emerald-400 hover:text-cyan-400 underline decoration-emerald-400/50 hover:decoration-cyan-400 transition-all duration-300 font-medium"
                  target="_blank"
                >
                  <motion.span
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    GitHub
                  </motion.span>
                  <motion.span
                    className="text-xs"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </p>
            </div>
          </motion.div>

          {/* Quantum signature */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-emerald-400/60 text-xs">
              <motion.div
                className="w-1 h-1 bg-emerald-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span>Powered by quantum innovation</span>
              <motion.div
                className="w-1 h-1 bg-cyan-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </motion.footer>
  );
}