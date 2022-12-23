import prismaClient from '../../prisma';

interface PostRequest {
    name: string;
 }

class ListExactPostService {
    async execute({name}: PostRequest) {
        const exactPost = await prismaClient.post.findUnique({
            where: {
                id: name
            }
        })
        return exactPost;
    }
}

export { ListExactPostService }