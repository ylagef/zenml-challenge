'use client'

import { Button } from '@/components/ui/button'
import { Stack } from '@/types/stack'
import { ColumnDef } from '@tanstack/react-table'
import { ExternalLink, Eye, EyeOff, Filter, MoveDown, MoveRight, MoveUp } from 'lucide-react'
import { Link } from 'next-view-transitions'
import { BooleanCell, formatDate, SortableHeader } from '../utils'
import { cn } from '@/lib/utils'

export const columns: ColumnDef<Stack>[] = [
  {
    accessorKey: 'id',
    header: 'ID'
  },
  // {
  //   accessorKey: 'project',
  //   header: ({ column }) => SortableHeader<Stack>({ title: 'Project', column })
  // },
  // {
  //   accessorKey: 'user',
  //   header: ({ column }) => SortableHeader<Stack>({ title: 'User', column })
  // },
  {
    accessorKey: 'name',
    header: ({ column }) => SortableHeader<Stack>({ title: 'Name', column })
  },
  {
    accessorKey: 'created',
    header: ({ column }) => SortableHeader<Stack>({ title: 'Created at', column }),
    cell: ({ row }) => formatDate(row.original.created)
  },
  // {
  //   accessorKey: 'updated',
  //   header: ({ column }) => SortableHeader<Stack>({ title: 'Updated at', column }),
  //   cell: ({ row }) => formatDate(row.original.updated)
  // },
  {
    accessorKey: 'is_shared',
    header: ({ column }) => SortableHeader<Stack>({ title: 'Shared', column }),
    cell: ({ row }) => <BooleanCell value={row.original.is_shared} />
  },
  {
    accessorKey: 'components',
    header: ({ column }) => SortableHeader<Stack>({ title: 'Components', column }),
    cell: ({ row }) => (
      <div className="flex justify-center gap-1">
        <Button variant="ghost" asChild>
          <Link href={`/stack-components?stack=${row.original.id}`} className="flex gap-2">
            <Filter size={16} />
          </Link>
        </Button>

        <Button variant="ghost" onClick={row.getToggleExpandedHandler()}>
          {row.getIsExpanded() ? <EyeOff size={16} /> : <Eye size={16} />}
        </Button>
      </div>
    )
  },
  {
    accessorKey: 'actions',
    header: '',
    cell: ({ row }) => (
      <Button variant="ghost" asChild>
        <Link href={`/stacks/${row.original.id}`}>
          <ExternalLink size={16} />
        </Link>
      </Button>
    )
  }
]
