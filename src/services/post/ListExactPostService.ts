import prismaClient from '../../prisma';

interface PostRequest {
    name: string;
}

class ListExactPostService {
    async execute({ name }: PostRequest) {
        const ExactPost = await prismaClient.post.findUnique({
            where: {
                name,
            },
            select: {
                name: true
            }
        })
        return ExactPost;
    }
}

export { ListExactPostService }