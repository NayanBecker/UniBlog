import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

export const createPostSchema = z.object({
  title_Post: z.string().max(100, 'O título pode ter no máximo 100 caracteres').optional(),
  content_Post: z.string().max(1000, 'O conteúdo pode ter no máximo 1000 caracteres').optional(),
  image_Post: z.string().optional(),
});
export const createPostSchemaSchemaDoc = {
  tags: ['Post'],
  description: 'Endpoint para registrar uma nova conta de usuário.',
  headers: {
    type: 'object',
    properties: {
      id_Perfil: {
        type: 'number',
        description: 'ID do perfil do usuário'
      }
    },
    required: ['id_perfil']
  },
  body: zodToJsonSchema(createPostSchema)
};

export const getPostSchema = z.object({
  id_Post: z.coerce.number().int('ID de post inválido'),
});
export const getPostSchemaDoc = {
  tags: ['Post'],
  description: 'Endpoint para obter um post pelo ID.',
  headers: {
    type: 'object',
    properties: {
      id_Perfil: {
        type: 'number',
        description: 'ID do perfil do usuário'
      }
    },
    required: ['id_perfil']
  },
  params: zodToJsonSchema(getPostSchema)
};

export const deletePostSchema = z.object({
  id_Post: z.coerce.number().int('ID de post inválido'),
});
export const deletePostSchemaDoc = {
  tags: ['Post'],
  description: 'Endpoint para deletar um post pelo ID.',
  headers: {
    type: 'object',
    properties: {
      id_Perfil: {
        type: 'number',
        description: 'ID do perfil do usuário'
      }
    },
    required: ['id_perfil']
  },
  params: zodToJsonSchema(deletePostSchema)
};

export const getAllPostsSchemaDoc = {
  tags: ['Post'],
  description: 'Schema para obter todos os posts.',
};