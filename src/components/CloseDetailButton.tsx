'use client'

import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'
import { SidebarClose } from 'lucide-react'
import { Link } from 'next-view-transitions'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export const CloseDetailButton = ({ url, removeKey }: { url: string; removeKey: string }) => {
  const isMobile = useIsMobile()
  const currentSearchParams = useSearchParams()
  const searchParams = new URLSearchParams(currentSearchParams.toString())
  searchParams.delete(removeKey)
  const newUrl = `${url}?${searchParams.toString()}`

  return (
    <Link href={newUrl}>
      <SidebarClose className={cn('text-foreground/75', isMobile ? '-rotate-90' : 'rotate-180')} />
    </Link>
  )
}
