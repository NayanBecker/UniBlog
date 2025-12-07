import { FastifyInstance } from 'fastify';
import { createPostController, deletePostController, getAllPostsController, getPostController } from '../controllers/postController';
import { verifyJWT } from '../middlewares/auth.middleware';
import { deletePostSchemaDoc, getAllPostsSchemaDoc } from '@/controllers/schemas/post.schema';

export async function postRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT);

  app.post('/new',
    createPostController);

  app.get('/get',

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
