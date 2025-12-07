import { FastifyInstance } from 'fastify';
import { registerAccountController, loginAccountController, updateAccountController, recoverAccountController } from '../controllers/account.controller';
import { registerAccountSchemaDoc, updateAccountSchemaDoc, authenticateAccountSchemaDoc } from '@/controllers/schemas/account.schema';

export async function authRoutes(app: FastifyInstance) {
  app.post('/register',
    {
      schema: registerAccountSchemaDoc,
    },
    registerAccountController
  );
  app.post('/login',
    {
      schema: authenticateAccountSchemaDoc,
    },
    loginAccountController
  );
  app.put('/update/:id_Account',
    {
      schema: updateAccountSchemaDoc,
    },
    updateAccountController
  );
  app.post('/recoverLogin',
    {
      schema: authenticateAccountSchemaDoc,
    },
    recoverAccountController);

}
