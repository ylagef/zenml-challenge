import { Stack } from '@/types/stack'
import { STACK_COMPONENT_TYPE } from '@/types/stack-component'

export const MANDATORY_COMPONENTS = [STACK_COMPONENT_TYPE.ORCHESTRATOR, STACK_COMPONENT_TYPE.ARTIFACT_STORE]

export const splitComponents = (components: Stack['components']) => {
  const sortedComponents = Object.entries(components).sort(([a], [b]) => a.localeCompare(b))

  const { mainComponents, otherComponents } = sortedComponents.reduce(
    (acc, [type, component]) => {
      if (MANDATORY_COMPONENTS.includes(type as STACK_COMPONENT_TYPE)) {
        acc.mainComponents.push([type, component])
      } else {
        acc.otherComponents.push([type, component])
      }
      return acc
    },
    { mainComponents: [], otherComponents: [] } as { mainComponents: [string, any][]; otherComponents: [string, any][] }
  )

  return { mainComponents, otherComponents }
}
