"use client"

import type React from "react"

import { useState, useTransition } from "react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [ok, setOk] = useState<null | boolean>(null)
  const [isPending, startTransition] = useTransition()

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setOk(null)
    startTransition(async () => {
      try {
        const res = await fetch("/api/newsletter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        })
        setOk(res.ok)
        if (res.ok) setEmail("")
      } catch {
        setOk(false)
      }
    })
  }

  return (
    <div className="rounded-md border p-4">
      <h4 className="font-serif text-lg">Suscríbete</h4>
      <p className="text-sm text-gray-600">Recibe el Resumen Dominical en tu correo.</p>
      <form onSubmit={onSubmit} className="mt-3 flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          className="w-full rounded border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900"
        />
        <button
          type="submit"
          disabled={isPending}
          className="rounded bg-black px-3 py-2 text-sm text-white disabled:opacity-60"
        >
          {isPending ? "Enviando..." : "Suscribirme"}
        </button>
      </form>
      {ok === true ? <p className="mt-2 text-sm text-emerald-600">¡Gracias por suscribirte!</p> : null}
      {ok === false ? <p className="mt-2 text-sm text-red-600">No se pudo suscribir, intenta de nuevo.</p> : null}
    </div>
  )
}
