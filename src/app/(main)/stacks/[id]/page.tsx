import { getStackById } from '@/api/stacks'
import { StackCard } from '@/components/StackCard'
import { StackComponentCard } from '@/components/StackComponentCard'

export default async function StackDetailPage({ params: { id } }: { params: { id: string } }) {
  const stack = await getStackById(id)
  console.log(id, stack)

  return (
    <>
      <StackCard stack={stack} />

      {/* {Object.values(stack.components).map((componentId) => (
        <StackComponentCard key={componentId[0]} componentId={componentId[0]} />
      ))} */}
    </>
  )
}
