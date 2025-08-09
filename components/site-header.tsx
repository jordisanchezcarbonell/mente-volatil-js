"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/categoria/inversion", label: "Inversión" },
  { href: "/categoria/nfl", label: "NFL" },
  { href: "/categoria/ufc", label: "UFC" },
  { href: "/resumen-domingo", label: "Resumen Domingo" },
  { href: "/studio", label: "Studio" },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="border-b bg-white">
      {/* Skip link para accesibilidad */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:ring-2 focus:ring-gray-900"
      >
        {"Saltar al contenido"}
      </a>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold">
            <span className="text-xl" style={{ color: "#10B981" }}>
              MenteVolátil
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-3">
            {nav.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900 rounded",
                    active ? "text-gray-900" : "text-gray-600 hover:text-gray-900",
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <nav className="md:hidden -mr-2 overflow-x-auto whitespace-nowrap text-sm text-gray-600">
            <Link href="/resumen-domingo" className="hover:text-gray-900">
              Resumen
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
