import prismaClient from "../../prisma";

interface PostRequest {
   answer: string;
   imgAnswer: string;
   like: string;
}

class CreateAnswerService {
   async execute({ answer, imgAnswer, like }: PostRequest) {

      const answers = await prismaClient.postResponde.create({
         data: {
            answer: answer,
            imgAnswer: imgAnswer,
            like: like,
         }
      })

      return answers;

   }
}

export { CreateAnswerService }