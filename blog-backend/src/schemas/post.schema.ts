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

export const deletePostSchema = {
  body: {
    type: 'object',
    required: ['id_Post'],
    properties: {
      id_Post: { type: 'string', format: 'uuid' },
    },
  },
};