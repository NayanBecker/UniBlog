import { FastifyInstance } from 'fastify';
import { register, login } from '../controllers/auth.controller';

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', register);
  app.post('/login', login);
}
