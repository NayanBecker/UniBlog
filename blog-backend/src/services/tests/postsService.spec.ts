import { postRepository } from "../../repository/postRepository";
import { createPostService, deletePostService, getAllPostsService, getPostByProfileService } from "../postService";

jest.mock('../../repository/postRepository.ts');

const mockPost = {
    id_Post: 1,
    title_Post: 'Título teste',
    content_Post: 'Conteúdo teste',
    image_Post: 'imagem.jpg',
    TAG_Post: 'tag',
    createdAt_Post: new Date(),
    T_Perfil: { id_Perfil: 1, nome_Perfil: 'User', foto_Perfil: 'foto.jpg' },
};

describe('Post Service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('deve criar um post com sucesso', async () => {
        (postRepository.createPost as jest.Mock).mockResolvedValue(mockPost);
        (postRepository.createInteracaoCapa as jest.Mock).mockResolvedValue({});

        const result = await createPostService(
            { title_Post: 'Teste', content_Post: 'Conteúdo' },
            1
        );

        expect(postRepository.createPost).toHaveBeenCalledWith(
            { title_Post: 'Teste', content_Post: 'Conteúdo' },
            1
        );
        expect(postRepository.createInteracaoCapa).toHaveBeenCalledWith(mockPost.id_Post);
        expect(result).toEqual(mockPost);
    });

    it('deve deletar um post existente', async () => {
        (postRepository.findByIdAndProfile as jest.Mock).mockResolvedValue(mockPost);
        (postRepository.delete as jest.Mock).mockResolvedValue(mockPost);

        const result = await deletePostService({ id_Post: 1 }, 1);

        expect(postRepository.findByIdAndProfile).toHaveBeenCalledWith(1, 1);
        expect(postRepository.delete).toHaveBeenCalledWith(1);
        expect(result).toEqual(mockPost);
    });

    it('deve lançar erro se o post não existir', async () => {
        (postRepository.findByIdAndProfile as jest.Mock).mockResolvedValue(null);

        await expect(deletePostService({ id_Post: 99 }, 1))
            .rejects
            .toThrow('Post não encontrado.');
    });

    it('deve retornar posts de um perfil', async () => {
        (postRepository.findByProfile as jest.Mock).mockResolvedValue([mockPost]);

        const result = await getPostByProfileService({ id_Perfil: 1 });

        expect(postRepository.findByProfile).toHaveBeenCalledWith(1);
        expect(result).toHaveLength(1);
    });

    it('deve lançar erro se nenhum post for encontrado', async () => {
        (postRepository.findByProfile as jest.Mock).mockResolvedValue([]);

        await expect(getPostByProfileService({ id_Perfil: 1 }))
            .rejects
            .toThrow('Nenhum post encontrado.');
    });

    it('deve retornar todos os posts', async () => {
        (postRepository.findAll as jest.Mock).mockResolvedValue([mockPost]);

        const result = await getAllPostsService();

        expect(postRepository.findAll).toHaveBeenCalled();
        expect(result).toEqual([mockPost]);
    });
});
