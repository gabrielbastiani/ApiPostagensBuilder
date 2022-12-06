import { Request, Response } from 'express';
import { ListExactAnswerService } from '../../services/answer/ListExactAnswerService';


class ListExactPostController {
    async handle(req: Request, res: Response) {
        const { answer } = req.query;
        const listExactAnswerService = new ListExactAnswerService();
        const answers = await listExactAnswerService.execute({ answer });

        return res.json(answers);
    }
}

export { ListExactPostController }