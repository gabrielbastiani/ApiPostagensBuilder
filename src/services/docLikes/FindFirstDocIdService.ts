import prismaClient from "../../prisma";

interface DocIdProps {
   docId: string;
}

class FindFirstDocIdService {
   async execute({docId}: DocIdProps) {
      const allDocId = await prismaClient.docLikesPost.findUnique({
         where: {
            docId: docId,
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

export { FindFirstDocIdService }