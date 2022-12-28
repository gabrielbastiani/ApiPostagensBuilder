import { Request, Response } from "express";
import { ListAllUsersService } from "../../services/user/ListAllUsersService";

class ListAllUserController {
   async handle(req: Request, res: Response){
      const listAllUsersService = new ListAllUsersService();

      const allUsers = await listAllUsersService.execute();

      return res.json(allUsers);
      
   }
}

export { ListAllUserController }