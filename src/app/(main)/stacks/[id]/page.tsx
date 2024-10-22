import { getStackComponentById } from '@/api/stack-components'
import { StackComponentCard } from '@/components/StackComponentCard'
import { X } from 'lucide-react'
import { Link } from 'next-view-transitions'

export default async function StackDetailPage({ params: { id } }: { params: { id: string } }) {
  const detailComponent = await getStackComponentById(id)
  // console.log(id, detailComponent)

  return (
    <div className="flex flex-col gap-2 px-2 py-4">
      <div className="flex justify-end">
        <Link href="/stacks">
          <X />
        </Link>
      </div>
      <StackComponentCard component={detailComponent} expanded />
      {/* <StackCard stack={stack} /> */}

      {/* {Object.values(stack.components).map((componentId) => (
        <StackComponentCard key={componentId[0]} componentId={componentId[0]} />
      ))} */}
    </div>
  )
}
