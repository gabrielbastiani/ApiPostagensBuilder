import { Request, Response } from "express";
import { CreatePostService } from "../../services/post/CreatePostService";

class CreatePostController {
   async handle(req: Request, res: Response) {
      const { description, like } = req.body;

      const createPostService = new CreatePostService();

      if (!req.file) {
         throw new Error("error upload file")
      } else {

         const { originalname, filename: imgPost } = req.file;

         const post = await createPostService.execute({
            description,
            imgPost,
            like
         })
         return res.json(post)
      }

   }
}

export { CreatePostController }