"use client";

import { motion } from "framer-motion";

const arcs = [
  {
    title: "Romance Dawn",
    episode: "Episodes 1–3",
    description:
      "Monkey D. Luffy begins his legendary adventure and starts searching for loyal crewmates to form the Straw Hat Pirates.",
    color: "bg-yellow-400",
    text: "text-yellow-400",
  },
  {
    title: "Orange Town",
    episode: "Episodes 4–8",
    description:
      "Luffy meets Nami and defeats Buggy the Clown while expanding his crew.",
    color: "bg-orange-400",
    text: "text-orange-400",
  },
  {
    title: "Syrup Village",
    episode: "Episodes 9–18",
    description:
      "Usopp joins the Straw Hats after the battle against Captain Kuro.",
    color: "bg-green-400",
    text: "text-green-400",
  },
  {
    title: "Baratie",
    episode: "Episodes 19–30",
    description:
      "Sanji joins the crew after Luffy defeats Don Krieg aboard the floating restaurant.",
    color: "bg-cyan-400",
    text: "text-cyan-400",
  },
  {
    title: "Arlong Park",
    episode: "Episodes 31–44",
    description:
      "The Straw Hats free Nami's village and defeat Arlong, becoming a true family.",
    color: "bg-red-400",
    text: "text-red-400",
  },
  {
    title: "Alabasta",
    episode: "Episodes 92–130",
    description:
      "The crew defeats Crocodile and saves the kingdom of Alabasta.",
    color: "bg-yellow-500",
    text: "text-yellow-500",
  },
  {
    title: "Enies Lobby",
    episode: "Episodes 264–312",
    description:
      "The Straw Hats declare war on the World Government to rescue Nico Robin.",
    color: "bg-purple-400",
    text: "text-purple-400",
  },
  {
    title: "Marineford",
    episode: "Episodes 457–489",
    description:
      "The greatest war begins as Luffy fights desperately to save Ace.",
    color: "bg-pink-400",
    text: "text-pink-400",
  },
  {
    title: "Wano Country",
    episode: "Episodes 890–1088",
    description:
      "Luffy awakens Gear Fifth and defeats Kaido, becoming one of the Four Emperors.",
    color: "bg-emerald-400",
    text: "text-emerald-400",
  },
];

export default function Timeline() {
  return (
    <section
  id="story"
  className="relative z-20 bg-[#02070d] py-20 md:py-32"
>
      <div className="mx-auto max-w-6xl px-5 md:px-8">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-white"
        >
          STORY{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
            TIMELINE
          </span>
        </motion.h2>

        <p className="mx-auto mt-6 max-w-xl px-2 text-center text-sm md:text-base leading-7 text-gray-400">
          Follow Luffy's journey from East Blue to Egghead.
        </p>

        <div className="relative mt-16 md:mt-24">

          {/* Vertical Line */}

          <div className="absolute left-4 sm:left-8 top-0 h-full w-[3px] bg-gradient-to-b from-yellow-400 via-cyan-400 to-purple-500" />

          {arcs.map((arc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .08,
              }}
              className="relative mb-16 sm:mb-24 ml-12 sm:ml-24"
            >
              <div
                className={`absolute -left-[43px] sm:-left-[67px] top-3 h-4 w-4 sm:h-5 sm:w-5 rounded-full ${arc.color} shadow-[0_0_20px_white]`}
              />

              <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-black ${arc.text}`}>
                {arc.title}
              </h3>

              <p className="mt-2 text-sm md:text-base text-gray-400">
                {arc.episode}
              </p>

              <p className="mt-4 max-w-2xl text-sm sm:text-base lg:text-lg leading-7 lg:leading-8 text-gray-300">
                {arc.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}