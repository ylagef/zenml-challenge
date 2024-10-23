'use client'

import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { toast } from 'sonner'
import { comingSoonToast } from '@/utils/toast'

export const AddComponentButton = () => {
  return (
    <Button className="min-h-14 w-full" variant="ghost" onClick={comingSoonToast}>
      <Plus size={24} />
      Add more components
    </Button>
  )
}
