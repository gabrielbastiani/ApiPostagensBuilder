import { Request, Response } from "express";
import { AvatarUserService } from "../../services/user/AvatarUserService";

class AvatarUserController {
   async handle(req: Request, res: Response){
      const { user_id } = req.query;
      const findPhoto = new AvatarUserService();

      const find = await findPhoto.execute({
         user_id
      });

      return res.json(find);
      
   }
}

export { AvatarUserController }