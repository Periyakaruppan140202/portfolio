"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { SectionWrapper, SectionHeader, TechBadge } from "@/components/ui/glass-elements"
import { projects } from "@/lib/data"
import { ArrowUpRight, Github, ExternalLink, Lightbulb, Zap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useCompact } from "@/components/providers/compact-mode-provider"

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

      {/* Projects grid - simplified layout without parallax */}
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
  featured: boolean
}

function ProjectCard({ project, index, compact }: { project: Project; index: number; compact: boolean }) {
  return (
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
      <div className="relative group direction-ltr">
        <div className={cn("relative overflow-hidden glass", compact ? "aspect-[16/9] rounded-xl" : "aspect-[16/10] rounded-2xl")}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5" />
          <div className={cn("absolute", compact ? "top-2 left-2" : "top-4 left-4")}>
            <span className={cn("inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md font-medium text-white", compact ? "px-2 py-1 text-[10px]" : "px-3 py-1.5 text-xs")}>
              {project.category}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className={cn("absolute left-4 right-4 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300", compact ? "bottom-2" : "bottom-4")}>
            {project.github && (
              <Button size="sm" variant="secondary" className="rounded-full" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
            {project.demo && (
              <Button size="sm" className="rounded-full bg-primary text-primary-foreground" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
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

        {/* CTA buttons */}
        <div className={cn("flex pt-2", compact ? "gap-3" : "gap-4")}>
          {project.github && (
            <Button variant="outline" className="rounded-full" size={compact ? "sm" : "default"} asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View Code
              </a>
            </Button>
          )}
          {project.demo && (
            <Button className="rounded-full bg-primary text-primary-foreground" size={compact ? "sm" : "default"} asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
                <ArrowUpRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
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
