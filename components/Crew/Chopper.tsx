"use client";

import Image from "next/image";
import Smoke from "./Smoke";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export default function Luffy() {
    const ref = useRef(null);

const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"],
});

const imageX = useTransform(
  scrollYProgress,
  [0, 0.5, 1],
  [-250, 0, 120]
);

const imageY = useTransform(
  scrollYProgress,
  [0, 0.5, 1],
  [120, 0, -80]
);

const textX = useTransform(
  scrollYProgress,
  [0, 0.5, 1],
  [250, 0, -100]
);

const opacity = useTransform(
  scrollYProgress,
  [0, 0.2, 0.8, 1],
  [0, 1, 1, 0]
);
  return (
    <section 
    id="chopper"

     ref={ref}
    className="relative min-h-screen overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04101d] via-[#071c32] to-[#02070d]" />

      <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 0.06, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1.5 }}
  className="absolute inset-0 flex items-center justify-center pointer-events-none"
>
  <Image
    src="/Crew/chopper-one-piece.png"
    alt="Straw Hat Jolly Roger"
    width={800}
    height={800}
    draggable={false}
    className="select-none"
  />
</motion.div>

      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400/10 blur-[180px]" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-20 lg:flex-row">

        {/* Outer Glow */}
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-pink-300/10 blur-[120px]" />

{/* Inner Glow */}
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-white/20 blur-[70px]" />

{/* Energy Ring */}
<motion.div
style={{
  x: imageX,
  y: imageY,
  opacity,
}}

  animate={{
    rotate: 360,
    scale: [1, 1.05, 1],
  }}
  transition={{
    rotate: {
      duration: 18,
      repeat: Infinity,
      ease: "linear",
    },
    scale: {
      duration: 4,
      repeat: Infinity,
    },
  }}
  className="
  absolute
  left-1/2
  top-1/2
  -translate-x-1/2
  -translate-y-1/2
  w-[360px]
  h-[360px]
  rounded-full
  border
  border-white/10
  "
/>

        {/* Left : Image */}
       <motion.div
  style={{
    x: imageX,
    y: imageY,
    opacity,
  }}
  animate={{
    y: [0, -10, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative"
>
          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400/20 blur-[120px]" />

          <motion.div
            whileHover={{
              scale: 1.04,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <Image
              src="/crew/chopper.png"
              alt="Monkey D. Luffy"
              width={520}
              height={720}
              priority
              draggable={false}
              className="relative z-20 drop-shadow-[0_0_40px_rgba(255,210,90,.35)]"
            />
            <Smoke />
          </motion.div>
        </motion.div>

<p className="mb-3 text-sm tracking-[6px] text-gray-500 uppercase">
  #06 STRAW HAT PIRATE
</p>

        {/* Right : Text */}
        <motion.div
        style={{
  x: textX,
  opacity,
}}
          className="max-w-xl"
        >
          <p className="mb-4 uppercase tracking-[8px] text-pink-400">
            Cotton Candy Lover
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-none text-white">
  TONY TONY
</h2>

<h1
  className="
    text-7xl
    md:text-8xl
    font-black
    bg-gradient-to-r
    from-pink-200
    via-pink-400
    to-rose-500
    bg-clip-text
    text-transparent
  "
>
  CHOPPER
</h1>

          <div className="mt-6 h-[2px] w-40 bg-gradient-to-r from-pink-400 to-transparent" />

          <p className="mt-8 text-2xl font-semibold text-cyan-300">
            Doctor
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-300">
           The doctor of the Straw Hat Pirates. A reindeer who ate the Human-Human Fruit and dreams of curing every disease.
            <span className="font-semibold text-pink-300">
              {" "}One Piece.
            </span>
          </p>

          <div className="mt-10 rounded-2xl border border-pink-400/20 bg-white/5 backdrop-blur-md p-6 w-fit">

  <p className="text-xs uppercase tracking-[5px] text-gray-400">
    Current Bounty
  </p>

  <h3 className="mt-2 text-5xl font-black text-pink-400">
    ☠ 1,000
  </h3>

  <p className="mt-1 text-sm text-gray-400">
    1,000 Berries
  </p>

</div>

          <blockquote className="mt-10 border-l-2 border-pink-400 pl-5 italic text-xl text-gray-300">
            "I'm not happy even if you compliment me!"
          </blockquote>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 35px rgba(255,210,90,.45)",
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="mt-12 rounded-full border border-pink-400/50 bg-gradient-to-r from-pink-400 via-pink-500 to-rose-500 px-10 py-4 font-bold text-black"
          >
            Explore Story →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}