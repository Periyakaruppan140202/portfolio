"use client"

import { motion } from "framer-motion"
import { SectionWrapper, SectionHeader } from "@/components/ui/glass-elements"
import { awards } from "@/lib/data"
import { Trophy, Star, Sparkles } from "lucide-react"
import { useCompact } from "@/components/providers/compact-mode-provider"
import { cn } from "@/lib/utils"

export function AwardsSection() {
  const compact = useCompact()
  return (
    <SectionWrapper id="awards">
      <SectionHeader
        label="Recognition"
        title="Awards & Achievements"
        description="Milestones that mark the journey of excellence."
      />

      <div className="max-w-4xl mx-auto">
        <div className={cn("grid grid-cols-1 md:grid-cols-2", compact ? "gap-3" : "gap-6")}>
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: compact ? 15 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: compact ? 0.3 : 0.6, delay: index * (compact ? 0.08 : 0.15), ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: compact ? -2 : -4, scale: 1.01 }}
              className="relative group"
            >
              <div className={cn(
                "glass h-full relative overflow-hidden transition-all duration-300 hover:border-primary/20",
                compact ? "rounded-xl p-4" : "rounded-2xl p-6"
              )}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-yellow-500/10 to-orange-500/10 blur-2xl group-hover:opacity-100 opacity-50 transition-opacity"
                />

                <div className="relative z-10">
                  <div className={cn("flex items-start justify-between", compact ? "mb-2" : "mb-4")}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="relative"
                    >
                      <div className={cn(
                        "flex items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 text-yellow-500",
                        compact ? "h-10 w-10" : "h-14 w-14"
                      )}>
                        <Trophy className={compact ? "h-5 w-5" : "h-7 w-7"} />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-1 -right-1"
                      >
                        <Sparkles className={compact ? "h-3 w-3 text-yellow-500" : "h-4 w-4 text-yellow-500"} />
                      </motion.div>
                    </motion.div>
                    <span className={cn("text-muted-foreground", compact ? "text-xs" : "text-sm")}>{award.year}</span>
                  </div>

                  <h3 className={cn("font-bold text-foreground", compact ? "text-base mb-1" : "text-xl mb-2")}>{award.title}</h3>
                  <p className={cn("text-primary", compact ? "text-xs mb-1.5" : "text-sm mb-3")}>{award.organization}</p>
                  <p className={cn("text-muted-foreground", compact ? "text-xs" : "text-sm")}>{award.description}</p>

                  <div className={cn("flex gap-1", compact ? "mt-2" : "mt-4")}>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.15 + 0.4 + i * 0.1 }}
                      >
                        <Star className={cn("fill-yellow-500/30 text-yellow-500/30", compact ? "h-3 w-3" : "h-4 w-4")} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
