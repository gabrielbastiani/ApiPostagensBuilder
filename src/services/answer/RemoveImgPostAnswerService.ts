import prismaClient from "../../prisma";

interface PostRequest{
  postResponde_id: string;
}

class RemoveImgPostAnswerService{
  async execute({ postResponde_id }: PostRequest){

    const imgAnswers = prismaClient.postResponde.findUnique({
      where:{
        id: postResponde_id
      }
    })

    return imgAnswers;
    
  }
}

export { RemoveImgPostAnswerService }