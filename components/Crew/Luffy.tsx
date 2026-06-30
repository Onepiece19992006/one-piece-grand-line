"use client";

import CharacterSection from "@/components/Crew/CharacterSection";
import { crew } from "@/data/crew";

export default function Luffy() {
  return <CharacterSection character={crew.luffy} />;
}