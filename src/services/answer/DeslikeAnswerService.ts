import prismaClient from '../../prisma';

interface PostRequest {
  postresponde_id: any;
  like: number;
}


class DeslikeAnswerService {
  async execute({ postresponde_id, like }: PostRequest) {
    const deslikeAnswer = await prismaClient.postResponde.update({
      where: {
        id: String(postresponde_id),
      },
      data: {
        like: {
          decrement: 1,
        }
      }
    })

    return deslikeAnswer;
  }
}

export { DeslikeAnswerService }