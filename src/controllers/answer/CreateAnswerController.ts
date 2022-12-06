import { Request, Response } from "express";
import { CreateAnswerService } from "../../services/answer/CreateAnswerService";

class CreateAnswerController {
   async handle(req: Request, res: Response) {
      const { post_id, answer, like } = req.body;

      const createAnswerService = new CreateAnswerService();

      const answers = await createAnswerService.execute({
         post_id,
         answer,
         like
      })
      return res.json(answers)
   }
}

export { CreateAnswerController }