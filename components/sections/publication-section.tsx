"use client"

import { motion } from "framer-motion"
import { SectionWrapper, SectionHeader } from "@/components/ui/glass-elements"
import { publication } from "@/lib/data"
import { FileText, BookOpen, CheckCircle, ExternalLink, Microscope, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCompact } from "@/components/providers/compact-mode-provider"
import { cn } from "@/lib/utils"

export function PublicationSection() {
  const compact = useCompact()
  return (
    <SectionWrapper id="publication">
      <SectionHeader
        label="Research"
        title="Published Work"
        description="Contributing to the academic community through innovative research."
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: compact ? 20 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: compact ? "-50px" : "-100px" }}
          transition={{ duration: compact ? 0.4 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className={cn("relative glass-strong rounded-3xl overflow-hidden", compact ? "p-5 md:p-8" : "p-8 md:p-12")}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Header */}
              <div className={cn("flex items-start", compact ? "gap-3 mb-4" : "gap-4 mb-8")}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={cn(
                    "flex-shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary",
                    compact ? "h-10 w-10" : "h-14 w-14"
                  )}
                >
                  <FileText className={compact ? "h-5 w-5" : "h-7 w-7"} />
                </motion.div>
                <div>
                  <span className={cn("inline-flex items-center gap-2 font-medium text-primary mb-2", compact ? "text-xs" : "text-sm")}>
                    <CheckCircle className={compact ? "h-3 w-3" : "h-4 w-4"} />
                    {publication.status}
                  </span>
                  <h3 className={cn("font-bold text-foreground", compact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl")}>{publication.title}</h3>
                  <p className={cn("text-muted-foreground", compact ? "mt-1 text-sm" : "mt-2")}>
                    {publication.journal} • {publication.year}
                  </p>
                </div>
              </div>

              {/* Abstract */}
              <motion.div
                initial={{ opacity: 0, y: compact ? 10 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: compact ? 0.3 : 0.6, delay: 0.3 }}
                className={compact ? "mb-4" : "mb-8"}
              >
                <h4 className={cn("font-medium text-primary uppercase tracking-wider flex items-center gap-2", compact ? "text-xs mb-2" : "text-sm mb-3")}>
                  <BookOpen className={compact ? "h-3 w-3" : "h-4 w-4"} />
                  Abstract
                </h4>
                <p className={cn("text-muted-foreground leading-relaxed", compact ? "text-base" : "text-lg")}>{publication.abstract}</p>
              </motion.div>

              {/* Methodology & Findings */}
              <div className={cn("grid md:grid-cols-2", compact ? "gap-4 mb-4" : "gap-8 mb-8")}>
                <motion.div
                  initial={{ opacity: 0, x: compact ? -10 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: compact ? 0.3 : 0.6, delay: 0.4 }}
                >
                  <h4 className={cn("font-medium text-primary uppercase tracking-wider flex items-center gap-2", compact ? "text-xs mb-2" : "text-sm mb-4")}>
                    <Microscope className={compact ? "h-3 w-3" : "h-4 w-4"} />
                    Methodology
                  </h4>
                  <ul className={compact ? "space-y-2" : "space-y-3"}>
                    {publication.methodology.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        className={cn("flex items-start text-muted-foreground", compact ? "gap-2 text-sm" : "gap-3")}
                      >
                        <span className={cn(
                          "flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center font-medium text-primary",
                          compact ? "h-5 w-5 text-[10px]" : "h-6 w-6 text-xs"
                        )}>
                          {index + 1}
                        </span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: compact ? 10 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: compact ? 0.3 : 0.6, delay: 0.4 }}
                >
                  <h4 className={cn("font-medium text-primary uppercase tracking-wider flex items-center gap-2", compact ? "text-xs mb-2" : "text-sm mb-4")}>
                    <Lightbulb className={compact ? "h-3 w-3" : "h-4 w-4"} />
                    Key Findings
                  </h4>
                  <ul className={compact ? "space-y-2" : "space-y-3"}>
                    {publication.findings.map((finding, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        className={cn("flex items-start", compact ? "gap-2" : "gap-3")}
                      >
                        <CheckCircle className={cn("text-primary flex-shrink-0 mt-0.5", compact ? "h-4 w-4" : "h-5 w-5")} />
                        <span className={cn("text-muted-foreground", compact && "text-sm")}>{finding}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: compact ? 10 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: compact ? 0.3 : 0.6, delay: 0.6 }}
                className="flex justify-center"
              >
                <Button size={compact ? "default" : "lg"} className="rounded-full bg-primary text-primary-foreground" asChild>
                  <a href={publication.link} target="_blank" rel="noopener noreferrer">
                    Read Full Publication
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-3xl -z-10 opacity-50" />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
