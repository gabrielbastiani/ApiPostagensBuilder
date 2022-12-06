import { Request, Response } from 'express';
import { UpdatePostDescriptionService } from '../../services/post/UpdatePostDescriptionService';

class UpdatePostDescriptionController {
   async handle(req: Request, res: Response) {
      const post_id = req.query.post_id as string;
      const { description } = req.body;

      const updatePostDescriptionService = new UpdatePostDescriptionService();

      const post = await updatePostDescriptionService.execute({
         post_id,
         description
      });
      return res.json(post);
   }
}

export { UpdatePostDescriptionController }