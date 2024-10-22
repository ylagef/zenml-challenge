import React, { PropsWithChildren } from 'react'

export const BaseCard = ({ children }: PropsWithChildren) => {
  return (
    <article className="flex flex-col items-center gap-3 p-2 overflow-hidden border rounded-md h-fit grow bg-background text-foreground sm:grow-0">
      {children}
    </article>
  )
}
