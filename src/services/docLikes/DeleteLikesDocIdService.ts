import prismaClient from "../../prisma";


class DeleteLikesDocIdService {
    async execute({ docId }) {

        const docLikes = await prismaClient.docLikesPost.delete({
            where: {
                docId
            }
        })

        return docLikes;
    }

}

export { DeleteLikesDocIdService }