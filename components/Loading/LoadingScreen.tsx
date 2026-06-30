"use client";

import { useEffect, useState } from "react";
import Compass from "./Compass";

export default function LoadingScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black flex-col">

        <Compass />

        <h1 className="mt-8 text-5xl font-bold tracking-[10px] text-yellow-400">
          GRAND LINE
        </h1>

        <p className="mt-5 text-gray-400 animate-pulse">
          Finding the One Piece...
        </p>

      </div>
    );
  }

  return <>{children}</>;
}