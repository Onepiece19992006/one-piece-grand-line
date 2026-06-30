"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";

export default function Navbar() {
  const { scrollYProgress } = useScroll();

  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", "crew", "map", "story", "battles"];

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop - 120;

          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500
      ${
        scrolled
          ? "bg-black/70 backdrop-blur-2xl py-1 shadow-[0_10px_40px_rgba(0,0,0,.5)]"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10 py-5">

        {/* Logo */}

        <h1
          className="text-xl md:text-2xl font-black tracking-[4px] md:tracking-[8px] text-yellow-400 transition-all duration-500 hover:scale-105"
          style={{
            textShadow:
              active === "home"
                ? "0 0 18px rgba(255,215,0,.9)"
                : "0 0 8px rgba(255,215,0,.35)",
          }}
        >
          ONE PIECE
        </h1>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(true)}
          className="flex flex-col gap-1 md:hidden"
        >
          <span className="h-[2px] w-7 bg-white"></span>
          <span className="h-[2px] w-7 bg-white"></span>
          <span className="h-[2px] w-7 bg-white"></span>
        </button>

        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center gap-10 text-gray-300">

          <a
            href="#home"
            className={`relative text-sm uppercase tracking-[3px] transition duration-300 ${
              active === "home"
                ? "text-yellow-400"
                : "text-gray-300 hover:text-yellow-400"
            }`}
          >
            Home

            <span
              className={`absolute left-0 -bottom-2 h-[2px] bg-yellow-400 transition-all duration-300 ${
                active === "home" ? "w-full" : "w-0"
              }`}
            />
          </a>

          <a
            href="#crew"
            className={`relative text-sm uppercase tracking-[3px] transition duration-300 ${
              active === "crew"
                ? "text-yellow-400"
                : "text-gray-300 hover:text-yellow-400"
            }`}
          >
            Crew

            <span
              className={`absolute left-0 -bottom-2 h-[2px] bg-yellow-400 transition-all duration-300 ${
                active === "crew" ? "w-full" : "w-0"
              }`}
            />
          </a>

          <a
            href="#map"
            className={`relative text-sm uppercase tracking-[3px] transition duration-300 ${
              active === "map"
                ? "text-yellow-400"
                : "text-gray-300 hover:text-yellow-400"
            }`}
          >
            Map

            <span
              className={`absolute left-0 -bottom-2 h-[2px] bg-yellow-400 transition-all duration-300 ${
                active === "map" ? "w-full" : "w-0"
              }`}
            />
          </a>

          <a
            href="#story"
            className={`relative text-sm uppercase tracking-[3px] transition duration-300 ${
              active === "story"
                ? "text-yellow-400"
                : "text-gray-300 hover:text-yellow-400"
            }`}
          >
            Story

            <span
              className={`absolute left-0 -bottom-2 h-[2px] bg-yellow-400 transition-all duration-300 ${
                active === "story" ? "w-full" : "w-0"
              }`}
            />
          </a>

          <a
            href="#battles"
            className={`relative text-sm uppercase tracking-[3px] transition duration-300 ${
              active === "battles"
                ? "text-yellow-400"
                : "text-gray-300 hover:text-yellow-400"
            }`}
          >
            Battles

            <span
              className={`absolute left-0 -bottom-2 h-[2px] bg-yellow-400 transition-all duration-300 ${
                active === "battles" ? "w-full" : "w-0"
              }`}
            />
          </a>

        </div>

      </div>
            {/* Scroll Progress */}

      <motion.div
        className="absolute bottom-0 left-0 h-[2px] origin-left"
        style={{
          scaleX: scrollYProgress,
          width: "100%",
          background:
            "linear-gradient(90deg,#facc15,#f97316,#38bdf8)",
          boxShadow: "0 0 18px rgba(250,204,21,.8)",
        }}
      />

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.4,
            }}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-10 bg-[#06131d] md:hidden"
          >

            {/* Close */}

            <button
              onClick={() => setMenuOpen(false)}
              className="absolute right-8 top-8 text-5xl text-white"
            >
              ×
            </button>

            {[
              "home",
              "crew",
              "map",
              "story",
              "battles",
            ].map((item) => (

              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className={`
                  text-4xl
                  font-black
                  uppercase
                  tracking-[6px]
                  transition
                  ${
                    active === item
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }
                `}
              >
                {item}
              </a>

            ))}

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
}