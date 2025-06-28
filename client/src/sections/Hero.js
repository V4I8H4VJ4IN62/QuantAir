"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroVisual from "@/assets/images/hero.png";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full max-w-5xl px-6 py-32 mx-auto flex flex-col items-center justify-center text-center gap-12 overflow-hidden">
      {/* Headline */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white relative z-10 leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Quantum Forecasting for a{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-white to-cyan-500 bg-clip-text text-transparent animate-text-glow">
          Cleaner Tomorrow
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-lg sm:text-xl max-w-2xl text-neutral-300 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
      >
        Unlock the future of air quality prediction with cutting-edge quantum
        and AI-driven models, tailored for cities across India.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="z-10"
      >
        <div className="flex mt-8 md:max-w-lg mx-auto items-center justify-center gap-5">
          <RainbowButton
            variant={"outline"}
            className="rounded-full text-black px-6 py-4 hover:scale-105 transition-transform duration-300"
          >
            <a href="#features">View Features</a>
          </RainbowButton>
          <RainbowButton className="text-white rounded-full px-6 py-4 hover:scale-105 transition-transform duration-300">
            <Link href="../dashboard">Explore Dashboard</Link>
          </RainbowButton>
        </div>
      </motion.div>

      {/* Hero Visual */}
      <motion.div
        className="relative mt-8 w-full max-w-xl z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <Image
          src={heroVisual}
          alt="Hero Forecast Graphic"
          className="w-full h-auto rounded-xl shadow-2xl"
        />
      </motion.div>
    </section>
  );
}
