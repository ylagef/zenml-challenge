'use client'

import { Stack } from '@/types/stack'
import { ColumnDef } from '@tanstack/react-table'
import { SortableHeader } from '../utils'

export const columns: ColumnDef<Stack>[] = [
  {
    accessorKey: 'id',
    header: 'ID'
  },
  {
    accessorKey: 'name',

    header: ({ column }) => SortableHeader<Stack>('Name', column)
  },
  {
    accessorKey: 'created',
    header: ({ column }) => SortableHeader<Stack>('Created at', column)
  },
  {
    accessorKey: 'updated',
    header: ({ column }) => SortableHeader<Stack>('Updated at', column)
  },
  {
    accessorKey: 'isShared',
    header: ({ column }) => SortableHeader<Stack>('Shared', column),
    cell: ({ row }) => (row.original.is_shared ? 'Yes' : 'No')
  }
]
