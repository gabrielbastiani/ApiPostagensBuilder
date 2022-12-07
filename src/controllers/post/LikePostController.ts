import { Request, Response } from 'express';
import { LikePostService } from '../../services/post/LikePostService';

class LikePostController {
   async handle(req: Request, res: Response) {
      const post_id = req.query.post_id as string;
      const { like } = req.body;

      const likePostService = new LikePostService();

      const postLike = await likePostService.execute({
         post_id,
         like
      });
      return res.json(postLike);
   }
}

export { LikePostController }