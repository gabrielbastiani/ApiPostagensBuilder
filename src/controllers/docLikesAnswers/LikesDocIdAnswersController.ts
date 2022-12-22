import { Request, Response } from "express";
import { LikesDocIdAnswersService } from "../../services/docLikesAnswers/LikesDocIdAnswersService";

class LikesDocIdAnswersController {
    async handle(req: Request, res: Response) {
        const { docIdResponde, user_id, postresponde_id } = req.body;

        const likesDocIdAnswersService = new LikesDocIdAnswersService();

        const postAnswers = await likesDocIdAnswersService.execute({
            docIdResponde,
            user_id,
            postresponde_id
        })
        return res.json(postAnswers)

    }
}

export { LikesDocIdAnswersController }