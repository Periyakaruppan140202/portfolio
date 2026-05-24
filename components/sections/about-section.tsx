"use client"

import { motion } from "framer-motion"
import { SectionWrapper, SectionHeader, GlassCard, MetricCard } from "@/components/ui/glass-elements"
import { stats } from "@/lib/data"
import { Code2, Shield, Layers, Zap } from "lucide-react"
import { useCompact } from "@/components/providers/compact-mode-provider"
import { cn } from "@/lib/utils"

const roles = [
  { icon: Code2, label: "Backend Engineer", description: "Building robust, scalable server-side systems" },
  { icon: Shield, label: "Security-Focused", description: "Implementing best practices for secure applications" },
  { icon: Layers, label: "Full Stack Developer", description: "End-to-end application development" },
  { icon: Zap, label: "Performance Optimizer", description: "Tuning queries and improving system efficiency" },
]

export function AboutSection() {
  const compact = useCompact()
  return (
    <SectionWrapper id="about" className="relative">
      <SectionHeader
        label="About"
        title="Crafting Digital Excellence"
        description="Passionate about building software that makes a difference. I combine technical depth with a user-centric approach to create impactful solutions."
      />

      {/* Role cards */}
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4", compact ? "gap-3 mb-8" : "gap-6 mb-16")}>
        {roles.map((role, index) => (
          <GlassCard key={role.label} delay={index * 0.1} className="group">
            <div className="flex flex-col items-center text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={cn(
                  "flex items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20",
                  compact ? "mb-2 h-10 w-10" : "mb-4 h-14 w-14"
                )}
              >
                <role.icon className={compact ? "h-5 w-5" : "h-7 w-7"} />
              </motion.div>
              <h3 className={cn("font-semibold text-foreground", compact ? "text-base" : "text-lg")}>{role.label}</h3>
              <p className={cn("text-muted-foreground", compact ? "mt-1 text-xs" : "mt-2 text-sm")}>{role.description}</p>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: compact ? 10 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: compact ? 0.3 : 0.6, delay: 0.4 }}
        className={cn("grid grid-cols-2 md:grid-cols-4", compact ? "gap-3" : "gap-6")}
      >
        {stats.map((stat, index) => (
          <MetricCard
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            delay={index * 0.1}
          />
        ))}
      </motion.div>

      {/* Narrative */}
      <motion.div
        initial={{ opacity: 0, y: compact ? 10 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: compact ? 0.3 : 0.6, delay: 0.6 }}
        className={cn("max-w-3xl mx-auto text-center", compact ? "mt-8" : "mt-16")}
      >
        <p className={cn("text-muted-foreground leading-relaxed", compact ? "text-base" : "text-lg")}>
          With a foundation in{" "}
          <span className="text-foreground font-medium">Computer Science</span> and hands-on experience
          at <span className="text-foreground font-medium">Zoho Corporation</span>, I specialize in
          building enterprise-grade applications that prioritize{" "}
          <span className="text-primary">security</span>,{" "}
          <span className="text-primary">performance</span>, and{" "}
          <span className="text-primary">scalability</span>.
        </p>
      </motion.div>
    </SectionWrapper>
  )
}
