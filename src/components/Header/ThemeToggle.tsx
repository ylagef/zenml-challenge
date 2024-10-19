'use client'

import { useTheme } from 'next-themes'
import React, { use, useEffect, useState } from 'react'
import { Sun } from '@/components/icons/Sun'
import { Moon } from '@/components/icons/Moon'
import { Spinner } from '../icons/Spinner'

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

  return <button onClick={toggleTheme}>{theme === THEME.LIGHT ? <Moon /> : <Sun />}</button>
}
