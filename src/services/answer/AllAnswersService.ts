import prismaClient from "../../prisma";

class AllAnswersService {
   async execute() {
      const allAnswers = await prismaClient.postResponde.findMany({
         select: {
            id: true,
            answer: true,
            imgAnswer: true,
            like: true,
            name: true,
            post_id: true,
            created_at: true
         },
         orderBy: {
            created_at: 'desc'
         }
      })

      return allAnswers;
   }
}

export { AllAnswersService }