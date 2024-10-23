import React, { PropsWithChildren } from 'react'

export const BaseCard = ({ children }: PropsWithChildren) => {
  return (
    <article className="flex flex-col items-center w-full gap-3 p-2 overflow-hidden border rounded-md bg-card-background h-fit text-foreground sm:max-w-96">
      {children}
    </article>
  )
}
