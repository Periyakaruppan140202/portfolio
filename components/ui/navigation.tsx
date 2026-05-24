"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback, useRef } from "react"
import { navItems, personalInfo } from "@/lib/data"
import { ArrowUp, Minimize2, Maximize2, Command, X, Search, ArrowRight, Home, User, Briefcase, Code, Mail, Award, GraduationCap, Users, FileText, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCompact, useCompactToggle } from "@/components/providers/compact-mode-provider"

const commandItems = [
  { icon: Home, label: "Go to Home", action: () => window.scrollTo({ top: 0, behavior: "smooth" }), shortcut: "H" },
  { icon: User, label: "About Me", action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }), shortcut: "A" },
  { icon: Briefcase, label: "Experience", action: () => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }), shortcut: "E" },
  { icon: Code, label: "Projects", action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }), shortcut: "P" },
  { icon: FileText, label: "Publication", action: () => document.getElementById("publication")?.scrollIntoView({ behavior: "smooth" }), shortcut: "R" },
  { icon: Settings, label: "Skills", action: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }), shortcut: "S" },
  { icon: Award, label: "Certifications", action: () => document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" }), shortcut: "C" },
  { icon: GraduationCap, label: "Education", action: () => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" }), shortcut: "D" },
  { icon: Users, label: "Leadership", action: () => document.getElementById("leadership")?.scrollIntoView({ behavior: "smooth" }), shortcut: "L" },
  { icon: Mail, label: "Contact", action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), shortcut: "M" },
]

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")

  const filteredItems = commandItems.filter(item =>
    item.label.toLowerCase().includes(search.toLowerCase())
  )

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault()
      setIsOpen(prev => !prev)
    }
    if (e.key === "Escape") {
      setIsOpen(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  const executeCommand = (action: () => void) => {
    action()
    setIsOpen(false)
    setSearch("")
  }

  return (
    <>
      {/* Trigger button */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-40 flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <Command className="h-4 w-4" />
        <span className="hidden sm:inline">Press</span>
        <kbd className="rounded bg-white/5 px-2 py-0.5 text-xs font-mono">⌘K</kbd>
      </motion.button>

      {/* Command palette modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-1/2 top-[20%] z-50 w-full max-w-lg -translate-x-1/2 p-4"
            >
              <div className="glass-strong rounded-2xl overflow-hidden shadow-2xl">
                {/* Search input */}
                <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
                  <Search className="h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search commands..."
                    autoFocus
                    className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg p-1 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Command list */}
                <div className="max-h-80 overflow-y-auto p-2">
                  {filteredItems.length > 0 ? (
                    <div className="space-y-1">
                      {filteredItems.map((item, index) => (
                        <motion.button
                          key={item.label}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.03 }}
                          onClick={() => executeCommand(item.action)}
                          className="w-full flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="h-4 w-4" />
                            <span>{item.label}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <kbd className="rounded bg-white/5 px-2 py-0.5 text-xs font-mono">{item.shortcut}</kbd>
                            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  ) : (
                    <div className="py-8 text-center text-muted-foreground">
                      No commands found
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="border-t border-white/[0.06] px-4 py-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Navigate with ↑↓ • Select with ↵</span>
                  <span>ESC to close</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const compact = useCompact()
  const toggleCompact = useCompactToggle()
  const activeSectionRef = useRef("")

  const handleToggleCompact = useCallback(() => {
    const section = activeSectionRef.current
    toggleCompact()
    if (section) {
      const scrollToSection = () => {
        const el = document.getElementById(section)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY
          window.scrollTo({ top, behavior: "instant" as ScrollBehavior })
        }
      }
      setTimeout(scrollToSection, 100)
      setTimeout(scrollToSection, 300)
    }
  }, [toggleCompact])

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const aboutEl = document.getElementById("about")
          const aboutTop = aboutEl ? aboutEl.getBoundingClientRect().top : Infinity
          setIsScrolled(aboutTop <= 200)

          // Update active section (throttled)
          const sections = navItems.map(item => item.href.slice(1))
          for (const section of sections.reverse()) {
            const element = document.getElementById(section)
            if (element) {
              const rect = element.getBoundingClientRect()
              if (rect.top <= 200) {
                setActiveSection(section)
                activeSectionRef.current = section
                break
              }
            }
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (<>
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={isScrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-40 max-w-[95vw]",
        !isScrolled && "pointer-events-none"
      )}
    >
      <div className="glass rounded-full px-2 py-2 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "px-3 py-2 text-xs sm:text-sm rounded-full transition-all duration-300 whitespace-nowrap",
                activeSection === item.href.slice(1)
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isScrolled ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      onClick={handleToggleCompact}
      className={cn(
        "fixed bottom-8 right-22 z-40 flex h-11 w-11 items-center justify-center rounded-full glass transition-colors shadow-lg",
        compact ? "text-primary bg-primary/10 hover:bg-primary/20" : "text-muted-foreground hover:text-foreground hover:bg-white/10",
        !isScrolled && "pointer-events-none"
      )}
      aria-label={compact ? "Switch to full view" : "Switch to compact view"}
      title={compact ? "Full view" : "Compact view"}
    >
      {compact ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
    </motion.button>
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isScrolled ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-8 right-8 z-40 flex h-11 w-11 items-center justify-center rounded-full glass text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors shadow-lg",
        !isScrolled && "pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  </>)
}
