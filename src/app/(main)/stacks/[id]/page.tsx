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
    <div className="sticky bottom-0 flex flex-col min-w-full gap-2 px-4 py-4 max-h-1/2 bg-background/35 backdrop-blur sm:top-0 sm:h-dvh sm:min-w-96">
      <div className="flex">
        <CloseDetailButton url="/stacks" removeKey="component" />
      </div>

      <StackComponentCard component={detailComponent} expanded />
    </div>
  )
}
