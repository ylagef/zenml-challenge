import { getStackComponents } from '@/api/stack-components'
import { FiltersBar } from '@/components/FiltersBar'
import { HeaderWithMenuButton } from '@/components/HeaderWithMenuButton'
import { StackComponentCard } from '@/components/StackComponentCard'

interface StackComponentsPageProps {
  searchParams: { text?: string; component_type?: string; component_id?: string }
}

export default async function StackComponentsPage({ searchParams: { text = '', component_type = '', component_id = '' } }: StackComponentsPageProps) {
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

  return (
    <div className="flex flex-col flex-1 w-full px-2">
      <div className="sticky top-0 flex flex-col justify-between gap-1 py-2 backdrop-blur">
        <HeaderWithMenuButton />
        <FiltersBar />
      </div>

      <div className="flex flex-wrap w-full gap-2 overflow-y-auto">
        {filteredStackComponents.map((stackComponent) => (
          <StackComponentCard key={stackComponent.id} component={stackComponent} />
        ))}
      </div>
    </div>
  )
}
