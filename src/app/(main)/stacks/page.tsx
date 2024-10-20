import { getStacks } from '@/api/stocks'

export default async function StacksPage() {
  const stacks = await getStacks()
  console.log(stacks)
  return (
    <div className="flex flex-col gap-8">
      {stacks.map((stack) => (
        <div key={stack.id}>{stack.name}</div>
      ))}
    </div>
  )
}
