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

  const handleMouseOut = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  useEffect(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-cyan-500/30 transition-shadow duration-500",
        className
      )}
    >
      {/* Card background only */}
      <div className="absolute inset-px bg-gradient-to-br from-slate-900/40 via-emerald-950/30 to-cyan-950/40 backdrop-blur-xl rounded-[inherit]" />

      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
}
