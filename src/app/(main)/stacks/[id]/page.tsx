import { getStackComponentById } from '@/api/stack-components'
import { StackComponentCard } from '@/components/StackComponentCard'
import { SidebarClose } from 'lucide-react'
import { Link } from 'next-view-transitions'

interface StackDetailPageProps {
  params: {
    id: string
  }
}

export default async function StackDetailPage({ params: { id } }: StackDetailPageProps) {
  const detailComponent = await getStackComponentById(id)

  return (
    <div className="sticky top-0 flex flex-col gap-2 px-4 py-4 h-dvh bg-background/35">
      <div className="flex">
        <Link href="/stacks">
          <SidebarClose className="rotate-180 text-foreground/75" />
        </Link>
      </div>

      <StackComponentCard component={detailComponent} expanded />
    </div>
  )
}
