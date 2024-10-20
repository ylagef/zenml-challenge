'use client'

import { Moon } from '@/components/icons/Moon'
import { Spinner } from '@/components/icons/Spinner'
import { Sun } from '@/components/icons/Sun'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Cmd } from './icons/Cmd'
import { KeyCallbackListener } from './KeyListener/Callback'

enum THEME {
  LIGHT = 'light',
  DARK = 'dark'
}

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState<THEME | undefined>()

  const toggleTheme = () => {
    setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT)
  }

  useEffect(() => {
    console.log('theme', theme)
    if (!theme) return
    setSelectedTheme(theme as THEME)
  }, [theme])

  if (!selectedTheme) return <Spinner className="h-6 aspect-square" />

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="flex justify-center gap-1 text-xs text-foreground/50">
        <Cmd />+ K
      </span>

      <button className="flex justify-center" onClick={toggleTheme}>
        {selectedTheme === THEME.LIGHT ? <Moon /> : <Sun />}
      </button>

      <KeyCallbackListener keys={['k']} ctrlCmd callback={toggleTheme} />
    </div>
  )
}
