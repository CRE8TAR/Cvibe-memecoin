"use client";

import Coin3D from "./coin-3d";

export default function FooterCoin3D({
  height = "h-[320px]",
}: {
  height?: string;
}) {
  return (
    <div
      className={`w-full ${height} flex items-center justify-center relative`}
      style={{ zIndex: 100 }}
    >
      <div
        className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl bg-gradient-to-br from-cyan-200/20 to-blue-200/15 backdrop-blur-xl border border-cyan-300/40 shadow-[0_20px_60px_rgba(6,182,212,0.4)] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-60 flex flex-col items-center justify-center p-6"
        style={{ zIndex: 100 }}
      >
        <div className="absolute top-6 left-0 right-0 text-center z-10">
          <h3 className="text-lg md:text-xl font-bold text-cyan-100 mb-1">
            CVIBE Token
          </h3>
          <p className="text-sm text-cyan-200/80">Ride the Wave</p>
        </div>

        <div
          className="w-44 h-44 md:w-52 md:h-52 mt-8 relative"
          style={{ zIndex: 110 }}
        >
          <Coin3D
            spinSpeed={1.8}
            metalness={0.9}
            roughness={0.2}
            frontImage="/images/cvibecoin.png"
            backImage="/images/cvibecoin.png"
          />
        </div>

        <div className="absolute bottom-6 left-0 right-0 text-center z-10">
          <p className="text-xs md:text-sm text-cyan-200/80 px-4">
            Community-driven • Fair Launch • Ocean Vibes
          </p>
        </div>
      </div>
    </div>
  );
}
