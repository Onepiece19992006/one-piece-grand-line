"use client";

import CharacterSection from "@/components/Crew/CharacterSection";
import { crew } from "@/data/crew";

export default function Zoro() {
  return <CharacterSection character={crew.zoro} />;
}