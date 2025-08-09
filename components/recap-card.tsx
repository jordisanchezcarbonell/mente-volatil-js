import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export type RecapCardData = {
  slug: string
  title: string
  date: string
  summary?: string
}

export function RecapCard({ recap }: { recap: RecapCardData }) {
  return (
    <Link href={`/resumen-domingo/${recap.slug}`} className="block">
      <Card className="h-full border border-gray-200 transition-shadow hover:shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">{recap.title}</CardTitle>
          <p className="text-xs text-gray-500">{recap.date}</p>
        </CardHeader>
        {recap.summary ? (
          <CardContent>
            <p className="line-clamp-3 text-sm text-gray-600">{recap.summary}</p>
          </CardContent>
        ) : null}
      </Card>
    </Link>
  )
}
