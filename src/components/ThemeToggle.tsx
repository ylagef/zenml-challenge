'use client'

import { Moon } from '@/components/icons/Moon'
import { Spinner } from '@/components/icons/Spinner'
import { Sun } from '@/components/icons/Sun'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

enum THEME {
  LIGHT = 'light',
  DARK = 'dark'
}

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState<THEME | undefined>()

  const toggleTheme = () => setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT)

  useEffect(() => {
    if (!theme) return
    setSelectedTheme(theme as THEME)
  }, [theme])

  if (!selectedTheme) return <Spinner className="aspect-square h-6" />

  return (
    <button className="flex justify-center" onClick={toggleTheme}>
      {theme === THEME.LIGHT ? <Moon /> : <Sun />}
    </button>
  )
}
