import prismaClient from "../../prisma";

interface PostRequest{
  postresponde_id: string;
}

class RemoveImgPostAnswerService{
  async execute({ postresponde_id }: PostRequest){

    const imgAnswers = prismaClient.postResponde.findUnique({
      where:{
        id: postresponde_id
      }
    })

    return imgAnswers;
    
  }
}

export { RemoveImgPostAnswerService }