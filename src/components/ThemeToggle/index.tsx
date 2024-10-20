import { Shortcut } from '../Shortcut'
import { Toggle } from './Toggle'

export const ThemeToggle = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Shortcut letter="K" />
      <Toggle />
    </div>
  )
}
