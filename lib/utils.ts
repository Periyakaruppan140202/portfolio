import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Prefix a path with the Next.js basePath (set during GitHub Pages builds) */
export function withBasePath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ""
  return `${base}${path}`
}
