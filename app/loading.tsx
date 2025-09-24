import { LoadingSpinner } from '../components/LoadingSpinner'

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <LoadingSpinner size="lg" />
        <p className="text-muted-foreground">Loading CustomFit AI...</p>
      </div>
    </div>
  )
}
