import { PropsWithChildren } from 'react'

export default function StacksLayout({ children }: PropsWithChildren) {
  return <div className="w-full border border-red-500">{children}</div>
}
