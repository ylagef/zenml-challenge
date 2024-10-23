import { toast } from 'sonner'

export const comingSoonToast = () =>
  toast('Coming soon', {
    description: 'This feature is not available yet, but it will be soon!',
    className: 'bg-background text-foreground border-border'
  })
