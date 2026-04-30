'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

type ThemeMode = 'dark' | 'light' | 'gradient'

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('kingqueen-theme') as ThemeMode | null
    if (savedTheme) {
      setTheme(savedTheme)
      applyTheme(savedTheme)
    }
  }, [])

  const applyTheme = (mode: ThemeMode) => {
    const html = document.documentElement
    html.className = html.className.replace(/theme-\w+/g, '')
    html.classList.add(`theme-${mode}`)
  }

  const handleThemeChange = (newTheme: ThemeMode) => {
    setTheme(newTheme)
    localStorage.setItem('kingqueen-theme', newTheme)
    applyTheme(newTheme)
  }

  if (!mounted) return null

  return (
    <div className="fixed top-4 right-4 z-40 flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full p-2 border border-[var(--gold)]/20">
      {(['dark', 'light', 'gradient'] as const).map((mode) => (
        <motion.button
          key={mode}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleThemeChange(mode)}
          className={`px-3 py-1.5 rounded-full text-xs font-sans font-semibold transition-all duration-300 uppercase tracking-wider ${
            theme === mode
              ? 'bg-[var(--gold)] text-black'
              : 'text-[var(--gold)]/60 hover:text-[var(--gold)]'
          }`}
        >
          {mode === 'dark' ? '◼' : mode === 'light' ? '◻' : '◐'}
        </motion.button>
      ))}
    </div>
  )
}
