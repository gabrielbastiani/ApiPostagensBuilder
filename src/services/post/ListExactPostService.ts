import prismaClient from '../../prisma';


class ListExactPostService {
    async execute({ description }) {
        const ExactPost = await prismaClient.post.findUnique({
            where: {
                description
            }
        })
        return ExactPost;
    }
}

export { ListExactPostService }