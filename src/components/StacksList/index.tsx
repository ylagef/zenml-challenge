'use client'

import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

import { StackCard } from '@/components/StackCard'
import { Stack } from '@/types/stack'

import { HeaderWithMenuButton } from '../HeaderWithMenuButton'
import { FiltersBar } from './FiltersBar'

interface StacksListProps {
  stacks: Stack[]
}

export default function StacksList({ stacks }: StacksListProps) {
  const searchParams = useSearchParams()
  const text = searchParams.get('text') || ''
  const componentType = searchParams.get('component_type') || ''
  const componentId = searchParams.get('component_id') || ''
  const sort = searchParams.get('sort') || ''

  const filteredStacks = useMemo(() => {
    return stacks
      .filter((stack) => {
        const regex = new RegExp(text, 'i')
        return (
          Object.values(stack).some((value) => {
            if (typeof value === 'object') return false
            return regex.test(value as string)
          }) || Object.values(stack.components).some((value) => regex.test(value[0]))
        )
      })
      .filter((stack) => {
        if (!componentType) return true

        const componentFilters = componentType.split(',')
        return Object.values(stack.components).some(([type]) => componentFilters.includes(type))
      })
      .filter((stack) => {
        if (!componentId) return true

        return Object.values(stack.components).some(([id]) => id === componentId)
      })
      .sort((a, b) => {
        switch (sort) {
          case 'created_at':
            return new Date(b.created).getTime() - new Date(a.created).getTime()
          case 'updated_at':
            return new Date(b.updated).getTime() - new Date(a.updated).getTime()
          default:
            return a.name.localeCompare(b.name)
        }
      })
  }, [stacks, text, componentType, sort, componentId])

  return (
    <div className="flex w-full grow flex-col px-2">
      <div className="sticky top-0 z-10 flex flex-col justify-between gap-1 py-2 backdrop-blur">
        <HeaderWithMenuButton />
        <FiltersBar />
      </div>

      <div className="flex w-full flex-wrap gap-2 overflow-y-auto">
        {filteredStacks.map((stack) => (
          <StackCard key={stack.id} stack={stack} />
        ))}
      </div>
    </div>
  )
}
