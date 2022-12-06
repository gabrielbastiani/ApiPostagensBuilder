import { Request, Response } from 'express';
import { UpdateImgAnswerAnswerService } from '../../services/answer/UpdateImgAnswerAnswerService';
import { RemoveImgPostAnswerService } from '../../services/answer/RemoveImgPostAnswerService'
import fs from 'fs';


class UpdateImgAnswerAnswerController {
   async handle(req: Request, res: Response) {
      const postResponde_id = req.query.postResponde_id as string;

      const removeImgAnswer = new RemoveImgPostAnswerService();
      const updateImgAnswerAnswerService = new UpdateImgAnswerAnswerService();

      const postImgPost = await removeImgAnswer.execute({
         postResponde_id,
       })
   
       fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'imgblog' + '/' + postImgPost.imgAnswer)

      if (!req.file) {
         throw new Error('error upload file')
      } else {
         const { originalname, filename: imgAnswer } = req.file;

         const answers = await updateImgAnswerAnswerService.execute({
            postResponde_id,
            imgAnswer,
         });
         return res.json(answers);
      }
   }
}

export { UpdateImgAnswerAnswerController }