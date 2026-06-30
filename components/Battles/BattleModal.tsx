"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Battle = {
  id: number;
  title: string;
  fighter1: string;
  fighter2: string;
  winner: string;
  arc: string;
  episode: string;
  chapter: string;
  difficulty: string;
  finalAttack: string;
  image: string;
  quote: string;
  description: string;
  story: string;
  color: string;

  theme: {
    text: string;
    gradient: string;
    border: string;
    glow: string;
    color: string;
  };
};

type Props = {
  open: boolean;
  onClose: () => void;
  battle: Battle;
};

export default function BattleModal({
  open,
  onClose,
  battle,
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
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[9999] overflow-y-auto bg-black/80 backdrop-blur-xl px-4 py-6"
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 60,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              y: 40,
            }}
            transition={{
              duration: .45,
              ease: "easeOut",
            }}
            className={`relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border ${battle.theme.border} bg-[#07131d] p-5 md:p-8 lg:p-10 shadow-2xl`}
          >

            {/* Background Glow */}

            <div
              className={`absolute inset-0 ${battle.theme.glow} opacity-30 blur-[180px]`}
            />

            {/* Close */}

            <button
              onClick={onClose}
              className="absolute right-4 top-4 md:right-8 md:top-8 z-50 text-3xl md:text-4xl text-gray-400 hover:text-white"
            >
              ×
            </button>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">

              {/* LEFT */}

              <div>

                <Image
                  src={battle.image}
                  alt={battle.title}
                  width={520}
                  height={700}
                  className="mx-auto w-[260px] sm:w-[340px] md:w-[430px] lg:w-[520px] h-auto rounded-2xl"
                />

              </div>

              {/* RIGHT */}

              <div>

                <p className={`uppercase tracking-[4px] md:tracking-[6px] ${battle.theme.text}`}>
                  {battle.arc}
                </p>

                <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
                  {battle.title}
                </h1>

                <p className="mt-6 text-base md:text-lg leading-7 text-gray-300">
                  {battle.description}
                </p>

                <div className="mt-8 md:mt-10 space-y-5">
                                      <div>
                    <h3 className={`text-sm md:text-base ${battle.theme.text} font-bold`}>
                      👑 Winner
                    </h3>

                    <p className="text-xl md:text-2xl font-black text-white">
                      {battle.winner}
                    </p>
                  </div>

                  <div>
                    <h3 className={`text-sm md:text-base ${battle.theme.text} font-bold`}>
                      🎬 Episode
                    </h3>

                    <p className="text-sm md:text-base text-gray-300">
                      {battle.episode}
                    </p>
                  </div>

                  <div>
                    <h3 className={`text-sm md:text-base ${battle.theme.text} font-bold`}>
                      📖 Chapter
                    </h3>

                    <p className="text-sm md:text-base text-gray-300">
                      {battle.chapter}
                    </p>
                  </div>

                  <div>
                    <h3 className={`text-sm md:text-base ${battle.theme.text} font-bold`}>
                      ⚔ Difficulty
                    </h3>

                    <p className="text-sm md:text-base text-gray-300">
                      {battle.difficulty}
                    </p>
                  </div>

                  <div>
                    <h3 className={`text-sm md:text-base ${battle.theme.text} font-bold`}>
                      💥 Final Attack
                    </h3>

                    <p className="text-sm md:text-base text-gray-300">
                      {battle.finalAttack}
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Bottom Section */}

            <div className="relative z-10 mt-10 md:mt-12 border-t border-white/10 pt-8">

              <h2 className={`text-2xl md:text-3xl font-black ${battle.theme.text}`}>
                Battle Story
              </h2>

              <div
                className={`mt-8 rounded-2xl border ${battle.theme.border} bg-white/5 p-5 md:p-6`}
              >

                <h3 className={`mb-4 text-sm md:text-base font-bold ${battle.theme.text}`}>
                  Legendary Quote
                </h3>

                <p className="italic text-sm md:text-base leading-7 text-gray-300">
                  {battle.quote}
                </p>

              </div>

              <p className="mt-8 text-sm md:text-base leading-7 md:leading-8 text-gray-300">
                {battle.story}
              </p>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}