"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { SectionWrapper, SectionHeader, GlassCard } from "@/components/ui/glass-elements"
import { personalInfo } from "@/lib/data"
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Youtube, ArrowUpRight, CheckCircle2, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCompact } from "@/components/providers/compact-mode-provider"
import { cn } from "@/lib/utils"

// Set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local — get a free key at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ""

const socialLinks = [
  { icon: Github, href: personalInfo.social.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
  { icon: Youtube, href: personalInfo.social.youtube, label: "YouTube" },
  { icon: Twitter, href: personalInfo.social.twitter, label: "X / Twitter" },
]

export function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const compact = useCompact()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          from_name: "Portfolio Contact Form",
          subject: `New message from ${formState.name}`,
        }),
      })

      const data = await response.json()
      if (data.success) {
        setSubmitStatus("success")
        setFormState({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  return (
    <>
      {/* Toast notification — fixed top center */}
      <AnimatePresence>
        {submitStatus !== "idle" && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[100]"
          >
            <div
              className={cn(
                "flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium shadow-2xl backdrop-blur-md border",
                submitStatus === "success"
                  ? "bg-green-500/15 text-green-400 border-green-500/25"
                  : "bg-red-500/15 text-red-400 border-red-500/25"
              )}
            >
              {submitStatus === "success" ? (
                <CheckCircle2 className="h-4 w-4 shrink-0" />
              ) : (
                <XCircle className="h-4 w-4 shrink-0" />
              )}
              {submitStatus === "success"
                ? "Message sent successfully! I’ll get back to you soon."
                : "Failed to send. Please email me directly instead."}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    <SectionWrapper id="contact" className={compact ? "pb-16" : "pb-32"}>
      <SectionHeader
        label="Contact"
        title="Let&apos;s Connect"
        description="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
      />

      <div className="max-w-5xl mx-auto">
        <div className={cn("grid lg:grid-cols-2", compact ? "gap-4" : "gap-8")}>
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: compact ? -15 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: compact ? 0.3 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={compact ? "space-y-3" : "space-y-6"}
          >
            <GlassCard hover={false} className={compact ? "p-5" : "p-8"}>
              <h3 className={cn("font-bold text-foreground", compact ? "text-xl mb-4" : "text-2xl mb-6")}>Get in Touch</h3>

              {/* Personal email */}
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ x: 4 }}
                className={cn(
                  "flex items-center rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors group",
                  compact ? "gap-3 p-3 mb-2" : "gap-4 p-4 mb-4"
                )}
              >
                <div className={cn(
                  "flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors",
                  compact ? "h-9 w-9" : "h-12 w-12"
                )}>
                  <Mail className={compact ? "h-4 w-4" : "h-5 w-5"} />
                </div>
                <div className="min-w-0">
                  <p className={cn("text-muted-foreground", compact ? "text-xs" : "text-sm")}>Personal Email</p>
                  <p className={cn("text-foreground font-medium break-all", compact ? "text-xs" : "text-sm")}>{personalInfo.email}</p>
                </div>
                <ArrowUpRight className={cn("text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity shrink-0", compact ? "h-4 w-4" : "h-5 w-5")} />
              </motion.a>

              {/* Work email */}
              <motion.a
                href={`mailto:${personalInfo.workEmail}`}
                whileHover={{ x: 4 }}
                className={cn(
                  "flex items-center rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors group",
                  compact ? "gap-3 p-3 mb-2" : "gap-4 p-4 mb-4"
                )}
              >
                <div className={cn(
                  "flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors",
                  compact ? "h-9 w-9" : "h-12 w-12"
                )}>
                  <Mail className={compact ? "h-4 w-4" : "h-5 w-5"} />
                </div>
                <div className="min-w-0">
                  <p className={cn("text-muted-foreground", compact ? "text-xs" : "text-sm")}>Work Email</p>
                  <p className={cn("text-foreground font-medium break-all", compact ? "text-xs" : "text-sm")}>{personalInfo.workEmail}</p>
                </div>
                <ArrowUpRight className={cn("text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity shrink-0", compact ? "h-4 w-4" : "h-5 w-5")} />
              </motion.a>

              {/* Location */}
              <div className={cn("flex items-center rounded-xl bg-white/[0.02]", compact ? "gap-3 p-3" : "gap-4 p-4")}>
                <div className={cn(
                  "flex items-center justify-center rounded-xl bg-accent/10 text-accent",
                  compact ? "h-9 w-9" : "h-12 w-12"
                )}>
                  <MapPin className={compact ? "h-4 w-4" : "h-5 w-5"} />
                </div>
                <div>
                  <p className={cn("text-muted-foreground", compact ? "text-xs" : "text-sm")}>Location</p>
                  <p className={cn("text-foreground font-medium", compact && "text-sm")}>{personalInfo.location}</p>
                </div>
              </div>
            </GlassCard>

            {/* Social links */}
            <GlassCard hover={false} className={compact ? "p-5" : "p-8"}>
              <h3 className={cn("font-semibold text-foreground", compact ? "text-base mb-3" : "text-lg mb-4")}>Connect on Social</h3>
              <div className={cn("grid grid-cols-2", compact ? "gap-2" : "gap-3")}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className={cn(
                      "flex items-center rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.04] hover:border-white/[0.08] transition-all group",
                      compact ? "gap-2 p-2" : "gap-3 p-3"
                    )}
                  >
                    <social.icon className={cn("text-muted-foreground group-hover:text-foreground transition-colors", compact ? "h-4 w-4" : "h-5 w-5")} />
                    <span className={cn("text-muted-foreground group-hover:text-foreground transition-colors", compact ? "text-xs" : "text-sm")}>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: compact ? 15 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: compact ? 0.3 : 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard hover={false} className={cn("h-full", compact ? "p-5" : "p-8")}>
              <h3 className={cn("font-bold text-foreground", compact ? "text-xl mb-4" : "text-2xl mb-6")}>Send a Message</h3>

              <form onSubmit={handleSubmit} className={compact ? "space-y-3" : "space-y-5"}>
                <div>
                  <label htmlFor="name" className={cn("block font-medium text-muted-foreground", compact ? "text-xs mb-1" : "text-sm mb-2")}>
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name"
                    className={cn("bg-white/[0.02] border-white/[0.06] focus:border-primary/50 rounded-xl", compact ? "h-10" : "h-12")}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className={cn("block font-medium text-muted-foreground", compact ? "text-xs mb-1" : "text-sm mb-2")}>
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="your@email.com"
                    className={cn("bg-white/[0.02] border-white/[0.06] focus:border-primary/50 rounded-xl", compact ? "h-10" : "h-12")}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className={cn("block font-medium text-muted-foreground", compact ? "text-xs mb-1" : "text-sm mb-2")}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    rows={compact ? 3 : 5}
                    className={cn(
                      "w-full bg-white/[0.02] border border-white/[0.06] focus:border-primary/50 rounded-xl text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/20",
                      compact ? "p-3" : "p-4"
                    )}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size={compact ? "default" : "lg"}
                  disabled={isSubmitting}
                  className={cn("w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90", compact ? "h-10" : "h-12")}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="h-4 w-4" />
                    </span>
                  )}
                </Button>

              </form>

            </GlassCard>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
    </>
  )
}
