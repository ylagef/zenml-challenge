'use client'

import { useParams, usePathname, useSearchParams } from 'next/navigation'
import { Link } from 'next-view-transitions'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

interface StackComponentProps {
  type: string
  id: string
}

export const StackComponent = ({ type, id }: StackComponentProps) => {
  const params = useParams()
  const pathName = usePathname()
  const currentSearchParams = useSearchParams()
  const isStackPath = pathName.startsWith('/stacks')
  const isNotSelected = isStackPath && params.id && params.id !== id

  const searchParams = new URLSearchParams(currentSearchParams.toString())
  searchParams.set('component_id', id)
  const href = `/stacks/${id}?${searchParams.toString()}`

  return (
    <Button
      className={cn(
        'flex h-16 flex-1 flex-col items-center gap-1 border bg-background px-4 py-2 text-foreground hover:bg-border/50',
        type,
        isNotSelected && 'opacity-50'
      )}
      asChild
    >
      <Link href={href}>
        <span className="font-bold">{type}</span>
        <span className="text-xs">{id}</span>
      </Link>
    </Button>
  )
}
