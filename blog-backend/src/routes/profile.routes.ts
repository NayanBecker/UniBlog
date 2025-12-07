import { FastifyInstance } from 'fastify';
import { createProfileController, deleteProfileController, getAllProfilesController, getProfileController, updateProfileController, getProfilesByAccountIdController } from '../controllers/profile.controller';
import { verifyJWT } from '../middlewares/auth.middleware';
import { getProfileSchemaDoc, deleteProfileSchemaDoc, getAllProfilesSchemaDoc, getProfilesByAccountIdSchemaDoc } from '@/controllers/schemas/profile.schema';

export async function userRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT);

  app.post('/new',

    createProfileController);

  app.get('/get',
    {
      schema: getProfileSchemaDoc
    },
    getProfileController);

  app.put('/update',

    updateProfileController);

  app.delete('/delete/:id',
    {
      schema: deleteProfileSchemaDoc
    },
    deleteProfileController);

  app.get('/get/AccountProfiles',
    {
      schema: getProfilesByAccountIdSchemaDoc
    },
    getProfilesByAccountIdController);


  app.get('/',
    {
      schema: getAllProfilesSchemaDoc
    },
    getAllProfilesController);
}
