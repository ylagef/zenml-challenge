import { PropsWithChildren } from 'react'

export default function StacksComponentsLayout({ children }: PropsWithChildren) {
  return <div className="w-full border border-red-500">{children}</div>
}
