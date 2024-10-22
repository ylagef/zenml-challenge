import { Shortcut } from '../Shortcut'
import { Toggle } from './Toggle'

export const ThemeToggle = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Shortcut letter="K" className="group-data-[collapsible=icon]:hidden" />
      <Toggle />
    </div>
  )
}
