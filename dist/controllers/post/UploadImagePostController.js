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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadImagePostController = void 0;
const UploadImagePostService_1 = require("../../services/post/UploadImagePostService");
class UploadImagePostController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { post_id } = req.body;
            const uploadImagePostService = new UploadImagePostService_1.UploadImagePostService();
            if (!req.file) {
                throw new Error('error upload file');
            }
            else {
                const { originalname, filename: imgPost } = req.file;
                const postImage = yield uploadImagePostService.execute({
                    post_id,
                    imgPost
                });
                return res.json(postImage);
            }
        });
    }
}
exports.UploadImagePostController = UploadImagePostController;
