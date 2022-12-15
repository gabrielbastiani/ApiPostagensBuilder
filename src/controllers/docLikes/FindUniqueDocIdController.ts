import { Request, Response } from "express";
import { FindUniqueDocIdService } from "../../services/docLikes/FindUniqueDocIdService";

class FindUniqueDocIdController {
   async handle(req: Request, res: Response){
      const {docId} = req.query;
      const findUniqueDoc = new FindUniqueDocIdService();

      const findDoc = await findUniqueDoc.execute({
         docId
      });

      return res.json(findDoc);
      
   }
}

export { FindUniqueDocIdController }