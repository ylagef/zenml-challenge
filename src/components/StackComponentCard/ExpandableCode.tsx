'use client'

import { ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { cn } from '@/lib/utils'
import { StackComponent } from '@/types/stack-component'

interface ExpandableCodeProps {
  code: StackComponent['configuration']
  initialExpanded?: boolean
}

export const ExpandableCode = ({ code, initialExpanded = false }: ExpandableCodeProps) => {
  const [expanded, setExpanded] = useState<boolean>(initialExpanded)
  const codeString = JSON.stringify(code, null, 2)
  const numberOfLines = codeString.split('\n').length
  const maxExpandedHeight = `${2 * (numberOfLines + 2)}rem`

  return (
    <span
      className={cn('flex min-h-24 w-full flex-col overflow-hidden transition-[max-height]')}
      style={{ maxHeight: expanded ? maxExpandedHeight : '5.75rem' }}
    >
      <SyntaxHighlighter
        language="json"
        customStyle={{
          backgroundColor: 'hsl(var(--border))',
          color: 'var(--foreground)',
          fontSize: '0.9rem',
          borderRadius: '0.5rem',
          padding: '.75rem',
          overflowY: 'hidden',
          overflowX: expanded ? 'auto' : 'hidden'
        }}
      >
        {JSON.stringify(code, null, 2)}
      </SyntaxHighlighter>

      {numberOfLines > 1 && (
        <button className="flex justify-center pt-4 text-xs text-gray-400 hover:text-foreground" onClick={() => setExpanded((prev) => !prev)}>
          {expanded ? <ChevronUp size={16} /> : `Show more`}
        </button>
      )}
    </span>
  )
}
