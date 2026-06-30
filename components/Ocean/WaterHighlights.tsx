"use client";

import { motion } from "framer-motion";

export default function WaterHighlights() {
  return (
    <>
      <motion.div
        className="absolute bottom-[12vh] left-[-20%] w-[180%] h-8 bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent blur-xl"
        animate={{
          x: ["0%", "-20%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-[17vh] left-[-20%] w-[180%] h-6 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-lg"
        animate={{
          x: ["-15%", "10%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-[8vh] left-[-30%] w-[200%] h-5 bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent blur-lg"
        animate={{
          x: ["0%", "-30%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </>
  );
}