export default function AcercaPage() {
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="font-serif text-3xl md:text-4xl">Acerca de MenteVolátil</h1>
        <p className="text-gray-700">
          Un espacio personal para pensar en inversión, NFL, UFC y otros temas que me interesan. Minimalista, directo y
          sin ruido.
        </p>
      </header>

      <section className="prose prose-gray max-w-none">
        <p>
          Escribo principalmente para aclarar ideas. Cada domingo publico un “Resumen Dominical” con cuatro bloques:
          Inversión, NFL, UFC y un extra. Cuando tenga sentido, también publicaré artículos más largos.
        </p>
        <p>
          Este sitio está construido con Next.js, Tailwind CSS y preparado para conectarse a Sanity como CMS. De
          momento, uso datos de ejemplo hasta que quiera migrar contenido real.
        </p>
        <p>Gracias por pasar por aquí. Es un proyecto en evolución, hecho con paciencia y curiosidad.</p>
      </section>
    </article>
  )
}
