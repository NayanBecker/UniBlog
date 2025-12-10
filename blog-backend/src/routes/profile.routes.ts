import { FastifyInstance } from 'fastify';
import { createProfileController, deleteProfileController, getAllProfilesController, getProfileController, updateProfileController, getProfilesByAccountIdController } from '../controllers/profile.controller';
import { verifyJWT } from '../middlewares/auth.middleware';

export async function userRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT);

  app.post('/new',
    createProfileController);

  app.get('/get',
    getProfileController);

  app.put('/update',
    updateProfileController);

  app.delete('/delete/:id',
    deleteProfileController);

  app.get('/get/AccountProfiles',
    getProfilesByAccountIdController);

  app.get('/',
    getAllProfilesController);
}
