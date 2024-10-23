'use client'

import { CircleX } from 'lucide-react'
import { PropsWithChildren } from 'react'

export default function ErrorWrapper({ error, children }: PropsWithChildren<{ error: Error }>) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-4">
      <CircleX size={64} className="text-destructive" />

      <h1 className="text-3xl font-bold text-center">There was an error</h1>

      <p className="text-xs">
        ({error.name} - {error.message})
      </p>

      {children}
    </div>
  )
}
