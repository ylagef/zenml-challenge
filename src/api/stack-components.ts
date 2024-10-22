import { StackComponent } from '@/types/stack-component'
import { fetchRequest } from './utils'

const SLUG = 'component'

export const getStackComponents = async () => {
  const stackComponents = await fetchRequest<StackComponent[]>(SLUG)

  console.log(stackComponents[0])

  return stackComponents
}

export const getStackComponentById = async (id: string) => {
  const stackComponent = await fetchRequest<StackComponent>(`${SLUG}/{component_id}?stack_component_id=${id}`)
  // console.log(stacks)
  return stackComponent
}
