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
exports.FindUniqueDocIdController = void 0;
const FindUniqueDocIdService_1 = require("../../services/docLikes/FindUniqueDocIdService");
class FindUniqueDocIdController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { docId } = req.query;
            const findUniqueDoc = new FindUniqueDocIdService_1.FindUniqueDocIdService();
            const findDoc = yield findUniqueDoc.execute({
                docId
            });
            return res.json(findDoc);
        });
    }
}
exports.FindUniqueDocIdController = FindUniqueDocIdController;
