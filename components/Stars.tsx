"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useParallax from "@/hooks/useParallax";

type Star = {
  id: number;
  left: number;
  top: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
};

export default function Stars() {
  const mouse = useParallax();

  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 120 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      top: Math.random() * 70,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));

    setStars(generatedStars);
  }, []);

  return (
    
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        transform: `translate(${mouse.x * 3}px, ${mouse.y * 3}px)`,
        transition: "transform .2s ease-out",
      }}
    >
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            background:
  Math.random() > 0.94
    ? "#ffd54a"
    : Math.random() > 0.85
    ? "#9be7ff"
    : "#ffffff",
            boxShadow:
"0 0 14px rgba(255,255,255,.9)",
          }}
          animate={{
            opacity:[
star.opacity,
0.35,
1,
0.4,
star.opacity
],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting Star 1 */}
      <motion.div
        className="absolute top-[12%] left-[-20%] w-44 h-[2px] rounded-full bg-gradient-to-r from-white to-transparent blur-[1px]"
        animate={{
          x: ["0vw", "140vw"],
          y: ["0vh", "45vh"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 9,
          ease: "easeIn",
        }}
      />

      {/* Shooting Star 2 */}
      <motion.div
        className="absolute top-[30%] left-[-30%] w-32 h-[2px] rounded-full bg-gradient-to-r from-cyan-300 to-transparent blur-[1px]"
        animate={{
          x: ["0vw", "130vw"],
          y: ["0vh", "35vh"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 14,
          ease: "easeIn",
        }}
      />

      {/* Shooting Star 3 */}

<motion.div
  className="absolute top-[8%] right-[-20%] w-52 h-[2px] rounded-full bg-gradient-to-l from-white via-cyan-200 to-transparent blur-[1px]"
  animate={{
    x: ["0vw","-150vw"],
    y:["0vh","55vh"],
    opacity:[0,1,0],
  }}
  transition={{
    duration:2.8,
    repeat:Infinity,
    repeatDelay:18,
    ease:"easeIn",
  }}
/>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.08),transparent_60%)]" />
    </div>
  );
}