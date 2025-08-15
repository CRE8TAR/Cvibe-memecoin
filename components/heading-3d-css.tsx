type Heading3DProps = {
  text: string
  className?: string
}

export default function Heading3D({ text, className = "" }: Heading3DProps) {
  return (
    <div className={`relative inline-block select-none text-center ${className}`}>
      <span
        className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-purple-200 via-indigo-100 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl"
        style={{
          textShadow: "0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(139,92,246,0.3), 2px 2px 4px rgba(0,0,0,0.8)",
          letterSpacing: "-0.02em",
          lineHeight: "0.9",
        }}
      >
        {text}
      </span>
    </div>
  )
}
