import { Request, Response } from "express";
import { CreateAnswerService } from "../../services/answer/CreateAnswerService";

class CreateAnswerController {
   async handle(req: Request, res: Response) {
      const { answer, like } = req.body;

      const createAnswerService = new CreateAnswerService();

      if (!req.file) {
         throw new Error("error upload file")
      } else {

         const { originalname, filename: imgAnswer } = req.file;

         const answers = await createAnswerService.execute({
            answer,
            imgAnswer,
            like
         })
         return res.json(answers)
      }

   }
}

export { CreateAnswerController }