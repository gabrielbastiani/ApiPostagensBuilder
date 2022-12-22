import prismaClient from "../../prisma";


class DeleteLikesDocIdAnswersService {
    async execute({ docIdResponde }) {

        const docLikesAnswer = await prismaClient.docLikesResponde.delete({
            where: {
                docIdResponde
            }
        })

        return docLikesAnswer;
    }

}

export { DeleteLikesDocIdAnswersService }