'use client'

import { useEffect } from 'react'

interface KeyCallbackListenerProps {
  keys: string[]
  callback: () => void
  ctrlCmd?: boolean
}

export const KeyCallbackListener = ({ keys, callback, ctrlCmd }: KeyCallbackListenerProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const needsCtrlCmd = ctrlCmd ? e.ctrlKey || e.metaKey : true
      console.log(keys, e.key, needsCtrlCmd)
      if (keys.includes(e.key) && needsCtrlCmd) {
        e.preventDefault()
        callback()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return null
}
