import { Request, Response } from "express";
import { CreatePostService } from "../../services/post/CreatePostService";

class CreatePostController {
   async handle(req: Request, res: Response) {
      const { description, like, name } = req.body;

      const createPostService = new CreatePostService();

      const post = await createPostService.execute({
         description,
         like,
         name
      })
      return res.json(post)

   }
}

export { CreatePostController }