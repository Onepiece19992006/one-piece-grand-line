"use client";

import { motion } from "framer-motion";

export default function Foam() {
  return (
    <motion.div
      className="absolute bottom-[20vh] left-[72%] -translate-x-1/2 z-20"
      animate={{
        x: [0, -10, 0],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Main foam burst */}
      <motion.div
        className="relative w-44 h-10"
      >
        {/* Foam 1 */}
        <motion.div
          className="absolute w-40 h-5 rounded-full bg-white/60 blur-md"
          animate={{
            scaleX: [1, 1.3, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
        />

        {/* Foam 2 */}
        <motion.div
          className="absolute top-3 left-6 w-28 h-4 rounded-full bg-cyan-100/50 blur-lg"
          animate={{
            scaleX: [1, 1.4, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
          }}
        />

        {/* Foam 3 */}
        <motion.div
          className="absolute -top-2 left-10 w-20 h-3 rounded-full bg-white/70 blur-sm"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </motion.div>
  );
}