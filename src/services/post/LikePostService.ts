import prismaClient from '../../prisma';

interface PostRequest {
  post_id: any;
  like: number;
}


class LikePostService {
  async execute({ post_id, like }: PostRequest) {
    const likePost = await prismaClient.post.update({
      where: {
        id: String(post_id),
      },
      data: {
        like: {
          increment: 1,
        }
      }
    })

    return likePost;
  }
}

export { LikePostService }