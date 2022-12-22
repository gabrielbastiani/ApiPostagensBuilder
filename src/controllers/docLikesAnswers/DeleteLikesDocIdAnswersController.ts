import { Request, Response } from "express";
import { DeleteLikesDocIdAnswersService } from "../../services/docLikesAnswers/DeleteLikesDocIdAnswersService";

class DeleteLikesDocIdAnswersController {
    async handle(req: Request, res: Response) {
        const {docIdResponde} = req.query;

        const deleteLikesDocIdAnswersService = new DeleteLikesDocIdAnswersService();

        const docIdDelete = await deleteLikesDocIdAnswersService.execute({
            docIdResponde,
        });


        return res.json(docIdDelete);
    }
}

export { DeleteLikesDocIdAnswersController };