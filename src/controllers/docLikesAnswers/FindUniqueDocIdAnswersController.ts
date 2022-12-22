import { Request, Response } from "express";
import { FindUniqueDocIdAnswersService } from "../../services/docLikesAnswers/FindUniqueDocIdAnswersService";

class FindUniqueDocIdAnswersController {
   async handle(req: Request, res: Response){
      const {docIdResponde} = req.query;
      const findUniqueDocAnswer = new FindUniqueDocIdAnswersService();

      const findDocAnswer = await findUniqueDocAnswer.execute({
         docIdResponde
      });

      return res.json(findDocAnswer);
      
   }
}

export { FindUniqueDocIdAnswersController }