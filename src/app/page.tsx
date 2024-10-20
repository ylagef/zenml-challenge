import { Link } from 'next-view-transitions'

export default function Home() {
  return (
    <Link className="flex grow flex-col items-center justify-center p-4" href="/stacks">
      <h1 className="text-xl">WELCOME TO</h1>
      <h2
        className="text-center text-4xl font-bold md:text-7xl"
        style={{
          viewTransitionName: 'stack-builder'
        }}
      >
        STACKS BUILDER
      </h2>
      <p className="mt-4 animate-pulse">Click anywhere to start</p>
    </Link>
  )
}
