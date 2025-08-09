import { defineType, defineField } from "sanity"

export default defineType({
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    defineField({ name: "title", type: "string", title: "Title", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "color", type: "string", title: "Color (hex)" }),
  ],
})
