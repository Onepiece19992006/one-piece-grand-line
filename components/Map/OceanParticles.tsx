"use client";

export default function OceanParticles() {
  return (
    <>
      {[...Array(35)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-cyan-300/40 animate-pulse"
          style={{
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </>
  );
}