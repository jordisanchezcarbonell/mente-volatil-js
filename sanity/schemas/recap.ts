import { defineType, defineField } from "sanity"

export default defineType({
  name: "recap",
  type: "document",
  title: "Resumen Dominical",
  fields: [
    defineField({ name: "title", type: "string", title: "Title", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "weekOf", type: "date", title: "Domingo de la semana", validation: (r) => r.required() }),
    defineField({ name: "markets", type: "array", of: [{ type: "block" }, { type: "image" }], title: "Inversión" }),
    defineField({ name: "nfl", type: "array", of: [{ type: "block" }, { type: "image" }], title: "NFL" }),
    defineField({ name: "ufc", type: "array", of: [{ type: "block" }, { type: "image" }], title: "UFC" }),
    defineField({ name: "extras", type: "array", of: [{ type: "block" }, { type: "image" }], title: "Extra" }),
  ],
})
