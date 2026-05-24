"use client"

import { motion } from "framer-motion"
import { SectionWrapper, SectionHeader, GlassCard } from "@/components/ui/glass-elements"
import { certifications } from "@/lib/data"
import { Award, ExternalLink, BadgeCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCompact } from "@/components/providers/compact-mode-provider"
import { cn } from "@/lib/utils"

export function CertificationsSection() {
  const compact = useCompact()
  return (
    <SectionWrapper id="certifications">
      <SectionHeader
        label="Certifications"
        title="Credentials & Learning"
        description="Continuous learning through industry-recognized certifications."
      />

      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3", compact ? "gap-3" : "gap-6")}>
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: compact ? 15 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: compact ? 0.3 : 0.6, delay: index * (compact ? 0.05 : 0.1), ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard className="h-full group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Header */}
                <div className={cn("flex items-start justify-between", compact ? "mb-2" : "mb-4")}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={cn(
                      "flex items-center justify-center rounded-xl bg-primary/10 text-primary",
                      compact ? "h-8 w-8" : "h-12 w-12"
                    )}
                  >
                    <Award className={compact ? "h-4 w-4" : "h-6 w-6"} />
                  </motion.div>
                  <span className={cn("text-muted-foreground", compact ? "text-xs" : "text-sm")}>{cert.year}</span>
                </div>

                {/* Content */}
                <h3 className={cn("font-semibold text-foreground line-clamp-2", compact ? "text-base mb-1" : "text-lg mb-2")}>{cert.name}</h3>
                <p className={cn("text-muted-foreground", compact ? "text-xs mb-0.5" : "text-sm mb-1")}>{cert.organization}</p>
                <p className={cn("text-muted-foreground/70", compact ? "text-[10px] mb-2" : "text-xs mb-4")}>via {cert.platform}</p>

                {/* Verified badge */}
                <div className={cn("flex items-center gap-2", compact ? "mb-2" : "mb-4")}>
                  <BadgeCheck className={compact ? "h-3 w-3 text-primary" : "h-4 w-4 text-primary"} />
                  <span className={cn("text-primary font-medium", compact ? "text-[10px]" : "text-xs")}>Verified Certificate</span>
                </div>

                {/* CTA */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5"
                  asChild
                >
                  <a href={cert.credential} target="_blank" rel="noopener noreferrer">
                    View Credential
                    <ExternalLink className="h-3.5 w-3.5 ml-2" />
                  </a>
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
