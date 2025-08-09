import { createClient } from "@sanity/client"

export function sanityConfigured() {
  return Boolean(process.env.SANITY_PROJECT_ID && process.env.SANITY_DATASET)
}

export const sanityClient = sanityConfigured()
  ? createClient({
      projectId: process.env.SANITY_PROJECT_ID!,
      dataset: process.env.SANITY_DATASET!,
      apiVersion: "2025-01-01",
      useCdn: true,
      token: process.env.SANITY_API_READ_TOKEN,
      perspective: "published",
    })
  : null
