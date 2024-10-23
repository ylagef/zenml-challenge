import { Stack } from '@/types/stack'
import { fetchRequest } from './utils'

const SLUG = 'stacks'

export const getStacks = async () =>
  await fetchRequest<Stack[]>(SLUG).catch(() => {
    throw new Error('Could not find the requested stacks')
  })

export const getStackById = async (id: string) =>
  await fetchRequest<Stack>(`${SLUG}/${id}`).catch(() => {
    throw new Error('Could not find the requested stack')
  })
