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
exports.LikesDocIdAnswersController = void 0;
const LikesDocIdAnswersService_1 = require("../../services/docLikesAnswers/LikesDocIdAnswersService");
class LikesDocIdAnswersController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { docIdResponde, user_id, postresponde_id } = req.body;
            const likesDocIdAnswersService = new LikesDocIdAnswersService_1.LikesDocIdAnswersService();
            const postAnswers = yield likesDocIdAnswersService.execute({
                docIdResponde,
                user_id,
                postresponde_id
            });
            return res.json(postAnswers);
        });
    }
}
exports.LikesDocIdAnswersController = LikesDocIdAnswersController;
