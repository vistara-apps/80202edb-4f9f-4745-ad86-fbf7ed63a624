import { Suspense } from 'react'
import { Header } from '../components/Header'
import { WorkoutCard } from '../components/WorkoutCard'
import { ProgressStats } from '../components/ProgressStats'
import { QuickActions } from '../components/QuickActions'
import { RecentWorkouts } from '../components/RecentWorkouts'
import { LoadingSpinner } from '../components/LoadingSpinner'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-6 space-y-6">
        {/* Current Workout Plan */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Today's Workout</h2>
          <Suspense fallback={<LoadingSpinner />}>
            <WorkoutCard />
          </Suspense>
        </section>

        {/* Progress Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Progress</h2>
          <Suspense fallback={<LoadingSpinner />}>
            <ProgressStats />
          </Suspense>
        </section>

        {/* Quick Actions */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Quick Actions</h2>
          <QuickActions />
        </section>

        {/* Recent Workouts */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Recent Workouts</h2>
          <Suspense fallback={<LoadingSpinner />}>
            <RecentWorkouts />
          </Suspense>
        </section>
      </main>
    </div>
  )
}
