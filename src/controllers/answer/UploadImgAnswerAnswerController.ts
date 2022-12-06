import { Request, Response } from 'express';
import { UploadImgAnswerAnswerService } from '../../services/answer/UploadImgAnswerAnswerService';


class UploadImgAnswerAnswerController {
  async handle(req: Request, res: Response) {
    const { postresponde_id } = req.body;

    const uploadImgAnswer = new UploadImgAnswerAnswerService();

    if (!req.file) {
      throw new Error('error upload file')
    } else {
      const { originalname, filename: imgAnswer } = req.file;

      const userUpdated = await uploadImgAnswer.execute({
        postresponde_id,
        imgAnswer
      });
      return res.json(userUpdated);
    }
  }
}

export { UploadImgAnswerAnswerController }