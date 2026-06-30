"use client";

import { motion } from "framer-motion";
import useParallax from "@/hooks/useParallax";
import { useCallback } from "react";

export default function Hero() {
  const mouse = useParallax();

  const handleAdventure = useCallback(() => {
  document.getElementById("crew")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}, []);

  return (
    <section
  id="home"
  className="relative z-50 flex min-h-screen flex-col items-center justify-center px-5 sm:px-6 md:px-8 text-center"
  style={{
    transform: `translate(${mouse.x * 6}px, ${mouse.y * 6}px)`,
    transition: "transform 0.15s ease-out",
  }}
>
      {/* Welcome */}
      <motion.p
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-5 text-yellow-300 uppercase tracking-[10px] text-sm md:text-base"
      >
        Welcome to
      </motion.p>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -6, 0],
        }}
        transition={{
          duration: 1.3,
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          select-none
          text-4xl
sm:text-5xl
md:text-7xl
lg:text-8xl
xl:text-9xl
          font-black
          uppercase
          tracking-[4px]
sm:tracking-[6px]
md:tracking-[10px]
          bg-gradient-to-b
          from-[#fff6c7]
          via-[#ffd65b]
          to-[#b86d00]
          bg-clip-text
          text-transparent
          relative overflow-hidden
        "
        style={{
          textShadow:
            "0 0 18px rgba(255,220,120,.35),0 0 60px rgba(255,170,0,.18)",
        }}
      >
        GRAND LINE
      </motion.h1>

      <motion.div
  className="absolute top-[25%]
left-[-60%]
h-20
w-24
md:h-28
md:w-40 rotate-12 bg-white/25 blur-2xl"
  animate={{
    left: ["-40%", "140%"],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "linear",
    repeatDelay: 2,
  }}
/>

      {/* Golden Divider */}
      <motion.div
        initial={{ width: 0 }}
        animate={{
  width:
    typeof window !== "undefined" && window.innerWidth < 768
      ? 140
      : 220,
}}
        transition={{
          delay: 0.8,
          duration: 1,
        }}
        className="my-7 h-[2px] rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
      />

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className="text-base
sm:text-lg
md:text-2xl font-light tracking-[3px]
sm:tracking-[6px] text-white"
      >
        THE LEGEND BEGINS HERE
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.3,
          duration: 1,
        }}
        className="
mt-6
max-w-xs
sm:max-w-lg
md:max-w-3xl
text-sm
sm:text-base
md:text-lg
leading-7
md:leading-8
text-gray-300
"
      >
        Sail across the endless ocean, discover forgotten islands,
        challenge legendary pirates and begin your journey toward the
        greatest treasure ever known...
        <span className="font-semibold text-cyan-300"> One Piece.</span>
      </motion.p>

      {/* Button */}
      <motion.button
  onClick={handleAdventure}

  initial={{ opacity: 0, y: 35 }}
  animate={{ opacity: 1, y: 0 }}

  transition={{
    delay: 1.8,
    duration: 0.8,
  }}

  whileHover={{
    scale: 1.08,
    boxShadow: "0px 0px 40px rgba(255,215,0,.45)",
  }}

  whileTap={{
    scale: 0.95,
  }}

  className="
    mt-12
    rounded-full
    border
    border-yellow-400/50
    bg-gradient-to-r
    from-yellow-400
    via-yellow-500
    to-orange-500
    px-7
py-3
sm:px-10
sm:py-4
text-base
sm:text-lg
    font-bold
    tracking-wider
    text-black
    cursor-pointer
  "
>
  ⚓ BEGIN ADVENTURE
</motion.button>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 12, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-6
sm:bottom-12 flex flex-col items-center"
      >
        <p className="mb-3 text-xs uppercase tracking-[6px] text-gray-400">
          Scroll
        </p>

        <div className="h-10 w-[2px] rounded-full bg-gradient-to-b from-cyan-300 to-transparent" />
      </motion.div>
    </section>
  );
}