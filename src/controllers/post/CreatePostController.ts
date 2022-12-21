import { Request, Response } from "express";
import { CreatePostService } from "../../services/post/CreatePostService";

class CreatePostController {
   async handle(req: Request, res: Response) {
      const { description, like, name } = req.body;

      const createPostService = new CreatePostService();

      if (!req.file) {
         throw new Error("error upload file")
      } else {

         const { originalname, filename: imgPost } = req.file;

         const post = await createPostService.execute({
            description,
            like,
            name,
            imgPost
         })

         return res.json(post);

      }

   }
}

export { CreatePostController }