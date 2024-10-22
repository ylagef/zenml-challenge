import { getStacks } from '@/api/stacks'
import { FiltersBar } from '@/components/FiltersBar'
import { StackCard } from '@/components/StackCard'
import { columns } from '@/components/tables/stacks/columns'
import { Table } from '@/components/tables/Table'
import { Button } from '@/components/ui/button'
import { Grid, List } from 'lucide-react'
import { Link } from 'next-view-transitions'

enum VIEW_MODE {
  GRID = 'grid',
  LIST = 'list'
}

export default async function StacksPage({ searchParams: { view, text = '' } }: { searchParams: { view?: VIEW_MODE; text?: string } }) {
  const stacks = await getStacks()
  // Filtered regex for any field in stacks matching the search text

  const filteredStacks = stacks.filter((stack) => {
    const regex = new RegExp(text, 'i')
    return Object.values(stack).some((value) => {
      if (typeof value === 'object') return false
      return regex.test(value as string)
    })
  })

  return (
    <div className="flex flex-1 flex-col">
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
        <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {filteredStacks.map((stack) => (
            <StackCard key={stack.id} stack={stack} />
          ))}
        </div>
      )}
    </div>
  )
}
