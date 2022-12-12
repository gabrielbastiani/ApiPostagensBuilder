import prismaClient from "../../prisma";

class FindFirstDocIdService {
   async execute() {
      const allDocId = await prismaClient.docLikesPost.findFirst()

      return allDocId;
   }
}

export { FindFirstDocIdService }