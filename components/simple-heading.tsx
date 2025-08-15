type SimpleHeadingProps = {
  text: string
  className?: string
}

export default function SimpleHeading({ text, className = "" }: SimpleHeadingProps) {
  return (
    <div className={`relative inline-block select-none text-center ${className}`}>
      <span
        className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan-200 via-blue-100 to-teal-200 bg-clip-text text-transparent"
        style={{
          textShadow: "0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(59,130,246,0.3), 2px 2px 4px rgba(0,0,0,0.8)",
          letterSpacing: "-0.02em",
          lineHeight: "0.9",
        }}
      >
        {text}
      </span>
    </div>
  )
}
