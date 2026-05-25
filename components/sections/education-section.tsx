"use client"

import { motion } from "framer-motion"
import { SectionWrapper, SectionHeader, GlassCard, TechBadge } from "@/components/ui/glass-elements"
import { education } from "@/lib/data"
import { GraduationCap, Trophy, BookOpen, Star, Award } from "lucide-react"
import { useCompact } from "@/components/providers/compact-mode-provider"
import { cn } from "@/lib/utils"

export function EducationSection() {
  const compact = useCompact()
  return (
    <SectionWrapper id="education">
      <SectionHeader
        label="Education"
        title="Academic Foundation"
        description="Where the journey of learning and excellence began."
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: compact ? 20 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: compact ? "-50px" : "-100px" }}
          transition={{ duration: compact ? 0.4 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <GlassCard hover={false} className={cn("relative overflow-hidden", compact ? "p-5 md:p-8" : "p-8 md:p-12")}>
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Header */}
              <div className={cn("flex flex-col md:flex-row md:items-start justify-between", compact ? "gap-4 mb-4" : "gap-6 mb-8")}>
                <div className={cn("flex items-start", compact ? "gap-3" : "gap-4")}>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={cn(
                      "flex items-center justify-center rounded-2xl bg-primary/10 text-primary",
                      compact ? "h-10 w-10" : "h-16 w-16"
                    )}
                  >
                    <GraduationCap className={compact ? "h-5 w-5" : "h-8 w-8"} />
                  </motion.div>
                  <div>
                    <h3 className={cn("font-bold text-foreground", compact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl")}>{education.institution}</h3>
                    <p className={cn("text-primary", compact ? "text-base mt-0.5" : "text-lg mt-1")}>{education.degree}</p>
                    <p className={cn("text-muted-foreground", compact && "text-sm")}>{education.field}</p>
                    <p className={cn("text-muted-foreground", compact ? "text-xs mt-0.5" : "text-sm mt-1")}>{education.location} • {education.period}</p>
                  </div>
                </div>

                {/* CGPA and Rank */}
                <div className={compact ? "flex gap-3" : "flex gap-4"}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={cn("glass rounded-xl text-center", compact ? "p-3 min-w-[80px]" : "p-4 min-w-[100px]")}
                  >
                    <div className="flex items-center justify-center gap-1 whitespace-nowrap">
                      <Award className={compact ? "h-4 w-4 text-primary" : "h-5 w-5 text-primary"} />
                      <span className={cn("font-bold text-foreground", compact ? "text-lg" : "text-xl")}>{education.cgpa}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">CGPA</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className={cn("glass rounded-xl text-center", compact ? "p-3 min-w-[80px]" : "p-4 min-w-[100px]")}
                  >
                    <div className="flex items-center justify-center gap-1 whitespace-nowrap">
                      <Trophy className={compact ? "h-4 w-4 text-yellow-500" : "h-5 w-5 text-yellow-500"} />
                      <span className={cn("font-bold text-foreground", compact ? "text-lg" : "text-xl")}>{education.rank}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">University Rank</p>
                  </motion.div>
                </div>
              </div>

              {/* Coursework */}
              <motion.div
                initial={{ opacity: 0, y: compact ? 10 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: compact ? 0.3 : 0.6, delay: 0.5 }}
                className={compact ? "mb-4" : "mb-8"}
              >
                <h4 className={cn("font-medium text-primary uppercase tracking-wider flex items-center gap-2", compact ? "text-xs mb-2" : "text-sm mb-4")}>
                  <BookOpen className={compact ? "h-3 w-3" : "h-4 w-4"} />
                  Relevant Coursework
                </h4>
                <div className={cn("flex flex-wrap", compact ? "gap-1.5" : "gap-2")}>
                  {education.coursework.map((course, index) => (
                    <TechBadge key={course} delay={index * 0.05}>
                      {course}
                    </TechBadge>
                  ))}
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: compact ? 10 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: compact ? 0.3 : 0.6, delay: 0.6 }}
              >
                <h4 className={cn("font-medium text-primary uppercase tracking-wider flex items-center gap-2", compact ? "text-xs mb-2" : "text-sm mb-4")}>
                  <Star className={compact ? "h-3 w-3" : "h-4 w-4"} />
                  Academic Achievements
                </h4>
                <div className={cn("grid grid-cols-1 md:grid-cols-3", compact ? "gap-2" : "gap-4")}>
                  {education.achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      className={cn(
                        "flex items-center rounded-lg bg-white/[0.02] border border-white/[0.04]",
                        compact ? "gap-2 p-2" : "gap-3 p-3"
                      )}
                    >
                      <div className={cn(
                        "rounded-full bg-primary/10 flex items-center justify-center text-primary",
                        compact ? "h-6 w-6" : "h-8 w-8"
                      )}>
                        <Star className={cn("fill-current", compact ? "h-3 w-3" : "h-4 w-4")} />
                      </div>
                      <span className={cn("text-foreground", compact ? "text-xs" : "text-sm")}>{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </GlassCard>

          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 blur-3xl -z-10" />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
