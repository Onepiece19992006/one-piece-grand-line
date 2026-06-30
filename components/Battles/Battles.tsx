"use client";

import { motion } from "framer-motion";
import BattleCard from "./BattleCard";
import { battles } from "./battleData";

export default function Battles() {
  return (
    <section
  id="battles"
  className="relative z-20 bg-[#03060a] py-20 sm:py-24 lg:py-32"
>
      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#04101d] via-[#071c32] to-[#02070d]" />

      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[220px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[10px] text-red-400">
            THE GREATEST
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white">
            LEGENDARY{" "}
            <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              BATTLES
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base lg:text-lg leading-7 lg:leading-8 text-gray-400">
            Witness the most iconic clashes that shaped the world of One Piece.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10">

          {battles.map((battle, index) => (
            <motion.div
              key={battle.id}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .6,
                delay: index * .12,
              }}
            >
              <BattleCard battle={battle} />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}