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
exports.DeslikePostController = void 0;
const DeslikePostService_1 = require("../../services/post/DeslikePostService");
class DeslikePostController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { post_id, like } = req.body;
            const deslikePostService = new DeslikePostService_1.DeslikePostService();
            const postDeslike = yield deslikePostService.execute({
                post_id,
                like
            });
            return res.json(postDeslike);
        });
    }
}
exports.DeslikePostController = DeslikePostController;