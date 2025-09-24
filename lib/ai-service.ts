import OpenAI from 'openai'
import { Exercise, WorkoutPlan, User } from './types'
import { SAMPLE_EXERCISES } from './constants'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
  baseURL: "https://openrouter.ai/api/v1",
  dangerouslyAllowBrowser: true,
})

export class AIWorkoutService {
  static async generatePersonalizedWorkout(
    user: User,
    previousWorkouts: any[] = [],
    feedback: any[] = []
  ): Promise<WorkoutPlan> {
    try {
      const prompt = this.buildWorkoutPrompt(user, previousWorkouts, feedback)
      
      const completion = await openai.chat.completions.create({
        model: 'google/gemini-2.0-flash-001',
        messages: [
          {
            role: 'system',
            content: 'You are an expert AI fitness coach specializing in personalized bodyweight workouts for home fitness. Generate safe, effective workout plans based on user data.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 1000
      })

      const response = completion.choices[0]?.message?.content
      if (!response) {
        throw new Error('No response from AI service')
      }

      return this.parseAIResponse(response, user)
    } catch (error) {
      console.error('AI workout generation failed:', error)
      // Fallback to rule-based generation
      return this.generateFallbackWorkout(user)
    }
  }

  private static buildWorkoutPrompt(
    user: User,
    previousWorkouts: any[],
    feedback: any[]
  ): string {
    return `
Generate a personalized bodyweight workout for a ${user.fitnessLevel} level user with the following profile:

Goals: ${user.goals.join(', ')}
Available Equipment: ${user.availableEquipment.join(', ') || 'None'}
Preferred Duration: ${user.preferences.workoutDuration} minutes
Workout Frequency: ${user.preferences.workoutFrequency} times per week

Previous Workouts: ${previousWorkouts.length} completed
Recent Feedback: ${feedback.map(f => `Difficulty: ${f.difficulty}/5, Enjoyment: ${f.enjoyment}/5`).join('; ')}

Please provide:
1. Workout name and description
2. 4-6 exercises with specific reps/duration
3. Estimated total duration
4. Difficulty level
5. Target muscle groups

Format as JSON with exercises array containing: name, reps/duration, sets, rest_time, instructions.
    `
  }

  private static parseAIResponse(response: string, user: User): WorkoutPlan {
    try {
      // Try to extract JSON from response
      const jsonMatch = response.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0])
        return this.convertToWorkoutPlan(parsed, user)
      }
    } catch (error) {
      console.error('Failed to parse AI response:', error)
    }
    
    // Fallback if parsing fails
    return this.generateFallbackWorkout(user)
  }

  private static convertToWorkoutPlan(aiData: any, user: User): WorkoutPlan {
    const exercises: Exercise[] = aiData.exercises?.map((ex: any, index: number) => ({
      id: `ai-exercise-${index}`,
      name: ex.name || 'Unknown Exercise',
      description: ex.description || '',
      targetMuscles: ex.target_muscles || [],
      difficulty: user.fitnessLevel === 'beginner' ? 'easy' : 
                  user.fitnessLevel === 'advanced' ? 'hard' : 'medium',
      equipment: user.availableEquipment,
      instructions: ex.instructions || [],
      reps: ex.reps,
      sets: ex.sets || 3,
      duration: ex.duration,
      restTime: ex.rest_time || 60
    })) || []

    return {
      id: `ai-workout-${Date.now()}`,
      name: aiData.name || 'AI Generated Workout',
      description: aiData.description || 'Personalized workout created by AI',
      exercises,
      estimatedDuration: aiData.duration || user.preferences.workoutDuration,
      difficulty: user.fitnessLevel,
      targetAreas: aiData.target_areas || user.goals
    }
  }

  private static generateFallbackWorkout(user: User): WorkoutPlan {
    // Rule-based fallback workout generation
    let selectedExercises = [...SAMPLE_EXERCISES]
    
    // Filter by fitness level
    if (user.fitnessLevel === 'beginner') {
      selectedExercises = selectedExercises.filter(ex => ex.difficulty !== 'hard')
    } else if (user.fitnessLevel === 'advanced') {
      selectedExercises = selectedExercises.filter(ex => ex.difficulty !== 'easy')
    }

    // Limit exercises based on duration preference
    const maxExercises = Math.min(
      Math.floor(user.preferences.workoutDuration / 5),
      selectedExercises.length
    )
    
    selectedExercises = selectedExercises.slice(0, maxExercises)

    return {
      id: `fallback-workout-${Date.now()}`,
      name: `${user.fitnessLevel.charAt(0).toUpperCase() + user.fitnessLevel.slice(1)} Workout`,
      description: 'Personalized bodyweight workout adapted to your level',
      exercises: selectedExercises,
      estimatedDuration: user.preferences.workoutDuration,
      difficulty: user.fitnessLevel,
      targetAreas: user.goals
    }
  }

  static async adaptWorkoutBasedOnFeedback(
    currentWorkout: WorkoutPlan,
    feedback: any,
    user: User
  ): Promise<WorkoutPlan> {
    // Simple adaptation logic
    const adaptedExercises = currentWorkout.exercises.map(exercise => {
      let newReps = exercise.reps || 0
      let newSets = exercise.sets || 0
      let newDuration = exercise.duration || 0

      // Adjust based on difficulty feedback
      if (feedback.difficulty < 3) {
        // Too easy - increase intensity
        newReps = Math.floor(newReps * 1.2)
        newDuration = Math.floor(newDuration * 1.2)
      } else if (feedback.difficulty > 4) {
        // Too hard - decrease intensity
        newReps = Math.floor(newReps * 0.8)
        newDuration = Math.floor(newDuration * 0.8)
      }

      return {
        ...exercise,
        reps: newReps || exercise.reps,
        sets: newSets || exercise.sets,
        duration: newDuration || exercise.duration
      }
    })

    return {
      ...currentWorkout,
      id: `adapted-${currentWorkout.id}`,
      exercises: adaptedExercises,
      name: `Adapted ${currentWorkout.name}`
    }
  }
}
