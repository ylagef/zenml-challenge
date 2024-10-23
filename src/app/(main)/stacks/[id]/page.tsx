import { getStackComponentById } from '@/api/stack-components'
import { StackComponentCard } from '@/components/StackComponentCard'

interface StackDetailPageProps {
  params: {
    id: string
  }
}

export default async function StackDetailPage({ params: { id } }: StackDetailPageProps) {
  const detailComponent = await getStackComponentById(id)

  return <StackComponentCard component={detailComponent} expanded />
}
