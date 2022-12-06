import prismaClient from '../../prisma';

interface PostRequest {
  postResponde_id: any;
  imgAnswer: string;
}

class UpdateImgAnswerAnswerService {
  async execute({ postResponde_id, imgAnswer }: PostRequest) {
    const imgAnswers = await prismaClient.postResponde.update({
      where: {
        id: String(postResponde_id),
      },
      data: {
        imgAnswer: imgAnswer,
      }
    })

    return imgAnswers;
  }
}

export { UpdateImgAnswerAnswerService }