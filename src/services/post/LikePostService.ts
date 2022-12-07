import prismaClient from '../../prisma';

interface PostRequest {
  post_id: any;
  like: number;
}

class LikePostService {
  async execute({ post_id, like }: PostRequest) {
    const postImg = await prismaClient.post.update({
      where: {
        id: String(post_id),
      },
      data: {
        like: like
      }
    })

    return postImg;
  }
}

export { LikePostService }