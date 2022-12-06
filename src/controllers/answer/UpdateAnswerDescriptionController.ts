import { Request, Response } from 'express';
import { UpdateAnswerDescriptionService } from '../../services/answer/UpdateAnswerDescriptionService';

class UpdateAnswerDescriptionController {
   async handle(req: Request, res: Response) {
      const postResponde_id = req.query.postResponde_id as string;
      const { answer } = req.body;

      const updateAnswerDescriptionService = new UpdateAnswerDescriptionService();

      const answers = await updateAnswerDescriptionService.execute({
         postResponde_id,
         answer
      });
      return res.json(answers);
   }
}

export { UpdateAnswerDescriptionController }