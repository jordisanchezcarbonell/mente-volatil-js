export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    const ok = typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    // Aquí podrías integrar Buttondown/Beehiiv/ConvertKit o Vercel KV/Blob.
    // Placeholder: solo responde 200 si el email es válido.
    return new Response(JSON.stringify({ ok }), {
      status: ok ? 200 : 400,
      headers: { "Content-Type": "application/json" },
    })
  } catch {
    return new Response(JSON.stringify({ ok: false }), { status: 400, headers: { "Content-Type": "application/json" } })
  }
}
