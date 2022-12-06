import prismaClient from '../../prisma';

interface AnswerRequest {
  postResponde_id: any;
  answer: string;
}

class UpdateAnswerDescriptionService {
  async execute({ postResponde_id, answer }: AnswerRequest) {
    const postDescription = await prismaClient.postResponde.update({
      where: {
        id: String(postResponde_id),
      },
      data: {
        answer: answer,
      }
    })

    return postDescription;
  }
}

export { UpdateAnswerDescriptionService }