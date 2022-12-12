import prismaClient from "../../prisma";

interface DeleteLikesdocLikesId {
    doclikespost_id: string;
}

class DeleteLikesDocIdService {
    async execute({ doclikespost_id }: DeleteLikesdocLikesId) {

        const docLikes = await prismaClient.docLikesPost.delete({
            where: {
                id: doclikespost_id,
            }
        })

        return docLikes;
    }

}

export { DeleteLikesDocIdService }