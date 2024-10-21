import { STACK_COMPONENT_TYPE } from './stack-component'

export type Stack = {
  id: string
  created: string
  updated: string
  user: string
  project: string
  is_shared: boolean
  name: string
  description: string
  components: Record<STACK_COMPONENT_TYPE, string[]>
}
