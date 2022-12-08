import { Router } from 'express';
import multer from 'multer';


//USERS
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailuserController } from './controllers/user/DetailUserController';
import { UpdateUserNameController } from './controllers/user/UpdateUserNameController';
import { UpdateUserEmailController } from './controllers/user/UpdateUserEmailController';
import { UploadPhotoUserController } from './controllers/user/UploadPhotoUserController';
import { PhotoUpdateUserController } from './controllers/user/PhotoUpdateUserController';
import { EmailPasswordController } from './controllers/user/PasswordRecovery/EmailPasswordController';
import { RecoveryPasswordController } from './controllers/user/PasswordRecovery/RecoveryPasswordController';
import { AuthenticatedEmailUserController } from './controllers/user/AuthenticatedEmailUserController';

//POST
import { CreatePostController } from './controllers/post/CreatePostController';
import { UpdatePostDescriptionController } from './controllers/post/UpdatePostDescriptionController';
import { UpdateImgPostPostController } from './controllers/post/UpdateImgPostPostController';
import { UploadImagePostController } from './controllers/post/UploadImagePostController';
import { LikePostController } from './controllers/post/LikePostController';
import { ListPostByUserController } from './controllers/post/ListPostByUserController';

//ANSWER
import { CreateAnswerController } from './controllers/answer/CreateAnswerController';
import { UpdateAnswerDescriptionController } from './controllers/answer/UpdateAnswerDescriptionController';
import { UpdateImgAnswerAnswerController } from './controllers/answer/UpdateImgAnswerAnswerController';
import { UploadImgAnswerAnswerController } from './controllers/answer/UploadImgAnswerAnswerController';
import { LikeAnswerController } from './controllers/answer/LikeAnswerController';



import { isAuthenticated } from './middlewares/isAuthenticated';
import uploadConfig from './config/multer';
const router = Router();
const upload = multer(uploadConfig.upload("./images"));



//USERS
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/detailUser', isAuthenticated, new DetailuserController().handle);
router.put('/nameUpdate', isAuthenticated, new UpdateUserNameController().handle);
router.put('/emailUpdate', isAuthenticated, new UpdateUserEmailController().handle);
router.put('/photoUser', isAuthenticated, upload.single('file'), new UploadPhotoUserController().handle);
router.put('/photoUserUpdate', isAuthenticated, upload.single('file'), new PhotoUpdateUserController().handle);
router.post('/recover', new EmailPasswordController().handle);
router.put('/recoverPassword', new RecoveryPasswordController().handle);
router.put('/authenticated', new AuthenticatedEmailUserController().handle);

//POST
router.post('/post', isAuthenticated, new CreatePostController().handle);
router.put('/descriptionUpdate', isAuthenticated, new UpdatePostDescriptionController().handle);
router.put('/imgPostUpdate', isAuthenticated, upload.single('file'), new UpdateImgPostPostController().handle);
router.put('/image', isAuthenticated, upload.single('file'), new UploadImagePostController().handle);
router.put('/likeMore', new LikePostController().handle);
router.get('/postsUser', new ListPostByUserController().handle);

//ANSWER
router.post('/answer', isAuthenticated, new CreateAnswerController().handle);
router.put('/answerDesc', isAuthenticated, new UpdateAnswerDescriptionController().handle);
router.put('/uploadImg', isAuthenticated, upload.single('file'), new UploadImgAnswerAnswerController().handle);
router.put('/answerImg', isAuthenticated, upload.single('file'), new UpdateImgAnswerAnswerController().handle);
router.put('/likeMoreAnswer', new LikeAnswerController().handle);


export { router };