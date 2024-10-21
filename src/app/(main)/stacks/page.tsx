import { getStacks } from '@/api/stacks'
import { columns } from '@/components/tables/stacks/columns'
import { StackComponentsTable } from '@/components/tables/stacks/rows'

export default async function StacksPage() {
  const stacks = await getStacks()
  // console.log(stacks)

  return (
    <div className="flex flex-col gap-8">
      <StackComponentsTable columns={columns} data={stacks} />
    </div>
  )
}
