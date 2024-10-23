'use client'

import { usePathname } from 'next/navigation'
import { Link } from 'next-view-transitions'
import React from 'react'

import { Route } from '@/utils/routes'

import { SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'

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
