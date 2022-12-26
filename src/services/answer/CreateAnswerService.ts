import prismaClient from "../../prisma";

interface PostRequest {
   post_id: string;
   answer: string;
   like: number;
   imgAnswer: string;
   name: string;
}

class CreateAnswerService {
   async execute({ post_id, answer, like, imgAnswer, name }: PostRequest) {

      const answers = await prismaClient.postResponde.create({
         data: {
            post_id: post_id,
            answer: answer,
            like: like,
            imgAnswer: imgAnswer,
            name: name
         },
         select: {
            answer: true,
            like: true,
            imgAnswer: true,
         }
      })

      return answers;

   }
}

export { CreateAnswerService }