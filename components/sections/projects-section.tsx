"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { SectionWrapper, SectionHeader, TechBadge } from "@/components/ui/glass-elements"
import { projects } from "@/lib/data"
import { ArrowUpRight, Github, ExternalLink, Lightbulb, Zap, Target, Expand } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCompact } from "@/components/providers/compact-mode-provider"
import { ImageLightbox } from "@/components/ui/image-lightbox"

const categories = ["All", "AI / ML", "Full Stack"]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const compact = useCompact()

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <SectionWrapper id="projects">
      <SectionHeader
        label="Projects"
        title="Featured Work"
        description="A selection of projects that showcase my technical skills and problem-solving abilities."
      />

      {/* Category filters */}
      <motion.div
        initial={{ opacity: 0, y: compact ? 10 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: compact ? "-50px" : "-100px" }}
        transition={{ duration: compact ? 0.3 : 0.5 }}
        className={cn("flex flex-wrap justify-center gap-3", compact ? "mb-6" : "mb-12")}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full font-medium transition-all duration-200",
              compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm",
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-white/[0.03] text-muted-foreground hover:bg-white/[0.06] hover:text-foreground border border-white/[0.06]"
            )}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects grid */}
      <div className={compact ? "space-y-8" : "space-y-16"}>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} compact={compact} />
        ))}
      </div>
    </SectionWrapper>
  )
}

interface Project {
  id: number
  title: string
  category: string
  description: string
  problem: string
  solution: string
  impact: string
  technologies: string[]
  github?: string
  demo?: string
  images?: string[]
  featured: boolean
}

function ProjectImageCarousel({ images, compact, onImageClick }: { images: string[]; compact: boolean; onImageClick?: (index: number) => void }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <>
      {images.map((src, i) => (
        <div
          key={src}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            i === activeIndex ? "opacity-100" : "opacity-0"
          )}
          onClick={(e) => {
            if (onImageClick) {
              e.stopPropagation()
              onImageClick(activeIndex)
            }
          }}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={i === 0}
          />
        </div>
      ))}
      {/* Dots indicator */}
      {images.length > 1 && (
        <div className={cn("absolute z-10 flex gap-1.5", compact ? "top-2 right-2" : "top-4 right-4")}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setActiveIndex(i) }}
              className={cn(
                "rounded-full transition-all duration-300",
                compact ? "h-1.5 w-1.5" : "h-2 w-2",
                i === activeIndex
                  ? "bg-white w-4"
                  : "bg-white/40 hover:bg-white/70"
              )}
            />
          ))}
        </div>
      )}
    </>
  )
}

function ProjectCard({ project, index, compact }: { project: Project; index: number; compact: boolean }) {
  const hasImages = project.images && project.images.length > 0
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (imgIndex: number) => {
    setLightboxIndex(imgIndex)
    setLightboxOpen(true)
  }

  return (
    <div>
    {hasImages && (
      <ImageLightbox
        images={project.images!}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    )}
    <motion.div
      initial={{ opacity: 0, y: compact ? 15 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: compact ? "-50px" : "-100px" }}
      transition={{ duration: compact ? 0.3 : 0.5 }}
      className={cn(
        "grid md:grid-cols-2 items-center",
        compact ? "gap-4" : "gap-8",
        index % 2 === 1 && "md:direction-rtl"
      )}
    >
      {/* Project preview / Visual */}
      <div className="relative direction-ltr">
        <div className={cn(
          "relative overflow-hidden glass",
          compact ? "aspect-[16/9] rounded-xl" : "aspect-[16/10] rounded-2xl",
          hasImages && "cursor-pointer",
          "hover:[&_img]:scale-105 [&_img]:transition-transform [&_img]:duration-700"
        )}
          onClick={() => hasImages && openLightbox(0)}
        >
          {/* Background — gradient fallback or images */}
          {hasImages ? (
            <ProjectImageCarousel images={project.images!} compact={compact} onImageClick={openLightbox} />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5" />
          )}

          {/* Dark gradient at bottom for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 z-[1]" />

          {/* Category badge */}
          <div className={cn("absolute z-10", compact ? "top-2 left-2" : "top-4 left-4")}>
            <span className={cn("inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md font-medium text-white", compact ? "px-2 py-1 text-[10px]" : "px-3 py-1.5 text-xs")}>
              {project.category}
            </span>
          </div>

          {/* Expand hint */}
          {hasImages && (
            <div className={cn("absolute z-10 opacity-0 hover:opacity-100 transition-opacity duration-300", compact ? "top-2 right-2" : "top-4 right-4")}>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/80">
                <Expand className="h-4 w-4" />
              </span>
            </div>
          )}

          {/* Action buttons — always visible */}
          <div className={cn("absolute left-4 right-4 flex gap-3 z-10", compact ? "bottom-2" : "bottom-4")} onClick={(e) => e.stopPropagation()}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  "bg-white/10 text-white/70 backdrop-blur-sm border border-white/10",
                  "hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg hover:border-transparent"
                )}
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  "bg-white/10 text-white/70 backdrop-blur-sm border border-white/10",
                  "hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg hover:border-transparent"
                )}
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project details */}
      <div className={cn("direction-ltr", compact ? "space-y-3" : "space-y-6")}>
        <div>
          <span className={cn("text-primary font-medium uppercase tracking-wider", compact ? "text-xs" : "text-sm")}>
            {project.category}
          </span>
          <h3 className={cn("font-bold text-foreground", compact ? "mt-1 text-xl md:text-2xl" : "mt-2 text-2xl md:text-3xl")}>{project.title}</h3>
        </div>

        <p className={cn("text-muted-foreground", compact ? "text-base" : "text-lg")}>{project.description}</p>

        {/* Problem, Solution, Impact */}
        <div className={compact ? "space-y-2" : "space-y-4"}>
          <DetailItem icon={Lightbulb} label="Problem" content={project.problem} compact={compact} />
          <DetailItem icon={Zap} label="Solution" content={project.solution} compact={compact} />
          <DetailItem icon={Target} label="Impact" content={project.impact} compact={compact} />
        </div>

        {/* Tech stack */}
        <div className={cn("flex flex-wrap", compact ? "gap-1.5" : "gap-2")}>
          {project.technologies.map((tech) => (
            <TechBadge key={tech}>
              {tech}
            </TechBadge>
          ))}
        </div>
      </div>
    </motion.div>
    </div>
  )
}

function DetailItem({
  icon: Icon,
  label,
  content,
  compact = false,
}: {
  icon: React.ElementType
  label: string
  content: string
  compact?: boolean
}) {
  return (
    <div className={cn("flex", compact ? "gap-2" : "gap-3")}>
      <div className={cn(
        "flex-shrink-0 rounded-md bg-primary/10 flex items-center justify-center text-primary",
        compact ? "h-5 w-5" : "h-6 w-6"
      )}>
        <Icon className={compact ? "h-3 w-3" : "h-3.5 w-3.5"} />
      </div>
      <div>
        <span className={cn("font-medium text-primary uppercase tracking-wider", compact ? "text-[10px]" : "text-xs")}>{label}</span>
        <p className={cn("text-muted-foreground", compact ? "text-xs mt-0" : "text-sm mt-0.5")}>{content}</p>
      </div>
    </div>
  )
}
