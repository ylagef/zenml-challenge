import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { Stack } from '@/types/stack'
import { STACK_COMPONENT_TYPE, StackComponent } from '@/types/stack-component'
import { flexRender, Row as RowT } from '@tanstack/react-table'
import { Link } from 'next-view-transitions'

export const Row = ({ row }: { row: RowT<Stack | StackComponent> }) => {
  return (
    <TableRow data-state={row.getIsSelected() && 'selected'}>
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
      ))}
    </TableRow>
  )
}

const MANDATORY_COMPONENTS = [STACK_COMPONENT_TYPE.ARTIFACT_STORE, STACK_COMPONENT_TYPE.ORCHESTRATOR]

export const ExpandedRow = ({ row }: { row: RowT<Stack> }) => {
  const components = row.original.components
  console.log(components)

  return (
    <TableRow>
      <TableCell colSpan={row.getAllCells().length}>
        <div className="flex flex-wrap w-full gap-2">
          {Object.entries(components)
            .sort(([key]) => (MANDATORY_COMPONENTS.includes(key as STACK_COMPONENT_TYPE) ? -1 : 1))
            .map(([key, value]) => (
              <Button
                variant="ghost"
                key={key}
                className={cn(
                  'flex h-auto min-w-72 flex-col items-center gap-1 border bg-background px-4 py-2 hover:bg-border/50',
                  key,
                  MANDATORY_COMPONENTS.includes(key as STACK_COMPONENT_TYPE) && 'border-2'
                )}
                asChild
              >
                <Link href={`/stack-components?id=${row.original.id}`}>
                  <span className="font-bold">{key}</span>
                  <span className="text-xs">{value[0]}</span>
                </Link>
              </Button>
            ))}
        </div>
      </TableCell>
    </TableRow>
  )
}
