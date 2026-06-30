"use client";

import { motion } from "framer-motion";

export default function Moon() {
  return (
    <motion.div
      animate={{
        opacity: [0.9, 1, 0.9],
        scale: [1, 1.03, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute top-20 right-40 z-10"
    >
      {/* Outer Glow */}
      <motion.div
  animate={{
    scale: [1, 1.2, 1],
    opacity: [0.18, 0.3, 0.18],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute left-1/2 top-1/2 w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/15 blur-[120px]"
/>

      {/* Glow */}
      <motion.div
  animate={{
    scale: [1, 1.08, 1],
    opacity: [0.18, 0.32, 0.18],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute left-1/2 top-1/2 w-60 h-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-[60px]"
/>

      {/* Moon */}
      <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-white via-gray-200 to-gray-300 shadow-[0_0_120px_rgba(255,255,255,0.9)] overflow-hidden">

        {/* Crater */}
        <div className="absolute w-6 h-6 bg-gray-300 rounded-full top-6 left-8 opacity-60" />

        <div className="absolute w-4 h-4 bg-gray-300 rounded-full top-12 right-8 opacity-50" />

        <div className="absolute w-7 h-7 bg-gray-300 rounded-full bottom-8 left-10 opacity-40" />

        <div className="absolute w-3 h-3 bg-gray-300 rounded-full bottom-12 right-10 opacity-50" />
      </div>
    </motion.div>
  );
}