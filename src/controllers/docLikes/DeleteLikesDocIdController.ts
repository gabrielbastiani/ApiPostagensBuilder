import { Request, Response } from "express";
import { DeleteLikesDocIdService } from "../../services/docLikes/DeleteLikesDocIdService";

class DeleteLikesDocIdController {
    async handle(req: Request, res: Response) {
        const { doclikespost_id } = req.body;

        const deleteLikesDocIdService = new DeleteLikesDocIdService();

        const docIdDelete = await deleteLikesDocIdService.execute({
            doclikespost_id,
        });


        return res.json(docIdDelete);
    }
}

export { DeleteLikesDocIdController };