import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu } from '@/components/ui/sidebar'
import { ROUTES } from '@/utils/routes'
import { ThemeToggle } from '../ThemeToggle'
import { MenuItem } from './MenuItem'
import { Link } from 'next-view-transitions'

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link
          href="/"
          className="font-bold"
          style={{
            viewTransitionName: 'stack-builder'
          }}
        >
          Stacks builder
        </Link>
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

      <SidebarFooter className="flex w-full justify-center p-2">
        <ThemeToggle />
      </SidebarFooter>
    </Sidebar>
  )
}
