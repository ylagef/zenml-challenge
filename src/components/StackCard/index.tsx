import { Link } from 'next-view-transitions'

import { Stack } from '@/types/stack'
import { formatDate } from '@/utils/date'
import { splitComponents } from '@/utils/stacks'

import { AddComponentButton } from '../AddComponentButton'
import { BaseCard } from '../BaseCard'
import { CardDropdownMenu } from '../CardDropdownMenu'
import { Badge } from '../ui/badge'
import { DropdownMenuItem } from '../ui/dropdown-menu'
import { Separator } from '../ui/separator'
import { OtherComponents } from './OtherComponents'
import { StackComponent } from './StackComponent'

interface StackCardProps {
  stack: Stack
  expanded?: boolean
}

export const StackCard = ({ stack, expanded }: StackCardProps) => {
  const { id, description, name, created, updated, components, is_shared } = stack
  const { mainComponents, otherComponents } = splitComponents(components)

  return (
    <BaseCard>
      <div className="flex justify-between w-full px-2 pt-2">
        <Badge variant={is_shared ? 'default' : 'outline'}>{is_shared ? 'Shared' : 'Private'}</Badge>

        <CardDropdownMenu>
          <DropdownMenuItem>
            <Link href={`/stack-components/${id}?component_id=${[...mainComponents, ...otherComponents].map(([, [id]]) => id).join(',')}`}>
              View components
            </Link>
          </DropdownMenuItem>
        </CardDropdownMenu>
      </div>

      <div className="flex flex-col w-full p-2">
        <h3 className="mb-2 font-bold break-all text-md">{name}</h3>
        <label className="text-sm">
          <span className="font-bold">ID: </span>
          {id}
        </label>
        <label className="text-sm">
          <span className="font-bold">Description: </span>
          {description || <i className="text-foreground/50">None</i>}
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

      <div className="flex flex-col w-full gap-2">
        {mainComponents.map(([type, id]) => (
          <StackComponent key={type} type={type} id={id[0]} />
        ))}
      </div>

      <Separator />

      <OtherComponents components={otherComponents} initialExpanded={expanded} />

      <AddComponentButton />
    </BaseCard>
  )
}
