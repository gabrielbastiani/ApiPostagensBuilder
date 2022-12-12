import prismaClient from "../../prisma";

class ListAllPostsService {
   async execute() {
      const allPost = await prismaClient.post.findMany({
         select: {
            id: true,
            name: true,
            description: true,
            imgPost: true,
            like: true,
            postresponde: true,
            created_at: true
         },
         orderBy: {
            created_at: 'desc'
         }
      })

      return allPost;
   }
}

export { ListAllPostsService }