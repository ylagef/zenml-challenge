import { ThemeToggle } from './ThemeToggle'

export const Header = () => {
  return (
    <header className="fixed top-0 flex w-full justify-end p-4">
      <ThemeToggle />
    </header>
  )
}
