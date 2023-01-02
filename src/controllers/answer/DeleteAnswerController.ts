import {Request, Response} from 'express'
import { DeleteAnswerService } from '../../services/answer/DeleteAnswerService'
import { DeleteAnswerBannerService } from '../../services/answer/DeleteAnswerBannerService'
import fs from 'fs';


class DeleteAnswerController {
  async handle(req: Request, res: Response){
    const postresponde_id = req.query.postresponde_id as string;

    const deleteAnswerService = new DeleteAnswerService();
    const removeBanner = new DeleteAnswerBannerService();

    const answerBanner = await removeBanner.execute({
      postresponde_id,
    })

    const img = answerBanner.imgAnswer;

    if(!img){
      const answers = await deleteAnswerService.execute({
        postresponde_id
      })

      return res.json(answers);
    }

    if(img){
      const answers = await deleteAnswerService.execute({
        postresponde_id
      })

      fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + img)

      return res.json([answers, img]);
    }

  }
}

export { DeleteAnswerController }