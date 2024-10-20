import { AppSidebar } from '@/components/AppSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { PropsWithChildren } from 'react'

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="flex flex-1 flex-col">
        <main className="flex flex-1 p-4">{children}</main>

        <footer className="p-2">
          <SidebarTrigger />
        </footer>
      </div>
    </SidebarProvider>
  )
}
