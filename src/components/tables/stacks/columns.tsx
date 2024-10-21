'use client'

import { Button } from '@/components/ui/button'
import { Stack } from '@/types/stack'
import { ColumnDef } from '@tanstack/react-table'
import { Filter, MoveDown, MoveRight } from 'lucide-react'
import { Link } from 'next-view-transitions'
import { BooleanCell, formatDate, SortableHeader } from '../utils'
import { cn } from '@/lib/utils'

export const columns: ColumnDef<Stack>[] = [
  {
    accessorKey: 'id',
    header: 'ID'
  },
  {
    accessorKey: 'project',
    header: ({ column }) => SortableHeader<Stack>({ title: 'Project', column })
  },
  {
    accessorKey: 'user',
    header: ({ column }) => SortableHeader<Stack>({ title: 'User', column })
  },
  {
    accessorKey: 'name',
    header: ({ column }) => SortableHeader<Stack>({ title: 'Name', column })
  },
  {
    accessorKey: 'created',
    header: ({ column }) => SortableHeader<Stack>({ title: 'Created at', column }),
    cell: ({ row }) => formatDate(row.original.created)
  },
  {
    accessorKey: 'updated',
    header: ({ column }) => SortableHeader<Stack>({ title: 'Updated at', column }),
    cell: ({ row }) => formatDate(row.original.updated)
  },
  {
    accessorKey: 'is_shared',
    header: ({ column }) => SortableHeader<Stack>({ title: 'Shared', column }),
    cell: ({ row }) => <BooleanCell value={row.original.is_shared} />
  },
  {
    accessorKey: 'components',
    header: ({ column }) => SortableHeader<Stack>({ title: 'Components', column }),
    cell: ({ row }) => (
      <Button variant="ghost" asChild>
        <Link href={`/stack-components?stack=${row.original.id}`} className="flex gap-2">
          {Object.keys(row.original.components).length}
          <Filter size={16} />
        </Link>
      </Button>
    )
  },
  {
    accessorKey: 'actions',
    header: '',
    cell: ({ row }) => (
      <div className="flex">
        <Button variant="ghost" onClick={row.getToggleExpandedHandler()}>
          <MoveDown size={16} className={cn(row.getIsExpanded() && 'rotate-180')} />
        </Button>

        <Button variant="ghost" asChild>
          <Link href={`/stacks/${row.original.id}`}>
            <MoveRight size={16} />
          </Link>
        </Button>
      </div>
    )
  }
]
