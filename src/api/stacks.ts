import { Stack } from '@/types/stack'
import { fetchRequest } from './utils'

const SLUG = 'stacks'

export const getStacks = async () => await fetchRequest<Stack[]>(SLUG)

export const getStackById = async (id: string) => await fetchRequest<Stack>(`${SLUG}/${id}`)
