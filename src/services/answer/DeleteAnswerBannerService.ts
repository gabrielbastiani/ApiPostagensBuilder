import prismaClient from "../../prisma";

interface AnswerRequest{
 postresponde_id: string;
}

class DeleteAnswerBannerService {
  async execute({postresponde_id }: AnswerRequest){

    const answerImg = await prismaClient.postResponde.findUnique({
      where:{
        id: postresponde_id
      }
    })

    return answerImg;
    
  }
}

export { DeleteAnswerBannerService }