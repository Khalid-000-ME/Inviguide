"use client"

import { EnhancedTranslator } from "@/components/enhanced-translator"
import { useLanguage } from "@/contexts/language-context"
import { BackButton } from "@/components/back-button"
import { GlassContainer } from "@/components/glass-container"

export default function TranslatePage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <GlassContainer>
        <div className="mb-6">
          <BackButton href="/" label="Back to Home" />
        </div>

        <header className="mb-6">
          <h1 className="text-2xl font-semibold mb-2 text-balance text-white">{t.translation.title}</h1>
          <p className="text-white/80 leading-relaxed">{t.translation.description}</p>
        </header>
        <EnhancedTranslator />
      </GlassContainer>
    </main>
  )
}
