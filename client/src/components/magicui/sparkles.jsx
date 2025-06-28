"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMemo } from "react";

export const SparklesCore = ({
  className,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1.2,
  particleDensity = 120,
  particleColor = "#ffffff",
}) => {
  const particles = useMemo(() => {
    return new Array(particleDensity).fill(0).map((_, i) => {
      return {
        id: i,
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * (maxSize - minSize) + minSize,
        color: particleColor,
        opacity: Math.random(),
      };
    });
  }, [particleDensity, minSize, maxSize, particleColor]);

  return (
    <div
      className={cn("relative w-full h-full", className)}
      style={{ background }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x * 100}%`,
            top: `${p.y * 100}%`,
            width: `${p.size}rem`,
            height: `${p.size}rem`,
            backgroundColor: p.color,
            opacity: p.opacity,
            filter: "blur(1px)",
          }}
          animate={{
            y: ["0%", "100%"],
            opacity: [p.opacity, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};