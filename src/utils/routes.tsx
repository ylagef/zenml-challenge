import { Blocks, Layers } from 'lucide-react'

export interface Route {
  title: string
  href: string
  icon: JSX.Element
}

export const ROUTES: Route[] = [
  {
    title: 'Stacks',
    href: '/stacks',
    icon: <Layers />
  },
  {
    title: 'Stack components',
    href: '/stack-components',
    icon: <Blocks />
  }
]
