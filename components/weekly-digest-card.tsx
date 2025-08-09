import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export type WeeklyDigestCardData = {
  slug: string
  title: string
  date: string
  summary?: string
}

export function WeeklyDigestCard({ digest }: { digest: WeeklyDigestCardData }) {
  return (
    <Link href={`/resumen-domingo/${digest.slug}`} className="block">
      <Card className="h-full transition-shadow hover:shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">{digest.title}</CardTitle>
          <p className="text-xs text-gray-500">{digest.date}</p>
        </CardHeader>
        {digest.summary ? (
          <CardContent>
            <p className="line-clamp-3 text-sm text-gray-600">{digest.summary}</p>
          </CardContent>
        ) : null}
      </Card>
    </Link>
  )
}
