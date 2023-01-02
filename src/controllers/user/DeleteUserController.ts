import { Request, Response } from 'express'
import { DeleteUserService } from '../../services/user/DeleteUserService'
import { RemovePhotoUserService } from '../../services/user/RemovePhotoUserService'
import fs from 'fs';

class DeleteUserController {
  async handle(req: Request, res: Response){
    const user_id = req.query.user_id as string;

    const deleteUserService = new DeleteUserService();
    const removePhoto = new RemovePhotoUserService();

    const userPhoto = await removePhoto.execute({
      user_id,
    })

    const img = userPhoto.photo;

    if(!img){
      const users = await deleteUserService.execute({
        user_id
      })

      return res.json(users);
    }

    if(img){
      const users = await deleteUserService.execute({
        user_id
      })

      fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + img)

      return res.json([users, img]);
    }

  }
}

export { DeleteUserController }