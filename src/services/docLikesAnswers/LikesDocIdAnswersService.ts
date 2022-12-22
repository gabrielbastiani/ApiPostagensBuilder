import prismaClient from "../../prisma";

interface PostRequest {
    user_id: string;
    postresponde_id: string;
    docIdResponde: string;
}

class LikesDocIdAnswersService {
    async execute({ user_id, postresponde_id, docIdResponde }: PostRequest) {
        const answerLike = await prismaClient.docLikesResponde.create({
            data: {
                user_id: user_id,
                postresponde_id: postresponde_id,
                docIdResponde: docIdResponde
            }
        })

        return answerLike;

    }
}

export { LikesDocIdAnswersService }