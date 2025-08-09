export function formatDate(input: string | number | Date, locale = "es-ES") {
  const d = new Date(input)
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(d)
}
