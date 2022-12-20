import prismaClient from '../../prisma';

interface PostRequest {
    name: string;
}

class ListPostByUserService {
    async execute({ name }: PostRequest) {
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