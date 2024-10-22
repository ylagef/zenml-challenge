import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger
} from '@/components/ui/sidebar'
import { ROUTES } from '@/utils/routes'
import { ThemeToggle } from '../ThemeToggle'
import { MenuItem } from './MenuItem'
import { Link } from 'next-view-transitions'
import { Home } from 'lucide-react'
import { Shortcut } from '../Shortcut'
import { SidebarToggle } from '../SidebarToggle'

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

      <SidebarFooter className="flex w-full flex-row justify-center gap-2 px-4 py-2 group-data-[collapsible=icon]:flex-col md:justify-between">
        <ThemeToggle />
        <SidebarToggle />
      </SidebarFooter>
    </Sidebar>
  )
}
