import { Stack } from '@/types/stack'
import { fetchRequest } from './utils'

const SLUG = 'stacks'

export const getStacks = async () => {
  const stacks = await fetchRequest<Stack[]>(SLUG)
  console.log(stacks)
  return stacks
}

export const getStackById = async (id: string) => {
  const stacks = await fetchRequest(`${SLUG}/${id}`)
  console.log(stacks)
  return stacks
}
