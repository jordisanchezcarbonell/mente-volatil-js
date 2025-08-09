import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'settings',
  title: 'Ajustes',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      type: 'string',
      title: 'Título del sitio',
      initialValue: 'MenteVolátil',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Descripción',
      initialValue: 'Inversión, NFL, UFC y lo que me apasione cada semana.',
    }),
    defineField({
      name: 'accent',
      type: 'string',
      title: 'Color acento (hex)',
      initialValue: '#10B981',
    }),
  ],
});
