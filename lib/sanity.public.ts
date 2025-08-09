// /lib/sanity.public.ts (safe para client)
'use client';
import { createClient } from '@sanity/client';
import {
  SANITY_PROJECT_ID,
  SANITY_DATASET,
  SANITY_API_VERSION,
} from './sanity.env';

export const publicClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: true,
  perspective: 'published',
});
