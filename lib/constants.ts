import { Exercise, Achievement, WorkoutPlan } from './types'

export const SAMPLE_EXERCISES: Exercise[] = [
  {
    id: 'push-ups',
    name: 'Push-ups',
    description: 'Classic bodyweight exercise for chest, shoulders, and triceps',
    targetMuscles: ['chest', 'shoulders', 'triceps', 'core'],
    difficulty: 'medium',
    equipment: [],
    instructions: [
      'Start in a plank position with hands slightly wider than shoulders',
      'Lower your body until chest nearly touches the floor',
      'Push back up to starting position',
      'Keep your body in a straight line throughout'
    ],
    reps: 12,
    sets: 3,
    restTime: 60
  },
  {
    id: 'squats',
    name: 'Bodyweight Squats',
    description: 'Fundamental lower body exercise',
    targetMuscles: ['quadriceps', 'glutes', 'hamstrings', 'calves'],
    difficulty: 'easy',
    equipment: [],
    instructions: [
      'Stand with feet shoulder-width apart',
      'Lower your body as if sitting back into a chair',
      'Keep your chest up and knees behind toes',
      'Return to starting position'
    ],
    reps: 15,
    sets: 3,
    restTime: 45
  },
  {
    id: 'plank',
    name: 'Plank Hold',
    description: 'Core strengthening isometric exercise',
    targetMuscles: ['core', 'shoulders', 'glutes'],
    difficulty: 'medium',
    equipment: [],
    instructions: [
      'Start in push-up position',
      'Lower to forearms, keeping body straight',
      'Hold position, engaging core muscles',
      'Breathe normally throughout'
    ],
    duration: 30,
    sets: 3,
    restTime: 30
  },
  {
    id: 'lunges',
    name: 'Forward Lunges',
    description: 'Single-leg strength exercise',
    targetMuscles: ['quadriceps', 'glutes', 'hamstrings', 'calves'],
    difficulty: 'medium',
    equipment: [],
    instructions: [
      'Step forward with one leg',
      'Lower hips until both knees are at 90 degrees',
      'Push back to starting position',
      'Alternate legs'
    ],
    reps: 10,
    sets: 3,
    restTime: 45
  },
  {
    id: 'mountain-climbers',
    name: 'Mountain Climbers',
    description: 'High-intensity cardio and core exercise',
    targetMuscles: ['core', 'shoulders', 'legs'],
    difficulty: 'hard',
    equipment: [],
    instructions: [
      'Start in plank position',
      'Bring one knee toward chest',
      'Quickly switch legs',
      'Maintain fast pace while keeping form'
    ],
    duration: 30,
    sets: 3,
    restTime: 60
  }
]

export const ACHIEVEMENTS: Achievement[] = [
  {
    achievementId: 'first-workout',
    name: 'Getting Started',
    description: 'Complete your first workout',
    icon: '🎯',
    category: 'milestone'
  },
  {
    achievementId: 'week-streak',
    name: 'Week Warrior',
    description: 'Complete workouts for 7 days straight',
    icon: '🔥',
    category: 'streak'
  },
  {
    achievementId: 'month-streak',
    name: 'Monthly Master',
    description: 'Complete workouts for 30 days straight',
    icon: '💪',
    category: 'streak'
  },
  {
    achievementId: 'ten-workouts',
    name: 'Perfect Ten',
    description: 'Complete 10 total workouts',
    icon: '⭐',
    category: 'milestone'
  },
  {
    achievementId: 'hundred-workouts',
    name: 'Century Club',
    description: 'Complete 100 total workouts',
    icon: '🏆',
    category: 'milestone'
  },
  {
    achievementId: 'personal-best',
    name: 'Personal Best',
    description: 'Beat your previous workout performance',
    icon: '📈',
    category: 'performance'
  }
]

export const SAMPLE_WORKOUT_PLANS: WorkoutPlan[] = [
  {
    id: 'beginner-full-body',
    name: 'Beginner Full Body',
    description: 'Perfect for those just starting their fitness journey',
    exercises: SAMPLE_EXERCISES.slice(0, 3),
    estimatedDuration: 15,
    difficulty: 'beginner',
    targetAreas: ['full-body']
  },
  {
    id: 'intermediate-strength',
    name: 'Intermediate Strength',
    description: 'Build strength with bodyweight exercises',
    exercises: SAMPLE_EXERCISES,
    estimatedDuration: 25,
    difficulty: 'intermediate',
    targetAreas: ['strength', 'full-body']
  },
  {
    id: 'quick-cardio',
    name: 'Quick Cardio Blast',
    description: 'High-intensity workout to get your heart pumping',
    exercises: [SAMPLE_EXERCISES[4], SAMPLE_EXERCISES[1], SAMPLE_EXERCISES[3]],
    estimatedDuration: 10,
    difficulty: 'intermediate',
    targetAreas: ['cardio', 'fat-burn']
  }
]

export const FITNESS_LEVELS = [
  { value: 'beginner', label: 'Beginner', description: 'New to regular exercise' },
  { value: 'intermediate', label: 'Intermediate', description: 'Exercise 2-3 times per week' },
  { value: 'advanced', label: 'Advanced', description: 'Exercise 4+ times per week' }
]

export const EQUIPMENT_OPTIONS = [
  { value: 'none', label: 'No Equipment', icon: '🏠' },
  { value: 'dumbbells', label: 'Dumbbells', icon: '🏋️' },
  { value: 'resistance-bands', label: 'Resistance Bands', icon: '🎯' },
  { value: 'yoga-mat', label: 'Yoga Mat', icon: '🧘' },
  { value: 'pull-up-bar', label: 'Pull-up Bar', icon: '💪' }
]

export const WORKOUT_GOALS = [
  { value: 'weight-loss', label: 'Weight Loss', icon: '⚖️' },
  { value: 'muscle-gain', label: 'Muscle Gain', icon: '💪' },
  { value: 'endurance', label: 'Endurance', icon: '🏃' },
  { value: 'flexibility', label: 'Flexibility', icon: '🤸' },
  { value: 'general-fitness', label: 'General Fitness', icon: '🎯' }
]
