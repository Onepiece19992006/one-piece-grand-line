"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Character } from "@/types/character";

type Props = {
  open: boolean;
  onClose: () => void;
  character: Character;
};

export default function CharacterModal({
  open,
  onClose,
  character,
}: Props) {

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .35 }}
          className="fixed inset-0 z-[9999] overflow-y-auto bg-black/80 backdrop-blur-xl px-4 py-8"
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: .92,
              y: 60,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: .92,
              y: 40,
            }}
            transition={{
              duration: .45,
              ease: "easeOut",
            }}
            className={`relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border ${character.theme.border} bg-[#07131d] p-6 md:p-10 shadow-2xl`}
          >

            {/* Background Glow */}

            <div
              className={`absolute inset-0 ${character.theme.glow} opacity-40 blur-[180px]`}
            />

            {/* Close */}

            <button
              onClick={onClose}
              className="absolute right-5 top-5 md:right-8 md:top-8 z-50 text-4xl text-gray-400 transition hover:text-white"
            >
              ×
            </button>

            {/* Main Grid */}

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* LEFT */}

<div className="flex items-center justify-center">

  <motion.div
    initial={{
      opacity: 0,
      x: -50,
    }}
    animate={{
      opacity: 1,
      x: 0,
    }}
    transition={{
      delay: .2,
      duration: .5,
    }}
  >

    <Image
      src={character.image}
      alt={character.name}
      width={420}
      height={650}
      priority
      className="mx-auto w-[240px] sm:w-[300px] md:w-[360px] lg:w-[420px] h-auto drop-shadow-[0_0_40px_rgba(255,255,255,.15)]"
    />

  </motion.div>

</div>

{/* RIGHT */}

<motion.div
  initial={{
    opacity: 0,
    x: 50,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
  transition={{
    delay: .25,
    duration: .5,
  }}
>

  <p
    className={`uppercase tracking-[4px] md:tracking-[6px] ${character.theme.text}`}
  >
    {character.subtitle}
  </p>

  <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black leading-none text-white">
    {character.firstName}
    <br />

    <span
      className={`bg-gradient-to-r ${character.theme.gradient} bg-clip-text text-transparent`}
    >
      {character.lastName}
    </span>

  </h1>

  <p className="mt-4 text-lg md:text-xl font-semibold text-cyan-300">
    {character.role}
  </p>

  <div className="mt-8 md:mt-10 space-y-6">

    <div>

      <h3 className={`font-bold ${character.theme.text}`}>
        ☠ Bounty
      </h3>

      <p className="text-2xl md:text-3xl font-black text-white">
        {character.bounty}
      </p>

    </div>

    <div>

      <h3 className={`font-bold ${character.theme.text}`}>
        🍖 Devil Fruit
      </h3>

      <p className="text-gray-300">
        {character.devilFruit}
      </p>

    </div>

    <div>

      <h3 className={`font-bold ${character.theme.text}`}>
        🎯 Dream
      </h3>

      <p className="leading-7 text-gray-300">
        {character.dream}
      </p>

    </div>

  </div>

</motion.div>

</div >
{/* Character Info */}

<div className="relative z-10 mt-10 border-t border-white/10 pt-8">

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

    <div
      className={`rounded-2xl border ${character.theme.border} bg-white/5 p-5`}
    >
      <p className="text-xs uppercase tracking-[4px] text-gray-400">
        Birthday
      </p>

      <h3 className={`mt-2 text-lg md:text-xl font-bold ${character.theme.text}`}>
        {character.birthday}
      </h3>
    </div>

    <div
      className={`rounded-2xl border ${character.theme.border} bg-white/5 p-5`}
    >
      <p className="text-xs uppercase tracking-[4px] text-gray-400">
        Height
      </p>

      <h3 className={`mt-2 text-lg md:text-xl font-bold ${character.theme.text}`}>
        {character.height}
      </h3>
    </div>

    <div
      className={`rounded-2xl border ${character.theme.border} bg-white/5 p-5`}
    >
      <p className="text-xs uppercase tracking-[4px] text-gray-400">
        Origin
      </p>

      <h3 className={`mt-2 text-lg md:text-xl font-bold ${character.theme.text}`}>
        {character.origin}
      </h3>
    </div>

    <div
      className={`rounded-2xl border ${character.theme.border} bg-white/5 p-5`}
    >
      <p className="text-xs uppercase tracking-[4px] text-gray-400">
        Affiliation
      </p>

      <h3 className={`mt-2 text-lg md:text-xl font-bold ${character.theme.text}`}>
        {character.affiliation}
      </h3>
    </div>

  </div>

  {/* Origin Story */}

  <h2 className={`mt-10 md:mt-12 text-2xl md:text-3xl font-black ${character.theme.text}`}>
    Origin Story
  </h2>

  {/* Quote */}

  <div
    className={`mt-8 rounded-2xl border ${character.theme.border} bg-white/5 p-5 md:p-6`}
  >

    <h3 className={`mb-4 font-bold ${character.theme.text}`}>
      Character Quote
    </h3>

    <p
      className="border-l-2 pl-5 italic text-sm md:text-base text-gray-300"
      style={{
        borderLeftColor: character.theme.color,
      }}
    >
      {character.quote}
    </p>

  </div>

  {/* Story */}

  <motion.p
    initial={{
      opacity: 0,
      y: 20,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      delay: .4,
      duration: .6,
    }}
    className="mt-8 text-sm md:text-base leading-7 md:leading-8 text-gray-300"
  >
    {character.story}
  </motion.p>

</div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );
}