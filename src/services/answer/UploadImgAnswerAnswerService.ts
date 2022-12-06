import prismaClient from '../../prisma';

interface UploadImgRequest {
    postresponde_id: any;
    imgAnswer: string;
}

class UploadImgAnswerAnswerService {
    async execute({ postresponde_id, imgAnswer }: UploadImgRequest) {
        const answerImg = await prismaClient.postResponde.update({
            where: {
                id: String(postresponde_id),
            },
            data: {
                imgAnswer: imgAnswer,
            },
            select: {
                imgAnswer: true
            }
        })

        return answerImg;
    }
}

export { UploadImgAnswerAnswerService }