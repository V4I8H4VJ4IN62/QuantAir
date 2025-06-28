"use client";

import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SparklesCore } from "@/components/magicui/sparkles";

const navLinks = [
  { label: "Home", href: "" },
  { label: "Introduction", href: "#introduction" },
  { label: "Features", href: "#features" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="fixed top-0 z-50 w-full px-4 pt-4 backdrop-blur-lg">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="container max-w-6xl mx-auto rounded-3xl border border-neutral-700 bg-neutral-900/70 px-6 py-3 shadow-xl"
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image src={logo} alt="Logo Icon" className="h-10 w-10" />
              <h2 className="text-2xl font-bold text-cyan-400 tracking-tight">
                QuantAir
              </h2>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex gap-8 text-sm font-medium text-white relative">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative group transition-all duration-200"
                >
                  <span className="group-hover:text-cyan-400 transition duration-200">
                    {link.label}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 p-2"
              >
                <motion.div
                  initial={false}
                  animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </motion.div>
              </button>
            </div>
          </div>

          {/* Sparkles underline */}
          <div className="h-1 w-full relative mt-2">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1.2}
              particleDensity={90}
              className="w-full h-full"
              particleColor="#22d3ee"
            />
          </div>
        </motion.div>

        {/* Mobile Nav Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="lg:hidden mt-2 mx-4 rounded-2xl bg-neutral-800/90 backdrop-blur-md overflow-hidden shadow-lg"
            >
              <div className="flex flex-col items-center gap-5 py-6 text-white text-base font-medium">
                {navLinks.map((link) => (
                  <a
                    href={link.href}
                    key={link.label}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-lime-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Spacer below fixed navbar */}
      <div className="pb-[96px]" />
    </>
  );
}
