import { Shortcut } from '../Shortcut'
import { Toggle } from './Toggle'

export const SidebarToggle = () => {
  return (
    <div className="flex-col items-center hidden gap-2 md:flex">
      <Shortcut letter="B" className="group-data-[collapsible=icon]:hidden" />
      <Toggle />
    </div>
  )
}
