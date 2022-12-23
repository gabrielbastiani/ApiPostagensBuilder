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
exports.UpdateAnswerDescriptionController = void 0;
const UpdateAnswerDescriptionService_1 = require("../../services/answer/UpdateAnswerDescriptionService");
class UpdateAnswerDescriptionController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const postresponde_id = req.query.postresponde_id;
            const { answer } = req.body;
            const updateAnswerDescriptionService = new UpdateAnswerDescriptionService_1.UpdateAnswerDescriptionService();
            const answers = yield updateAnswerDescriptionService.execute({
                postresponde_id,
                answer
            });
            return res.json(answers);
        });
    }
}
exports.UpdateAnswerDescriptionController = UpdateAnswerDescriptionController;
