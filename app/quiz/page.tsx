"use client"

import { QuizEngine } from "@/components/quiz-engine"
import { BackButton } from "@/components/back-button"
import { GlassContainer } from "@/components/glass-container"

export default function QuizPage() {
  return (
    <main className="min-h-screen">
      <GlassContainer>
        <div className="mb-6">
          <BackButton href="/" label="Back to Home" />
        </div>

        <header className="mb-6">
          <h1 className="text-2xl font-semibold mb-2 text-balance text-white">Quiz</h1>
          <p className="text-white/80 leading-relaxed">
            Quick checks after each topic. Immediate feedback — no pressure.
          </p>
        </header>
        <QuizEngine />
      </GlassContainer>
    </main>
  )
}
