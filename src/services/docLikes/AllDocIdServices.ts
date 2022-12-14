import prismaClient from "../../prisma";

class AllDocIdServices {
   async execute() {
      const allDocId = await prismaClient.docLikesPost.findMany({
         select: {
            docId: true,
            post_id: true,
            user_id: true
         }
      })

      return allDocId;
   }
}

export { AllDocIdServices }