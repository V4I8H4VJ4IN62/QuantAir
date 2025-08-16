"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function MagicCard({
  children,
  className,
  gradientSize = 220,
  gradientFrom = "#00e5ff",
  gradientTo = "#7c4dff",
}) {
  // --- Hooks (order never changes) ---
  const cardRef = useRef(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = useCallback(
    (e) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }
    },
    [mouseX, mouseY]
  );

  const handleMouseOut = useCallback(
    (e) => {
      if (!e.relatedTarget) {
        document.removeEventListener("mousemove", handleMouseMove);
        mouseX.set(-gradientSize);
        mouseY.set(-gradientSize);
      }
    },
    [handleMouseMove, mouseX, gradientSize, mouseY]
  );

  const handleMouseEnter = useCallback(() => {
    document.addEventListener("mousemove", handleMouseMove);
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [handleMouseMove, mouseX, gradientSize, mouseY]);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseEnter, handleMouseMove, handleMouseOut]);

  useEffect(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  // --- Render ---
  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-cyan-500/30 transition-shadow duration-500",
        className
      )}
    >
      {/* Outer gradient glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-80 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
            ${gradientFrom}, 
            ${gradientTo}, 
            transparent 100%)
          `,
        }}
      />

      {/* Card background */}
      <div className="absolute inset-px bg-gradient-to-br from-slate-900/40 via-emerald-950/30 to-cyan-950/40 backdrop-blur-xl rounded-[inherit]" />

      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
}
