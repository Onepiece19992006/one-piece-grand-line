import CharacterSection from "./CharacterSection";
import { crew } from "@/data/crew";
import CrewSelector from "./CrewSelector";


export default function Crew() {
  return (
    <section id="crew">
      <div className="mx-auto max-w-7xl px-8 pt-24 pb-16 text-center">

        <p className="uppercase tracking-[8px] text-yellow-400">
          STRAW HAT PIRATES
        </p>

        <h2 className="mt-5 text-6xl font-black text-white">
          MEET THE
          <span className="text-yellow-400"> CREW</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Every member has a dream, a purpose, and a story that changed the world.
          Explore each Straw Hat Pirate and discover their legendary journey.
        </p>

      </div>

      <CrewSelector />

      <CharacterSection character={crew.luffy} />
      <CharacterSection character={crew.zoro} />
      <CharacterSection character={crew.nami} />
      <CharacterSection character={crew.usopp} />
      <CharacterSection character={crew.sanji} />
      <CharacterSection character={crew.chopper} />
      <CharacterSection character={crew.robin} />
      <CharacterSection character={crew.franky} />
      <CharacterSection character={crew.brook} />
      <CharacterSection character={crew.jinbe} />

    </section>
  );
}