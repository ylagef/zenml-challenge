'use client'

import { MenuIcon } from 'lucide-react'
import { useSidebar } from './ui/sidebar'

export const HeaderWithMenuButton = () => {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="sticky top-0 flex w-full justify-end gap-2 px-4 py-2 backdrop-blur-sm md:hidden">
      <button onClick={toggleSidebar}>
        <MenuIcon size={24} />
      </button>
    </header>
  )
}
