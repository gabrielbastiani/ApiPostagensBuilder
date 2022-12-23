import prismaClient from '../../prisma';

class ListPostByUserService {
    async execute({ name }) {
        const allPostUser = await prismaClient.post.findMany({
            where: {
                name
            },
            select: {
                id: true,
                name: true,
                imgPost: true,
                created_at: true,
                description: true,
                like: true,
                postresponde: true
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        return allPostUser;

    }

}

export { ListPostByUserService }