'use client'

import { useState, useEffect } from 'react'
import { Play, Clock, Target, Zap } from 'lucide-react'
import { WorkoutPlan } from '../lib/types'
import { SAMPLE_WORKOUT_PLANS } from '../lib/constants'
import { formatDuration, getDifficultyColor } from '../lib/utils'

export function WorkoutCard() {
  const [currentWorkout, setCurrentWorkout] = useState<WorkoutPlan | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading current workout
    const timer = setTimeout(() => {
      setCurrentWorkout(SAMPLE_WORKOUT_PLANS[1]) // Intermediate workout
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleStartWorkout = () => {
    // In a real app, this would navigate to workout session
    console.log('Starting workout:', currentWorkout?.name)
  }

  if (isLoading) {
    return (
      <div className="workout-card card p-6 animate-pulse">
        <div className="space-y-4">
          <div className="h-6 bg-muted rounded w-3/4"></div>
          <div className="h-4 bg-muted rounded w-1/2"></div>
          <div className="flex space-x-4">
            <div className="h-8 bg-muted rounded w-20"></div>
            <div className="h-8 bg-muted rounded w-20"></div>
            <div className="h-8 bg-muted rounded w-20"></div>
          </div>
          <div className="h-10 bg-muted rounded w-full"></div>
        </div>
      </div>
    )
  }

  if (!currentWorkout) {
    return (
      <div className="card p-6 text-center">
        <p className="text-muted-foreground">No workout available. Generate a new plan!</p>
      </div>
    )
  }

  return (
    <div className="workout-card card p-6 space-y-4">
      {/* Workout Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-foreground">
            {currentWorkout.name}
          </h3>
          <span className={`text-sm font-medium ${getDifficultyColor(currentWorkout.difficulty)}`}>
            {currentWorkout.difficulty.charAt(0).toUpperCase() + currentWorkout.difficulty.slice(1)}
          </span>
        </div>
        <p className="text-muted-foreground text-sm">
          {currentWorkout.description}
        </p>
      </div>

      {/* Workout Stats */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">
            {formatDuration(currentWorkout.estimatedDuration)}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Target className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium">
            {currentWorkout.exercises.length} exercises
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Zap className="h-4 w-4 text-yellow-500" />
          <span className="text-sm font-medium">
            {currentWorkout.targetAreas.join(', ')}
          </span>
        </div>
      </div>

      {/* Exercise Preview */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-foreground">Today's Exercises:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {currentWorkout.exercises.slice(0, 4).map((exercise, index) => (
            <div key={exercise.id} className="flex items-center space-x-2 text-sm">
              <span className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-medium">
                {index + 1}
              </span>
              <span className="text-foreground">{exercise.name}</span>
              <span className="text-muted-foreground text-xs">
                {exercise.reps ? `${exercise.reps} reps` : `${exercise.duration}s`}
              </span>
            </div>
          ))}
          {currentWorkout.exercises.length > 4 && (
            <div className="text-sm text-muted-foreground">
              +{currentWorkout.exercises.length - 4} more exercises
            </div>
          )}
        </div>
      </div>

      {/* Start Button */}
      <button
        onClick={handleStartWorkout}
        className="btn btn-primary w-full h-12 text-base font-medium flex items-center justify-center space-x-2"
      >
        <Play className="h-5 w-5" />
        <span>Start Workout</span>
      </button>
    </div>
  )
}
