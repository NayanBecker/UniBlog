import { createPostSchema } from '@/controllers/schemas/post.schema';
import db from '../lib/prisma';
import z from 'zod';

export type CreatePostData = z.infer<typeof createPostSchema>;


export const postRepository = {
    async createPost(data: CreatePostData, id_Perfil_Post: number) {
        return db.t_Post.create({
            data: {
                title_Post: data.title_Post,
                content_Post: data.content_Post,
                image_Post: data.image_Post,
                T_Perfil: {
                    connect: { id_Perfil: id_Perfil_Post },
                },
            },
        });
    },


    async createInteracaoCapa(id_Post: number) {
        return db.t_PostInteracaoCapa.create({
            data: {
                id_Post_PIC: id_Post,
                visualizacao_PIC: [],
            },
        });
    },

    async findByIdAndProfile(id_Post: number, id_Perfil_Post: number) {
        return db.t_Post.findFirst({
            where: {
                id_Post,
                T_Perfil: { id_Perfil: id_Perfil_Post },
            },
        });
    },

    async delete(id_Post: number) {
        return db.t_Post.delete({
            where: { id_Post },
        });
    },

    async findByProfile(id_Perfil: number) {
        return db.t_Post.findMany({
            where: { T_Perfil: { id_Perfil } },
            select: {
                id_Post: true,
                title_Post: true,
                content_Post: true,
                image_Post: true,
                TAG_Post: true,
                T_Perfil: {
                    select: {
                        nome_Perfil: true,
                        foto_Perfil: true,
                    },
                },
            },
        });
    },

    async findAll() {
        return db.t_Post.findMany({
            orderBy: { createdAt_Post: 'desc' },
            select: {
                id_Post: true,
                title_Post: true,
                content_Post: true,
                image_Post: true,
                TAG_Post: true,
                createdAt_Post: true,
                T_Perfil: {
                    select: {
                        id_Perfil: true,
                        nome_Perfil: true,
                        foto_Perfil: true,
                    },
                },
            },
        });
    },
};