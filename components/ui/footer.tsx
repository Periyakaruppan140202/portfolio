"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { useCompact } from "@/components/providers/compact-mode-provider"
import { cn } from "@/lib/utils"

export function Footer() {
  const compact = useCompact()
  return (
    <footer className={cn("relative border-t border-white/[0.04]", compact ? "py-4" : "py-8")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: compact ? 10 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: compact ? 0.3 : 0.6 }}
          className={cn("flex flex-col md:flex-row items-center justify-between", compact ? "gap-2" : "gap-4")}
        >
          <p className={cn("text-muted-foreground", compact ? "text-xs" : "text-sm")}>
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className={cn("flex items-center gap-2 text-muted-foreground", compact ? "text-xs" : "text-sm")}>
            Crafted with <Heart className={cn("text-red-500 fill-red-500", compact ? "h-3 w-3" : "h-4 w-4")} /> using Next.js & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
