'use client'

import { SidebarClose } from 'lucide-react'
import { Link } from 'next-view-transitions'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export const CloseDetailButton = ({ url, removeKey }: { url: string; removeKey: string }) => {
  const currentSearchParams = useSearchParams()
  const searchParams = new URLSearchParams(currentSearchParams.toString())
  searchParams.delete(removeKey)
  const newUrl = `${url}?${searchParams.toString()}`

  return (
    <Link href={newUrl}>
      <SidebarClose className="rotate-180 text-foreground/75" />
    </Link>
  )
}
