import {Request, Response} from 'express'
import { DeletePostSevice } from '../../services/post/DeletePostSevice'
import { DeletePostBannerService } from '../../services/post/DeletePostBannerService'
import fs from 'fs';

class DeletePostController {
  async handle(req: Request, res: Response){
    const post_id = req.query.post_id as string;

    const deletePostSevice = new DeletePostSevice();
    const removeBanner = new DeletePostBannerService();

    const postBanner = await removeBanner.execute({
      post_id,
    })

    const img = postBanner.imgPost

    if(!img){
      const posts = await deletePostSevice.execute({
        post_id
      })

      return res.json(posts);
    }

    if(img){
      const posts = await deletePostSevice.execute({
        post_id
      })

      fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + img)

      return res.json([posts, img]);
    }

  }
}

export { DeletePostController }