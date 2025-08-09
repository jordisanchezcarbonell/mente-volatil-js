import { defineType, defineField } from "sanity"

export default defineType({
  name: "author",
  type: "document",
  title: "Author",
  fields: [
    defineField({ name: "name", type: "string", title: "Name", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "image", type: "image", title: "Image", options: { hotspot: true } }),
    defineField({ name: "bio", type: "array", of: [{ type: "block" }], title: "Bio" }),
  ],
})
