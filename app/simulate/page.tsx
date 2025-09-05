"use client"

import { AdvancedTradingSimulator } from "@/components/advanced-trading-simulator"
import { MarketSnapshot } from "@/components/market-snapshot"
import { useLanguage } from "@/contexts/language-context"
import { BackButton } from "@/components/back-button"
import { GlassContainer } from "@/components/glass-container"

export default function SimulatePage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <GlassContainer>
        <div className="mb-6">
          <BackButton href="/" label="Back to Home" />
        </div>

        <header className="mb-6">
          <h1 className="text-2xl font-semibold mb-2 text-balance text-white">{t.trading.title}</h1>
          <p className="text-white/80 leading-relaxed">{t.trading.description}</p>
        </header>

        <div className="mb-6">
          <MarketSnapshot />
        </div>

        <AdvancedTradingSimulator />
      </GlassContainer>
    </main>
  )
}
