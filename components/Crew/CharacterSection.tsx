"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import CharacterModal from "@/components/CharacterModal/CharacterModal";
import type { Character } from "../../types/character";


type Props = {
  character: Character;
};

export default function CharacterSection({
  character,
}: Props) {
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
    [0, .2, .8, 1],
    [0, 1, 1, 0]
  );

  const [open, setOpen] = useState(false);

  return (
    <section
      id={character.id}
      ref={ref}
      className="relative overflow-hidden py-16 lg:min-h-screen"
    >

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#04101d] via-[#071c32] to-[#02070d]" />

      {/* Background Character */}

      <motion.div
        initial={{ opacity: 0, scale: .9 }}
        whileInView={{ opacity: .06, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >

        <Image
          src={character.backgroundImage}
          alt={character.name}
          width={700}
          height={700}
          draggable={false}
          className="select-none w-[320px] md:w-[500px] lg:w-[700px] h-auto"
        />

      </motion.div>

      {/* Main */}

      <div className="
        relative
        z-20
        mx-auto
        flex
        max-w-7xl
        flex-col
        lg:flex-row
        items-center
        justify-between
        gap-12
        px-6
        md:px-10
      ">

        {/* LEFT IMAGE */}

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
          className="relative flex justify-center"
        >

          <div
            className={`
              absolute
              left-1/2
              top-1/2
              h-[220px]
              w-[220px]
              md:h-[300px]
              md:w-[300px]
              lg:h-[360px]
              lg:w-[360px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              ${character.theme.glow}
              blur-[120px]
            `}
          />

          <Image
            src={character.image}
            alt={character.name}
            width={450}
            height={620}
            priority
            draggable={false}
            className="
              relative
              z-20
              w-[240px]
              md:w-[340px]
              lg:w-[450px]
              h-auto
            "
          />

        </motion.div>
                {/* RIGHT */}

        <motion.div
          style={{
            x: textX,
            opacity,
          }}
          className="
            w-full
            max-w-2xl
            text-center
            lg:text-left
          "
        >

          <p className="mb-3 text-xs md:text-sm tracking-[5px] md:tracking-[6px] text-gray-500 uppercase">
            {character.number}
          </p>

          <p
            className={`mb-4 uppercase tracking-[4px] md:tracking-[8px] ${character.theme.text}`}
          >
            {character.subtitle}
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black leading-none text-white">
            {character.firstName}
          </h2>

          <h1
            className={`
              mt-1
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              font-black
              leading-none
              bg-gradient-to-r
              ${character.theme.gradient}
              bg-clip-text
              text-transparent
            `}
          >
            {character.lastName}
          </h1>

          <div
            className={`
              mt-6
              h-[2px]
              w-28
              md:w-40
              mx-auto
              lg:mx-0
              bg-gradient-to-r
              ${character.theme.line}
              to-transparent
            `}
          />

          <p className="mt-8 text-xl md:text-2xl font-semibold text-cyan-300">
            {character.role}
          </p>

          <p className="mt-4 text-base md:text-lg leading-7 md:leading-8 text-gray-300">
            {character.description}
          </p>

          {/* Bounty */}

          <div
            className={`
              mt-8
              md:mt-10
              mx-auto
              lg:mx-0
              w-fit
              rounded-2xl
              border
              ${character.theme.border}
              bg-white/5
              backdrop-blur-md
              p-5
              md:p-6
            `}
          >

            <p className="text-xs uppercase tracking-[4px] md:tracking-[5px] text-gray-400">
              Current Bounty
            </p>

            <h3
              className={`
                mt-2
                text-3xl
                md:text-5xl
                font-black
                ${character.theme.text}
              `}
            >
              ☠ {character.bounty}
            </h3>

          </div>

          {/* Quote */}

          <blockquote
            className="mt-8 md:mt-10 border-l-2 pl-5 italic text-lg md:text-xl text-gray-300 text-left"
            style={{
              borderLeftColor: character.theme.color,
            }}
          >
            {character.quote}
          </blockquote>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: .96,
            }}
            onClick={() => setOpen(true)}
            className={`
              mt-10
              md:mt-12
              rounded-full
              border
              ${character.theme.border}
              bg-gradient-to-r
              ${character.theme.gradient}
              px-8
              md:px-10
              py-3
              md:py-4
              font-bold
              text-black
              transition-all
              duration-300
            `}
          >
            Explore Story →
          </motion.button>

        </motion.div>
              </div>

      <CharacterModal
        open={open}
        onClose={() => setOpen(false)}
        character={character}
      />

    </section>
  );
}