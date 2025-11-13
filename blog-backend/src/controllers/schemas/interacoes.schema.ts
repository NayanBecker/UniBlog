import { z } from 'zod';

export const curtirSchema = z.object({
    id_PIC_Curtida: z.coerce.number().int('ID da interação de capa inválido'),
});


export const comentarSchema = z.object({
    id_PIC_Comentario: z.coerce.number().int('ID da interação de capa inválido'),
    conteudo_Comentario: z.string().min(1, 'Comentário não pode ser vazio').max(500, 'Comentário muito longo'),
});

export const deletarComentarioSchema = z.object({
    id_PIC_Comentario: z.coerce.number().int('ID do comentário inválido'),
});

export const getInteracoesSchema = z.object({
    id_Post_PIC: z.coerce.number().int('ID do post inválido'),
});