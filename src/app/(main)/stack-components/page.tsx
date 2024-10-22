import { getStackComponents } from '@/api/stack-components'
import { getStacks } from '@/api/stacks'
import { FiltersBar } from '@/components/FiltersBar'
import { StackCard } from '@/components/StackCard'
import { StackComponent } from '@/components/StackCard/StackComponent'
import { StackComponentCard } from '@/components/StackComponentCard'
import { columns } from '@/components/tables/stack-components/columns'
import { Table } from '@/components/tables/Table'
import { Button } from '@/components/ui/button'
import { Grid, List } from 'lucide-react'
import { Link } from 'next-view-transitions'

enum VIEW_MODE {
  GRID = 'grid',
  LIST = 'list'
}

export default async function StackComponentsPage({ searchParams: { view, text = '' } }: { searchParams: { view?: VIEW_MODE; text?: string } }) {
  const stackComponents = await getStackComponents()

  const filteredStackComponents = stackComponents.filter((stack) => {
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
            <Link href={`/stack-components?view=${VIEW_MODE.GRID}`}>
              <Grid />
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href={`/stack-components?view=${VIEW_MODE.LIST}`}>
              <List />
            </Link>
          </Button>
        </span>
      </div>

      {view === VIEW_MODE.LIST ? (
        <Table columns={columns} data={filteredStackComponents} />
      ) : (
        <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {filteredStackComponents.map((stackComponent) => (
            <StackComponentCard key={stackComponent.id} component={stackComponent} />
          ))}
        </div>
      )}
    </div>
  )
}
