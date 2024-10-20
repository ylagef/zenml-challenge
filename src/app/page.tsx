import { KeyNavigationListener } from '@/components/KeyListener/Navigation'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Link } from 'next-view-transitions'

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col">
        <Link className="flex grow flex-col items-center justify-center px-4 pt-4" href="/stacks">
          <h1 className="text-xl">WELCOME TO</h1>
          <h2
            className="text-center text-4xl font-bold md:text-7xl"
            style={{
              viewTransitionName: 'stack-builder'
            }}
          >
            STACKS BUILDER
          </h2>
          <p className="mt-4 animate-pulse">
            Click or <i>Space</i> to start
          </p>
        </Link>
      </main>

      <footer className="flex justify-center py-2">
        <ThemeToggle />
      </footer>

      <KeyNavigationListener keys={[' ']} to="/stacks" />
    </>
  )
}
