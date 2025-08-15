import type { ReactNode } from "react"

type SimpleCardProps = {
  title?: string
  children: ReactNode
  className?: string
}

export default function SimpleCard({ title, children, className = "" }: SimpleCardProps) {
  return (
    <div className={`rounded-xl border border-cyan-300/30 bg-cyan-200/15 backdrop-blur-xl p-6 shadow-lg ${className}`}>
      {title && <h3 className="text-lg font-semibold text-cyan-100 mb-3">{title}</h3>}
      <div className="text-cyan-50/90">{children}</div>
    </div>
  )
}
