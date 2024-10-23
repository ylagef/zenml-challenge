import { PropsWithChildren } from 'react'

import { getStackComponents } from '@/api/stack-components'
import StackComponentsList from '@/components/StackComponentsList'

export default async function StackComponentsLayout({ children }: PropsWithChildren) {
  const stackComponents = await getStackComponents()

  return (
    <div className="flex flex-col flex-1 w-full gap-2 sm:flex-row">
      <StackComponentsList stackComponents={stackComponents} />
      {children}
    </div>
  )
}
