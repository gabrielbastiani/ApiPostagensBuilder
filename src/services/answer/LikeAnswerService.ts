import prismaClient from '../../prisma';

interface PostRequest {
  postresponde_id: any;
  like: number;
}

class LikeAnswerService {
  async execute({ postresponde_id, like }: PostRequest) {
    const likeAnswer = await prismaClient.postResponde.update({
      where: {
        id: String(postresponde_id),
      },
      data: {
        like: {
          increment: 1,
        }
      }
    })

    return likeAnswer;
  }
}

export { LikeAnswerService }