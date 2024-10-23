import { getStackById } from '@/api/stacks'
import { StackCard } from '@/components/StackCard'

interface StackDetailPageProps {
  params: {
    id: string
  }
}

export default async function StackDetailPage({ params: { id } }: StackDetailPageProps) {
  const detailStack = await getStackById(id)

  return <StackCard stack={detailStack} expanded />
}
