import { Request, Response } from "express";
import { TextCreateAnswerService } from "../../services/answer/TextCreateAnswerService";

class TextCreateAnswerController {
   async handle(req: Request, res: Response) {
      const { post_id, answer, like, name, photo } = req.body;

      const textCreateAnswerService = new TextCreateAnswerService();

      const answersText = await textCreateAnswerService.execute({
         post_id,
         answer,
         like,
         name,
         photo
      })

      return res.json(answersText)

   }
}

export { TextCreateAnswerController }