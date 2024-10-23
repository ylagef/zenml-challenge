'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { StackComponent } from './StackComponent'
import { ChevronUp } from 'lucide-react'
import { useParams } from 'next/navigation'

interface OtherComponentsProps {
  components: [string, any][]
  initialExpanded?: boolean
}

export const OtherComponents = ({ components, initialExpanded = false }: OtherComponentsProps) => {
  const [expanded, setExpanded] = useState(initialExpanded)
  const params = useParams()

  if (!components?.length) return <span className="flex items-center justify-center w-full h-24 text-sm text-gray-400">No other components yet</span>

  const maxExpandedHeight = `${4 * components.length + 0.5}rem`

  return (
    <div className="flex flex-col w-full">
      <div
        className={cn('flex w-full flex-col gap-2 overflow-hidden transition-[max-height]')}
        style={{ maxHeight: expanded ? maxExpandedHeight : '4rem' }}
      >
        {components
          .sort(([_, id]) => (params && params.id === id[0] ? -1 : 1))
          .map(([type, id]) => (
            <StackComponent key={type} type={type} id={id[0]} />
          ))}
      </div>

      {components.length > 1 && (
        <button className="flex justify-center pt-4 text-xs text-gray-400 hover:text-foreground" onClick={() => setExpanded((prev) => !prev)}>
          {expanded ? <ChevronUp size={16} /> : `Show ${components.length - 1} more`}
        </button>
      )}
    </div>
  )
}
