'use client'

import { useTransitionRouter } from 'next-view-transitions'

import { KeyCallbackListener } from './Callback'

interface KeyNavigationListenerProps {
  keys: string[]
  to: string
}

export const KeyNavigationListener = ({ keys, to }: KeyNavigationListenerProps) => {
  const router = useTransitionRouter()

  return <KeyCallbackListener keys={keys} callback={() => router.push(to)} />
}
