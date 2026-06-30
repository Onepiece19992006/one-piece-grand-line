"use client";

import { motion } from "framer-motion";

const particles = [...Array(25)];

export default function FloatingParticles() {
  return (
    <>
      {particles.map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}