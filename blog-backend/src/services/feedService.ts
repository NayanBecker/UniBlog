import db from '../lib/prisma';


export async function getFeed(userId: string) {
  const posts = await db.post.findMany({
    where: { authorId: userId },
    orderBy: { createdAt: 'desc' },
  });


  console.log(`Retrieved ${posts.length} posts for user ${userId}`);

  return posts;
}
