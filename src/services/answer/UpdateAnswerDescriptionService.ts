import prismaClient from '../../prisma';

interface AnswerRequest {
  postresponde_id: any;
  answer: string;
}

class UpdateAnswerDescriptionService {
  async execute({ postresponde_id, answer }: AnswerRequest) {
    const postDescription = await prismaClient.postResponde.update({
      where: {
        id: String(postresponde_id),
      },
      data: {
        answer: answer,
      }
    })

    return postDescription;
  }
}

export { UpdateAnswerDescriptionService }