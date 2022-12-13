import prismaClient from "../../prisma";

interface DocIdProps {
   docId: string;
}

class FindFirstDocIdService {
   async execute({docId}: DocIdProps) {
      const allDocId = await prismaClient.docLikesPost.findUnique({
         where: {
            docId: String(docId),
         },
         select: {
            docId: true,
         }
      })

      return allDocId;
   }
}

export { FindFirstDocIdService }