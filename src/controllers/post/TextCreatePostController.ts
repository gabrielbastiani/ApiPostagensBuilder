import { Request, Response } from "express";
import { TextCreatePostService } from "../../services/post/TextCreatePostService";

class TextCreatePostController {
   async handle(req: Request, res: Response) {
      const { description, like, name } = req.body;

      const textCreatePostService = new TextCreatePostService();

         const postText = await textCreatePostService.execute({
            description,
            like,
            name,
         })

         return res.json(postText);

      }
}

export { TextCreatePostController }