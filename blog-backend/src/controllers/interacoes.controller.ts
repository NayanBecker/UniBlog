import { FastifyRequest, FastifyReply } from 'fastify';
import {
    curtirService, descurtirService, comentarService, deletarComentarioService,
    getInteracoesByPostIdService
} from '../services/interacoesService';
import { curtirSchema, comentarSchema, deletarComentarioSchema, getInteracoesSchema } from './schemas/interacoes.schema';
import { idProfileSchema } from './schemas/profile.schema';

export async function curtirController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const { id_PIC_Curtida } = curtirSchema.parse(request.body);

        const { id_Perfil } = idProfileSchema.parse({ id_Perfil: request.headers['id_perfil'] });

        const result = await curtirService({
            id_PIC_Curtida: id_PIC_Curtida,
            id_Perfil_Curtida: id_Perfil
        });

        return reply.status(201).send(result);
    } catch (error) {
        return reply.status(400).send({
            error: 'Erro ao processar a curtida',
            message: error instanceof Error ? error.message : 'Erro desconhecido',
        });
    }
}

export async function descurtirController(request: FastifyRequest, reply: FastifyReply) {
    try {

        const { id_PIC_Curtida } = curtirSchema.parse(request.body);

        const { id_Perfil } = idProfileSchema.parse({ id_Perfil: request.headers['id_perfil'] });

        const result = await descurtirService({
            id_PIC_Curtida: id_PIC_Curtida,
            id_Perfil_Curtida: id_Perfil
        });

        return reply.status(200).send(result);
    } catch (error) {
        return reply.status(400).send({
            error: 'Erro ao descurtir',
            message: error instanceof Error ? error.message : 'Erro desconhecido',
            stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
        });
    }
}

export async function comentarController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const data = comentarSchema.parse(request.body);

        const { id_Perfil } = idProfileSchema.parse({ id_Perfil: request.headers['id_Perfil'] });
        if (!id_Perfil) {
            return reply.status(400).send({ error: 'ID do perfil não fornecido no header' });
        }


        const result = await comentarService({ ...data, id_Perfil_Comentario: id_Perfil });
        return reply.status(201).send(result);
    } catch (error) {
        return reply.status(400).send({
            error: 'Erro ao comentar',
            message: error instanceof Error ? error.message : 'Erro desconhecido',
            stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
        });
    }
}

export async function deletarComentarioController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const data = deletarComentarioSchema.parse(request.query || request.body);
        const { id_Perfil } = idProfileSchema.parse({ id_Perfil: request.headers['id_Perfil'] });

        if (!id_Perfil) {
            return reply.status(400).send({ error: 'ID do perfil não fornecido no header' });
        }

        const result = await deletarComentarioService({
            id_PIC_Comentario: data.id_PIC_Comentario,
            id_Perfil_Comentario: id_Perfil,
            conteudo_Comentario: ''
        });
        return reply.status(200).send(result);
    } catch (error) {
        return reply.status(400).send({
            error: 'Erro ao deletar comentário',
            message: error instanceof Error ? error.message : 'Erro desconhecido',
            stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
        });
    }
}

export async function getInteracoesController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const { id_Post_PIC } = getInteracoesSchema.parse(request.query);
        const result = await getInteracoesByPostIdService(id_Post_PIC);
        return reply.status(200).send(result);
    } catch (error) {
        return reply.status(400).send({
            error: 'Erro ao obter interações',
            message: error instanceof Error ? error.message : 'Erro desconhecido',
            stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
        });
    }
}