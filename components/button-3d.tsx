"use client"

import type React from "react"

type Button3DProps = {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
  color?: "purple" | "indigo" | "cyan"
}

export default function Button3D({ children, className = "", href, onClick, color = "purple" }: Button3DProps) {
  const getColorClasses = () => {
    switch (color) {
      case "indigo":
        return "bg-gradient-to-b from-indigo-400 to-indigo-600 text-white ring-indigo-500/30 shadow-[0_8px_0_rgba(79,70,229,0.4),0_18px_28px_-10px_rgba(79,70,229,0.5)] hover:from-indigo-500 hover:to-indigo-700 active:shadow-[0_4px_0_rgba(79,70,229,0.4),0_8px_16px_-6px_rgba(79,70,229,0.5)]"
      case "cyan":
        return "bg-gradient-to-b from-cyan-400 to-cyan-600 text-white ring-cyan-500/30 shadow-[0_8px_0_rgba(6,182,212,0.4),0_18px_28px_-10px_rgba(6,182,212,0.5)] hover:from-cyan-500 hover:to-cyan-700 active:shadow-[0_4px_0_rgba(6,182,212,0.4),0_8px_16px_-6px_rgba(6,182,212,0.5)]"
      default:
        return "bg-gradient-to-b from-purple-400 to-purple-600 text-white ring-purple-500/30 shadow-[0_8px_0_rgba(124,58,237,0.4),0_18px_28px_-10px_rgba(124,58,237,0.5)] hover:from-purple-500 hover:to-purple-700 active:shadow-[0_4px_0_rgba(124,58,237,0.4),0_8px_16px_-6px_rgba(124,58,237,0.5)]"
    }
  }

  const baseClasses = `
    relative inline-flex items-center justify-center rounded-xl px-6 py-3 
    select-none active:translate-y-[4px] focus:outline-none focus:ring-2 
    font-semibold text-sm transition-all duration-150 ease-out
    transform-gpu will-change-transform
    ${getColorClasses()}
  `

  const Inner = (
    <>
      <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/30 to-transparent mix-blend-overlay" />
      <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/10 to-transparent" />
      <span className="relative font-semibold tracking-wide">{children}</span>
    </>
  )

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {Inner}
      </a>
    )
  }
  return (
    <button type="button" className={`${baseClasses} ${className}`} onClick={onClick}>
      {Inner}
    </button>
  )
}
