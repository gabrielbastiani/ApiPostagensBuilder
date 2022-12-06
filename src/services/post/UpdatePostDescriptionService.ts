import prismaClient from '../../prisma';

interface ArticleRequest {
  post_id: any;
  description: string;
}

class UpdatePostDescriptionService {
  async execute({ post_id, description }: ArticleRequest) {
    const postDescription = await prismaClient.post.update({
      where: {
        id: String(post_id),
      },
      data: {
        description: description,
      }
    })

    return postDescription;
  }
}

export { UpdatePostDescriptionService }