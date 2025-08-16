"use client";

import Tags from "@/components/ui/tags";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `Quantum computing is redefining environmental forecasting by enabling deeper insights into urban air pollution dynamics across Indian cities. Leveraging hybrid quantum-classical models, we aim to capture complex pollution patterns that classical algorithms often miss.`;
const words = text.split(" ");

export default function Introduction() {
  const sectionRef = useRef();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"], // track whole section scroll
  });

  const [currentWord, setCurrentWord] = useState(0);

  // Slower word reveal
  const wordIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, words.length * 0.8]
  );

  // Background animations
  const quantumFieldOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.2, 0.8, 0.4]
  );
  const dataStreamX = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const particleScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1.2, 1]
  );

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(Math.floor(latest));
    });
  }, [wordIndex]);

  return (
    <section
      ref={sectionRef}
      id="introduction"
      className="relative h-[280vh] px-4 scroll-mt-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 opacity-60">
        {/* Floating quantum data matrices */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-32 h-32"
          style={{ opacity: quantumFieldOpacity }}
        >
          <div className="grid grid-cols-4 gap-1 transform rotate-45">
            {[...Array(16)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 rounded-sm"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Data stream lines */}
        <motion.div
          className="absolute top-1/3 right-1/5 w-48 h-1"
          style={{ x: dataStreamX }}
        >
          <div className="relative w-full h-full">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent rounded-full"
              animate={{
                x: [-100, 100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent rounded-full"
              animate={{
                x: [-150, 150],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
                delay: 2,
              }}
            />
          </div>
        </motion.div>

        {/* Quantum interference patterns */}
        <motion.div
          className="absolute bottom-1/4 left-1/3"
          style={{ scale: particleScale }}
        >
          <div className="relative">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-16 h-16 border border-${
                  i % 2 === 0 ? "emerald" : "cyan"
                }-400/20 rounded-full`}
                style={{
                  left: `${i * 8}px`,
                  top: `${i * 8}px`,
                }}
                animate={{
                  rotate: i % 2 === 0 ? 360 : -360,
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 8 + i,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Sticky content */}
      <div className="sticky top-20 md:top-28 lg:top-40 h-screen flex flex-col justify-center">
        <div className="flex justify-center mb-10">
          <Tags title="Introduction" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold leading-tight">
          <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text">
            Harnessing quantum intelligence
          </span>
          <br />
          <span className="text-slate-200">for cleaner cities</span>
        </h2>

        {/* Reveal text */}
        <div className="mt-10 text-slate-400/40 text-2xl sm:text-3xl md:text-4xl leading-relaxed text-center">
          {words.map((word, index) => {
            const isVisible = index < currentWord;
            const lowerWord = word.toLowerCase().replace(/[.,]/g, "");
            const highlightWords = [
              "quantum",
              "hybrid",
              "pollution",
              "dynamics",
              "insights",
              "environmental",
              "forecasting",
              "classical",
              "algorithms",
              "models",
            ];
            const shouldHighlight =
              isVisible && highlightWords.includes(lowerWord);

            return (
              <span key={index} className="inline-block mr-2">
                <motion.span
                  className={twMerge(
                    "inline-block transition-all duration-700 relative",
                    isVisible ? "text-slate-200" : "text-slate-400/20",
                    shouldHighlight && "text-transparent"
                  )}
                  animate={isVisible ? { y: [10, 0], opacity: [0, 1] } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                >
                  {shouldHighlight ? (
                    <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </motion.span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
