import prismaClient from '../../prisma';

interface PostRequest {
  postresponde_id: any;
  imgAnswer: string;
}

class UpdateImgAnswerAnswerService {
  async execute({ postresponde_id, imgAnswer }: PostRequest) {
    const imgAnswers = await prismaClient.postResponde.update({
      where: {
        id: String(postresponde_id),
      },
      data: {
        imgAnswer: imgAnswer,
      }
    })

    return imgAnswers;
  }
}

export { UpdateImgAnswerAnswerService }