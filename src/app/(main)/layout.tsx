import { AppSidebar } from '@/components/AppSidebar'
import { HeaderWithMenuButton } from '@/components/HeaderWithMenuButton'
import { SidebarProvider } from '@/components/ui/sidebar'
import { PropsWithChildren } from 'react'

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />

      <div className="flex flex-col flex-1 w-full">
        <main className="flex flex-1 w-full">{children}</main>
      </div>
    </SidebarProvider>
  )
}
