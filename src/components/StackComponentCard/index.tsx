import { cn } from '@/lib/utils'
import { StackComponent } from '@/types/stack-component'
import { formatDate } from '@/utils/date'
import { BaseCard } from '../BaseCard'
import { CardDropdownMenu } from '../CardDropdownMenu'
import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'
import { ExpandableCode } from './ExpandableCode'
import { DropdownMenuItem } from '../ui/dropdown-menu'
import { Link } from 'next-view-transitions'

interface StackComponentCardProps {
  component: StackComponent
  expanded?: boolean
}

export const StackComponentCard = ({ component, expanded }: StackComponentCardProps) => {
  const { name, id, type, flavor, project, configuration, created, updated, is_shared } = component
  return (
    <BaseCard>
      <div className="flex justify-between w-full px-2 pt-2">
        <Badge variant={is_shared ? 'default' : 'outline'}>{is_shared ? 'Shared' : 'Private'}</Badge>

        <Badge className={cn('border border-border bg-background text-foreground hover:bg-background/75', type)}>{type}</Badge>

        <CardDropdownMenu>
          <DropdownMenuItem>
            <Link href={`/stacks/${id}?component=${id}`}>View connected stacks</Link>
          </DropdownMenuItem>
        </CardDropdownMenu>
      </div>

      <div className="flex flex-col w-full gap-2 px-2">
        <div className="flex flex-col w-full gap-1 p-2">
          <h3 className="mb-2 font-bold break-all text-md">{name}</h3>
          <label className="text-sm">
            <span className="font-bold">ID: </span>
            {id}
          </label>
          <label className="text-sm">
            <span className="font-bold">Flavor: </span>
            {flavor}
          </label>
          <label className="text-sm">
            <span className="font-bold">Project: </span>
            {project}
          </label>
          <label className="text-sm">
            <span className="font-bold">Created at: </span>
            {formatDate(created)}
          </label>
          <label className="text-sm">
            <span className="font-bold">Updated at: </span>
            {formatDate(updated)}
          </label>
        </div>

        <Separator />

        <div className="flex flex-col gap-2 px-2 pb-4">
          <label className="text-sm font-bold">Configuration:</label>
          <ExpandableCode code={configuration} initialExpanded={expanded} />
        </div>
      </div>
    </BaseCard>
  )
}
