"use client";

import { motion } from "framer-motion";

export default function MoonReflection() {
  return (
    <motion.div
      animate={{
        opacity: [0.08, 0.16, 0.08],
        scaleY: [1, 1.08, 1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute bottom-[18vh] left-1/2 -translate-x-1/2 z-10"
    >
      <div className="w-40 h-72 bg-gradient-to-b from-white/40 via-cyan-200/20 to-transparent blur-2xl rounded-full" />
    </motion.div>
  );
}