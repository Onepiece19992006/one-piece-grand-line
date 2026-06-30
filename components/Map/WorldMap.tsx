"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import OceanParticles from "./OceanParticles";

export default function WorldMap() {
  return (
    <section
      id="map"
      className="relative min-h-screen overflow-hidden bg-[#04101d] py-20 md:py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#061221] via-[#071c32] to-[#02070d]" />

      <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[220px]" />

      <OceanParticles />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center font-black"
        >
          <span className="block text-sm md:text-lg tracking-[6px] md:tracking-[12px] text-cyan-300">
            EXPLORE THE
          </span>

          <span className="mt-3 block bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-4xl sm:text-5xl lg:text-7xl text-transparent">
            WORLD OF ONE PIECE
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-2xl text-center text-base md:text-lg leading-7 md:leading-8 text-gray-400"
        >
          Explore every sea, island and legendary route across the Grand Line.
        </motion.p>

        <div className="mx-auto mt-20 mb-16 h-[2px] w-40 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

        {/* MAP */}

<motion.div
  initial={{ opacity: 0, scale: .9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  whileHover={{
    rotateX: 2,
    rotateY: -2,
    scale: 1.01,
  }}
  transition={{ duration: .5 }}
  viewport={{ once: true }}
  className="relative mt-10"
>

  <div className="absolute left-1/2 top-1/2 h-[300px] sm:h-[500px] lg:h-[700px] w-[300px] sm:w-[500px] lg:w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[120px]" />

  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ duration: .4 }}
    className="relative"
  >

    <Image
      src="/world-map.webp"
      alt="One Piece World Map"
      width={1600}
      height={1000}
      className="w-full rounded-2xl lg:rounded-3xl border border-yellow-400/20 shadow-[0_0_80px_rgba(255,220,100,.08)]"
    />

    {/* East Blue */}
    <div className="absolute right-[18%] top-[23%]">
      <div className="group relative cursor-pointer">
        <div className="h-2 w-2 sm:h-3 sm:w-3 lg:h-4 lg:w-4 rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee] animate-pulse" />

        <div className="absolute left-4 sm:left-6 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-black/80 px-2 py-1 text-[10px] sm:text-xs lg:text-sm text-white group-hover:block">
          East Blue
        </div>
      </div>
    </div>

    {/* Reverse Mountain */}
    <div className="absolute left-[49%] top-[49%]">
      <div className="group relative cursor-pointer">
        <div className="h-2 w-2 sm:h-3 sm:w-3 lg:h-4 lg:w-4 rounded-full bg-red-500 shadow-[0_0_25px_red] animate-pulse" />

        <div className="absolute left-4 sm:left-6 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-black/80 px-2 py-1 text-[10px] sm:text-xs lg:text-sm text-white group-hover:block">
          Reverse Mountain
        </div>
      </div>
    </div>

    {/* Wano */}
    <div className="absolute left-[17%] top-[48%]">
      <div className="group relative cursor-pointer">
        <div className="h-2 w-2 sm:h-3 sm:w-3 lg:h-4 lg:w-4 rounded-full bg-purple-500 shadow-[0_0_25px_violet] animate-pulse" />

        <div className="absolute left-4 sm:left-6 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-black/80 px-2 py-1 text-[10px] sm:text-xs lg:text-sm text-white group-hover:block">
          Wano
        </div>
      </div>
    </div>

    {/* Marineford */}
    <div className="absolute left-[42%] top-[50%]">
      <div className="group relative cursor-pointer">
        <div className="h-2 w-2 sm:h-3 sm:w-3 lg:h-4 lg:w-4 rounded-full bg-yellow-400 shadow-[0_0_25px_yellow] animate-pulse" />

        <div className="absolute left-4 sm:left-6 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-black/80 px-2 py-1 text-[10px] sm:text-xs lg:text-sm text-white group-hover:block">
          Marineford
        </div>
      </div>
    </div>

    {/* Egghead */}
    <div className="absolute left-[11%] top-[42%]">
      <div className="group relative cursor-pointer">
        <div className="h-2 w-2 sm:h-3 sm:w-3 lg:h-4 lg:w-4 rounded-full bg-pink-400 shadow-[0_0_25px_hotpink] animate-pulse" />

        <div className="absolute left-4 sm:left-6 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-black/80 px-2 py-1 text-[10px] sm:text-xs lg:text-sm text-white group-hover:block">
          Egghead
        </div>
      </div>
    </div>

  </motion.div>

</motion.div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,.25)]">
            <p className="text-5xl font-black text-cyan-300">
              1000+
            </p>

            <p className="mt-3 text-gray-400">
              Islands
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,220,80,.25)]">
            <p className="text-5xl font-black text-yellow-400">
              4
            </p>

            <p className="mt-3 text-gray-400">
              Blues
            </p>
          </div>

          <div className="rounded-3xl border border-red-400/20 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(248,113,113,.25)]">
            <p className="text-5xl font-black text-red-400">
              Grand
            </p>

            <p className="mt-3 text-gray-400">
              Line
            </p>
          </div>

          <div className="rounded-3xl border border-green-400/20 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(74,222,128,.25)]">
            <p className="text-5xl font-black text-green-400">
              Great
            </p>

            <p className="mt-3 text-gray-400">
              Pirate Era
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}