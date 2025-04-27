export const createPostSchema = {
  body: {
    type: 'object',
    required: [' title_Post, content_Post, image_Post'],
    properties: {
      title_Post: { type: 'string', maxLength: 100 },
      content: { type: 'string', minLength: 1, maxlength: 1000 },
      image_Post: { type: 'string', maxLength: 255 },
    },
  },
};

<<<<<<< Updated upstream
export const updatePostSchema = {
  body: {
    type: 'object',
    properties: {
      id_Post: { type: 'string', format: 'uuid' },
      title_Post: { type: 'string', maxLength: 100, optional: true },
      content_Post: { type: 'string', minLength: 1, maxlenght: 1000, optional: true },
      image_Post: { type: 'string', maxLength: 255, optional: true },
    },
    additionalProperties: false,
  },
};
=======
export const createPostSchema = z.object({
  title_Post: z.string().max(100, 'O título pode ter no máximo 100 caracteres').optional(),
  content_Post: z.string().min(1, 'O conteúdo não pode estar vazio').max(1000, 'O conteúdo pode ter no máximo 1000 caracteres').optional(),
  image_Post: z.string().optional(),
});
>>>>>>> Stashed changes

export const deletePostSchema = {
  body: {
    type: 'object',
    required: ['id_Post'],
    properties: {
      id_Post: { type: 'string', format: 'uuid' },
    },
  },
};