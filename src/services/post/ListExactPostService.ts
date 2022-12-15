import prismaClient from '../../prisma';


class ListExactPostService {
    async execute({ name }) {
        const ExactPost = await prismaClient.post.findUnique({
            where: {
                name
            }
        })
        return ExactPost;
    }
}

export { ListExactPostService }