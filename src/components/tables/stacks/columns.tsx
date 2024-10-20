'use client'

import { Stack } from '@/types/stack'
import { ColumnDef } from '@tanstack/react-table'
import { BooleanCell, SortableHeader } from '../utils'

export const columns: ColumnDef<Stack>[] = [
  {
    accessorKey: 'id',
    header: 'ID'
  },
  {
    accessorKey: 'name',
    header: ({ column }) => SortableHeader<Stack>({ title: 'Name', column })
  },
  {
    accessorKey: 'created',
    header: ({ column }) => SortableHeader<Stack>({ title: 'Created at', column })
  },
  {
    accessorKey: 'updated',
    header: ({ column }) => SortableHeader<Stack>({ title: 'Updated at', column })
  },
  {
    accessorKey: 'is_shared',
    header: ({ column }) => SortableHeader<Stack>({ title: 'Shared', column }),
    cell: ({ row }) => <BooleanCell value={row.original.is_shared} />
  }
]
