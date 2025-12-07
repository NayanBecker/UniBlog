import { CreatePostData, postRepository } from '../repository/postRepository';

export interface ParamsPostDataInterface {
  id_Post: number;
}
export interface PerfilHeaderDataInterface {
  'id_Perfil': number;
}

export async function createPostService(data: CreatePostData, id_Perfil_Post: number) {
  const createdPost = await postRepository.createPost(data, id_Perfil_Post);
  await postRepository.createInteracaoCapa(createdPost.id_Post);
  return createdPost;
}



export async function deletePostService(
  { id_Post }: ParamsPostDataInterface,
  id_Perfil_Post: number
) {
  const post = await postRepository.findByIdAndProfile(id_Post, id_Perfil_Post);
  if (!post) throw new Error('Post não encontrado.');

  return postRepository.delete(id_Post);
}


export async function getPostByProfileService({ id_Perfil }: PerfilHeaderDataInterface) {
  const posts = await postRepository.findByProfile(id_Perfil);
  if (!posts || posts.length === 0) throw new Error('Nenhum post encontrado.');
  return posts;
}

export async function getAllPostsService() {
  return postRepository.findAll();
}