import { getStackById } from '@/api/stacks'
import { StackCard } from '@/components/StackCard'

export default async function StackDetailPage({ params: { id } }: { params: { id: string } }) {
  const stack = await getStackById(id)
  console.log(id, stack)

  return <StackCard stack={stack} />
}
