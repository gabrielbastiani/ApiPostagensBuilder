import prismaClient from "../../prisma";

interface PostRequest {
    user_id: string;
    docId: string;
}

class LikesDocIdService {
    async execute({ user_id, docId }: PostRequest) {
        const post = await prismaClient.docLikesPost.create({
            data: {
                user_id: user_id,
                docId: docId
            }
        })

        return post;

    }
}

export { LikesDocIdService }