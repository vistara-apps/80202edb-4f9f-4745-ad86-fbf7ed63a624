import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CustomFit AI - Your AI-powered home fitness companion',
  description: 'AI-powered app delivering simple, personalized bodyweight workouts for home users, adapting plans based on user progress.',
  keywords: ['fitness', 'AI', 'workout', 'home', 'bodyweight', 'personalized'],
  authors: [{ name: 'CustomFit AI Team' }],
  openGraph: {
    title: 'CustomFit AI',
    description: 'Your AI-powered home fitness companion, adapting to you.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
