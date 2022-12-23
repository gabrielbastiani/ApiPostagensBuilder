"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
//USERS
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const UpdateUserNameController_1 = require("./controllers/user/UpdateUserNameController");
const UpdateUserEmailController_1 = require("./controllers/user/UpdateUserEmailController");
const UploadPhotoUserController_1 = require("./controllers/user/UploadPhotoUserController");
const PhotoUpdateUserController_1 = require("./controllers/user/PhotoUpdateUserController");
const AvatarUserController_1 = require("./controllers/user/AvatarUserController");
const EmailPasswordController_1 = require("./controllers/user/PasswordRecovery/EmailPasswordController");
const RecoveryPasswordController_1 = require("./controllers/user/PasswordRecovery/RecoveryPasswordController");
const AuthenticatedEmailUserController_1 = require("./controllers/user/AuthenticatedEmailUserController");
//POST
const CreatePostController_1 = require("./controllers/post/CreatePostController");
const TextCreatePostController_1 = require("./controllers/post/TextCreatePostController");
const UpdatePostDescriptionController_1 = require("./controllers/post/UpdatePostDescriptionController");
const UpdateImgPostPostController_1 = require("./controllers/post/UpdateImgPostPostController");
const UploadImagePostController_1 = require("./controllers/post/UploadImagePostController");
const LikePostController_1 = require("./controllers/post/LikePostController");
const DeslikePostController_1 = require("./controllers/post/DeslikePostController");
const ListPostByUserController_1 = require("./controllers/post/ListPostByUserController");
const ListAllPostsController_1 = require("./controllers/post/ListAllPostsController");
//LIKES POST
const LikesDocIdController_1 = require("./controllers/docLikes/LikesDocIdController");
const DeleteLikesDocIdController_1 = require("./controllers/docLikes/DeleteLikesDocIdController");
const FindUniqueDocIdController_1 = require("./controllers/docLikes/FindUniqueDocIdController");
const AllDocIdController_1 = require("./controllers/docLikes/AllDocIdController");
//ANSWER
const CreateAnswerController_1 = require("./controllers/answer/CreateAnswerController");
const TextCreateAnswerController_1 = require("./controllers/answer/TextCreateAnswerController");
const UpdateAnswerDescriptionController_1 = require("./controllers/answer/UpdateAnswerDescriptionController");
const UpdateImgAnswerAnswerController_1 = require("./controllers/answer/UpdateImgAnswerAnswerController");
const UploadImgAnswerAnswerController_1 = require("./controllers/answer/UploadImgAnswerAnswerController");
const LikeAnswerController_1 = require("./controllers/answer/LikeAnswerController");
const DeslikeAnswerController_1 = require("./controllers/answer/DeslikeAnswerController");
const AllAnswersController_1 = require("./controllers/answer/AllAnswersController");
//LIKES ANSWER
const LikesDocIdAnswersController_1 = require("./controllers/docLikesAnswers/LikesDocIdAnswersController");
const DeleteLikesDocIdAnswersController_1 = require("./controllers/docLikesAnswers/DeleteLikesDocIdAnswersController");
const FindUniqueDocIdAnswersController_1 = require("./controllers/docLikesAnswers/FindUniqueDocIdAnswersController");
const AllDocIdAnswersController_1 = require("./controllers/docLikesAnswers/AllDocIdAnswersController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const multer_2 = __importDefault(require("./config/multer"));
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./images"));
//USERS
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/detailUser', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailuserController().handle);
router.put('/nameUpdate', isAuthenticated_1.isAuthenticated, new UpdateUserNameController_1.UpdateUserNameController().handle);
router.put('/emailUpdate', isAuthenticated_1.isAuthenticated, new UpdateUserEmailController_1.UpdateUserEmailController().handle);
router.put('/photoUser', isAuthenticated_1.isAuthenticated, upload.single('file'), new UploadPhotoUserController_1.UploadPhotoUserController().handle);
router.put('/photoUserUpdate', isAuthenticated_1.isAuthenticated, upload.single('file'), new PhotoUpdateUserController_1.PhotoUpdateUserController().handle);
router.get('/userPhoto', isAuthenticated_1.isAuthenticated, new AvatarUserController_1.AvatarUserController().handle);
router.post('/recover', new EmailPasswordController_1.EmailPasswordController().handle);
router.put('/recoverPassword', new RecoveryPasswordController_1.RecoveryPasswordController().handle);
router.put('/authenticated', new AuthenticatedEmailUserController_1.AuthenticatedEmailUserController().handle);
//POST
router.post('/post', isAuthenticated_1.isAuthenticated, upload.single('file'), new CreatePostController_1.CreatePostController().handle);
router.post('/postText', isAuthenticated_1.isAuthenticated, new TextCreatePostController_1.TextCreatePostController().handle);
router.put('/descriptionUpdate', isAuthenticated_1.isAuthenticated, new UpdatePostDescriptionController_1.UpdatePostDescriptionController().handle);
router.put('/imgPostUpdate', isAuthenticated_1.isAuthenticated, upload.single('file'), new UpdateImgPostPostController_1.UpdateImgPostPostController().handle);
router.put('/image', isAuthenticated_1.isAuthenticated, upload.single('file'), new UploadImagePostController_1.UploadImagePostController().handle);
router.put('/like', isAuthenticated_1.isAuthenticated, new LikePostController_1.LikePostController().handle);
router.put('/deslike', isAuthenticated_1.isAuthenticated, new DeslikePostController_1.DeslikePostController().handle);
router.get('/postsUser', isAuthenticated_1.isAuthenticated, new ListPostByUserController_1.ListPostByUserController().handle);
router.get('/allPosts', isAuthenticated_1.isAuthenticated, new ListAllPostsController_1.ListAllPostsController().handle);
//LIKES POSTS
router.post('/docId', isAuthenticated_1.isAuthenticated, new LikesDocIdController_1.LikesDocIdController().handle);
router.delete('/deleteDoc', new DeleteLikesDocIdController_1.DeleteLikesDocIdController().handle);
router.get('/docIdFind', isAuthenticated_1.isAuthenticated, new FindUniqueDocIdController_1.FindUniqueDocIdController().handle);
router.get('/docIdAll', isAuthenticated_1.isAuthenticated, new AllDocIdController_1.AllDocIdController().handle);
//ANSWER
router.post('/answer', isAuthenticated_1.isAuthenticated, upload.single('file'), new CreateAnswerController_1.CreateAnswerController().handle);
router.post('/postAnswer', isAuthenticated_1.isAuthenticated, new TextCreateAnswerController_1.TextCreateAnswerController().handle);
router.put('/answerDesc', isAuthenticated_1.isAuthenticated, new UpdateAnswerDescriptionController_1.UpdateAnswerDescriptionController().handle);
router.put('/uploadImg', isAuthenticated_1.isAuthenticated, upload.single('file'), new UploadImgAnswerAnswerController_1.UploadImgAnswerAnswerController().handle);
router.put('/answerImg', isAuthenticated_1.isAuthenticated, upload.single('file'), new UpdateImgAnswerAnswerController_1.UpdateImgAnswerAnswerController().handle);
router.put('/likeMoreAnswer', isAuthenticated_1.isAuthenticated, new LikeAnswerController_1.LikeAnswerController().handle);
router.put('/deslikeAnswer', isAuthenticated_1.isAuthenticated, new DeslikeAnswerController_1.DeslikeAnswerController().handle);
router.get('/allAnswers', isAuthenticated_1.isAuthenticated, new AllAnswersController_1.AllAnswersController().handle);
//LIKES ANSWERS
router.post('/docIdAllAnswer', isAuthenticated_1.isAuthenticated, new AllDocIdAnswersController_1.AllDocIdAnswersController().handle);
router.delete('/deleteDocAnswer', isAuthenticated_1.isAuthenticated, new DeleteLikesDocIdAnswersController_1.DeleteLikesDocIdAnswersController().handle);
router.get('/docIdFindAnswer', isAuthenticated_1.isAuthenticated, new FindUniqueDocIdAnswersController_1.FindUniqueDocIdAnswersController().handle);
router.get('/docIdAnswer', isAuthenticated_1.isAuthenticated, new LikesDocIdAnswersController_1.LikesDocIdAnswersController().handle);
