import prismaClient from "../../prisma";

interface AnswerRequest {
    postresponde_id: any;
  }

class DeleteAnswerService {
  async execute({ postresponde_id }: AnswerRequest){

    const answers = await prismaClient.postResponde.delete({
      where:{
        id: postresponde_id
        
      }
    })

    return answers;
    
  }
}

export { DeleteAnswerService }