'use client'

import { useSearchParams } from 'next/navigation'
import { Input } from './ui/input'

import { useSearchParamFilter } from '@/hooks/useSearchParamFilter'
import { STACK_COMPONENT_TYPE } from '@/types/stack-component'
import { SelectComponent } from './SelectComponent'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

export const FiltersBar = () => {
  const searchParams = useSearchParams()
  const { addFilter } = useSearchParamFilter()

  return (
    <div className="flex flex-wrap gap-2 grow">
      <Input
        placeholder="Filter..."
        defaultValue={searchParams.get('text') || ''}
        onChange={(e) => addFilter('text', e.target.value)}
        className="grow sm:max-w-sm"
      />

      <SelectComponent
        placeholder="Component type"
        options={Object.values(STACK_COMPONENT_TYPE).map((value) => ({ value, label: value }))}
        onChange={(e) => addFilter('component_type', e.map((s) => s.value).join(','))}
      />

      <Select onValueChange={(e) => addFilter('sort', e)}>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Name</SelectItem>
          <SelectItem value="created_at">Created at</SelectItem>
          <SelectItem value="updated_at">Updated at</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
