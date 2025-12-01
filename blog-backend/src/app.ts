import Fastify from 'fastify';
import fastifyMultipart from '@fastify/multipart';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import { authRoutes } from './routes/account.routes';
import { userRoutes } from './routes/profile.routes';
import { postRoutes } from '../src/routes/post.routes';
import { interacoesRoutes } from './routes/interacoes.routes';
import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';

export const app = Fastify();

export async function BuildServer() {
  await app.register(swagger, {
    openapi: {
      openapi: '3.0.0',
      info: {
        title: 'UniBlog API',
        description: 'API documentation for UniBlog application',
        version: '1.0.0',
      }
    }
  });
  await app.register(swaggerUI, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
  });

  await app.register(cors, {
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });

  await app.register(jwt, {
    secret: process.env.JWT_SECRET || 'uniblog-secret',
  });

  await app.register(fastifyMultipart, {
    limits: {
      fileSize: 20 * 1024 * 1024,
    },
  });
  app.register(authRoutes, { prefix: '/account' });
  app.register(userRoutes, { prefix: '/profile' });
  app.register(postRoutes, { prefix: '/posts' });
  app.register(interacoesRoutes, { prefix: '/int' });

}

