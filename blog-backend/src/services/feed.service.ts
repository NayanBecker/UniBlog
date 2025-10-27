import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

export async function getFeed(userId: string) {
  const posts = await db.post.findMany({
    where: { authorId: userId },
    orderBy: { createdAt: 'desc' },
  });


  console.log(`Retrieved ${posts.length} posts for user ${userId}`);

  return posts;
}
