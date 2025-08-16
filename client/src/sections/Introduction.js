"use client";

import Tags from "@/components/ui/tags";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { TextReveal } from "@/components/magicui/text-reveal";

const text = `Quantum computing is redefining environmental forecasting by enabling deeper insights into urban air pollution dynamics across Indian cities. Leveraging hybrid quantum-classical models, we aim to capture complex pollution patterns that classical algorithms often miss.`;
const words = text.split(" ");

export default function Introduction() {
  const sectionRef = useRef(null);
  const [currentWord, setCurrentWord] = useState(0);

  // Track scroll progress relative to the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to word reveal (slower)
  const wordIndex = useTransform(scrollYProgress, [0, 0.8], [0, words.length]);

  useEffect(() => {
    const unsubscribe = wordIndex.on("change", (latest) => {
      setCurrentWord(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [wordIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Main content container */}
      <div className="flex flex-col items-center max-w-4xl text-center">
        <Tags title="Introduction" />

        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-center">
          <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text">
            Harnessing quantum intelligence
          </span>
          <br />
          <span className="text-slate-200">for cleaner cities</span>
        </h2>

        {/* Reveal text */}
        <div className="mt-6 text-2xl sm:text-3xl md:text-4xl text-slate-400/40 leading-relaxed">
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
                    "inline-block transition-all duration-1000 relative",
                    isVisible ? "text-slate-200" : "text-slate-400/20",
                    shouldHighlight && "text-transparent"
                  )}
                  animate={isVisible ? { y: [15, 0], opacity: [0, 1] } : {}}
                  transition={{
                    duration: 0.7,
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
