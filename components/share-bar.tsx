"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export function ShareBar({ title, url, className }: { title: string; url: string; className?: string }) {
  const [copied, setCopied] = useState(false)

  const encodedUrl = encodeURIComponent(url || "")
  const encodedText = encodeURIComponent(title || "MenteVolátil")

  const twitter = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`

  async function copy() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }

  return (
    <div className={cn("mt-6 flex items-center gap-3 text-sm", className)}>
      <span className="text-gray-600">Compartir:</span>
      <a href={twitter} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
        X/Twitter
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
        LinkedIn
      </a>
      <button
        onClick={copy}
        className="rounded border px-2 py-1 text-gray-700 hover:bg-gray-50"
        aria-label="Copiar enlace"
      >
        {copied ? "Copiado" : "Copiar enlace"}
      </button>
    </div>
  )
}
