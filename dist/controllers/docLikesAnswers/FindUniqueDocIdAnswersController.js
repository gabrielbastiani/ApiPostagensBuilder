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
exports.FindUniqueDocIdAnswersController = void 0;
const FindUniqueDocIdAnswersService_1 = require("../../services/docLikesAnswers/FindUniqueDocIdAnswersService");
class FindUniqueDocIdAnswersController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { docIdResponde } = req.query;
            const findUniqueDocAnswer = new FindUniqueDocIdAnswersService_1.FindUniqueDocIdAnswersService();
            const findDocAnswer = yield findUniqueDocAnswer.execute({
                docIdResponde
            });
            return res.json(findDocAnswer);
        });
    }
}
exports.FindUniqueDocIdAnswersController = FindUniqueDocIdAnswersController;
