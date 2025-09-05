import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import { OfflineIndicator } from "@/components/offline-indicator"
import { MobileNavigation } from "@/components/mobile-navigation"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Inviguide - Investment Learning App",
  description: "Learn stock market investing with interactive tutorials and virtual trading in your language",
  generator: "v0.app",
  manifest: "/manifest.json",
  keywords: ["investment", "education", "stock market", "trading", "finance", "india"],
  authors: [{ name: "Inviguide Team" }],
  creator: "Inviguide",
  publisher: "Inviguide",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon-192.png",
    shortcut: "/icon-192.png",
    apple: "/icon-192.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Inviguide",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body
        className={`font-sans ${inter.variable} pb-16 sm:pb-0 min-h-screen bg-cover bg-center bg-no-repeat bg-fixed`}
        style={{ backgroundImage: "url(/images/blue-abstract-bg.png)" }}
      >
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10" />
        <Suspense fallback={<div>Loading...</div>}>
          <LanguageProvider>
            {children}
            <OfflineIndicator />
            <MobileNavigation />
          </LanguageProvider>
        </Suspense>
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
