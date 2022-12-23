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
exports.CreateUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
const nodemailer_1 = __importDefault(require("nodemailer"));
require('dotenv/config');
class CreateUserService {
    execute({ name, email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            // verificar se ele enviou um email
            if (!email) {
                throw new Error("Email incorrect");
            }
            //Verificar se esse email já está cadastrado na plataforma
            const userAlreadyExists = yield prisma_1.default.user.findFirst({
                where: {
                    email: email,
                }
            });
            if (userAlreadyExists) {
                throw new Error("User already exists");
            }
            const passwordHash = yield (0, bcryptjs_1.hash)(password, 8);
            const user = yield prisma_1.default.user.create({
                data: {
                    name: name,
                    email: email,
                    password: passwordHash,
                },
                select: {
                    id: true,
                    photo: true,
                    name: true,
                    email: true,
                }
            });
            const transporter = nodemailer_1.default.createTransport({
                host: process.env.HOST_SMTP,
                port: 465,
                auth: {
                    user: process.env.USER_SMTP,
                    pass: process.env.PASS_SMTP
                }
            });
            yield transporter.sendMail({
                from: "Postagens - Builder Seu Negocio Online <contato@builderseunegocioonline.com.br>",
                to: user.email,
                subject: "Confirme seu cadastro de usuario na rede social da Builder Seu Negócio Online",
                html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h2>Confirme seu cadastro!</h2>
            </div>
            
            <article>
                <p>Olá, ${user.name}!</p>
                <p><a href="http://localhost:3000/userAuthenticatedPostagens?user_id=${user.id}">CLIQUE AQUI</a>, para confirmar sua conta junto a rede social, e poder acessa-la com os dados que cadastrou anteriormente.</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Postagens Builder Seu Negocio Online</h5>
            </div>`,
            });
            yield transporter.sendMail({
                from: "'Postagens - Builder Seu Negocio Online' <contato@builderseunegocioonline.com.br>",
                to: "gabriel.bastiani@hotmail.com.br",
                subject: "Novo usúario se cadastrando na Rede Social da Builder Seu Negócio Online",
                html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h2>Novo usúario!</h2>
            </div>
            
            <article>
                <p>Olá!</p>
                <p>Um usúario de nome <b>${user.name}</b> se cadastrou na rede social.</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Postagens Builder Seu Negocio Online</h5>
            </div>`,
            });
            return user;
        });
    }
}
exports.CreateUserService = CreateUserService;
