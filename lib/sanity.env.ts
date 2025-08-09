// /lib/sanity.env.ts
export const SANITY_PROJECT_ID =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_PROJECT_ID ||
  '';

export const SANITY_DATASET =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  process.env.SANITY_DATASET ||
  'production';

export const SANITY_API_VERSION =
  process.env.SANITY_API_VERSION || '2025-08-01'; // usa tu env
export const SANITY_READ_TOKEN = process.env.SANITY_API_READ_TOKEN; // server-only
