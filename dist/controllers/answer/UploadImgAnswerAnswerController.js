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
exports.UploadImgAnswerAnswerController = void 0;
const UploadImgAnswerAnswerService_1 = require("../../services/answer/UploadImgAnswerAnswerService");
class UploadImgAnswerAnswerController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { postresponde_id } = req.body;
            const uploadImgAnswer = new UploadImgAnswerAnswerService_1.UploadImgAnswerAnswerService();
            if (!req.file) {
                throw new Error('error upload file');
            }
            else {
                const { originalname, filename: imgAnswer } = req.file;
                const userUpdated = yield uploadImgAnswer.execute({
                    postresponde_id,
                    imgAnswer
                });
                return res.json(userUpdated);
            }
        });
    }
}
exports.UploadImgAnswerAnswerController = UploadImgAnswerAnswerController;
