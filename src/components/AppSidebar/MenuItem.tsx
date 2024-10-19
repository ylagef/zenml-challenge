'use client'

import { Route } from '@/utils/routes'
import React from 'react'
import { SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const MenuItem = ({ route }: { route: Route }) => {
  const pathName = usePathname()

  const { title, href, icon } = route

  const isActive = pathName === href

  return (
    <SidebarMenuItem key={title}>
      <SidebarMenuButton asChild isActive={isActive}>
        <Link href={href}>
          {icon}
          <span>{title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
