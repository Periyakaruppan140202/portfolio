"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { personalInfo, technologies } from "@/lib/data"
import { ArrowDown, Download, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance"
            >
              <span className="text-foreground">Building </span>
              <span className="text-gradient">Secure, Scalable</span>
              <span className="text-foreground"> and </span>
              <span className="text-gradient">Intelligent</span>
              <span className="text-foreground"> Software Systems.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty"
            >
              {personalInfo.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-base font-medium"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore My Journey
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-12 text-base font-medium border-border bg-transparent hover:bg-white/5"
              >
                <a href={personalInfo.resumeUrl} download="Periyakaruppan-Nagappan-Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right side - Profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <FloatingProfileCard />
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
}

function FloatingProfileCard() {
  const [avatarOk, setAvatarOk] = useState(true)
  const initials = personalInfo.name.split(" ").map(n => n[0]).join("")

  return (
    <div className="relative w-full max-w-md">
      {/* Static tech badges around card */}
      <div className="absolute inset-0 -m-12">
        <TechBadges technologies={technologies.slice(0, 8)} />
      </div>

      {/* Main card - simple hover effect via CSS */}
      <div className="relative glass-strong rounded-3xl p-8 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
        <div className="relative z-10">
          {/* Avatar */}
          <div className="relative mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full ring-2 ring-primary/20 ring-offset-2 ring-offset-background bg-gradient-to-br from-primary/40 to-accent/40">
            {avatarOk ? (
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="h-full w-full object-cover"
                onError={() => setAvatarOk(false)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-white">
                {initials}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground">{personalInfo.name}</h3>
            <p className="mt-1 text-muted-foreground">{personalInfo.title}</p>
            
            <div className="mt-4 flex items-center justify-center gap-4">
              <StatusDot status="available" label="Open to work" />
            </div>
          </div>

          {/* Quick stats */}
          <div className="mt-6 grid grid-cols-3 gap-4 rounded-xl bg-white/[0.02] p-4">
            <div className="text-center">
              <span className="text-xl font-bold text-gradient">3+</span>
              <p className="text-xs text-muted-foreground">Years</p>
            </div>
            <div className="text-center border-x border-border/50">
              <span className="text-xl font-bold text-gradient">5+</span>
              <p className="text-xs text-muted-foreground">Projects</p>
            </div>
            <div className="text-center">
              <span className="text-xl font-bold text-gradient">#1</span>
              <p className="text-xs text-muted-foreground">Academic Rank</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TechBadges({ technologies }: { technologies: string[] }) {
  const positions = [
    { top: "0%", left: "10%", delay: "0s" },
    { top: "15%", right: "0%", delay: "0.5s" },
    { top: "45%", left: "-5%", delay: "1s" },
    { top: "50%", right: "-10%", delay: "1.5s" },
    { bottom: "30%", left: "5%", delay: "2s" },
    { bottom: "20%", right: "5%", delay: "2.5s" },
    { bottom: "0%", left: "20%", delay: "3s" },
    { bottom: "5%", right: "15%", delay: "3.5s" },
  ]

  return (
    <div className="relative h-full w-full">
      {technologies.map((tech, index) => (
        <span
          key={tech}
          className="absolute whitespace-nowrap rounded-full bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 text-xs text-muted-foreground opacity-60 hover:opacity-100 transition-opacity"
          style={{ 
            ...positions[index],
            animation: `float 6s ease-in-out infinite`,
            animationDelay: positions[index].delay
          }}
        >
          {tech}
        </span>
      ))}
    </div>
  )
}

function StatusDot({ status, label }: { status: "available" | "busy"; label: string }) {
  return (
    <span className="flex items-center gap-2 text-sm text-muted-foreground">
      <span className={`relative flex h-2.5 w-2.5 ${status === "available" ? "text-green-500" : "text-yellow-500"}`}>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-current" />
      </span>
      {label}
    </span>
  )
}
