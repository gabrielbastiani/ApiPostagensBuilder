import prismaClient from "../../prisma";

class FindFirstDocIdService {
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

      const data = {
         allDocId
      }

      return data;
   }
}

export { FindFirstDocIdService }