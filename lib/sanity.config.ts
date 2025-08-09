import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from '@/schemas';

export default defineConfig({
  name: 'default',
  title: 'MenteVolátil',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: '/studio',
  schema: { types: schemaTypes },
  plugins: [structureTool(), visionTool()],
});
