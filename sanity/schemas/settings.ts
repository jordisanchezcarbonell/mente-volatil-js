import { defineType, defineField } from "sanity"

export default defineType({
  name: "settings",
  type: "document",
  title: "Settings",
  fields: [
    defineField({ name: "siteTitle", type: "string", title: "Site Title", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", title: "Description" }),
    defineField({ name: "accent", type: "string", title: "Accent (hex)", initialValue: "#10B981" }),
  ],
})
