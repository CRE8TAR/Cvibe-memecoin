import type { ReactNode } from "react"

type GlassCardProps = {
  title?: string
  children: ReactNode
  className?: string
}

export default function GlassCard({ title, children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`group relative border border-cyan-300/30 bg-gradient-to-br from-cyan-200/15 to-blue-200/10 backdrop-blur-xl shadow-[0_12px_32px_rgba(6,182,212,0.2)] transition-all duration-300 ease-out hover:border-cyan-300/50 hover:shadow-[0_16px_48px_rgba(6,182,212,0.3)] hover:-translate-y-2 focus-within:ring-2 focus-within:ring-cyan-400/40 focus-within:ring-offset-0 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/15 before:to-transparent before:opacity-60 rounded-lg p-6 ${className}`}
    >
      {title && (
        <div className="space-y-1 relative z-10 mb-4">
          <h3 className="text-cyan-100 font-semibold text-lg">{title}</h3>
        </div>
      )}
      <div className="text-cyan-50/90 relative z-10">{children}</div>
    </div>
  )
}
