import { Request, Response } from "express";
import { AvatarUserService } from "../../services/user/AvatarUserService";

class AvatarUserController {
   async handle(req: Request, res: Response){
      const { name } = req.query;
      const findPhoto = new AvatarUserService();

      const find = await findPhoto.execute({
         name
      });

      return res.json(find);
      
   }
}

export { AvatarUserController }