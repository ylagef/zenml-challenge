'use client'

import { Route } from '@/utils/routes'
import React from 'react'
import { SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'

import { usePathname } from 'next/navigation'
import { Link } from 'next-view-transitions'

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
