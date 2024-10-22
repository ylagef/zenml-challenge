import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="flex px-2 py-4 w-96">
      <Skeleton className="w-full h-96" />
    </div>
  )
}
