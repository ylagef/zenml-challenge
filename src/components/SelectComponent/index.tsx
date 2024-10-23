import Select, { ActionMeta, MultiValue } from 'react-select'

import { STACK_COMPONENT_TYPE } from '@/types/stack-component'
import makeAnimated from 'react-select/animated'

interface SelectComponentProps<T extends unknown> {
  options: {
    value: T
    label: T
  }[]
  onChange: (
    newValue: MultiValue<{
      value: T
      label: T
    }>,
    actionMeta: ActionMeta<{
      value: T
      label: T
    }>
  ) => void
  placeholder?: string
}

const animatedComponents = makeAnimated()

export const SelectComponent = <T extends unknown>({ options, onChange, placeholder }: SelectComponentProps<T>) => {
  return (
    <Select
      placeholder="Components"
      onChange={onChange}
      components={animatedComponents}
      isMulti
      closeMenuOnSelect={false}
      options={options}
      className="min-w-52 grow sm:max-w-48"
      styles={{
        clearIndicator: (base) => ({
          ...base,
          color: 'hsl(var(--foreground))'
        }),
        dropdownIndicator: (base) => ({
          ...base,
          color: 'hsl(var(--foreground))'
        }),
        input: (base) => ({
          ...base,
          fontSize: '0.875rem'
        }),
        placeholder: (base) => ({
          ...base,
          fontSize: '0.875rem'
        })
      }}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: 'hsl(var(--input))',
          neutral0: 'hsl(var(--background))',
          neutral20: 'hsl(var(--input))',
          primary25: 'hsl(var(--input))',
          neutral10: 'hsl(var(--input))',
          neutral80: 'hsl(var(--foreground))',
          dangerLight: 'hsl(var(--destructive))',
          danger: 'hsl(var(--destructive-foreground))'
        },
        borderRadius: 6,
        spacing: {
          ...theme.spacing,
          controlHeight: 40
        }
      })}
    />
  )
}
