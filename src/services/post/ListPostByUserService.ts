import prismaClient from '../../prisma';


interface PostRequest {
    name: string;
}

class ListPostByUserService {
    async execute({ name }: PostRequest) {
        const allPostUser = await prismaClient.post.findMany({
            where: {
                name: name,
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        return allPostUser;

    }

}

export { ListPostByUserService }