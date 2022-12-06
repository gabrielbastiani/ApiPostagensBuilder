import prismaClient from '../../prisma';

interface PostRequest {
  post_id: any;
  imgPost: string;
}

class UpdateImgPostPostService {
  async execute({ post_id, imgPost }: PostRequest) {
    const postImg = await prismaClient.post.update({
      where: {
        id: String(post_id),
      },
      data: {
        imgPost: imgPost,
      }
    })

    return postImg;
  }
}

export { UpdateImgPostPostService }