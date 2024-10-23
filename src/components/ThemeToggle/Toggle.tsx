'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Spinner } from '@/components/icons/Spinner'

import { KeyCallbackListener } from '../KeyListener/Callback'

enum THEME {
  LIGHT = 'light',
  DARK = 'dark'
}

export const Toggle = () => {
  const { theme, setTheme } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState<THEME | undefined>()

  const toggleTheme = () => {
    setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT)
  }

  useEffect(() => {
    if (!theme) return
    setSelectedTheme(theme as THEME)
  }, [theme])

  if (!selectedTheme) return <Spinner className="h-6 aspect-square" />

  return (
    <>
      <button className="flex justify-center opacity-75 hover:opacity-100" onClick={toggleTheme}>
        {selectedTheme === THEME.LIGHT ? <Moon size={24} /> : <Sun size={24} />}
      </button>

      <KeyCallbackListener keys={['k']} ctrlCmd callback={toggleTheme} />
    </>
  )
}
