import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarTrigger
} from '@/components/ui/sidebar'
import { ROUTES } from '@/utils/routes'
import { ThemeToggle } from '../ThemeToggle'
import { MenuItem } from './MenuItem'

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="font-bold">Stacks builder</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {ROUTES.map((route) => (
                <MenuItem key={route.href} route={route} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex w-full justify-between p-2">
          <ThemeToggle />
          <SidebarTrigger />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
