"use client";

import { motion } from "framer-motion";

export default function Compass() {
  return (
    <motion.div
      className="relative w-80 h-80"
      animate={{ rotate: 360 }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Golden Glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-yellow-400/20 blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      <svg
        viewBox="0 0 500 500"
        className="relative z-10 w-full h-full drop-shadow-[0_0_40px_rgba(255,220,120,0.6)]"
      >
        <defs>
          <radialGradient id="gold">
            <stop offset="0%" stopColor="#fff7d6" />
            <stop offset="40%" stopColor="#f5cb61" />
            <stop offset="100%" stopColor="#704200" />
          </radialGradient>

          <linearGradient id="glass" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>

          <radialGradient id="center">
            <stop offset="0%" stopColor="#fffdf5" />
            <stop offset="100%" stopColor="#d19a00" />
          </radialGradient>
        </defs>

        {/* Outer Ring */}
        <circle
          cx="250"
          cy="250"
          r="225"
          fill="#1d1200"
          stroke="url(#gold)"
          strokeWidth="12"
        />

        <circle
          cx="250"
          cy="250"
          r="205"
          fill="none"
          stroke="#9b6400"
          strokeWidth="3"
        />

        {/* Small Tick Marks */}
        {Array.from({ length: 36 }).map((_, i) => (
          <g
            key={i}
            transform={`rotate(${i * 10} 250 250)`}
          >
            <line
              x1="250"
              y1="35"
              x2="250"
              y2={i % 3 === 0 ? "62" : "52"}
              stroke="#f8d97a"
              strokeWidth={i % 3 === 0 ? 3 : 1}
            />
          </g>
        ))}

        {/* Compass Star */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <g
            key={angle}
            transform={`rotate(${angle} 250 250)`}
          >
            <polygon
              points="250,70 270,250 250,220 230,250"
              fill="url(#gold)"
            />
          </g>
        ))}

        {/* Red Needle */}
        <motion.g
          animate={{
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            transformOrigin: "250px 250px",
          }}
        >
          <polygon
            points="250,90 270,250 250,235 230,250"
            fill="#d72638"
          />

          <polygon
            points="250,410 270,250 250,265 230,250"
            fill="#2b7fff"
          />
        </motion.g>

        {/* Center Circle */}
        <circle
          cx="250"
          cy="250"
          r="24"
          fill="url(#center)"
          stroke="#fff5b5"
          strokeWidth="2"
        />

        {/* Glass Reflection */}
        <ellipse
          cx="185"
          cy="145"
          rx="80"
          ry="32"
          fill="white"
          opacity="0.08"
          transform="rotate(-28 185 145)"
        />

        {/* Letters */}
        {[
          ["N", 250, 34],
          ["E", 470, 258],
          ["S", 250, 486],
          ["W", 30, 258],
        ].map(([t, x, y]) => (
          <text
            key={String(t)}
            x={Number(x)}
            y={Number(y)}
            textAnchor="middle"
            fontSize="28"
            fontWeight="bold"
            fill="#ffd76a"
          >
            {t}
          </text>
        ))}
      </svg>
    </motion.div>
  );
}