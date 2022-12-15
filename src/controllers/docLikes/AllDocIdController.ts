import { Request, Response } from "express";
import { AllDocIdServices } from "../../services/docLikes/AllDocIdServices";

class AllDocIdController {
   async handle(req: Request, res: Response){
      
      const allDocIdService = new AllDocIdServices();

      const allDocId = await allDocIdService.execute();

      return res.json(allDocId);
      
   }
}

export { AllDocIdController }