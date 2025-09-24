'use client'

import { Zap, BarChart3, Settings, Share2 } from 'lucide-react'

export function QuickActions() {
  const actions = [
    {
      id: 'generate-workout',
      name: 'Generate New Plan',
      description: 'AI-powered workout',
      icon: Zap,
      color: 'bg-primary/10 text-primary',
      onClick: () => console.log('Generate workout')
    },
    {
      id: 'view-progress',
      name: 'View Progress',
      description: 'Detailed analytics',
      icon: BarChart3,
      color: 'bg-accent/10 text-accent',
      onClick: () => console.log('View progress')
    },
    {
      id: 'settings',
      name: 'Settings',
      description: 'Customize preferences',
      icon: Settings,
      color: 'bg-yellow-100 text-yellow-600',
      onClick: () => console.log('Open settings')
    },
    {
      id: 'share',
      name: 'Share Progress',
      description: 'Social features',
      icon: Share2,
      color: 'bg-purple-100 text-purple-600',
      onClick: () => console.log('Share progress')
    }
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((action) => {
        const IconComponent = action.icon
        return (
          <button
            key={action.id}
            onClick={action.onClick}
            className="card p-4 hover:shadow-md transition-all duration-200 text-left group"
          >
            <div className="space-y-3">
              <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <IconComponent className="h-5 w-5" />
              </div>
              
              <div className="space-y-1">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {action.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {action.description}
                </p>
              </div>
            </div>
          </button>
        )
      })}
    </div>
  )
}
