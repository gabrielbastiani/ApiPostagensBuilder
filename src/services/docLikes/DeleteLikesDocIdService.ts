import prismaClient from "../../prisma";


class DeleteLikesDocIdService {
    async execute({ docId }) {

        const docLikes = await prismaClient.docLikesPost.delete({
            where: {
                docId
            }
        })

        const data = {
            docLikes
        }

        return docLikes;
    }

}

export { DeleteLikesDocIdService }