"use client";

import Tags from "@/components/ui/tags";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { SparklesCore } from "@/components/magicui/sparkles";

const text = `Quantum computing is redefining environmental forecasting by enabling deeper insights into urban air pollution dynamics across Indian cities. Leveraging hybrid quantum-classical models, we aim to capture complex pollution patterns that classical algorithms often miss.`;
const words = text.split(" ");

export default function Introduction() {
  const scrollTarget = useRef();
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);
  const sparkleOpacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 0.95]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <section
      id="introduction"
      className="relative py-28 lg:py-40 px-4 flex items-center justify-center scroll-mt-40"
    >
      {/* Sparkle Background */}
      <motion.div
        className="absolute inset-0 -z-10 blur-[1.5px] opacity-90"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SparklesCore
          className="h-full w-full"
          particleColor="#22d3ee"
          particleDensity={120}
        />
      </motion.div>

      <div className="container">
        <motion.div
          className="sticky top-20 md:top-28 lg:top-40"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <Tags title={"Introduction"} />
          </div>

          <div className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold mt-10 leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block mb-4"
            >
              Harnessing quantum intelligence for cleaner cities
            </motion.span>

            <span className="text-white/15">
              {words.map((word, index) => {
                const isVisible = index < currentWord;
                const lowerWord = word.toLowerCase().replace(/[.,]/g, "");

                const shouldUnderline =
                  isVisible &&
                  (lowerWord.includes() || lowerWord.includes("hybrid"));

                const shouldHighlight =
                  isVisible &&
                  [
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
                  ].includes(lowerWord);

                return (
                  <span key={index} className="inline">
                    <span
                      className={twMerge(
                        "inline-block transition duration-500",
                        isVisible ? "text-white" : "text-white/10",
                        isVisible &&
                          shouldHighlight &&
                          "text-cyan-400 glow-text italic"
                      )}
                    >
                      {word}
                    </span>{" "}
                  </span>
                );
              })}
            </span>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-cyan-400 block mt-4 text-xl"
            >
              That’s why we built this quantum-enhanced model.
            </motion.span>
          </div>
        </motion.div>

        {/* Scroll detection zone */}
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}
