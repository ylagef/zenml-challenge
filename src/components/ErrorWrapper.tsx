'use client'

import { PropsWithChildren } from 'react'

export default function ErrorWrapper({ error, children }: PropsWithChildren<{ error: Error }>) {
  console.error(error)
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-4">
      <h1 className="text-3xl font-bold">There was an unexpected error</h1>
      <p className="text-xs">
        ({error.name} - {error.message})
      </p>

      {children}
    </div>
  )
}
