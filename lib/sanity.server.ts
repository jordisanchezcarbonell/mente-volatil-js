// /lib/sanity.server.ts (solo server)
import 'server-only';
import { createClient } from '@sanity/client';
import {
  SANITY_PROJECT_ID,
  SANITY_DATASET,
  SANITY_API_VERSION,
  SANITY_READ_TOKEN,
} from './sanity.env';

export const serverClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: false,
  token: SANITY_READ_TOKEN, // <- sólo aquí
  perspective: 'published', // o 'previewDrafts' si habilitas preview
});
