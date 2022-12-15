import prismaClient from "../../prisma";

class FindUniqueDocIdService {
   async execute({docId}) {
      const allDocId = await prismaClient.docLikesPost.findUnique({
         where: {
            docId
         },
         select: {
            docId: true,
            post_id: true,
            user_id: true
         }
      })

      return allDocId;
   }
}

export { FindUniqueDocIdService }