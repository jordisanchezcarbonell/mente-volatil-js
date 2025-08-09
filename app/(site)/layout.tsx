import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "MenteVolátil",
    template: "%s — MenteVolátil",
  },
  description: "Artículos de inversión, NFL, UFC y Resumen Dominical.",
  alternates: {
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  openGraph: {
    siteName: "MenteVolátil",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} ${playfair.variable} font-sans min-h-dvh bg-white text-gray-900`}>
      <Suspense fallback={<div>Loading...</div>}>
        <SiteHeader />
        <main id="main-content" className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          {children}
        </main>
        <Analytics />
        <SpeedInsights />
        <SiteFooter />
      </Suspense>
    </div>
  )
}
