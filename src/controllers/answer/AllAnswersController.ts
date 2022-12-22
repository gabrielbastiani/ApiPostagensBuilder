import { Request, Response } from "express";
import { AllAnswersService } from "../../services/answer/AllAnswersService";

class AllAnswersController {
   async handle(req: Request, res: Response){
      const allAnswersService = new AllAnswersService();

      const allAnswers = await allAnswersService.execute();

      return res.json(allAnswers);
      
   }
}

export { AllAnswersController }