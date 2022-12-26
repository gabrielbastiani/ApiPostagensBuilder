import prismaClient from '../../prisma';


class ListExactAnswerService {
    async execute({ post_id}) {
        const exactanswer = await prismaClient.postResponde.findUnique({
            where: {
                id: post_id
            },
            select: {
                id: true,
                answer: true,
                imgAnswer: true,
                like: true,
                created_at: true,
                name: true,
                post_id: true
            }
        })
        return exactanswer;
    }
}

export { ListExactAnswerService }