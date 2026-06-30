"use client";

import { motion } from "framer-motion";

export default function Smoke() {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20 blur-3xl"
          style={{
            width: 120 + i * 18,
            height: 70 + i * 10,
            left: `${20 + i * 8}%`,
            bottom: `${10 + (i % 3) * 12}%`,
          }}
          animate={{
            y: [0, -35],
            x: [0, (i % 2 === 0 ? 20 : -20)],
            opacity: [0.2, 0.5, 0],
            scale: [1, 1.25],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </>
  );
}