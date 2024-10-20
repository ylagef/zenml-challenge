import { AppSidebar } from '@/components/AppSidebar'
import { Shortcut } from '@/components/Shortcut'

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { PropsWithChildren, Suspense } from 'react'

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="flex flex-col flex-1">
        <main className="flex flex-1 p-4">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </main>

        <footer className="flex items-center gap-2 p-2">
          <SidebarTrigger />
          <Shortcut letter="B" />
        </footer>
      </div>
    </SidebarProvider>
  )
}
