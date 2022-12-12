import prismaClient from "../../prisma";

class AllDocIdServices {
   async execute() {
      const allDocId = await prismaClient.docLikesPost.findMany()

      return allDocId;
   }
}

export { AllDocIdServices }