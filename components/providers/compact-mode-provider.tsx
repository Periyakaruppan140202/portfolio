"use client"

import { createContext, useContext, useState } from "react"

const CompactModeContext = createContext(false)
const CompactModeToggleContext = createContext<() => void>(() => {})

export function CompactModeProvider({ children }: { children: React.ReactNode }) {
  const [compact, setCompact] = useState(false)
  return (
    <CompactModeContext.Provider value={compact}>
      <CompactModeToggleContext.Provider value={() => setCompact(prev => !prev)}>
        {children}
      </CompactModeToggleContext.Provider>
    </CompactModeContext.Provider>
  )
}

export function useCompact() {
  return useContext(CompactModeContext)
}

export function useCompactToggle() {
  return useContext(CompactModeToggleContext)
}
