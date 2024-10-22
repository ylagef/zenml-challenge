import { AppSidebar } from '@/components/AppSidebar'
import { HeaderWithMenuButton } from '@/components/HeaderWithMenuButton'
import { SidebarProvider } from '@/components/ui/sidebar'
import { PropsWithChildren } from 'react'

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />

      <div className="flex flex-1 flex-col">
        <HeaderWithMenuButton />
        <main className="flex flex-1 p-2">{children}</main>
      </div>
    </SidebarProvider>
  )
}
