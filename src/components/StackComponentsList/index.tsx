'use client'

import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

import { HeaderWithMenuButton } from '@/components/HeaderWithMenuButton'
import { StackComponentCard } from '@/components/StackComponentCard'
import { StackComponent } from '@/types/stack-component'

import { FiltersBar } from './FiltersBar'

interface StackComponentsPageProps {
  stackComponents: StackComponent[]
}

export default function StackComponentsList({ stackComponents }: StackComponentsPageProps) {
  const searchParams = useSearchParams()
  const text = searchParams.get('text') || ''
  const component_id = searchParams.get('component_id') || ''
  const sort = searchParams.get('sort') || ''
  const component_type = searchParams.get('component_type') || ''
  const flavor = searchParams.get('flavor') || ''

  const filteredStackComponents = useMemo(() => {
    return stackComponents
      .filter((stackComponent) => {
        const regex = new RegExp(text, 'i')
        return Object.values(stackComponent).some((value) => {
          if (typeof value === 'object') return false
          return regex.test(value as string)
        })
      })
      .filter((stackComponent) => {
        if (component_type) {
          const componentFilters = component_type.split(',')
          return componentFilters.some((component) => stackComponent.type === component)
        }
        return true
      })
      .filter((stackComponent) => {
        if (component_id) {
          const componentFilters = component_id.split(',')
          return componentFilters.some((component) => stackComponent.id === component)
        }
        return true
      })
      .filter((stackComponent) => {
        if (flavor) {
          const componentFilters = flavor.split(',')
          return componentFilters.some((component) => stackComponent.flavor === component)
        }
        return true
      })
      .sort((a, b) => {
        switch (sort) {
          case 'created':
            return new Date(b.created).getTime() - new Date(a.created).getTime()
          case 'updated':
            return new Date(b.updated).getTime() - new Date(a.updated).getTime()
          default:
            return a.name.localeCompare(b.name)
        }
      })
  }, [stackComponents, text, component_id, sort, component_type, flavor])

  const flavorsList = Array.from(new Set(stackComponents.map((stackComponent) => stackComponent.flavor))).sort((a, z) => a.localeCompare(z))

  return (
    <div className="flex w-full flex-1 flex-col px-2">
      <div className="sticky top-0 z-10 flex flex-col justify-between gap-1 py-2 backdrop-blur">
        <HeaderWithMenuButton />
        <FiltersBar flavors={flavorsList} />
      </div>

      <div className="flex w-full flex-wrap gap-2 overflow-y-auto">
        {filteredStackComponents.map((stackComponent) => (
          <StackComponentCard key={stackComponent.id} component={stackComponent} />
        ))}
      </div>
    </div>
  )
}
