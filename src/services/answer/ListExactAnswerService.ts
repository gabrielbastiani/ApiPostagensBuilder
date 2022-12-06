import prismaClient from '../../prisma';


class ListExactAnswerService {
    async execute({ answer }) {
        const exactanswer = await prismaClient.postResponde.findUnique({
            where: {
                answer
            }
        })
        return exactanswer;
    }
}

export { ListExactAnswerService }