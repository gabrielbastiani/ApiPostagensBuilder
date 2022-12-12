import { Request, Response } from 'express';
import { DeslikePostService } from '../../services/post/DeslikePostService';

class DeslikePostController {
   async handle(req: Request, res: Response) {
      const { post_id, like } = req.body;

      const deslikePostService = new DeslikePostService();

      const postDeslike = await deslikePostService.execute({
         post_id,
         like
      });
      return res.json(postDeslike);
   }
}

export { DeslikePostController }