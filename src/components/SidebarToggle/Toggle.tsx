'use client'

import { PanelLeft } from 'lucide-react'

import { useSidebar } from '../ui/sidebar'

export const Toggle = () => {
  const { toggleSidebar } = useSidebar()

  return (
    <button className="flex justify-center opacity-75 hover:opacity-100" onClick={toggleSidebar}>
      <PanelLeft size={24} />
    </button>
  )
}
