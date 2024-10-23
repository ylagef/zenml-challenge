import React, { PropsWithChildren } from 'react'

export const BaseCard = ({ children }: PropsWithChildren) => {
  return (
    <article className="flex flex-col items-center max-w-full gap-3 p-2 overflow-hidden border rounded-md h-fit grow bg-background text-foreground sm:max-w-96 sm:grow-0">
      {children}
    </article>
  )
}
