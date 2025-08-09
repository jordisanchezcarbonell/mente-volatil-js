import Link from "next/link"

export default function StudioInfoPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <h1>Studio</h1>
      <p>
        Esta app está preparada para conectarse a Sanity como CMS. Instala la integración en Vercel y trae las variables
        con la CLI.
      </p>
      <ol>
        <li>Instala la integración de Sanity en tu proyecto Vercel.</li>
        <li>
          En tu terminal: <code>vercel env pull</code> para obtener <code>SANITY_PROJECT_ID</code>,{" "}
          <code>SANITY_DATASET</code> y el token si aplica.
        </li>
        <li>Define tus esquemas y publica contenido en Sanity Studio.</li>
      </ol>
      <p>
        Guía Vercel + Sanity:{" "}
        <Link href="https://vercel.com/docs/integrations/cms/sanity" className="text-[#10B981]">
          documentación
        </Link>
      </p>
    </div>
  )
}
