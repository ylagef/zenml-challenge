import { getStackComponentById } from '@/api/stack-components'
import { getStacks } from '@/api/stacks'
import { FiltersBar } from '@/components/FiltersBar'
import { StackCard } from '@/components/StackCard'
import { StackComponentCard } from '@/components/StackComponentCard'
import { columns } from '@/components/tables/stacks/columns'
import { Table } from '@/components/tables/Table'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Grid, List } from 'lucide-react'
import { Link } from 'next-view-transitions'
import { PropsWithChildren } from 'react'

enum VIEW_MODE {
  GRID = 'grid',
  LIST = 'list'
}

interface SearchParams {
  searchParams: {
    view?: VIEW_MODE
    text?: string
    detail?: string
  }
}

export default async function StacksLayout({ children, searchParams }: PropsWithChildren<SearchParams>) {
  const { view, text = '' } = searchParams || {}
  const stacks = await getStacks()

  const filteredStacks = stacks.filter((stack) => {
    const regex = new RegExp(text, 'i')
    return Object.values(stack).some((value) => {
      if (typeof value === 'object') return false
      return regex.test(value as string)
    })
  })

  return (
    <div className="flex flex-1 gap-2">
      <div className="flex flex-col flex-1">
        <div className="flex justify-between gap-1 py-2">
          <FiltersBar />

          <span className="flex gap-1">
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
          </span>
        </div>

        {view === VIEW_MODE.LIST ? (
          <Table columns={columns} data={filteredStacks} />
        ) : (
          <div className="flex flex-wrap w-full gap-2">
            {filteredStacks.map((stack) => (
              <StackCard key={stack.id} stack={stack} />
            ))}
          </div>
        )}
      </div>

      {children && (
        <>
          <Separator orientation="vertical" />
          {children}
        </>
      )}
    </div>
  )
}
