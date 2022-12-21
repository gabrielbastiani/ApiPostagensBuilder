import prismaClient from "../../prisma";

interface PostRequest {
   description: string;
   like: number;
   name: string;
}

class TextCreatePostService {
   async execute({ description, like, name }: PostRequest) {

      const post = await prismaClient.post.create({
         data: {
            description: description,
            like: like,
            name: name,
         },
         select: {
            description: true,
            like: true,
         }
      })

      return post;

   }
}

export { TextCreatePostService }