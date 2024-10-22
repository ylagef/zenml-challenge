'use client'

import { useSearchParams } from 'next/navigation'
import { Input } from './ui/input'
import { useTransitionRouter } from 'next-view-transitions'
import { useDebouncedCallback } from 'use-debounce'

export const FiltersBar = () => {
  const searchParams = useSearchParams()
  const router = useTransitionRouter()

  const addSearchParamFilter = (key: string, value: string) => {
    const params = new URLSearchParams(location.search)

    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }

    router.push(`${location.pathname}?${params.toString()}`)
  }

  const debouncedFilter = useDebouncedCallback((key, value) => {
    addSearchParamFilter(key, value)
  }, 500)

  return (
    <div className="flex gap-2 grow">
      <Input
        placeholder="Filter..."
        defaultValue={searchParams.get('text') || ''}
        onChange={(e) => debouncedFilter('text', e.target.value)}
        className="max-w-sm grow"
      />
    </div>
  )
}
