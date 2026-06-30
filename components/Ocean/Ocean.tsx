"use client";

import Moon from "./Moon";
import Clouds from "./Clouds";
import Waves from "./Waves";
import ThousandSunny from "./ThousandSunny";

export default function Ocean() {
  return (
    <section className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {/* Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#031423] via-[#0d4772] to-[#1175b8]" />

      {/* Moon */}
      <Moon />

      {/* Stars Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.08),transparent_60%)]" />

      {/* Clouds */}
      <Clouds />

      {/* Ocean */}
      <div className="absolute bottom-0 w-full h-[22vh] bg-gradient-to-b from-[#0b7ed3] via-[#0866ad] to-[#02233f]" />

      {/* Waves */}
      <Waves />

      <div className="absolute bottom-[28vh] w-full h-px bg-cyan-200/20" />

      {/* Ship */}
      <ThousandSunny />

    </section>
  );
}