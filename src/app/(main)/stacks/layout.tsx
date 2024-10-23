import { getStacks } from '@/api/stacks'
import StacksList from '@/components/StacksList'
import { Separator } from '@/components/ui/separator'
import { PropsWithChildren } from 'react'

export default async function StacksLayout({ children }: PropsWithChildren) {
  const stacks = await getStacks()

  return (
    <div className="flex flex-col flex-1 w-full gap-2 sm:flex-row">
      <StacksList stacks={stacks} />

      {children}
    </div>
  )
}
