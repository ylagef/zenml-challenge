import { getStackComponents } from '@/api/stack-components'
import { FiltersBar } from '@/components/FiltersBar'
import { HeaderWithMenuButton } from '@/components/HeaderWithMenuButton'
import { StackComponentCard } from '@/components/StackComponentCard'

interface StackComponentsPageProps {
  searchParams: { text?: string; component?: string }
}

export default async function StackComponentsPage({ searchParams: { text = '', component = '' } }: StackComponentsPageProps) {
  const stackComponents = await getStackComponents()

  const filteredStackComponents = stackComponents
    .filter((stackComponent) => {
      const regex = new RegExp(text, 'i')
      return Object.values(stackComponent).some((value) => {
        if (typeof value === 'object') return false
        return regex.test(value as string)
      })
    })
    .filter((stackComponent) => {
      if (component) {
        const componentFilters = component.split(',')
        return componentFilters.some((component) => stackComponent.type === component)
      }
      return true
    })

  return (
    <div className="flex w-full flex-1 flex-col px-2">
      <div className="sticky top-0 flex flex-col justify-between gap-1 py-2 backdrop-blur">
        <HeaderWithMenuButton />
        <FiltersBar />
      </div>

      <div className="flex w-full flex-wrap gap-2 overflow-y-auto">
        {filteredStackComponents.map((stackComponent) => (
          <StackComponentCard key={stackComponent.id} component={stackComponent} />
        ))}
      </div>
    </div>
  )
}
