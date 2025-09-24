'use client'

import { MiniKitProvider } from '@coinbase/minikit'
import { OnchainKitProvider } from '@coinbase/onchainkit'
import { base } from '@coinbase/onchainkit/chains'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MiniKitProvider
      chain={base}
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY || 'demo-api-key'}
    >
      <OnchainKitProvider
        apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY || 'demo-api-key'}
        chain={base}
      >
        {children}
      </OnchainKitProvider>
    </MiniKitProvider>
  )
}
