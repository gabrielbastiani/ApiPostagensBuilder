import prismaClient from "../../prisma";

interface DeleteLikesdocLikesId {
    docId: string;
}

class DeleteLikesDocIdService {
    async execute({ docId }: DeleteLikesdocLikesId) {

        const docLikes = await prismaClient.docLikesPost.delete({
            where: {
                docId: docId,
            }
        })

        return docLikes;
    }

}

export { DeleteLikesDocIdService }