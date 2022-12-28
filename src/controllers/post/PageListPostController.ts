import { Request, Response } from 'express';
import { PageListPostService } from '../../services/post/PageListPostService';

class PageListPostController {
    async handle(req: Request, res: Response) {
        const pageListPostService = new PageListPostService();

        const { page, limit } = req.query;

        const posts = await pageListPostService.execute(Number(page), Number(limit));

        return res.json(posts);
    }
}

export { PageListPostController }