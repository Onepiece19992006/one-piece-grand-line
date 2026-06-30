"use client";

import Image from "next/image";

const crew = [
  { name: "Luffy", image: "/crew/luffy.png", id: "home" },
  { name: "Zoro", image: "/crew/zoro.png", id: "zoro" },
  { name: "Nami", image: "/crew/nami.png", id: "nami" },
  { name: "Usopp", image: "/crew/usopp.png", id: "usopp" },
  { name: "Sanji", image: "/crew/sanji.png", id: "sanji" },
  { name: "Chopper", image: "/crew/chopper.png", id: "chopper" },
  { name: "Robin", image: "/crew/robin.png", id: "robin" },
  { name: "Franky", image: "/crew/franky.png", id: "franky" },
  { name: "Brook", image: "/crew/brook.png", id: "brook" },
  { name: "Jinbe", image: "/crew/jinbe.png", id: "jinbe" },
];

export default function CrewSelector() {
  return (
    <section className="relative overflow-hidden bg-[#02070d] py-24">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">

        <p className="text-center uppercase tracking-[8px] text-yellow-400">
          Straw Hat Pirates
        </p>

        <h2 className="mt-4 text-center text-6xl font-black text-white">
          CHOOSE YOUR CREW
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-400">
          Click on any Straw Hat Pirate to jump directly to their profile.
        </p>

        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">

          {crew.map((member) => (

            <a
              key={member.name}
              href={`#${member.id}`}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-md
                transition-all
                duration-500
                hover:-translate-y-4
                hover:border-yellow-400/40
                hover:bg-white/10
              "
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-t from-yellow-400/10 to-transparent" />

              <Image
                src={member.image}
                alt={member.name}
                width={220}
                height={260}
                draggable={false}
                className="
                  relative
                  z-10
                  mx-auto
                  h-[220px]
                  w-auto
                  object-contain
                  transition-all
                  duration-500
                  group-hover:scale-110
                "
              />

              <h3 className="relative z-10 mt-6 text-center text-xl font-bold text-white transition group-hover:text-yellow-300">
                {member.name}
              </h3>

            </a>

          ))}

        </div>

      </div>
    </section>
  );
}