'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { comingSoonToast } from '@/utils/toast'
import { Ellipsis } from 'lucide-react'

export const CardDropdownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Ellipsis size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={comingSoonToast}>Update</DropdownMenuItem>
        <DropdownMenuItem onClick={comingSoonToast} className="text-red-800">
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
