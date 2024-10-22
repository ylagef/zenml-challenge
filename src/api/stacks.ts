import { Stack } from '@/types/stack'
import { fetchRequest } from './utils'

const SLUG = 'stacks'

export const getStacks = async () => {
  const stacks = await fetchRequest<Stack[]>(SLUG)
  console.log(stacks[0])
  return stacks
}

export const getStackById = async (id: string) => {
  const stack = await fetchRequest<Stack>(`${SLUG}/${id}`)
  // console.log(stacks)
  return stack
}
