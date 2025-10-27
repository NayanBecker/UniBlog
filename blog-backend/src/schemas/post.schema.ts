import { z } from 'zod';

export const createPostSchema = z.object({
  title_Post: z.string().max(100, 'O título pode ter no máximo 100 caracteres').optional(),
  content_Post: z.string().max(1000, 'O conteúdo pode ter no máximo 1000 caracteres').optional(),
  image_Post: z.string().optional(),
});

export const getPostSchema = z.object({
  id_Post: z.coerce.number().int('ID de post inválido'),
});

export const deletePostSchema = z.object({
  id_Post: z.coerce.number().int('ID de post inválido'),
});