"use client";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import Navbar from "@/sections/Navbar";
import React from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/magicui/sparkles";

const Home = () => {
  return (
    <>
      <div className="py-24 px-4 flex items-center justify-center overflow-x-clip relative">
         <motion.div
        className="absolute inset-0 z-0 blur-[1.5px]"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
      >
        <SparklesCore
          particleColor="#22d3ee"
          particleDensity={100}
          className="h-full w-full"
        />
      </motion.div>
        <Navbar />
        <Hero />
      </div>
      <Introduction />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
