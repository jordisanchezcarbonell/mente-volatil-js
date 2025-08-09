import { createClient } from '@sanity/client';

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET;

export function sanityConfigured() {
  return Boolean(projectId && dataset);
}

export const sanityClient = sanityConfigured()
  ? createClient({
      projectId,
      dataset,
      apiVersion: process.env.SANITY_API_VERSION || '2025-08-01', // alinea con tu env
      useCdn: true,
      token: process.env.SANITY_API_READ_TOKEN, // asegúrate que este archivo NO se importe en client
      perspective: 'published',
    })
  : null;
