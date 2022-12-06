import { Request, Response } from 'express';
import { UpdateImgAnswerAnswerService } from '../../services/answer/UpdateImgAnswerAnswerService';
import { RemoveImgPostAnswerService } from '../../services/answer/RemoveImgPostAnswerService'
import fs from 'fs';


class UpdateImgAnswerAnswerController {
   async handle(req: Request, res: Response) {
      const { postresponde_id } = req.body;

      const removeImgAnswer = new RemoveImgPostAnswerService();
      const updateImgAnswerAnswerService = new UpdateImgAnswerAnswerService();

      const answerImgUpdate = await removeImgAnswer.execute({
         postresponde_id,
      })

      fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + answerImgUpdate.imgAnswer)

      if (!req.file) {
         throw new Error('error upload file')
      } else {
         const { originalname, filename: imgAnswer } = req.file;

         const answers = await updateImgAnswerAnswerService.execute({
            postresponde_id,
            imgAnswer,
         });
         return res.json([answers, answerImgUpdate]);
      }
   }
}

export { UpdateImgAnswerAnswerController }