import { getStackComponentById } from '@/api/stack-components'
import { getStackById } from '@/api/stacks'
import { StackComponent } from '@/components/StackCard/StackComponent'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

export default async function StackComponentDetailPage({ params: { id } }: { params: { id: string } }) {
  const stackComponent = await getStackComponentById(id)
  console.log(id, stackComponent)

  return <StackComponent type={stackComponent.type} id={stackComponent.id} />
}
