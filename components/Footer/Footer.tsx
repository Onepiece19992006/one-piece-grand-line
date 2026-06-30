"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#01060d] pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10">

        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">

  <svg
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    className="w-[200%] h-16 sm:h-20 lg:h-28 animate-[waveMove_18s_linear_infinite]"
  >
    <path
      fill="#0b74b8"
      fillOpacity="0.35"
      d="
      M0,160
      C120,220,240,220,360,192
      C480,160,600,128,720,149
      C840,171,960,245,1080,234
      C1200,224,1320,128,1440,117
      L1440,320
      L0,320
      Z"
    />
  </svg>

</div>

      {/* Top Divider */}

      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      {/* Glow */}

      <div className="absolute left-1/2 top-0 h-60 w-[700px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Logo */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-black tracking-[4px] sm:tracking-[8px] lg:tracking-[10px] text-yellow-400"
        >
          ONE PIECE
        </motion.h2>

        <p className="mt-5 text-center text-gray-400">
          The Journey Never Ends...
        </p>

        {/* Links */}

        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-300 text-sm sm:text-base">

          <a href="#home" className="transition hover:text-yellow-400">
            Home
          </a>

          <a href="#crew" className="transition hover:text-yellow-400">
            Crew
          </a>

          <a href="#map" className="transition hover:text-yellow-400">
            Map
          </a>

          <a href="#story" className="transition hover:text-yellow-400">
            Story
          </a>

          <a href="#battles" className="transition hover:text-yellow-400">
            Battles
          </a>

        </div>

        {/* Bottom */}

        <div className="mt-12 sm:mt-16 lg:mt-20 border-t border-white/10 pt-8 text-center">

          <p className="text-gray-500">
            © 2026 One Piece Fan Project
          </p>

          <p className="mt-2 text-gray-600">
            Made with ❤️ by Arjun
          </p>

        </div>

      </div>

    </footer>
  );
}