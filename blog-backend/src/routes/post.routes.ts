import { FastifyInstance } from 'fastify';
import { createPostController, deletePostController, getAllPostsController, getPostController } from '../controllers/postController';
import { verifyJWT } from '../middlewares/auth.middleware';
import { createPostSchemaSchemaDoc, deletePostSchemaDoc, getAllPostsSchemaDoc, getPostSchemaDoc } from '@/controllers/schemas/post.schema';

export async function postRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT);

  app.post('/new',
    {
      schema: createPostSchemaSchemaDoc
    },
    createPostController);

  app.get('/get',
    {
      schema: getPostSchemaDoc
    },
    getPostController);

  app.delete('/delete/:id_Post',
    {
      schema: deletePostSchemaDoc
    },
    deletePostController);

  app.get('/',
    {
      schema: getAllPostsSchemaDoc
    },
    getAllPostsController);
}
