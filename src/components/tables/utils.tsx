import { Column } from '@tanstack/react-table'
import { ArrowUpDown, Check, X } from 'lucide-react'
import { Button } from '../ui/button'

export const SortableHeader = <T extends unknown>({ title, column }: { title: string; column: Column<T> }) => {
  return (
    <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
      {title}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  )
}

export const BooleanCell = ({ value }: { value: boolean }) => <span className="flex items-center justify-center">{value ? <Check /> : <X />}</span>
