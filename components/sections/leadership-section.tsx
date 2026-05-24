"use client"

import { motion } from "framer-motion"
import { SectionWrapper, SectionHeader, GlassCard } from "@/components/ui/glass-elements"
import { leadership } from "@/lib/data"
import { Users, Calendar, Target } from "lucide-react"
import { useCompact } from "@/components/providers/compact-mode-provider"
import { cn } from "@/lib/utils"

export function LeadershipSection() {
  const compact = useCompact()
  return (
    <SectionWrapper id="leadership">
      <SectionHeader
        label="Leadership"
        title="Community Impact"
        description="Building communities and empowering the next generation of developers."
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className={cn("absolute top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block", compact ? "left-6" : "left-8")} />

          <div className={compact ? "space-y-4" : "space-y-8"}>
            {leadership.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: compact ? -15 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: compact ? 0.3 : 0.6, delay: index * (compact ? 0.1 : 0.2), ease: [0.22, 1, 0.36, 1] }}
                className={cn("relative", compact ? "md:pl-14" : "md:pl-20")}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * (compact ? 0.1 : 0.2) + 0.2 }}
                  className={cn(
                    "absolute top-6 hidden md:flex items-center justify-center",
                    compact ? "left-4 h-3 w-3" : "left-6 h-4 w-4"
                  )}
                >
                  <div className={cn("rounded-full bg-primary shadow-lg shadow-primary/50", compact ? "h-3 w-3" : "h-4 w-4")} />
                </motion.div>

                <GlassCard className="group">
                  <div className={cn("flex flex-col md:flex-row md:items-start justify-between", compact ? "gap-2 mb-2" : "gap-4 mb-4")}>
                    <div className={cn("flex items-start", compact ? "gap-3" : "gap-4")}>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={cn(
                          "flex items-center justify-center rounded-xl bg-primary/10 text-primary",
                          compact ? "h-8 w-8" : "h-12 w-12"
                        )}
                      >
                        <Users className={compact ? "h-4 w-4" : "h-6 w-6"} />
                      </motion.div>
                      <div>
                        <h3 className={cn("font-semibold text-foreground", compact ? "text-base" : "text-lg")}>{item.role}</h3>
                        <p className={cn("text-primary", compact && "text-sm")}>{item.organization}</p>
                      </div>
                    </div>
                    <div className={cn("flex items-center gap-2 text-muted-foreground", compact ? "text-xs" : "text-sm")}>
                      <Calendar className={compact ? "h-3 w-3" : "h-4 w-4"} />
                      {item.period}
                    </div>
                  </div>

                  <p className={cn("text-muted-foreground", compact ? "mb-2 text-sm" : "mb-4")}>{item.description}</p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * (compact ? 0.1 : 0.2) + 0.3 }}
                    className={cn(
                      "flex items-center rounded-lg bg-primary/5 border border-primary/10",
                      compact ? "gap-2 p-2" : "gap-3 p-3"
                    )}
                  >
                    <Target className={compact ? "h-4 w-4 text-primary" : "h-5 w-5 text-primary"} />
                    <span className={cn("text-foreground", compact ? "text-xs" : "text-sm")}>{item.impact}</span>
                  </motion.div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
