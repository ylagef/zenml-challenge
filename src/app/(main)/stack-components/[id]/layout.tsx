import { CloseDetailButton } from '@/components/CloseDetailButton'
import { Separator } from '@/components/ui/separator'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Separator orientation="vertical" />

      <div className="sticky bottom-0 flex flex-col min-w-full gap-2 px-4 py-4 max-h-1/2 backdrop-blur-sm sm:top-0 sm:h-dvh sm:min-w-96">
        <div className="flex">
          <CloseDetailButton url="/stack-components" removeKey="component_id" />
        </div>

        {children}
      </div>
    </>
  )
}
