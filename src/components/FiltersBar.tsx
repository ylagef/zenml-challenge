'use client'

import { Stack } from '@/types/stack'
import { useSearchParams } from 'next/navigation'
import { Input } from './ui/input'

import { useSearchParamFilter } from '@/hooks/useSearchParamFilter'
import { SelectComponent } from './SelectComponent'
import { STACK_COMPONENT_TYPE } from '@/types/stack-component'

export const FiltersBar = () => {
  const searchParams = useSearchParams()
  const { addFilter } = useSearchParamFilter()

  return (
    <div className="flex gap-2 grow">
      <Input
        placeholder="Filter..."
        defaultValue={searchParams.get('text') || ''}
        onChange={(e) => addFilter('text', e.target.value)}
        className="max-w-sm grow"
      />

      <SelectComponent
        placeholder="Component type"
        options={Object.values(STACK_COMPONENT_TYPE).map((value) => ({ value, label: value }))}
        onChange={(e) => addFilter('component', e.map((s) => s.value).join(','))}
      />
    </div>
  )
}
