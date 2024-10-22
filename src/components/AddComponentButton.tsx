import { Plus } from 'lucide-react'
import { Button } from './ui/button'

export const AddComponentButton = () => {
  return (
    <Button className="min-h-14 w-full" variant="ghost">
      <Plus size={24} />
      Add more components
    </Button>
  )
}
