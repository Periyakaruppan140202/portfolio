"use client"

import { motion } from "framer-motion"
import { SectionWrapper, SectionHeader, GlassCard, TechBadge } from "@/components/ui/glass-elements"
import { experiences } from "@/lib/data"
import { Briefcase, TrendingUp } from "lucide-react"
import { useCompact } from "@/components/providers/compact-mode-provider"
import { cn } from "@/lib/utils"

export function ExperienceSection() {
  const compact = useCompact()
  return (
    <SectionWrapper id="experience">
      <SectionHeader
        label="Experience"
        title="My Career Journey"
        description="From intern to engineer, building impactful solutions at every step."
      />

      {/* Interactive Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? (compact ? -20 : -50) : (compact ? 20 : 50) }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: compact ? "-50px" : "-100px" }}
            transition={{ duration: compact ? 0.3 : 0.6, delay: index * (compact ? 0.1 : 0.2), ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "relative",
              compact ? "mb-6 md:mb-8" : "mb-12 md:mb-16",
              index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:text-left"
            )}
          >
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * (compact ? 0.1 : 0.2) + 0.2 }}
              className={cn(
                "absolute left-0 md:left-1/2 top-0 -translate-x-1/2 rounded-full bg-primary shadow-lg shadow-primary/50",
                compact ? "h-3 w-3" : "h-4 w-4"
              )}
            />

            {/* Content card */}
            <div className={cn("ml-8 md:ml-0", index % 2 === 0 ? (compact ? "md:mr-8" : "md:mr-12") : (compact ? "md:ml-8" : "md:ml-12"))}>
              <GlassCard delay={index * 0.1} className="text-left">
                <div className={cn("flex items-start justify-between", compact ? "mb-2" : "mb-4")}>
                  <div className={cn("flex items-center", compact ? "gap-2" : "gap-3")}>
                    <div className={cn(
                      "flex items-center justify-center rounded-xl bg-primary/10 text-primary",
                      compact ? "h-8 w-8" : "h-10 w-10"
                    )}>
                      <Briefcase className={compact ? "h-4 w-4" : "h-5 w-5"} />
                    </div>
                    <div>
                      <h3 className={cn("font-semibold text-foreground", compact ? "text-base" : "text-lg")}>{experience.role}</h3>
                      <p className={cn("text-muted-foreground", compact ? "text-xs" : "text-sm")}>{experience.company}</p>
                    </div>
                  </div>
                  <span className={cn("text-muted-foreground whitespace-nowrap", compact ? "text-xs" : "text-sm")}>{experience.period}</span>
                </div>

                <p className={cn("text-muted-foreground", compact ? "mb-2 text-sm" : "mb-4")}>{experience.description}</p>

                {/* Achievement metrics */}
                {experience.achievements.length > 0 && (
                  <div className={cn("flex flex-wrap", compact ? "mb-2 gap-2" : "mb-4 gap-3")}>
                    {experience.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                        className={cn(
                          "flex items-center gap-2 rounded-lg bg-primary/5",
                          compact ? "px-2 py-1" : "px-3 py-2"
                        )}
                      >
                        <TrendingUp className={cn("text-primary", compact ? "h-3 w-3" : "h-4 w-4")} />
                        <span className={cn("font-bold text-primary", compact ? "text-sm" : "text-lg")}>{achievement.metric}</span>
                        <span className={cn("text-muted-foreground", compact ? "text-xs" : "text-sm")}>{achievement.label}</span>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div className={cn("flex flex-wrap", compact ? "gap-1.5" : "gap-2")}>
                  {experience.technologies.map((tech, i) => (
                    <TechBadge key={tech} delay={index * 0.1 + i * 0.05}>
                      {tech}
                    </TechBadge>
                  ))}
                </div>
              </GlassCard>
            </div>
          </motion.div>
        ))}

        {/* Future indicator */}
        <motion.div
          initial={{ opacity: 0, y: compact ? 10 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: compact ? 0.3 : 0.6 }}
          className="relative md:text-center"
        >
          <div className={cn(
            "absolute left-0 md:left-1/2 -translate-x-1/2 rounded-full border-2 border-primary/50 bg-background animate-pulse",
            compact ? "h-3 w-3" : "h-4 w-4"
          )} />
          <div className="ml-8 md:ml-0">
            <span className={cn(
              "inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary",
              compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
            )}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Future: AI Engineering & Leadership
            </span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
