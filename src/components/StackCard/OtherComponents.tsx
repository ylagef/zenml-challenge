'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { StackComponentCard } from '../StackComponentCard'
import { ChevronUp } from 'lucide-react'

export const OtherComponents = ({ components }: { components: [string, any][] }) => {
  const [expanded, setExpanded] = useState(false)

  if (!components?.length) return <span className="flex items-center justify-center w-full h-24 text-sm text-gray-400">No other components yet</span>

  const maxExpandedHeight = `${4 * components.length + 0.5}rem`

  return (
    <div className="flex flex-col w-full">
      <div
        className={cn('flex w-full flex-col gap-2 overflow-hidden transition-[max-height]')}
        style={{ maxHeight: expanded ? maxExpandedHeight : '4rem' }}
      >
        {components.map(([type, id]) => (
          <StackComponentCard key={type} type={type} id={id[0]} />
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
