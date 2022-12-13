import { Request, Response } from "express";
import { LikesDocIdService } from "../../services/docLikes/LikesDocIdService";

class LikesDocIdController {
    async handle(req: Request, res: Response) {
        const { docId, user_id, post_id } = req.body;

        const likesDocIdService = new LikesDocIdService();

        const post = await likesDocIdService.execute({
            docId,
            user_id,
            post_id
        })
        return res.json(post)

    }
}

export { LikesDocIdController }