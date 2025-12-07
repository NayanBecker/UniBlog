import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

export const curtirSchema = z.object({
    id_PIC_Curtida: z.coerce.number().int('ID da interação de capa inválido'),
});

export const curtirSchemaDoc = {
    tags: ['Interações'],
    description: 'Endpoint para registrar uma nova curtida.',
    body: zodToJsonSchema(curtirSchema)
};

export const comentarSchema = z.object({
    id_PIC_Comentario: z.coerce.number().int('ID da interação de capa inválido'),
    conteudo_Comentario: z.string().min(1, 'Comentário não pode ser vazio').max(500, 'Comentário muito longo'),
});

export const comentarSchemaDoc = {
    tags: ['Interações'],
    description: 'Endpoint para registrar um novo comentário.',
    headers: {
        type: 'object',
        properties: {
            id_Perfil: {
                type: 'number',
                description: 'ID do perfil do usuário'
            }
        },
        required: ['id_Perfil']
    },
    body: zodToJsonSchema(comentarSchema)
};


export const deletarComentarioSchema = z.object({
    id_PIC_Comentario: z.coerce.number().int('ID do comentário inválido'),
});

export const deletarComentarioSchemaDoc = {
    tags: ['Interações'],
    description: 'Endpoint para deletar um comentário.',
    querystring: zodToJsonSchema(deletarComentarioSchema)
};

export const getInteracoesSchema = z.object({
    id_Post_PIC: z.coerce.number().int('ID do post inválido'),
});
export const getInteracoesSchemaDoc = {
    tags: ['Interações'],
    description: 'Endpoint para obter as interações de um post.',
    querystring: zodToJsonSchema(getInteracoesSchema)
};