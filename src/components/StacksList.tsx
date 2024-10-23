'use client'

import { FiltersBar } from '@/components/FiltersBar'
import { StackCard } from '@/components/StackCard'
import { Stack } from '@/types/stack'
import { STACK_COMPONENT_TYPE } from '@/types/stack-component'
import { useSearchParams } from 'next/navigation'

interface StacksListProps {
  stacks: Stack[]
}

export default async function StacksList({ stacks }: StacksListProps) {
  const searchParams = useSearchParams()
  const text = searchParams.get('text') || ''
  const components = searchParams.get('component') || ''
  const sort = searchParams.get('sort') || ''

  const filteredStacks = stacks
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
      if (components) {
        const componentFilters = components.split(',')
        return componentFilters.some((component) => stack.components[component as STACK_COMPONENT_TYPE])
      }
      return true
    })
    .sort((a, b) => {
      if (sort === 'created_at') {
        return new Date(b.created).getTime() - new Date(a.created).getTime()
      } else if (sort === 'updated_at') {
        return new Date(b.updated).getTime() - new Date(a.updated).getTime()
      } else {
        return a.name.localeCompare(b.name)
      }
    })

  return (
    <div className="flex flex-col px-2 grow">
      <div className="sticky top-0 flex justify-between gap-1 py-2 backdrop-blur">
        <FiltersBar />
      </div>

      <div className="flex flex-wrap w-full gap-2 overflow-y-auto">
        {filteredStacks.map((stack) => (
          <StackCard key={stack.id} stack={stack} />
        ))}
      </div>
    </div>
  )
}
