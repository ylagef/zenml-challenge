import { getStackComponents } from '@/api/stack-components'
import StackComponentsList from '@/components/StackComponentsList'
import { PropsWithChildren } from 'react'

export default async function StackComponentsLayout({ children }: PropsWithChildren) {
  const stackComponents = await getStackComponents()

  return (
    <div className="flex flex-col flex-1 w-full gap-2 sm:flex-row">
      <StackComponentsList stackComponents={stackComponents} />
      {children}
    </div>
  )
}
