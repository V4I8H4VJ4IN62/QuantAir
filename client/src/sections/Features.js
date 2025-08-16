"use client";

import Tags from "@/components/ui/tags";
import Image from "next/image";
import dashboard from "@/assets/images/dashboard-new.png";
import Key from "@/components/ui/key";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { motion } from "framer-motion";
import { MagicCard } from "@/components/magicui/magic-card";

const features = [
  "Real-time AQI Predictions",
  "Quantum vs Classical Model Insights",
  "Geo-Spatial Pollution Trends",
  "Forecast Accuracy Comparison",
  "Interactive Time Series Graphs",
  "City-wise Pollution Snapshots",
  "Data-Driven Policy Support Tools",
];

export default function Features() {
  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center relative px-4 py-32 overflow-hidden"
    >
      {/* Enhanced Quantum Visual Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Quantum field layers */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-72 h-72 bg-gradient-to-r from-emerald-400/15 to-cyan-400/15 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/15 rounded-full blur-3xl"
          animate={{ 
            x: [0, -40, 60, 0],
            y: [0, 30, -50, 0],
            scale: [0.8, 1.3, 0.9, 0.8],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Quantum data networks */}
        <div className="absolute inset-0 opacity-20">
          {/* Network nodes */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
              style={{
                left: `${10 + (i * 6)}%`,
                top: `${15 + (i * 4.5)}%`,
              }}
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + (i * 0.2),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
          
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.3)" />
                <stop offset="50%" stopColor="rgba(6, 182, 212, 0.5)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
              </linearGradient>
            </defs>
            {[...Array(8)].map((_, i) => (
              <motion.line
                key={i}
                x1={`${20 + (i * 10)}%`}
                y1={`${30 + (i * 8)}%`}
                x2={`${40 + (i * 8)}%`}
                y2={`${50 + (i * 6)}%`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 0], opacity: [0, 0.8, 0] }}
                transition={{
                  duration: 4 + (i * 0.5),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8,
                }}
              />
            ))}
          </svg>
        </div>

        {/* Floating quantum equations */}
        <div className="absolute top-1/3 right-1/4 opacity-10">
          <motion.div
            className="text-emerald-300 text-xs font-mono"
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            |ψ⟩ = α|0⟩ + β|1⟩
          </motion.div>
        </div>
      </div>

      <div className="container relative z-10">
        {/* Enhanced Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-lg" />
              <Tags title="Platform Features" />
            </motion.div>
          </div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold max-w-5xl mx-auto leading-tight mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-slate-200">Quantum Meets</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Urban Sustainability
            </span>
          </motion.h2>
          
          {/* Enhanced animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto rounded-full relative"
            initial={{ width: 0 }}
            whileInView={{ width: "60%" }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-sm"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.p
            className="text-xl text-slate-400 mt-6 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Experience the convergence of quantum computing and environmental science 
            through our comprehensive platform designed for India's air quality challenges.
          </motion.p>
        </motion.div>

        {/* Enhanced Feature Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Card 1 - Enhanced with quantum effects */}
          <motion.div
            className="lg:col-span-1 group relative"
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MagicCard className="h-full relative overflow-hidden border border-emerald-400/20 bg-gradient-to-br from-slate-900/60 via-emerald-950/40 to-slate-900/60 backdrop-blur-md">
              {/* Quantum glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                animate={{
                  background: [
                    "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)",
                    "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
                    "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)",
                  ],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              <div className="relative z-10 p-6">
                <div className="text-center mb-6">
                  <motion.h3 
                    className="text-2xl font-bold mb-4 text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text"
                    whileHover={{ scale: 1.05 }}
                  >
                    Quantum-Enhanced Pollution Forecasting
                  </motion.h3>
                  <p className="text-slate-300 leading-relaxed">
                    Hybrid quantum-classical models to predict PM10, NO2, and SO2 levels across India with unprecedented accuracy.
                  </p>
                </div>
                
                <motion.div
                  className="relative group/image"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Image glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl blur-lg opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                  
                  <Image
                    src={dashboard}
                    alt="Quantum Forecasting Dashboard"
                    className="relative z-10 rounded-xl shadow-2xl w-full h-auto border border-emerald-400/20"
                    height={650}
                    width={650}
                  />
                  
                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-emerald-400/60 rounded-tl-lg" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400/60 rounded-tr-lg" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-blue-400/60 rounded-bl-lg" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-emerald-400/60 rounded-br-lg" />
                </motion.div>
              </div>
            </MagicCard>
          </motion.div>

          {/* Card 2 - Enhanced comparison card */}
          <motion.div
            className="lg:col-span-1 group relative"
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MagicCard className="h-full border border-cyan-400/20 bg-gradient-to-br from-slate-900/60 via-cyan-950/40 to-slate-900/60 backdrop-blur-md">
              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className="text-center mb-6">
                  <motion.h3 
                    className="text-2xl font-bold mb-4 text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text"
                    whileHover={{ scale: 1.05 }}
                  >
                    Model Comparison & Evaluation
                  </motion.h3>
                  <p className="text-slate-300 leading-relaxed">
                    Compare quantum models vs classical ML algorithms using advanced metrics like RMSE and MAE.
                  </p>
                </div>
                
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <motion.div
                      className="text-4xl font-bold text-slate-400/60"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      Classical vs Quantum
                    </motion.div>
                    
                    <motion.div
                      className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{ backgroundSize: "200% 100%" }}
                    >
                      Let the data decide.
                    </motion.div>

                    {/* Performance indicators */}
                    <div className="flex justify-center gap-4 mt-6">
                      {["RMSE", "MAE", "R²"].map((metric, i) => (
                        <motion.div
                          key={metric}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-sm text-purple-300"
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 2 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3,
                          }}
                        >
                          {metric}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </MagicCard>
          </motion.div>

          {/* Card 3 - Enhanced orbiting circles */}
          <motion.div
            className="lg:col-span-1 group relative"
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MagicCard className="h-full border border-blue-400/20 bg-gradient-to-br from-slate-900/60 via-blue-950/40 to-slate-900/60 backdrop-blur-md">
              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className="text-center mb-6">
                  <motion.h3 
                    className="text-2xl font-bold mb-4 text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text"
                    whileHover={{ scale: 1.05 }}
                  >
                    Pollution Factors Mapping
                  </motion.h3>
                  <p className="text-slate-300 leading-relaxed">
                    Analyze how temporal, spatial, and meteorological variables influence pollution dynamics.
                  </p>
                </div>
                
                <div className="flex-1 flex items-center justify-center relative min-h-[250px]">
                  {/* Enhanced orbiting circles with quantum effects */}
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-full blur-xl"
                      animate={{
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    
                    <OrbitingCircles radius={100}>
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <Key className="w-28 p-4 text-sm font-semibold bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30">
                          Time
                        </Key>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <Key className="w-28 p-4 text-sm font-semibold bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30">
                          Weather
                        </Key>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <Key className="w-28 p-4 text-sm font-semibold bg-gradient-to-r from-blue-500/20 to-emerald-500/20 border border-blue-400/30">
                          Location
                        </Key>
                      </motion.div>
                    </OrbitingCircles>
                  </div>
                </div>
              </div>
            </MagicCard>
          </motion.div>
        </motion.div>

        {/* Enhanced Feature Tags */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.h3
            className="text-2xl font-bold text-center mb-10 text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Additional Platform Capabilities
          </motion.h3>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + (idx * 0.1), duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.08,
                  y: -4,
                }}
              >
                {/* Quantum glow effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="relative bg-gradient-to-br from-slate-900/80 via-emerald-950/40 to-cyan-950/40 border border-emerald-400/30 inline-flex gap-3 items-center px-6 py-3 rounded-2xl backdrop-blur-md group-hover:border-emerald-400/50 transition-colors duration-300">
                  <motion.span 
                    className="bg-gradient-to-tr from-emerald-400 to-cyan-400 text-slate-900 size-6 rounded-full flex items-center justify-center text-sm font-bold"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    ✶
                  </motion.span>
                  <span className="font-medium text-slate-200 group-hover:text-white transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
}