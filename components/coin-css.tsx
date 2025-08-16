"use client";

import { useEffect, useRef } from "react";

export default function CoinCSS({
  size = 160,
  speed = 3,
}: {
  size?: number;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced && ref.current.style) {
      ref.current.style.animation = "none";
    }
  }, []);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div
        ref={ref}
        className="relative coin-spin"
        style={{
          width: size,
          height: size,
          transformStyle: "preserve-3d",
          animationDuration: `${speed}s`,
        }}
        aria-hidden="true"
      >
        {/* Rim */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "transparent", // keep rim transparent
            filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.25))",
          }}
        />
        {/* Front */}
        <div
          className="absolute rounded-full flex items-center justify-center border-2 border-purple-900/35"
          style={{
            inset: "6%",
            transform: `translateZ(${size / 2 - size * 0.06}px)`,
            backfaceVisibility: "hidden",
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              backgroundImage: `url('/images/cvibecoin.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        {/* Back */}
        <div
          className="absolute rounded-full flex items-center justify-center border-2 border-purple-900/35"
          style={{
            inset: "6%",
            transform: `rotateY(180deg) translateZ(${
              size / 2 - size * 0.06
            }px)`,
            backfaceVisibility: "hidden",
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              backgroundImage: `url('/images/cvibecoin.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
}
