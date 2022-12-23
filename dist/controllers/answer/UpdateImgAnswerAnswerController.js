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
exports.UpdateImgAnswerAnswerController = void 0;
const UpdateImgAnswerAnswerService_1 = require("../../services/answer/UpdateImgAnswerAnswerService");
const RemoveImgPostAnswerService_1 = require("../../services/answer/RemoveImgPostAnswerService");
const fs_1 = __importDefault(require("fs"));
class UpdateImgAnswerAnswerController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { postresponde_id } = req.body;
            const removeImgAnswer = new RemoveImgPostAnswerService_1.RemoveImgPostAnswerService();
            const updateImgAnswerAnswerService = new UpdateImgAnswerAnswerService_1.UpdateImgAnswerAnswerService();
            const answerImgUpdate = yield removeImgAnswer.execute({
                postresponde_id,
            });
            fs_1.default.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + answerImgUpdate.imgAnswer);
            if (!req.file) {
                throw new Error('error upload file');
            }
            else {
                const { originalname, filename: imgAnswer } = req.file;
                const answers = yield updateImgAnswerAnswerService.execute({
                    postresponde_id,
                    imgAnswer,
                });
                return res.json([answers, answerImgUpdate]);
            }
        });
    }
}
exports.UpdateImgAnswerAnswerController = UpdateImgAnswerAnswerController;
