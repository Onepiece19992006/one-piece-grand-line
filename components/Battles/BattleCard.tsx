"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import BattleModal from "./BattleModal";

type Props = {
  battle: any;
};

export default function BattleCard({ battle }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        onClick={() => setOpen(true)}
        whileHover={{
          y: -12,
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          duration: 0.35,
        }}
        className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
      >
        {/* Image */}

        <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
          <Image
            src={battle.image}
            alt={battle.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div
            className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
            style={{
              background: `linear-gradient(to top, ${battle.color}55, transparent)`,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        {/* Content */}

        <div className="p-5 sm:p-6 lg:p-8">
          <p
  className="text-xs sm:text-sm uppercase tracking-[3px] sm:tracking-[4px]"
  style={{ color: battle.color }}
>
  {battle.arc}
</p>

<h3 className="mt-3 text-2xl sm:text-3xl font-black text-white">
  {battle.title}
</h3>

<p className="mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-gray-400">
  {battle.quote}
</p>

          <button
  className="mt-6 sm:mt-8 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-black transition hover:scale-105"
            style={{
              background: battle.color,
            }}
          >
            Explore Battle →
          </button>
        </div>
      </motion.div>

      <BattleModal
        open={open}
        onClose={() => setOpen(false)}
        battle={battle}
      />
    </>
  );
}