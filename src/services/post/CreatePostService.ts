import prismaClient from "../../prisma";

interface PostRequest {
   description: string;
   imgPost: string;
   like: string;
}

class CreatePostService {
   async execute({ description, imgPost, like }: PostRequest) {

      const post = await prismaClient.post.create({
         data: {
            description: description,
            imgPost: imgPost,
            like: like,
         }
      })

      return post;

   }
}

export { CreatePostService }