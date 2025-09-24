export interface User {
  userId: string
  farcasterId?: string
  email?: string
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced'
  goals: string[]
  availableEquipment: string[]
  preferences: {
    workoutDuration: number
    workoutFrequency: number
    preferredTime: string
  }
}

export interface Exercise {
  id: string
  name: string
  description: string
  targetMuscles: string[]
  difficulty: 'easy' | 'medium' | 'hard'
  equipment: string[]
  instructions: string[]
  videoUrl?: string
  imageUrl?: string
  reps?: number
  sets?: number
  duration?: number
  restTime?: number
}

export interface Workout {
  workoutId: string
  userId: string
  date: string
  exercises: Exercise[]
  duration: number
  intensity: 'low' | 'medium' | 'high'
  feedback?: {
    difficulty: number
    enjoyment: number
    notes?: string
  }
  completed: boolean
  aiGenerated: boolean
}

export interface ProgressEntry {
  progressId: string
  userId: string
  workoutId: string
  exercise: string
  reps: number
  weight?: number
  notes?: string
  timestamp: string
}

export interface Achievement {
  achievementId: string
  name: string
  description: string
  icon: string
  category: 'streak' | 'milestone' | 'performance' | 'social'
}

export interface UserAchievement {
  userId: string
  achievementId: string
  unlockedTimestamp: string
}

export interface WorkoutPlan {
  id: string
  name: string
  description: string
  exercises: Exercise[]
  estimatedDuration: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  targetAreas: string[]
}

export interface UserStats {
  totalWorkouts: number
  currentStreak: number
  longestStreak: number
  totalMinutes: number
  favoriteExercises: string[]
  weeklyGoal: number
  weeklyProgress: number
}
