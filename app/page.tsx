import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stars from "@/components/Stars";

import LoadingScreen from "@/components/Loading/LoadingScreen";

import Ocean from "@/components/Ocean/Ocean";

import Crew from "@/components/Crew/Crew";
import WorldMap from "@/components/Map/WorldMap";
import Timeline from "@/components/Timeline/Timeline";
import Battles from "@/components/Battles/Battles";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <LoadingScreen>
      <main className="relative min-h-screen overflow-x-hidden bg-black text-white">

        {/* Ocean Background */}
        <Ocean />

        {/* Stars */}
        <Stars />

        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* Crew */}
        <Crew />

        {/* World Map */}
        <WorldMap />

        {/* Timeline */}
        <Timeline />

        {/* Legendary Battles */}
        <Battles />

        <Footer />

      </main>
    </LoadingScreen>
  );
}