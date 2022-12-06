import { Request, Response } from 'express';
import { UpdateImgPostPostService } from '../../services/post/UpdateImgPostPostService';
import { RemoveImgPostPostService } from '../../services/post/RemoveImgPostPostService';
import fs from 'fs';


class UpdateImgPostPostController {
   async handle(req: Request, res: Response) {
      const {post_id} = req.body;

      const removeImgPost = new RemoveImgPostPostService();
      const updateImgPostPostService = new UpdateImgPostPostService();

      const postImgPost = await removeImgPost.execute({
         post_id,
       })
   
       fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + postImgPost.imgPost)

      if (!req.file) {
         throw new Error('error upload file')
      } else {
         const { originalname, filename: imgPost } = req.file;

         const post = await updateImgPostPostService.execute({
            post_id,
            imgPost,
         });
         return res.json([post, postImgPost]);
      }
   }
}

export { UpdateImgPostPostController }