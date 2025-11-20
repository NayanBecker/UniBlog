import { FastifyInstance } from 'fastify';
import { createPostController, deletePostController, getAllPostsController, getPostController } from '../controllers/postController';
import { verifyJWT } from '../middlewares/auth.middleware';

export async function postRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT);

  app.post('/new', createPostController);
  app.get('/get', getPostController);
  app.delete('/delete/:id_Post', deletePostController);
  app.get('/', getAllPostsController);
}
