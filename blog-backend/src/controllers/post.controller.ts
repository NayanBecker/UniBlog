import { FastifyRequest, FastifyReply } from 'fastify';
import { createNewPost, getFeed } from '../services/post.service';
import { z } from 'zod';

export async function createPost(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    content: z.string().min(1),
  });

<<<<<<< Updated upstream
  const { content } = bodySchema.parse(request.body);
  const userId = (request.user as any).id;
=======
export async function createPostController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const data = createPostSchema.parse(request.body);
        const post = await createPostService(data);
        return reply.status(201).send(post);
    } catch (error) {
        return reply.status(400).send({ error: 'Erro de validação', details: error });
    }
>>>>>>> Stashed changes

  const post = await createNewPost(userId, content);
  return reply.status(201).send(post);
}

<<<<<<< Updated upstream
export async function getUserFeed(request: FastifyRequest, reply: FastifyReply) {
  const userId = (request.user as any).id;
  const feed = await getFeed(userId);
  return reply.send(feed);
=======
export async function updatePostController(request: FastifyRequest, reply: FastifyReply) {

    try {
        const data = updatePostSchema.parse(request.body);
        const post = await updatePostService(data);
        return reply.status(200).send(post);
    } catch (error) {
        return reply.status(400).send({ error: 'Erro de validação', details: error });
    }
>>>>>>> Stashed changes
}
