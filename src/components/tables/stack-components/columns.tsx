'use client'

import { Button } from '@/components/ui/button'
import { Stack } from '@/types/stack'
import { StackComponent } from '@/types/stack-component'
import { ColumnDef } from '@tanstack/react-table'
import { ExternalLink, Eye, EyeOff, Filter } from 'lucide-react'
import { Link } from 'next-view-transitions'
import { BooleanCell, formatDate, SortableHeader } from '../utils'
import { cn } from '@/lib/utils'

export const columns: ColumnDef<StackComponent>[] = [
  {
    accessorKey: 'id',
    header: 'ID'
  },
  {
    accessorKey: 'name',
    header: ({ column }) => SortableHeader<StackComponent>({ title: 'Name', column })
  },
  {
    accessorKey: 'type',
    header: ({ column }) => SortableHeader<StackComponent>({ title: 'Type', column }),
    cell: ({ row }) => <span className={cn('rounded-full border bg-background px-2 py-1 text-xs', row.original.type)}>{row.original.type}</span>
  },
  {
    accessorKey: 'flavor',
    header: ({ column }) => SortableHeader<StackComponent>({ title: 'Flavor', column })
  },
  {
    accessorKey: 'created',
    header: ({ column }) => SortableHeader<StackComponent>({ title: 'Created at', column }),
    cell: ({ row }) => formatDate(row.original.created)
  },
  {
    accessorKey: 'is_shared',
    header: ({ column }) => SortableHeader<StackComponent>({ title: 'Shared', column }),
    cell: ({ row }) => <BooleanCell value={row.original.is_shared} />
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
