"use client";

import { motion } from "framer-motion";

export default function Waves() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[30vh] overflow-hidden z-20">

      {/* Wave 1 */}
      <motion.div
        animate={{
          x: [0, -120],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 w-[220%] h-24 bg-[#1b8ed8] rounded-[100%]"
      />

      {/* Wave 2 */}
      <motion.div
        animate={{
          x: [-120, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-4 w-[220%] h-20 bg-[#33a9f4]/80 rounded-[100%]"
      />

      {/* Wave 3 */}
      <motion.div
        animate={{
          x: [0, -80],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 w-[220%] h-16 bg-cyan-300/50 rounded-[100%]"
      />
    </div>
  );
}