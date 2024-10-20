import { getStacks } from '@/api/stocks'
import { columns } from '@/components/tables/stacks/columns'
import { DataTable } from '@/components/tables/stacks/dataTable'

export default async function StacksPage() {
  const stacks = await getStacks()
  console.log(stacks)
  return (
    <div className="flex flex-col gap-8">
      {/* {stacks.map((stack) => (
        <div key={stack.id}>{stack.name}</div>
      ))} */}

      <DataTable columns={columns} data={stacks} />
    </div>
  )
}
