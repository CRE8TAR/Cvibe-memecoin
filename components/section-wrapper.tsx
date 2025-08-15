import type { ReactNode } from "react"

type SectionWrapperProps = {
  id?: string
  children: ReactNode
  className?: string
  contentClassName?: string
}

export default function SectionWrapper({ id, children, className = "", contentClassName = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative ${className}`}>
      <div className={`container px-4 md:px-6 ${contentClassName}`}>{children}</div>
    </section>
  )
}
