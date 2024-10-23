import { Link } from 'next-view-transitions'

import { KeyNavigationListener } from '@/components/KeyListener/Navigation'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Home() {
  return (
    <>
      <main className="flex flex-col flex-1">
        <Link className="flex flex-col items-center justify-center px-4 pt-4 grow" href="/stacks">
          <h1 className="text-xl">WELCOME TO</h1>
          <h2 className="text-4xl font-bold text-center md:text-7xl">STACKS BUILDER</h2>
          <p className="mt-4 animate-pulse">
            Click or <i>Space</i> to start
          </p>
        </Link>
      </main>

      <footer className="flex justify-center py-4">
        <ThemeToggle />
      </footer>

      <KeyNavigationListener keys={[' ']} to="/stacks" />
    </>
  )
}
