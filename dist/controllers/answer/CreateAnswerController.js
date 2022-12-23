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
exports.CreateAnswerController = void 0;
const CreateAnswerService_1 = require("../../services/answer/CreateAnswerService");
class CreateAnswerController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { post_id, answer, like, name } = req.body;
            const createAnswerService = new CreateAnswerService_1.CreateAnswerService();
            if (!req.file) {
                throw new Error("error upload file");
            }
            else {
                const { originalname, filename: imgAnswer } = req.file;
                const answers = yield createAnswerService.execute({
                    post_id,
                    answer,
                    like,
                    name,
                    imgAnswer
                });
                return res.json(answers);
            }
        });
    }
}
exports.CreateAnswerController = CreateAnswerController;
