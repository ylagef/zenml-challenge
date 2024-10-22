import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { Link } from 'next-view-transitions'

export const StackComponent = ({ type, id }: { type: string; id: string }) => {
  return (
    <Button
      className={cn('flex h-16 flex-1 flex-col items-center gap-1 border bg-background px-4 py-2 text-foreground hover:bg-border/50', type)}
      asChild
    >
      <Link href={`/stack-components/${id}`}>
        <span className="font-bold">{type}</span>
        <span className="text-xs">{id}</span>
      </Link>
    </Button>
  )
}
