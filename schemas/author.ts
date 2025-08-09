import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'author',
  title: 'Autor',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Nombre' }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'name' },
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Avatar',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bio',
      type: 'array',
      title: 'Bio',
      of: [{ type: 'block' }],
    }),
  ],
});
