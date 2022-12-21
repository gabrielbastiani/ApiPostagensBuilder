import { Request, Response } from "express";
import { CreateAnswerService } from "../../services/answer/CreateAnswerService";

class CreateAnswerController {
   async handle(req: Request, res: Response) {
      const { post_id, answer, like, name } = req.body;

      const createAnswerService = new CreateAnswerService();

      if (!req.file) {
         throw new Error("error upload file")
      } else {

      const { originalname, filename: imgAnswer } = req.file;

      const answers = await createAnswerService.execute({
         post_id,
         answer,
         like,
         name,
         imgAnswer
      })

      return res.json(answers)

      }

   }
}

export { CreateAnswerController }