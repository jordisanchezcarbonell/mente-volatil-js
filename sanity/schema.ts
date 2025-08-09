import { defineConfig } from "sanity"
import post from "./schemas/post"
import category from "./schemas/category"
import author from "./schemas/author"
import recap from "./schemas/recap"
import settings from "./schemas/settings"

export default defineConfig({
  name: "default",
  title: "MenteVolátil Studio",
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  schema: { types: [post, category, author, recap, settings] },
})
