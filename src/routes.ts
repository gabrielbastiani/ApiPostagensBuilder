import { Router } from 'express';
import multer from 'multer';


//USERS
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailuserController } from './controllers/user/DetailUserController';
import { UpdateUserNameController } from './controllers/user/UpdateUserNameController';
import { UpdateUserEmailController } from './controllers/user/UpdateUserEmailController';

//POST
import { CreatePostController } from './controllers/post/CreatePostController';
import { UpdatePostDescriptionController } from './controllers/post/UpdatePostDescriptionController';
import { UpdateImgPostPostController } from './controllers/post/UpdateImgPostPostController';



import { isAuthenticated } from './middlewares/isAuthenticated';
import uploadConfig from './config/multer';
import { PhotoUpdateUserController } from './controllers/user/PhotoUpdateUserController';
const router = Router();
const upload = multer(uploadConfig.upload("./images"));




//USERS
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/detailUser', isAuthenticated, new DetailuserController().handle);
router.put('/nameUpdate', isAuthenticated, new UpdateUserNameController().handle);
router.put('/emailUpdate', isAuthenticated, new UpdateUserEmailController().handle);
router.put('/photoUser', isAuthenticated, upload.single('file'), new PhotoUpdateUserController().handle);

//POST
router.post('/post', isAuthenticated, new CreatePostController().handle);
router.put('/descriptionUpdate', isAuthenticated, new UpdatePostDescriptionController().handle);
router.put('/imgPostUpdate', isAuthenticated, upload.single('file'), new UpdateImgPostPostController().handle);


export { router };