'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { comingSoonToast } from '@/utils/toast'
import { Ellipsis } from 'lucide-react'
import { PropsWithChildren } from 'react'

export const CardDropdownMenu = ({ children }: PropsWithChildren) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Ellipsis size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {children}
        <DropdownMenuItem onClick={comingSoonToast}>Update</DropdownMenuItem>
        <DropdownMenuItem onClick={comingSoonToast} className="text-red-800">
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
