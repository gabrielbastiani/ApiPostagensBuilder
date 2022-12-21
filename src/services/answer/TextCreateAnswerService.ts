import prismaClient from "../../prisma";

interface PostRequest {
   post_id: string;
   answer: string;
   like: number;
   name: string;
}

class TextCreateAnswerService {
   async execute({ post_id, answer, like, name }: PostRequest) {

      const answers = await prismaClient.postResponde.create({
         data: {
            post_id: post_id,
            answer: answer,
            like: like,
            name: name
         }
      })

      return answers;

   }
}

export { TextCreateAnswerService }