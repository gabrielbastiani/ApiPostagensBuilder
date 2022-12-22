import { Request, Response } from 'express';
import { DeslikeAnswerService } from '../../services/answer/DeslikeAnswerService';

class DeslikeAnswerController {
   async handle(req: Request, res: Response) {
      const { postresponde_id, like } = req.body;

      const deslikeAnswerService = new DeslikeAnswerService();

      const answerDeslike = await deslikeAnswerService.execute({
         postresponde_id,
         like
      });
      return res.json(answerDeslike);
   }
}

export { DeslikeAnswerController }