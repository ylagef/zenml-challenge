'use client'

import ErrorWrapper from '@/components/ErrorWrapper'
import { Button } from '@/components/ui/button'
import { useTransitionRouter } from 'next-view-transitions'

export default function Error({ error }: { error: Error }) {
  const router = useTransitionRouter()
  return (
    <ErrorWrapper error={error}>
      <Button className="mt-8" onClick={() => window.location.reload()}>
        Try again
      </Button>
    </ErrorWrapper>
  )
}
