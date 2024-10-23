import { cn } from '@/lib/utils'
import { StackComponent } from '@/types/stack-component'
import { Ellipsis } from 'lucide-react'
import { Link } from 'next-view-transitions'
import { ExpandableCode } from './ExpandableCode'
import { Badge } from '../ui/badge'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Separator } from '../ui/separator'
import { BaseCard } from '../BaseCard'
import { formatDate } from '@/utils/date'

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

        <span className={cn('w-fit rounded-full border bg-background px-3 py-1 text-center text-sm', type)}>{type}</span>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis size={24} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={`/stack-components/${id}`}>View detail</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Update</DropdownMenuItem>
            <DropdownMenuItem className="text-red-800">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
