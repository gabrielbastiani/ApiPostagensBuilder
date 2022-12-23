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
exports.LikeAnswerController = void 0;
const LikeAnswerService_1 = require("../../services/answer/LikeAnswerService");
class LikeAnswerController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const postresponde_id = req.query.postresponde_id;
            const { like } = req.body;
            const likeAnswerService = new LikeAnswerService_1.LikeAnswerService();
            const answerLike = yield likeAnswerService.execute({
                postresponde_id,
                like
            });
            return res.json(answerLike);
        });
    }
}
exports.LikeAnswerController = LikeAnswerController;
