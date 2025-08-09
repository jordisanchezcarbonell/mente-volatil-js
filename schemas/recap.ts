import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'recap',
  title: 'Resumen Domingo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Título',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'weekOf',
      type: 'date',
      title: 'Semana (domingo)',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'markets',
      type: 'array',
      title: '📈 Inversión',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'nfl',
      type: 'array',
      title: '🏈 NFL',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'ufc',
      type: 'array',
      title: '🥊 UFC',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'extras',
      type: 'array',
      title: '🧠 Random / Extra',
      of: [{ type: 'block' }],
    }),
  ],
});
