import { Request, Response } from 'express';
import { UpdateAnswerDescriptionService } from '../../services/answer/UpdateAnswerDescriptionService';

class UpdateAnswerDescriptionController {
   async handle(req: Request, res: Response) {
      const postresponde_id = req.query.postresponde_id as string;
      const { answer } = req.body;

      const updateAnswerDescriptionService = new UpdateAnswerDescriptionService();

      const answers = await updateAnswerDescriptionService.execute({
         postresponde_id,
         answer
      });
      return res.json(answers);
   }
}

export { UpdateAnswerDescriptionController }