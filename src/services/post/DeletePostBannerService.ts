import prismaClient from "../../prisma";

interface PostRequest{
 post_id: string;
}

class DeletePostBannerService {
  async execute({post_id }: PostRequest){

    const postImg = await prismaClient.post.findUnique({
      where:{
        id: post_id
      }
    })

    return postImg;
    
  }
}

export { DeletePostBannerService }