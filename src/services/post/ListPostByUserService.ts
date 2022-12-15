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
                name: true,
                description: true,
                created_at: true,
                imgPost: true,
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