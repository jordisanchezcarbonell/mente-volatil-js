type PortableBlock = {
  _type?: string
  children?: { _type?: string; text?: string }[]
}[]

export function extractPlainText(value: unknown): string {
  // Best-effort plain text from Sanity Portable Text
  if (Array.isArray(value)) {
    const blocks = value as PortableBlock
    return blocks
      .filter((b) => b && (b as any)._type === "block")
      .map((b) => (b.children || []).map((c) => c.text || "").join(" "))
      .join("\n")
  }
  return String(value ?? "")
}

export function estimateReadingTime(text: string, wpm = 220): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / wpm))
}
