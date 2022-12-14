import { Request, Response } from "express";
import { FindFirstDocIdService } from "../../services/docLikes/FindFirstDocIdService";

class FindFirstDocIdController {
   async handle(req: Request, res: Response){
      const {docId} = req.query;
      const allDocIdService = new FindFirstDocIdService();

      const allDocId = await allDocIdService.execute({
         docId
      });

      return res.json(allDocId);
      
   }
}

export { FindFirstDocIdController }