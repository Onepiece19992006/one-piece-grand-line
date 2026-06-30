"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ThousandSunny() {
  return (
    <motion.div
      className="absolute bottom-[13vh] right-[10%] z-40"
      animate={{
        y: [0, -6, 0, -3, 0],
rotate: [-1.5, 1.5, -1, 1.5, -1.5],
x: [-4, 4, -4],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Ship Wake */}
<motion.div
  animate={{
    scaleX: [1, 1.15, 1],
    opacity: [0.45, 0.2, 0.45],
    x: [0, -12, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute right-[70%] bottom-8 w-44 h-6 rounded-full bg-white/40 blur-xl"
/>

<motion.div
  animate={{
    scaleX: [1, 1.3, 1],
    opacity: [0.25, 0.08, 0.25],
    x: [0, -18, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute right-[78%] bottom-7 w-64 h-8 rounded-full bg-cyan-200/30 blur-2xl"
/>
      <Image
        src="/thousand-sunny.png"
        alt="Sunny"
        width={320}
        height={320}
        priority
        draggable={false}
      />
    </motion.div>
  );
}