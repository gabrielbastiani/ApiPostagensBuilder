import { Request, Response } from 'express';
import { ListExactAnswerService } from '../../services/answer/ListExactAnswerService';


class ListExactAnswerController {
    async handle(req: Request, res: Response) {
        const { post_id } = req.query;
        const listExactAnswerService = new ListExactAnswerService();
        const answers = await listExactAnswerService.execute({ post_id });

        return res.json(answers);
    }
}

export { ListExactAnswerController }