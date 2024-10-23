import { Stack } from '@/types/stack'
import { splitComponents } from '@/utils/stacks'
import { StackComponent } from './StackComponent'

import { Separator } from '../ui/separator'
import { AddComponentButton } from '../AddComponentButton'
import { OtherComponents } from './OtherComponents'
import { Ellipsis, ExternalLink } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Link } from 'next-view-transitions'
import { Badge } from '../ui/badge'
import { cn } from '@/lib/utils'
import { BaseCard } from '../BaseCard'
import { formatDate } from '@/utils/date'
import { comingSoonToast } from '@/utils/toast'

export const StackCard = ({ stack }: { stack: Stack }) => {
  const { id, description, name, created, updated, components, is_shared } = stack
  const { mainComponents, otherComponents } = splitComponents(components)

  return (
    <BaseCard>
      <div className="flex w-full justify-between px-2 pt-2">
        <Badge variant={is_shared ? 'default' : 'outline'}>{is_shared ? 'Shared' : 'Private'}</Badge>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis size={24} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={`/stacks/${id}`}>View detail</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={comingSoonToast}>Update</DropdownMenuItem>
            <DropdownMenuItem onClick={comingSoonToast} className="text-red-800">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex w-full flex-col p-2">
        <h3 className="text-md mb-2 break-all font-bold">{name}</h3>
        <label className="text-sm">
          <span className="font-bold">ID: </span>
          {id}
        </label>
        <label className="text-sm">
          <span className="font-bold">Description: </span>
          {description ? description : <i className="text-foreground/50">None</i>}
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

      <div className="flex w-full flex-col gap-2">
        {mainComponents.map(([type, id]) => (
          <StackComponent key={type} type={type} id={id[0]} />
        ))}
      </div>

      <Separator />

      <OtherComponents components={otherComponents} />

      <AddComponentButton />
    </BaseCard>
  )
}
