import prismaClient from "../../prisma";

class AllDocIdAnswersServices {
   async execute() {
      const allDocIdAnswer = await prismaClient.docLikesResponde.findMany({
         select: {
            docIdResponde: true,
            postresponde_id: true,
            user_id: true
         }
      })

      return allDocIdAnswer;
   }
}

export { AllDocIdAnswersServices }