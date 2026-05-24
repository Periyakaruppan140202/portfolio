"use client"

import { motion } from "framer-motion"
import { SectionWrapper, SectionHeader } from "@/components/ui/glass-elements"
import { skills } from "@/lib/data"
import { cn } from "@/lib/utils"
import { useCompact } from "@/components/providers/compact-mode-provider"

export function SkillsSection() {
  const compact = useCompact()

  return (
    <SectionWrapper id="skills">
      <SectionHeader
        label="Skills"
        title="Technical Expertise"
        description="A comprehensive toolkit built through years of hands-on experience."
      />

      <div className="max-w-5xl mx-auto">
        <div className={cn("grid grid-cols-1 md:grid-cols-2", compact ? "gap-3" : "gap-5")}>
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: compact ? 10 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: compact ? "-50px" : "-100px" }}
              transition={{ duration: compact ? 0.3 : 0.5, delay: categoryIndex * 0.05 }}
              className={cn("glass overflow-hidden", compact ? "rounded-xl p-3" : "rounded-2xl p-5")}
            >
              <div className={cn("flex items-center", compact ? "gap-2 mb-2.5" : "gap-3 mb-4")}>
                <span className={cn(
                  "flex items-center justify-center rounded-lg bg-primary/10 font-bold text-primary",
                  compact ? "h-6 w-6 text-xs" : "h-8 w-8 text-sm"
                )}>
                  {categoryIndex + 1}
                </span>
                <h3 className={cn("font-semibold text-foreground", compact ? "text-sm" : "text-base")}>{category}</h3>
              </div>

              <div className={cn("flex flex-wrap", compact ? "gap-1.5" : "gap-2")}>
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-200 cursor-default",
                      compact ? "px-2 py-0.5 text-[11px]" : "px-3 py-1.5 text-sm",
                      "bg-white/[0.03] border border-white/[0.06] text-muted-foreground",
                      "hover:bg-primary/10 hover:border-primary/20 hover:text-foreground"
                    )}
                  >
                    <span className={cn("rounded-full bg-primary", compact ? "h-1 w-1" : "h-1.5 w-1.5")} />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
