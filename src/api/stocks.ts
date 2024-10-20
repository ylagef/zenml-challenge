import { fetchRequest } from './utils'

const SLUG = 'stacks'

export const getStacks = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(undefined)
    }, 2000)
  })

  const stacks = await fetchRequest(SLUG)
  console.log(stacks)
  return stacks
}

export const getStackById = async (id: string) => {
  const stacks = await fetchRequest(`${SLUG}/${id}`)
  console.log(stacks)
  return stacks
}
