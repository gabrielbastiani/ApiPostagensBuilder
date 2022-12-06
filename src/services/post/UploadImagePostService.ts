import prismaClient from '../../prisma';

interface PostRequest {
  post_id: any;
  imgPost: string;
}

class UploadImagePostService {
  async execute({ post_id, imgPost }: PostRequest) {
    const postImage = await prismaClient.post.update({
      where: {
        id: String(post_id),
      },
      data: {
        imgPost: imgPost,
      },
      select:{
        imgPost: true
      }
    })

    return postImage;
  }
}

export { UploadImagePostService }