import { getStackComponentById } from '@/api/stack-components'
import { CloseDetailButton } from '@/components/CloseDetailButton'
import { StackComponentCard } from '@/components/StackComponentCard'

interface StackDetailPageProps {
  params: {
    id: string
  }
}

export default async function StackDetailPage({ params: { id } }: StackDetailPageProps) {
  const detailComponent = await getStackComponentById(id)

  return (
    <div className="sticky top-0 flex h-dvh flex-col gap-2 bg-background/35 px-4 py-4">
      <div className="flex">
        <CloseDetailButton url="/stacks" removeKey="component" />
      </div>

      <StackComponentCard component={detailComponent} expanded />
    </div>
  )
}
