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
import { AvatarUserController } from './controllers/user/AvatarUserController';
import { EmailPasswordController } from './controllers/user/PasswordRecovery/EmailPasswordController';
import { RecoveryPasswordController } from './controllers/user/PasswordRecovery/RecoveryPasswordController';
import { AuthenticatedEmailUserController } from './controllers/user/AuthenticatedEmailUserController';
import { ListAllUserController } from './controllers/user/ListAllUserController';
import { DeleteUserController } from './controllers/user/DeleteUserController';

//POST
import { CreatePostController } from './controllers/post/CreatePostController';
import { TextCreatePostController } from './controllers/post/TextCreatePostController';
import { UpdatePostDescriptionController } from './controllers/post/UpdatePostDescriptionController';
import { UpdateImgPostPostController } from './controllers/post/UpdateImgPostPostController';
import { UploadImagePostController } from './controllers/post/UploadImagePostController';
import { LikePostController } from './controllers/post/LikePostController';
import { DeslikePostController } from './controllers/post/DeslikePostController';
import { ListPostByUserController } from './controllers/post/ListPostByUserController';
import { ListAllPostsController } from './controllers/post/ListAllPostsController';
import { PageListPostController } from './controllers/post/PageListPostController';
import { DeletePostController } from './controllers/post/DeletePostController';

//LIKES POST
import { LikesDocIdController } from './controllers/docLikes/LikesDocIdController';
import { DeleteLikesDocIdController } from './controllers/docLikes/DeleteLikesDocIdController';
import { FindUniqueDocIdController } from './controllers/docLikes/FindUniqueDocIdController';
import { AllDocIdController } from './controllers/docLikes/AllDocIdController';

//ANSWER
import { CreateAnswerController } from './controllers/answer/CreateAnswerController';
import { TextCreateAnswerController } from './controllers/answer/TextCreateAnswerController';
import { UpdateAnswerDescriptionController } from './controllers/answer/UpdateAnswerDescriptionController';
import { UpdateImgAnswerAnswerController } from './controllers/answer/UpdateImgAnswerAnswerController';
import { UploadImgAnswerAnswerController } from './controllers/answer/UploadImgAnswerAnswerController';
import { LikeAnswerController } from './controllers/answer/LikeAnswerController';
import { DeslikeAnswerController } from './controllers/answer/DeslikeAnswerController';
import { AllAnswersController } from './controllers/answer/AllAnswersController';
import { ListExactAnswerController } from './controllers/answer/ListExactAnswerController';
import { DeleteAnswerController } from './controllers/answer/DeleteAnswerController';

//LIKES ANSWER
import { LikesDocIdAnswersController } from './controllers/docLikesAnswers/LikesDocIdAnswersController';
import { DeleteLikesDocIdAnswersController } from './controllers/docLikesAnswers/DeleteLikesDocIdAnswersController';
import { FindUniqueDocIdAnswersController } from './controllers/docLikesAnswers/FindUniqueDocIdAnswersController';
import { AllDocIdAnswersController } from './controllers/docLikesAnswers/AllDocIdAnswersController';


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
router.get('/userPhoto', isAuthenticated, new AvatarUserController().handle);
router.post('/recover', new EmailPasswordController().handle);
router.put('/recoverPassword', new RecoveryPasswordController().handle);
router.put('/authenticated', new AuthenticatedEmailUserController().handle);
router.get('/allUsers', isAuthenticated, new ListAllUserController().handle);
router.delete('/deleteUser', isAuthenticated, new DeleteUserController().handle);

//POST
router.post('/post', isAuthenticated, upload.single('file'), new CreatePostController().handle);
router.post('/postText', isAuthenticated, new TextCreatePostController().handle);
router.put('/descriptionUpdate', isAuthenticated, new UpdatePostDescriptionController().handle);
router.put('/imgPostUpdate', isAuthenticated, upload.single('file'), new UpdateImgPostPostController().handle);
router.put('/image', isAuthenticated, upload.single('file'), new UploadImagePostController().handle);
router.put('/like', isAuthenticated, new LikePostController().handle);
router.put('/deslike', isAuthenticated, new DeslikePostController().handle);
router.get('/postsUser', isAuthenticated, new ListPostByUserController().handle);
router.get('/allPosts', isAuthenticated, new ListAllPostsController().handle);
router.get('/pagePost', isAuthenticated, new PageListPostController().handle);
router.delete('/deletePost', isAuthenticated, new DeletePostController().handle);

//LIKES POSTS
router.post('/docId', isAuthenticated, new LikesDocIdController().handle);
router.delete('/deleteDoc', new DeleteLikesDocIdController().handle);
router.get('/docIdFind', isAuthenticated, new FindUniqueDocIdController().handle);
router.get('/docIdAll', isAuthenticated, new AllDocIdController().handle);

//ANSWER
router.post('/answer', isAuthenticated, upload.single('file'), new CreateAnswerController().handle);
router.post('/postAnswer', isAuthenticated, new TextCreateAnswerController().handle);
router.put('/answerDesc', isAuthenticated, new UpdateAnswerDescriptionController().handle);
router.put('/uploadImg', isAuthenticated, upload.single('file'), new UploadImgAnswerAnswerController().handle);
router.put('/answerImg', isAuthenticated, upload.single('file'), new UpdateImgAnswerAnswerController().handle);
router.put('/likeMoreAnswer', isAuthenticated, new LikeAnswerController().handle);
router.put('/deslikeAnswer', isAuthenticated, new DeslikeAnswerController().handle);
router.get('/allAnswers', isAuthenticated, new AllAnswersController().handle);
router.get('/exactAnswer', isAuthenticated, new ListExactAnswerController().handle);
router.delete('/deleteAnswer', isAuthenticated, new DeleteAnswerController().handle);

//LIKES ANSWERS
router.post('/docIdAnswer', isAuthenticated, new LikesDocIdAnswersController().handle);
router.delete('/deleteDocAnswer', isAuthenticated, new DeleteLikesDocIdAnswersController().handle);
router.get('/docIdFindAnswer', isAuthenticated, new FindUniqueDocIdAnswersController().handle);
router.get('/docIdAllAnswer', isAuthenticated, new AllDocIdAnswersController().handle);



export { router };