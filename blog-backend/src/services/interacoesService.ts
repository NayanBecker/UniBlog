import db from '../lib/prisma';

export interface CurtirData {
    id_PIC_Curtida: number;
    id_Perfil_Curtida: number;
}

export interface ComentarData {
    id_PIC_Comentario: number;
    id_Perfil_Comentario: number;
    conteudo_Comentario: string;
}


export interface GetInteracoesInterface {
    id_PIC: number;
    id_Post_PIC: number;
    visualizacao_PIC: number;
    curtidas_PIC: CurtirData[];
    comentarios_PIC: ComentarData[];
}

export async function getInteracoesByPostIdService(id_Post_PIC: number) {
    const getInteracoesFromPost = await db.t_PostInteracaoCapa.findFirst({
        where: { T_Post: { id_Post: id_Post_PIC } },
        select: {
            id_PIC: true,
            visualizacao_PIC: true,
            curtidas_PIC: {
                select: {
                    id_PIC_Curtida: true,
                    id_Perfil_Curtida: true,
                },
            },
            comentarios_PIC: {
                select: {
                    id_PIC_Comentario: true,
                    id_Perfil_Comentario: true,
                    conteudo_Comentario: true,
                },
            },
        },
    });
    if (!getInteracoesFromPost) {
        throw new Error('Interações não encontradas para este post.');
    }
    return getInteracoesFromPost;
}


export async function curtirService(data: CurtirData) {
    const ifExisting = await db.t_PIC_Curtidas.findFirst({
        where: { id_PIC_Curtida: data.id_PIC_Curtida, id_Perfil_Curtida: data.id_Perfil_Curtida },
    });
    if (ifExisting) {
        throw new Error('Já curtiu este post.');
    }
    const createdLike = await db.t_PIC_Curtidas.create({
        data: { id_PIC_Curtida: data.id_PIC_Curtida, id_Perfil_Curtida: data.id_Perfil_Curtida },
    });

    return createdLike;
}

export async function descurtirService(data: CurtirData) {
    const deleted = await db.t_PIC_Curtidas.deleteMany({
        where: { id_PIC_Curtida: data.id_PIC_Curtida, id_Perfil_Curtida: data.id_Perfil_Curtida },
    });
    if (deleted.count === 0) {
        throw new Error('Curtida não encontrada para remover.');
    }
    return { message: 'Descurtido com sucesso.' };
}




export async function comentarService(data: ComentarData) {
    const createdComment = await db.t_PIC_Comentarios.create({
        data: { id_PIC_Comentario: data.id_PIC_Comentario, id_Perfil_Comentario: data.id_Perfil_Comentario, conteudo_Comentario: data.conteudo_Comentario },
    });

    return createdComment;
}

export async function deletarComentarioService(data: ComentarData) {
    const deleted = await db.t_PIC_Comentarios.deleteMany({
        where: { id_Comentario: data.id_PIC_Comentario, id_Perfil_Comentario: data.id_Perfil_Comentario },
    });
    if (deleted.count === 0) {
        throw new Error('Comentário não encontrado ou não pertence ao perfil.');
    }
    return { message: 'Comentário deletado com sucesso.' };
}
