import { StackComponent } from '@/types/stack-component'

import { fetchRequest } from './utils'

const SLUG = 'components'

export const getStackComponents = async () =>
  await fetchRequest<StackComponent[]>(SLUG).catch(() => {
    throw new Error('Could not find the requested stack components')
  })

// TODO: Fix this on API as does not match the API docs
export const getStackComponentById = async (id: string) =>
  await fetchRequest<StackComponent>(`component/{component_id}?stack_component_id=${id}`).catch(() => {
    throw new Error('Could not find the requested stack component')
  })
