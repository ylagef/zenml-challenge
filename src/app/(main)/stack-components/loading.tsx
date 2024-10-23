import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="flex flex-col w-full px-2 grow">
      <Skeleton className="w-full h-10" />
      <div className="flex flex-wrap w-full gap-2 overflow-y-auto">
        {Array.from({ length: 9 }).map((_, i) => (
          <Skeleton key={i} className="max-w-full h-96 grow sm:max-w-96 sm:grow-0" />
        ))}
      </div>
    </div>
  )
}
