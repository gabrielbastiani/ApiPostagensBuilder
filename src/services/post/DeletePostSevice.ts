import prismaClient from "../../prisma";

interface PostRequest {
    post_id: any;
  }

class DeletePostSevice {
  async execute({ post_id }: PostRequest){

    const posts = await prismaClient.post.delete({
      where:{
        id: post_id
      }
    })

    return posts;
    
  }
}

export { DeletePostSevice }