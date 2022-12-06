import { Request, Response } from 'express';
import { ListExactPostService } from '../../services/post/ListExactPostService';


class ListExactPostController {
    async handle(req: Request, res: Response) {
        const { description } = req.query;
        const listExactPostService = new ListExactPostService();
        const post = await listExactPostService.execute({ description });

        return res.json(post);
    }
}

export { ListExactPostController }