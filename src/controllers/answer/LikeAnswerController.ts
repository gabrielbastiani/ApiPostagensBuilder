import { Request, Response } from 'express';
import { LikeAnswerService } from '../../services/answer/LikeAnswerService';

class LikeAnswerController {
   async handle(req: Request, res: Response) {
      const postresponde_id = req.query.postresponde_id as string;
      const { like } = req.body;

      const likeAnswerService = new LikeAnswerService();

      const answerLike = await likeAnswerService.execute({
         postresponde_id,
         like
      });
      return res.json(answerLike);
   }
}

export { LikeAnswerController }