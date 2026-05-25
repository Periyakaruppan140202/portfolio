"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageLightboxProps {
  images: string[]
  initialIndex?: number
  open: boolean
  onClose: () => void
}

export function ImageLightbox({ images, initialIndex = 0, open, onClose }: ImageLightboxProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex)

  useEffect(() => {
    if (open) setActiveIndex(initialIndex)
  }, [open, initialIndex])

  // Keyboard navigation
  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") setActiveIndex(i => (i - 1 + images.length) % images.length)
      if (e.key === "ArrowRight") setActiveIndex(i => (i + 1) % images.length)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [open, images.length, onClose])

  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
      return () => { document.body.style.overflow = "" }
    }
  }, [open])

  const goNext = useCallback(() => {
    setActiveIndex(i => (i + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setActiveIndex(i => (i - 1 + images.length) % images.length)
  }, [images.length])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            onClick={onClose}
            className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:bg-white/20 hover:text-white transition-all"
          >
            <X className="h-5 w-5" />
          </motion.button>

          {/* Image counter */}
          {images.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-6 left-1/2 -translate-x-1/2 z-10 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium"
            >
              {activeIndex + 1} / {images.length}
            </motion.div>
          )}

          {/* Main image */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-[90vw] h-[80vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt=""
              fill
              className="object-contain rounded-xl"
              sizes="90vw"
              priority
            />
          </motion.div>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2, delay: 0.15 }}
                onClick={(e) => { e.stopPropagation(); goPrev() }}
                className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:bg-white/20 hover:text-white transition-all"
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2, delay: 0.15 }}
                onClick={(e) => { e.stopPropagation(); goNext() }}
                className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:bg-white/20 hover:text-white transition-all"
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </>
          )}

          {/* Dot indicators */}
          {images.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2"
            >
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setActiveIndex(i) }}
                  className={cn(
                    "rounded-full transition-all duration-300 h-2.5",
                    i === activeIndex
                      ? "bg-white w-8"
                      : "bg-white/40 hover:bg-white/70 w-2.5"
                  )}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
