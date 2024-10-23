'use client'

import { SidebarClose } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Link } from 'next-view-transitions'
import React from 'react'

import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'

export const CloseDetailButton = ({ url, removeKey }: { url: string; removeKey?: string }) => {
  const isMobile = useIsMobile()
  const currentSearchParams = useSearchParams()
  const searchParams = new URLSearchParams(currentSearchParams.toString())
  if (removeKey) searchParams.delete(removeKey)
  const newUrl = `${url}?${searchParams.toString()}`

  return (
    <Link href={newUrl}>
      <SidebarClose className={cn('text-foreground/75', isMobile ? '-rotate-90' : 'rotate-180')} />
    </Link>
  )
}
