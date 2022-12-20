import prismaClient from "../../prisma";

interface PostRequest {
   description: string;
   like: number;
   name: string;
   imgPost: string;
}

class CreatePostService {
   async execute({ description, like, name, imgPost }: PostRequest) {

      const post = await prismaClient.post.create({
         data: {
            description: description,
            like: like,
            name: name,
            imgPost: imgPost
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