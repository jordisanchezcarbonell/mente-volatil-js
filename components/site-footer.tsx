export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-500 space-y-2">
        <div>
          {"\u00A9"} {year} — MenteVolátil
        </div>
        <div className="space-x-4">
          <a href="/rss.xml" className="hover:text-gray-700 underline underline-offset-2">
            RSS
          </a>
          <a href="/sitemap.xml" className="hover:text-gray-700 underline underline-offset-2">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  )
}
