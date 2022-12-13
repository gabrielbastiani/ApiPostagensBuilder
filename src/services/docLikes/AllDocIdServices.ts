import prismaClient from "../../prisma";

class AllDocIdServices {
   async execute() {
      const allDocId = await prismaClient.docLikesPost.findMany({
         select: {
            docId: true,
         }
      })

      return allDocId;
   }
}

export { AllDocIdServices }