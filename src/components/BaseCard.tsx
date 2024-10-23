import React, { PropsWithChildren } from 'react'

export const BaseCard = ({ children }: PropsWithChildren) => {
  return (
    <article className="flex flex-col items-center w-full gap-3 p-2 overflow-hidden border rounded-md h-fit bg-background text-foreground sm:max-w-96">
      {children}
    </article>
  )
}
