import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'

import { Header } from '@/components/Header'
import { ThemeProvider } from '@/contexts/ThemeProvider'

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
    <html lang="en" suppressHydrationWarning>
      <body className="flex h-screen flex-col antialiased">
        <ThemeProvider attribute="data-theme" defaultTheme="dark">
          <Header />
          <main className="flex flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
