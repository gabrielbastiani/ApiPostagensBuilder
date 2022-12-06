import { Request, Response } from 'express';
import { UploadImagePostService } from '../../services/post/UploadImagePostService';


class UploadImagePostController {
  async handle(req: Request, res: Response) {
    const { post_id } = req.body;

    const uploadImagePostService = new UploadImagePostService();

    if (!req.file) {
      throw new Error('error upload file')
    } else {
      const { originalname, filename: imgPost } = req.file;

      const postImage = await uploadImagePostService.execute({
        post_id,
        imgPost
      });
      return res.json(postImage);
    }
  }
}

export { UploadImagePostController }