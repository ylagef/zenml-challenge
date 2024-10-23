'use client'

import ErrorWrapper from '@/components/ErrorWrapper'
import { Button } from '@/components/ui/button'

export default function Error({ error }: { error: Error }) {
  return (
    <ErrorWrapper error={error}>
      <Button className="mt-8" onClick={() => window.location.reload()}>
        Try again
      </Button>
    </ErrorWrapper>
  )
}
