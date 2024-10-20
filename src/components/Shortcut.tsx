import { userAgent } from 'next/server'

import { headers } from 'next/headers'
import { Cmd } from './icons/Cmd'
import { Ctrl } from './icons/Ctrl'

export const Shortcut = ({ letter }: { letter: string }) => {
  const { device } = userAgent({ headers: headers() })
  const isApple = device?.vendor === 'Apple'
  const isMobile = device?.type === 'mobile'

  if (isMobile) return null

  return (
    <span className="flex justify-center gap-1 text-xs text-foreground/50">
      {isApple ? <Cmd /> : <Ctrl />}+ {letter}{' '}
    </span>
  )
}
