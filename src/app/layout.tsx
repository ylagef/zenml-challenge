import { ThemeProvider } from '@/contexts/ThemeProvider'

import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'
import { ViewTransitions } from 'next-view-transitions'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZenML Challenge - Yeray',
  description: 'Coding challenge for the Senior Frontend developer role at ZenML'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={cn('mx-auto flex h-dvh flex-col antialiased', inter.className)}>
          <ThemeProvider attribute="data-theme" defaultTheme="dark">
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
