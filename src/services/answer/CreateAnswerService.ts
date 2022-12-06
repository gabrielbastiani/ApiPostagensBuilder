import prismaClient from "../../prisma";

interface PostRequest {
   post_id: string;
   answer: string;
   like: string;
}

class CreateAnswerService {
   async execute({ post_id, answer, like }: PostRequest) {

      const answers = await prismaClient.postResponde.create({
         data: {
            post_id: post_id,
            answer: answer,
            like: like,
         }
      })

      return answers;

   }
}

export { CreateAnswerService }