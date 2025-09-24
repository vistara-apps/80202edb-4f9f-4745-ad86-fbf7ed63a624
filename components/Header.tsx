'use client'

import { useState } from 'react'
import { useMiniKit } from '@coinbase/minikit'
import { useAuthenticate } from '@coinbase/onchainkit/minikit'
import { Menu, User, Settings, Bell } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { context } = useMiniKit()
  const { user } = useAuthenticate()

  const displayName = context?.user?.displayName || user?.address?.slice(0, 6) || 'Guest'

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">CF</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">CustomFit AI</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Workouts
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Progress
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Plans
          </a>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <Bell className="h-5 w-5 text-muted-foreground" />
          </button>
          
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <Settings className="h-5 w-5 text-muted-foreground" />
          </button>

          <div className="flex items-center space-x-2 bg-secondary rounded-lg px-3 py-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">
              {displayName}
            </span>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <Menu className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="container py-4 space-y-2">
            <a href="#" className="block py-2 text-foreground hover:text-primary transition-colors">
              Workouts
            </a>
            <a href="#" className="block py-2 text-foreground hover:text-primary transition-colors">
              Progress
            </a>
            <a href="#" className="block py-2 text-foreground hover:text-primary transition-colors">
              Plans
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
