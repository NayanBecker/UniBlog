import { db } from '../prisma/client'; 

<<<<<<< Updated upstream

export async function createNewPost(userId: string, content: string) {
  const post = await db.post.create({
    data: {
      content,
      authorId: userId,
=======
export interface CreatePostDataInterface {
  title_Post?: string;
  content_Post?: string;
  image_Post?: string;
}

export interface UpdatePostDataInterface {
  id_Post: number;
  title_Post?: string;
  content_Post?: string;
  image_Post?: string;
}

export interface DeletePostDataInterface {
  id_Post: number;
}

export async function createPostService({ title_Post, image_Post, content_Post }: CreatePostDataInterface) {
  const createdPost = await db.t_Post.create({
    data: {
      title_Post: title_Post,
      content_Post: content_Post,
      image_Post: image_Post,
>>>>>>> Stashed changes
    },
  });

  return post;
}

<<<<<<< Updated upstream
export async function getFeed(userId: string) {
  const posts = await db.post.findMany({
    where: { authorId: userId },
    orderBy: { createdAt: 'desc' },
=======
export async function updatePostService({ title_Post, image_Post, content_Post, id_Post }: UpdatePostDataInterface) {
  const updatedPost = await db.t_Post.update({
    where: { id_Post: id_Post },
    data: {
      content_Post: content_Post,
      title_Post: title_Post,
      image_Post: image_Post,
      updatedAt_Post: new Date(),
    },
>>>>>>> Stashed changes
  });

  return posts;
}
