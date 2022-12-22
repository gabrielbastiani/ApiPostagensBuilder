import { Request, Response } from 'express';
import { ListPostByUserService } from '../../services/post/ListPostByUserService';


class ListPostByUserController {
    async handle(req: Request, res: Response) {
        const { name } = req.query;
        const listPostByUserService = new ListPostByUserService();
        const post = await listPostByUserService.execute({ name });

        return res.json(post);
    }
}

export { ListPostByUserController }