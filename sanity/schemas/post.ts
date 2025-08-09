import { defineType, defineField } from "sanity"

export default defineType({
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    defineField({ name: "title", type: "string", title: "Title", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "excerpt", type: "text", title: "Excerpt" }),
    defineField({ name: "date", type: "datetime", title: "Date" }),
    defineField({ name: "coverImage", type: "image", title: "Cover Image", options: { hotspot: true } }),
    defineField({
      name: "author",
      type: "reference",
      title: "Author",
      to: [{ type: "author" }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "categories",
      type: "array",
      title: "Categories",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
    defineField({ name: "featured", type: "boolean", title: "Featured", initialValue: false }),
  ],
})
