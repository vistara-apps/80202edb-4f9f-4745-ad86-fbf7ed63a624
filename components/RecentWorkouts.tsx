'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, CheckCircle, XCircle } from 'lucide-react'
import { Workout } from '../lib/types'
import { formatDate, formatDuration, getIntensityColor } from '../lib/utils'

export function RecentWorkouts() {
  const [recentWorkouts, setRecentWorkouts] = useState<Workout[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading recent workouts
    const timer = setTimeout(() => {
      const mockWorkouts: Workout[] = [
        {
          workoutId: 'workout-1',
          userId: 'user-1',
          date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
          exercises: [],
          duration: 25,
          intensity: 'medium',
          completed: true,
          aiGenerated: true,
          feedback: {
            difficulty: 4,
            enjoyment: 5,
            notes: 'Great workout!'
          }
        },
        {
          workoutId: 'workout-2',
          userId: 'user-1',
          date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
          exercises: [],
          duration: 15,
          intensity: 'low',
          completed: true,
          aiGenerated: true
        },
        {
          workoutId: 'workout-3',
          userId: 'user-1',
          date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
          exercises: [],
          duration: 30,
          intensity: 'high',
          completed: false,
          aiGenerated: true
        },
        {
          workoutId: 'workout-4',
          userId: 'user-1',
          date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
          exercises: [],
          duration: 20,
          intensity: 'medium',
          completed: true,
          aiGenerated: true
        }
      ]
      setRecentWorkouts(mockWorkouts)
      setIsLoading(false)
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="card p-4 animate-pulse">
            <div className="flex items-center justify-between">
              <div className="space-y-2 flex-1">
                <div className="h-4 bg-muted rounded w-1/3"></div>
                <div className="h-3 bg-muted rounded w-1/2"></div>
              </div>
              <div className="h-8 w-8 bg-muted rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (recentWorkouts.length === 0) {
    return (
      <div className="card p-6 text-center">
        <p className="text-muted-foreground">No recent workouts found. Start your first workout!</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {recentWorkouts.map((workout) => (
        <div key={workout.workoutId} className="card p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="space-y-2 flex-1">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">
                    {formatDate(workout.date)}
                  </span>
                </div>
                
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getIntensityColor(workout.intensity)}`}>
                  {workout.intensity}
                </span>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{formatDuration(workout.duration)}</span>
                </div>
                
                {workout.aiGenerated && (
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    AI Generated
                  </span>
                )}
                
                {workout.feedback && (
                  <span className="text-xs">
                    ⭐ {workout.feedback.enjoyment}/5
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {workout.completed ? (
                <CheckCircle className="h-6 w-6 text-accent" />
              ) : (
                <XCircle className="h-6 w-6 text-muted-foreground" />
              )}
            </div>
          </div>
          
          {workout.feedback?.notes && (
            <div className="mt-3 pt-3 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                "{workout.feedback.notes}"
              </p>
            </div>
          )}
        </div>
      ))}
      
      <button className="w-full py-3 text-sm text-primary hover:text-primary/80 transition-colors">
        View All Workouts
      </button>
    </div>
  )
}
