import { PropsWithChildren } from 'react'

import { AppSidebar } from '@/components/AppSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'

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
