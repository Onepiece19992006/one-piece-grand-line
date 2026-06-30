"use client";

import { motion } from "framer-motion";
import useParallax from "@/hooks/useParallax";

const clouds = [
  {
    width: 520,
    height: 140,
    top: "8%",
    left: "-30%",
    opacity: 0.18,
    duration: 95,
    depth: 4,
  },
  {
    width: 420,
    height: 120,
    top: "18%",
    left: "-40%",
    opacity: 0.15,
    duration: 75,
    depth: 7,
  },
  {
    width: 300,
    height: 90,
    top: "28%",
    left: "-25%",
    opacity: 0.12,
    duration: 55,
    depth: 10,
  },
];

export default function Clouds() {
  const mouse = useParallax();

  return (
    <>
      {clouds.map((cloud, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white blur-[60px]"
          style={{
            width: cloud.width,
            height: cloud.height,
            top: cloud.top,
            left: cloud.left,
            opacity: cloud.opacity,
            transform: `translate(${mouse.x * cloud.depth}px, ${
              mouse.y * cloud.depth
            }px)`,
            transition: "transform .2s ease-out",
          }}
          animate={{
            x: ["0vw", "150vw"],
          }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Moon Glow Mist */}
      <motion.div
        className="absolute top-[18%] left-[58%] w-[700px] h-52 rounded-full bg-cyan-200 blur-[140px]"
        style={{
          opacity: 0.06,
          transform: `translate(${mouse.x * 8}px, ${mouse.y * 8}px)`,
          transition: "transform .2s ease-out",
        }}
      />

      {/* Horizon Fog */}
      <motion.div
        className="absolute bottom-[26vh] left-1/2 -translate-x-1/2 w-[1600px] h-28 rounded-full bg-cyan-200 blur-[120px]"
        style={{
          opacity: 0.08,
        }}
      />
    </>
  );
}