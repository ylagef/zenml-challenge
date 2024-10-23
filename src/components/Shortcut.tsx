import { Command, SquareChevronUp } from 'lucide-react'
import { headers } from 'next/headers'
import { userAgent } from 'next/server'

import { cn } from '@/lib/utils'

export const Shortcut = ({ letter, className }: { letter: string; className?: string }) => {
  const { device } = userAgent({ headers: headers() })
  const isApple = device?.vendor === 'Apple'
  const isMobile = device?.type === 'mobile'

  if (isMobile) return null

  return (
    <span className={cn('flex justify-center gap-1 text-xs text-foreground/50', className)}>
      {isApple ? <Command size={16} /> : <SquareChevronUp size={16} />}
      {letter}
    </span>
  )
}
