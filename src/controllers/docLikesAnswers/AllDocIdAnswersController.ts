import { Request, Response } from "express";
import { AllDocIdAnswersServices } from "../../services/docLikesAnswers/AllDocIdAnswersServices";

class AllDocIdAnswersController {
   async handle(req: Request, res: Response){
      
      const allAnswersDocIdService = new AllDocIdAnswersServices();

      const allAnswersDocId = await allAnswersDocIdService.execute();

      return res.json(allAnswersDocId);
      
   }
}

export { AllDocIdAnswersController }