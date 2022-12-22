import prismaClient from "../../prisma";

class FindUniqueDocIdAnswersService {
   async execute({docIdResponde}) {
      const allDocIdAnswer = await prismaClient.docLikesResponde.findUnique({
         where: {
            docIdResponde
         },
         select: {
            docIdResponde: true,
            postresponde_id: true,
            user_id: true
         }
      })

      return allDocIdAnswer;
   }
}

export { FindUniqueDocIdAnswersService }