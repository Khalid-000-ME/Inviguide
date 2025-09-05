"use client"

import { GamificationDashboard } from "@/components/gamification-dashboard"
import { PersonalizedRecommendations } from "@/components/personalized-recommendations"
import { useLanguage } from "@/contexts/language-context"
import { BackButton } from "@/components/back-button"
import { GlassContainer } from "@/components/glass-container"

export default function ProfilePage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <GlassContainer>
        <div className="mb-6">
          <BackButton href="/" label="Back to Home" />
        </div>

        <header className="mb-6">
          <h1 className="text-2xl font-semibold mb-2 text-balance text-white">Your Progress</h1>
          <p className="text-white/80 leading-relaxed">Track your learning journey, achievements, and statistics.</p>
        </header>

        <div className="space-y-8">
          <PersonalizedRecommendations />
          <GamificationDashboard />
        </div>
      </GlassContainer>
    </main>
  )
}
