'use client'

import ErrorWrapper from '@/components/ErrorWrapper'
import { Button } from '@/components/ui/button'
import { Link } from 'next-view-transitions'

export default function Error({ error }: { error: Error }) {
  return (
    <ErrorWrapper error={error}>
      <Button asChild className="mt-8">
        <Link href="/stack-components">Return to list</Link>
      </Button>
    </ErrorWrapper>
  )
}
