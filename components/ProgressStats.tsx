'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Calendar, Target, Award } from 'lucide-react'
import { UserStats } from '../lib/types'
import { calculateProgress } from '../lib/utils'

export function ProgressStats() {
  const [stats, setStats] = useState<UserStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading user stats
    const timer = setTimeout(() => {
      setStats({
        totalWorkouts: 18,
        currentStreak: 5,
        longestStreak: 12,
        totalMinutes: 450,
        favoriteExercises: ['Push-ups', 'Squats', 'Plank'],
        weeklyGoal: 4,
        weeklyProgress: 3
      })
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="card p-4 animate-pulse">
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-6 bg-muted rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (!stats) return null

  const weeklyProgressPercent = calculateProgress(stats.weeklyProgress, stats.weeklyGoal)

  return (
    <div className="space-y-4">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Workouts */}
        <div className="card p-4 space-y-2">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Total Workouts</span>
          </div>
          <div className="text-2xl font-bold text-foreground">{stats.totalWorkouts}</div>
        </div>

        {/* Current Streak */}
        <div className="card p-4 space-y-2">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Current Streak</span>
          </div>
          <div className="text-2xl font-bold text-foreground">
            {stats.currentStreak}
            <span className="text-sm font-normal text-muted-foreground ml-1">days</span>
          </div>
        </div>

        {/* Total Minutes */}
        <div className="card p-4 space-y-2">
          <div className="flex items-center space-x-2">
            <Target className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium text-muted-foreground">Total Minutes</span>
          </div>
          <div className="text-2xl font-bold text-foreground">
            {Math.floor(stats.totalMinutes / 60)}
            <span className="text-sm font-normal text-muted-foreground ml-1">hours</span>
          </div>
        </div>

        {/* Longest Streak */}
        <div className="card p-4 space-y-2">
          <div className="flex items-center space-x-2">
            <Award className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium text-muted-foreground">Best Streak</span>
          </div>
          <div className="text-2xl font-bold text-foreground">
            {stats.longestStreak}
            <span className="text-sm font-normal text-muted-foreground ml-1">days</span>
          </div>
        </div>
      </div>

      {/* Weekly Progress */}
      <div className="card p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Weekly Goal</h3>
          <span className="text-sm text-muted-foreground">
            {stats.weeklyProgress} / {stats.weeklyGoal} workouts
          </span>
        </div>
        
        <div className="space-y-2">
          <div className="w-full bg-secondary rounded-full h-3">
            <div
              className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-300"
              style={{ width: `${weeklyProgressPercent}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span className="font-medium">{weeklyProgressPercent}% complete</span>
            <span>{stats.weeklyGoal}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
