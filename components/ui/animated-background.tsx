"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Static ambient glows - CSS only, no JS */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, oklch(0.5 0.15 260 / 0.4) 0%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, oklch(0.45 0.18 280 / 0.5) 0%, transparent 70%)" }}
      />
      <div 
        className="absolute top-2/3 left-1/3 w-[350px] h-[350px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, oklch(0.4 0.12 300 / 0.4) 0%, transparent 70%)" }}
      />
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/50" />
    </div>
  )
}
