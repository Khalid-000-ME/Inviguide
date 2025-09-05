"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSelector } from "@/components/language-selector"
import { useGamification } from "@/hooks/use-gamification"
import { MarketSnapshot } from "@/components/market-snapshot"
import { GlassContainer } from "@/components/glass-container"
import { SimpleMenubar } from "@/components/simple-menubar"
import { Trophy, Star, BookOpen, Brain, TrendingUp, Languages, Video, Home } from "lucide-react"

export default function HomePage() {
  const { t } = useLanguage()
  const gamification = useGamification()

  const menuItems = [
    { href: "/", label: "Home", icon: <Home className="h-4 w-4" /> },
    { href: "/learn", label: "Learn", icon: <BookOpen className="h-4 w-4" /> },
    { href: "/quiz", label: "Quiz", icon: <Brain className="h-4 w-4" /> },
    { href: "/simulate", label: "Trade", icon: <TrendingUp className="h-4 w-4" /> },
    { href: "/translate", label: "Translate", icon: <Languages className="h-4 w-4" /> },
    { href: "/videos", label: "Videos", icon: <Video className="h-4 w-4" /> },
    { href: "/profile", label: "Profile", icon: <Trophy className="h-4 w-4" /> },
  ]

  return (
    <main className="min-h-screen">
      <GlassContainer>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <SimpleMenubar items={menuItems} />

          <div className="flex items-center gap-4">
            <LanguageSelector />
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm">
              <Star className="h-4 w-4 text-yellow-600" />
              <span className="text-sm font-semibold text-black">L{gamification.level}</span>
              <span className="hidden sm:inline text-xs text-gray-600">•</span>
              <span className="hidden sm:inline text-xs text-gray-600">{gamification.totalPoints} XP</span>
            </div>
            <Badge className="bg-black text-white hover:bg-gray-800 border-0 shadow-sm">{t.home.prototype}</Badge>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-2xl bg-black flex items-center justify-center">
              <span className="text-white font-bold text-xl">₹</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white text-balance">{t.home.title}</h1>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white/90 text-balance">{t.home.subtitle}</h2>
          <p className="text-white/80 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto px-2">
            {t.home.description}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30">
              NSE • BSE
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30">
              SEBI Compliant
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30">
              ₹ INR Focus
            </span>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <Link href="/learn" className="group">
            <div className="glass-card h-full hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-active:scale-[0.98] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-blue-100">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-black">{t.learn.title}</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">{t.learn.description}</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  {t.learn.features.lessons}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  {t.learn.features.progress}
                </li>
              </ul>
            </div>
          </Link>

          <Link href="/quiz" className="group">
            <div className="glass-card h-full hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-active:scale-[0.98] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-orange-100">
                  <Brain className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-black">{t.quiz.title}</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">{t.quiz.description}</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  {t.quiz.features.feedback}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  {t.quiz.features.scores}
                </li>
              </ul>
            </div>
          </Link>

          <Link href="/simulate" className="group">
            <div className="glass-card h-full hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-active:scale-[0.98] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-emerald-100">
                  <TrendingUp className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-black">{t.trading.title}</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">{t.trading.description}</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  {t.trading.features.paperTrading}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  {t.trading.features.charts}
                </li>
              </ul>
            </div>
          </Link>

          <Link href="/translate" className="group">
            <div className="glass-card h-full hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-active:scale-[0.98] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-purple-100">
                  <Languages className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-black">{t.translation.title}</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">{t.translation.description}</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  {t.translation.features.paste}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  {t.translation.features.summary}
                </li>
              </ul>
            </div>
          </Link>

          <Link href="/videos" className="group">
            <div className="glass-card h-full hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-active:scale-[0.98] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gray-100">
                  <Video className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-black">{t.videos.title}</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">{t.videos.description}</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-500" />
                  {t.videos.features.aiGenerated}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-500" />
                  {t.videos.features.customTopics}
                </li>
              </ul>
            </div>
          </Link>

          <Link href="/profile" className="group">
            <div className="glass-card-dark h-full hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-active:scale-[0.98] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-yellow-200">
                  <Trophy className="h-6 w-6 text-yellow-700" />
                </div>
                <h3 className="text-xl font-bold text-white">Your Progress</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">Track achievements and learning statistics</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-yellow-400">{gamification.level}</div>
                  <div className="text-xs text-gray-400">Level</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-orange-400">{gamification.achievements.length}</div>
                  <div className="text-xs text-gray-400">Badges</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-emerald-400">{gamification.loginStreak}</div>
                  <div className="text-xs text-gray-400">Day Streak</div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="glass-card p-6 mb-8">
          <MarketSnapshot />
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-white font-medium">Indian Markets • Educational Mode</span>
          </div>
          <p className="text-white/70 text-sm mt-4 leading-relaxed">{t.home.footer}</p>
          <div className="mt-3 flex flex-wrap justify-center gap-4 text-xs text-white/60">
            <span>SEBI Guidelines Compliant</span>
            <span>•</span>
            <span>Educational Purpose Only</span>
            <span>•</span>
            <span>Made for India 🇮🇳</span>
          </div>
        </div>
      </GlassContainer>
    </main>
  )
}
