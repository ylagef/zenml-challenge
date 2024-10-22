'use client'

import {
  ColumnDef,
  ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable
} from '@tanstack/react-table'

import { Table as TableBase, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Stack } from '@/types/stack'
import { Fragment, useState } from 'react'
import { ExpandedRow, Row } from './stacks/ExpandedRow'
import { StackComponent } from '@/types/stack-component'

interface DataTableProps {
  columns: ColumnDef<StackComponent>[] | ColumnDef<Stack>[]
  data: Stack[] | StackComponent[]
}

export function Table({ columns, data }: DataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = useState<string>('')
  const [expanded, setExpanded] = useState<ExpandedState>({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: () => true,
    globalFilterFn: 'includesString',
    onExpandedChange: setExpanded,
    state: {
      sorting,
      globalFilter,
      expanded
    }
  })

  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-md border bg-background/50">
        <TableBase>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <Fragment key={row.id}>
                  <Row row={row} />
                  {/* {row.getIsExpanded() && <ExpandedRow row={row} />} */}
                </Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </TableBase>
      </div>
    </div>
  )
}
