import prismaClient from "../../prisma";

interface PostRequest {
   description: string;
   like: string;
   name: string;
}

class CreatePostService {
   async execute({ description, like, name }: PostRequest) {

      const post = await prismaClient.post.create({
         data: {
            description: description,
            like: like,
            name: name
         },
         select: {
            description: true,
            like: true,
            imgPost: true
         }
      })

      return post;

   }
}

export { CreatePostService }