"use client"

import { useEffect, useRef } from "react"

export default function CoinCSS({ size = 160, speed = 3 }: { size?: number; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced && ref.current.style) {
      ref.current.style.animation = "none"
    }
  }, [])

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
            background: "conic-gradient(from 90deg at 50% 50%, #d4af37, #bf8c18, #e8c557, #d4af37)",
            filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.25))",
          }}
        />
        {/* Front */}
        <div
          className="absolute rounded-full flex items-center justify-center border-2 border-purple-900/35 font-extrabold text-purple-900"
          style={{
            inset: "6%",
            background: "radial-gradient(circle at 30% 30%, #f9e19a, #e0c269 60%, #b8922a 100%)",
            transform: "translateZ(1px)",
            backfaceVisibility: "hidden",
            letterSpacing: "2px",
          }}
        >
          CVIBE
        </div>
        {/* Back */}
        <div
          className="absolute rounded-full flex items-center justify-center border-2 border-purple-900/35 font-bold text-indigo-900"
          style={{
            inset: "6%",
            background: "radial-gradient(circle at 70% 70%, #f9e19a, #e0c269 60%, #b8922a 100%)",
            transform: "rotateY(180deg) translateZ(1px)",
            backfaceVisibility: "hidden",
            letterSpacing: "2px",
          }}
        >
          MEME
        </div>
      </div>
    </div>
  )
}
