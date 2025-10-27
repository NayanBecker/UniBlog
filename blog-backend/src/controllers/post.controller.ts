import { FastifyRequest, FastifyReply } from 'fastify';
import { createPostService, deletePostService, getPostByProfileService, getAllPostsService } from '../services/post.service';
import { createPostSchema, deletePostSchema/*, getPostSchema */ } from '../schemas/post.schema';
import { parseMultipart } from '../utils/parseMultipart';
import { uploadToMinio } from '../utils/uploadToMinio';
import { idProfileSchema } from '../schemas/profile.schema';
import { getInteracoesByPostIdService, } from '../services/interacoes.service';

export async function createPostController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const { fields, fileBuffer, fileName } = await parseMultipart(request);

        const data = createPostSchema.parse({
            ...fields,
        });

        const perfilId = Number(request.headers['id_perfil']);
        console.log('Perfil ID do header:', perfilId);
        if (!perfilId) {
            return reply.status(400).send({ error: 'ID do perfil não fornecido no header' });
        }

        if (fileBuffer && fileName) {
            const imageUrl = await uploadToMinio(fileBuffer, fileName);
            data.image_Post = imageUrl;
        }

        const post = await createPostService(data, perfilId);
        const postInteracaoCapa = await (post.id_Post);

        return reply.status(201).send({ post, postInteracaoCapa });
    } catch (error) {
        return reply.status(400).send({
            error: 'Erro de validação',
            message: error instanceof Error ? error.message : 'Erro desconhecido',
            stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
        });
    }
}

export async function deletePostController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const perfilId = Number(request.headers['id_perfil']);
        const postId = deletePostSchema.parse(request.params);
        const post = await deletePostService(postId, perfilId);
        return reply.status(200).send(post);
    } catch (error) {
        return reply.status(400).send({
            error: 'Erro de validação',
            message: error instanceof Error ? error.message : 'Erro desconhecido',
            stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
        });
    }
}

export async function getPostController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const { id_Perfil } = idProfileSchema.parse({ id_Perfil: request.headers['id_perfil'] });

        const post = await getPostByProfileService({ id_Perfil });
        if (!post || post.length === 0) {
            return reply.status(404).send({ error: 'Nenhum post encontrado para este perfil.' });
        }


        return reply.status(200).send(post);
    } catch (error) {
        return reply.status(400).send({
            error: 'Erro de validação',
            message: error instanceof Error ? error.message : 'Erro desconhecido',
            stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
        });
    }
}
export async function getAllPostsController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const postsData = await getAllPostsService();

        const postsWithInteractions = await Promise.all(
            postsData.map(async (post) => {
                const interacoes = await getInteracoesByPostIdService(post.id_Post);
                return { ...post, T_PostInteracaoCapa: interacoes };
            })
        );

        return reply.status(200).send(postsWithInteractions);
    } catch (error) {
        return reply.status(400).send({
            error: 'Erro de validação',
            message: error instanceof Error ? error.message : 'Erro desconhecido',
            stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
        });
    }
}