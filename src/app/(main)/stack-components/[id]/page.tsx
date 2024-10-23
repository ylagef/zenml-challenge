import { getStackComponentById } from '@/api/stack-components'
import { StackComponentCard } from '@/components/StackComponentCard'

export default async function StackComponentDetailPage({
  params: { id }
}: {
  params: { id: string }
  searchParams: {
    text: string
    component: string
  }
}) {
  const stackComponent = await getStackComponentById(id)
  // console.log(id, stackComponent)

  return (
    <>
      <StackComponentCard component={stackComponent} />
    </>
  )
}
