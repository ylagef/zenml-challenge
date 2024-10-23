'use client'

import { useTransitionRouter } from 'next-view-transitions'
import { useDebouncedCallback } from 'use-debounce'

export const useSearchParamFilter = () => {
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

  return { addFilter: debouncedFilter }
}
