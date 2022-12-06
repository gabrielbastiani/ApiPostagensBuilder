import { Request, Response } from 'express';
import { UploadPhotoUserService } from '../../services/user/UploadPhotoUserService';


class UploadPhotoUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req.body;

    const updateUserService = new UploadPhotoUserService();

    if (!req.file) {
      throw new Error('error upload file')
    } else {
      const { originalname, filename: photo } = req.file;

      const userUpdated = await updateUserService.execute({
        user_id,
        photo
      });
      return res.json(userUpdated);
    }
  }
}

export { UploadPhotoUserController }