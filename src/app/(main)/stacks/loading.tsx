import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Skeleton className="h-10 w-full max-w-96" />
      <Skeleton className="h-3/4 w-full" />
    </div>
  )
}
