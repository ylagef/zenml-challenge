import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarMenu } from '@/components/ui/sidebar'
import { ROUTES } from '@/utils/routes'

import { SidebarToggle } from '../SidebarToggle'
import { ThemeToggle } from '../ThemeToggle'
import { MenuItem } from './MenuItem'

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="floating">
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

      <SidebarFooter className="flex w-full flex-row justify-center px-4 py-2 group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:gap-4 md:justify-between md:gap-2">
        <ThemeToggle />
        <SidebarToggle />
      </SidebarFooter>
    </Sidebar>
  )
}
