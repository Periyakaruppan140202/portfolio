"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useCompact } from "@/components/providers/compact-mode-provider"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  delay?: number
}

export function GlassCard({ children, className, hover = true, glow = false, delay = 0 }: GlassCardProps) {
  const compact = useCompact()
  return (
    <motion.div
      initial={{ opacity: 0, y: compact ? 10 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: compact ? "-50px" : "-100px" }}
      transition={{ duration: compact ? 0.3 : 0.5, delay: compact ? delay * 0.5 : delay }}
      className={cn(
        "glass rounded-2xl transition-all duration-200",
        compact ? "p-4" : "p-6",
        hover && "hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.03]",
        glow && "glow-primary",
        className
      )}
    >
      {children}
    </motion.div>
  )
}

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
}

export function SectionWrapper({ children, id, className }: SectionWrapperProps) {
  const compact = useCompact()
  return (
    <section
      id={id}
      className={cn(
        "relative",
        compact ? "py-10 md:py-14" : "min-h-screen py-24 md:py-32",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeader({ label, title, description, align = "center" }: SectionHeaderProps) {
  const compact = useCompact()
  return (
    <motion.div
      initial={{ opacity: 0, y: compact ? 10 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: compact ? "-50px" : "-100px" }}
      transition={{ duration: compact ? 0.3 : 0.5 }}
      className={cn(compact ? "mb-8 md:mb-10" : "mb-16 md:mb-20", align === "center" && "text-center")}
    >
      <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
        {label}
      </span>
      <h2 className={cn(
        "mt-4 font-bold tracking-tight text-foreground text-balance",
        compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl lg:text-5xl"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "mt-4 max-w-2xl text-muted-foreground mx-auto text-pretty",
          compact ? "text-base" : "text-lg md:text-xl"
        )}>
          {description}
        </p>
      )}
    </motion.div>
  )
}

interface TechBadgeProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function TechBadge({ children, className, delay = 0 }: TechBadgeProps) {
  const compact = useCompact()
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-white/[0.03] border border-white/[0.06] text-muted-foreground transition-all duration-200 hover:bg-white/[0.06] hover:text-foreground hover:border-white/10",
        compact ? "gap-1 px-2 py-1 text-xs" : "gap-1.5 px-3 py-1.5 text-sm",
        className
      )}
    >
      {children}
    </span>
  )
}

interface MetricCardProps {
  value: number
  suffix?: string
  label: string
  delay?: number
}

export function MetricCard({ value, suffix = "", label, delay = 0 }: MetricCardProps) {
  const compact = useCompact()
  return (
    <motion.div
      initial={{ opacity: 0, y: compact ? 10 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: compact ? "-50px" : "-100px" }}
      transition={{ duration: compact ? 0.3 : 0.5, delay: compact ? delay * 0.5 : delay }}
      className={cn("glass rounded-xl text-center", compact ? "p-4" : "p-6")}
    >
      <span className={cn("font-bold text-gradient", compact ? "text-2xl" : "text-4xl")}>
        {value}{suffix}
      </span>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  )
}
