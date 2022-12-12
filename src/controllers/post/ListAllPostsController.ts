import { Request, Response } from "express";
import { ListAllPostsService } from "../../services/post/ListAllPostsService";

class ListAllPostsController {
   async handle(req: Request, res: Response){
      const listAllPostsService = new ListAllPostsService();

      const allPosts = await listAllPostsService.execute();

      return res.json(allPosts);
      
   }
}

export { ListAllPostsController }