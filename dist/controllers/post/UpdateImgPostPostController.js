"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateImgPostPostController = void 0;
const UpdateImgPostPostService_1 = require("../../services/post/UpdateImgPostPostService");
const RemoveImgPostPostService_1 = require("../../services/post/RemoveImgPostPostService");
const fs_1 = __importDefault(require("fs"));
class UpdateImgPostPostController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { post_id } = req.body;
            const removeImgPost = new RemoveImgPostPostService_1.RemoveImgPostPostService();
            const updateImgPostPostService = new UpdateImgPostPostService_1.UpdateImgPostPostService();
            const postImgPost = yield removeImgPost.execute({
                post_id,
            });
            fs_1.default.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + postImgPost.imgPost);
            if (!req.file) {
                throw new Error('error upload file');
            }
            else {
                const { originalname, filename: imgPost } = req.file;
                const post = yield updateImgPostPostService.execute({
                    post_id,
                    imgPost,
                });
                return res.json([post, postImgPost]);
            }
        });
    }
}
exports.UpdateImgPostPostController = UpdateImgPostPostController;
