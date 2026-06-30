"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 18 });

export default function SplashParticles() {
  return (
    <div className="absolute left-1/2 bottom-[20vh] -translate-x-1/2 z-30 pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 5 + 2,
            height: Math.random() * 5 + 2,
            left: Math.random() * 120 - 60,
            bottom: Math.random() * 20,
          }}
          animate={{
            y: [0, -(Math.random() * 30 + 20)],
            x: [0, Math.random() * 30 - 15],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.3],
          }}
          transition={{
            duration: Math.random() * 1.5 + 1,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}