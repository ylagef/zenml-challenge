'use client'

import { FiltersBar } from '@/components/FiltersBar'
import { StackCard } from '@/components/StackCard'
import { columns } from '@/components/tables/stacks/columns'
import { Table } from '@/components/tables/Table'
import { Button } from '@/components/ui/button'
import { Stack } from '@/types/stack'
import { STACK_COMPONENT_TYPE } from '@/types/stack-component'
import { Grid, List } from 'lucide-react'
import { Link } from 'next-view-transitions'
import { useSearchParams } from 'next/navigation'

enum VIEW_MODE {
  GRID = 'grid',
  LIST = 'list'
}

interface StacksListProps {
  stacks: Stack[]
}

export default async function StacksList({ stacks }: StacksListProps) {
  const searchParams = useSearchParams()
  const view = searchParams.get('view') as VIEW_MODE
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
        {/* <span className="flex gap-1">
          <Button variant="ghost" asChild>
            <Link href={`/stacks?view=${VIEW_MODE.GRID}`}>
              <Grid />
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href={`/stacks?view=${VIEW_MODE.LIST}`}>
              <List />
            </Link>
          </Button>
        </span> */}

        <FiltersBar />
      </div>

      {view === VIEW_MODE.LIST ? (
        <Table columns={columns} data={filteredStacks} />
      ) : (
        <div className="flex flex-wrap w-full gap-2 overflow-y-auto">
          {filteredStacks.map((stack) => (
            <StackCard key={stack.id} stack={stack} />
          ))}
        </div>
      )}
    </div>
  )
}
