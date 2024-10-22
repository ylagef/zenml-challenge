import { TableCell, TableRow } from '@/components/ui/table'
import { flexRender, Row as RowT } from '@tanstack/react-table'

export const Row = <TData extends unknown>({ row }: { row: RowT<TData> }) => {
  return (
    <TableRow data-state={row.getIsSelected() && 'selected'}>
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
      ))}
    </TableRow>
  )
}
