import MarketAnalysis from "@/components/market-analysis"
import { BackButton } from "@/components/back-button"
import { GlassContainer } from "@/components/glass-container"

export default function AnalyzePage() {
  return (
    <main className="min-h-screen">
      <GlassContainer>
        <div className="mb-6">
          <BackButton href="/" label="Back to Home" />
        </div>

        <header className="mb-6">
          <h1 className="text-balance text-2xl font-semibold text-white md:text-3xl">
            Live Market Analysis (prototype)
          </h1>
          <p className="mt-2 max-w-prose text-sm text-white/80">
            Explore price trends, common indicators, and risk metrics using delayed/simulated data. Enable a data
            provider later to switch to real delayed quotes.
          </p>
        </header>
        <MarketAnalysis />
      </GlassContainer>
    </main>
  )
}
