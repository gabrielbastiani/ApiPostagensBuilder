import prismaClient from '../../prisma';

class PageListPostService {
  async execute(page = 1, limit = 5) {

    const skip = limit * (page - 1);

    //Pegar quantidade de todos os artigos
    const allPosts = await prismaClient.post.findMany({
      orderBy: {
        created_at: 'desc'
      }
    });

    const postsall = await prismaClient.post.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            imgPost: true,
            like: true,
            created_at: true,
            postresponde: true,
        },
      skip,
      take: limit,
      orderBy: {
        created_at: 'desc'
      }
    });

    // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
    const data = {
      postsall,
      total: allPosts.length,
      total_pages: Math.ceil(allPosts.length / limit),
      current_page: page,
    }

    return data;

  }

}

export { PageListPostService }