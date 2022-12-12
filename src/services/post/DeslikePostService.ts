import prismaClient from '../../prisma';

interface PostRequest {
  post_id: any;
  like: number;
}


class DeslikePostService {
  async execute({ post_id, like }: PostRequest) {
    const deslikePost = await prismaClient.post.update({
      where: {
        id: String(post_id),
      },
      data: {
        like: {
          decrement: 1,
        }
      }
    })

    return deslikePost;
  }
}

export { DeslikePostService }