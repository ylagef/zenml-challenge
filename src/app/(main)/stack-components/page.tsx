import { getStackComponents } from '@/api/stack-components'
import { FiltersBar } from '@/components/FiltersBar'
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
    <div className="flex flex-col flex-1">
      <div className="flex justify-between gap-1 py-2">
        <FiltersBar />
      </div>

      <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {filteredStackComponents.map((stackComponent) => (
          <StackComponentCard key={stackComponent.id} component={stackComponent} />
        ))}
      </div>
    </div>
  )
}
