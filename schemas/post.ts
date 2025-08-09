import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Post',
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
    defineField({ name: 'excerpt', type: 'text', title: 'Resumen' }),
    defineField({
      name: 'coverImage',
      type: 'image',
      title: 'Imagen portada',
      options: { hotspot: true },
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      title: 'Fecha',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
      title: 'Autor',
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categorías',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Contenido',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Destacado',
      initialValue: false,
    }),
  ],
});
