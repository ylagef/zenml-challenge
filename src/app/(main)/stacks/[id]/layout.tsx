import { CloseDetailButton } from '@/components/CloseDetailButton'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="max-h-1/2 sticky bottom-0 flex min-w-full flex-col gap-2 bg-background/35 px-4 py-4 backdrop-blur sm:top-0 sm:h-dvh sm:min-w-96">
      <div className="flex">
        <CloseDetailButton url="/stacks" removeKey="component" />
      </div>
      {children}
    </div>
  )
}
